import React from "react";
import Logo from "/assets/images/logo.svg";
import { FaChevronRight } from "react-icons/fa";
import { Container, Image, Stack } from "react-bootstrap";
import "./style.scss";
import Language from "../../atoms/Language";

const HeaderHome = () => {
  return (
    <Container>
      <Stack className="justify-content-between" direction="horizontal">
        <Image src={Logo} alt="Logo BPK Penabur" />
        <div className="d-flex">
          <Language />
          <div className="vertical"></div>
          <Stack direction="horizontal" gap={2}>
            <span className="back-home">Kembali ke halaman utama</span>
            <FaChevronRight color="#314F84" />
          </Stack>
        </div>
      </Stack>
    </Container>
  );
};

export default HeaderHome;
