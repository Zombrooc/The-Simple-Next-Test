import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

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

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>
              <p>Your Brand</p>
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
          <MenuItem>
            <Link href="/profile">
              <a>First Option</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/request-assistence">
              <a className="active">Second Option</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
