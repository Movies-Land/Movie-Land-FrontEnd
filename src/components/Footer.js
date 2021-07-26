import React from "react";
// import { Row,Container,Column } from "react-bootstrap";
import "../components(CSS)/Footer.css";
import { Box, Container, Row, FooterLink } from "./FooterStyles";

// import img
import logoImg from "../img/Movie-Land-png-2.png";
import fac from "../img/face1.png";
import insta from "../img/insta.png";
import twitt from "../img/twitter1.png";
import github from "../img/githup.png";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

///////////////////////////////////////////////////////

const Footer = () => {
  return (
    <>
      {/* <FontAwesomeIcon icon={["fab", "facebook"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
      <FontAwesomeIcon icon={["fab", "twitter"]} />
      <FontAwesomeIcon icon={["fab", "instagram"]} />

      <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon="coffee" /> */}

      <Box className="Box">
        <Container className="Container-footer">
          <Row className="links">
            {/*  copy Right  */}
            <h5 className="Copy-Right">@Copy Right Movei-Land </h5>
            {/*  logo img   */}
            <img className="logo-footer" src={logoImg} alt="logo img"></img>

            {/*  links  */}

            <div className="links-contaner">
              <FooterLink
                href="https://github.com/orgs/Movies-Land/dashboard"
                className="FooterLink"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="FooterLink"
                />
                {/* <img className="images" src={github}></img> */}
              </FooterLink>

              <FooterLink href="https://web.facebook.com" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="FooterLink"
                />

                {/* <img className="images" src={fac}></img> */}
              </FooterLink>
              <FooterLink href="https://twitter.com/" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className="FooterLink"
                />

                {/* <img className="images" src={insta}></img> */}
              </FooterLink>
              <FooterLink href="https://instagram.com/" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className="FooterLink"
                />

                {/* <img className="images" src={twitt}></img> */}
              </FooterLink>
            </div>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
