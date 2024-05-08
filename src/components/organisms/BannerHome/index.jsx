import React from "react";
import "./style.scss";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Banner from "/assets/images/banner-home.png";
import { FcGoogle } from "react-icons/fc";

const BannerHome = () => {
  return (
    <Container>
      <div className="wrapper-home">
        <Row>
          <Col md="6" sm="12">
            <p className="welcome">
              Selamat Datang di Pendaftaran Calon Siswa BPK PENABUR
            </p>
            <div className="desc-wrapper">
              <p className="sub-title">
                Pendaftaran ini hanya untuk
                <span className="info-title mx-2">
                  Siswa NON BPK PENABUR Jakarta
                </span>
                atau belum pernah mendaftar sama sekali di BPK PENABUR JAKARTA.
              </p>
              <p className="desc-banner">
                Terima kasih telah memilih sekolah kami sebagai mitra dalam
                pencapaian impian pendidikan. Kami berkomitmen untuk menyediakan
                pengalaman belajar yang luar biasa untuk setiap siswa.
                Bersama-sama, kami akan membangun masa depan yang gemilang bagi
                setiap siswa.
              </p>
              <div className="login-space">
                <p className="login-title">Silakan masuk untuk melanjutkan</p>
                <Button
                  size="md"
                  variant="outline-primary"
                  className="login-google-btn"
                >
                  <FcGoogle size={24} /> Login Sekarang
                </Button>
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <Image src={Banner} width="720" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BannerHome;
