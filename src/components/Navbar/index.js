import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/client";
// import Cookies from "universal-cookie";

import useWindowSize from "../useWindowSize.js";

import {
  Nav,
  Container,
  Title,
  Menu,
  MenuItem,
  ToggleButton,
  CloseIcon,
} from "./styles";

function Navbar() {
  // const cookies = new Cookies();

  // const [isLogged, setLoggedIn] = useState(localStorage.getItem('isLogged'));

  const [session, loading] = useSession();

  const [menuStatus, setMenuStatus] = useState(false);

  const size = useWindowSize();

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  // const logout = () => {
  //   cookies.remove("accessToken");
  //   cookies.remove("userID");
  //   cookies.remove("name");
  //   localStorage.setItem("isLogged", false);

  //   setLoggedIn("false");

  //   setMenuStatus(false);

  //   return;
  // };

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>
              <p>
                The Simple <span>TECH</span>
              </p>
            </a>
          </Link>
        </Title>
        <ToggleButton onClick={menuHandler}>
          {!menuStatus && <MdMenu />}
        </ToggleButton>
        <Menu isOpen={menuStatus}>
          <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
            <MdClose />
          </CloseIcon>
          {!session && (
            <>
              <MenuItem>
                <Link href="/signin">
                  <a> Entrar </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="signup">
                  <a className="active signup">Cadastrar</a>
                </Link>
              </MenuItem>
            </>
          )}
          {session && (
            <>
              <MenuItem>
                <Link href="/profile">
                  <a>
                    <span className="username">{session.user.name}</span>
                  </a>
                </Link>
              </MenuItem>
              <MenuItem>
                <button onClick={() => signOut()}>Sair</button>
              </MenuItem>
            </>
          )}
          {/* {isLogged === "false" || isLogged === null ? (
            <>
              <MenuItem>
                <Link href="/signin"><a> Entrar </a></Link>
              </MenuItem>
              <MenuItem>
                <Link href="/signup">
                  <a className="active signup">Cadastrar</a>
                </Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link href="/profile">
                  <a><span className="username">{cookies.get("name") || ""}</span></a>
                </Link>
              </MenuItem>
              <MenuItem>
                <button onClick={logout}>
                  Sair
                </button>
              </MenuItem>
            </>
          )} */}
          <MenuItem>
            <Link href="/request-assistence">
              <a className="active">Solicitar Assistêcia</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
