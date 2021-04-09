import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import {
  Card,
  ProductImage,
  CardBody,
  ProductName,
  ProductPrice,
  ActionButtons,
} from "./styles";

function ProductItem() {
  return (
    <Link to="/">
      <Card>
        <ProductImage>
          <img
            src="https://images2.kabum.com.br/produtos/fotos/130132/notebook-gamer-lenovo-ideapad-l340-intel-core-i5-9300h-8gb-hd-1tb-nvidia-geforce-gtx-1050-3gb-windows-10-home-81tr0003br_1603455034_gg.jpg"
            alt="Product"
          />
        </ProductImage>
        <CardBody>
          <ProductName>
            {" "}
            Placa De Vídeo Vga Evga Geforce Gt 610 1gb Ddr3 64 Bits{" "}
          </ProductName>
          <ProductPrice>
            <p>De: R$399,90</p>
            <p>
              Por: <span>R$246,91</span>
            </p>
          </ProductPrice>
          
        </CardBody>
        <ActionButtons>
            <Link to="/buy-now"> COMPRAR AGORA </Link>
            <Link to="/add-to-cart">
              <FaShoppingCart />
            </Link>
          </ActionButtons>
      </Card>
    </Link>
  );
}

export default ProductItem;
