import React from "react";
import "../components(CSS)/Footer.css";
import { Box, Container, Row, FooterLink } from "./FooterStyles";
import logoImg from "../img/Movie-Land-png-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

///////////////////////////////////////////////////////

const Footer = () => {
  return (
    <>
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

              </FooterLink>

              <FooterLink href="https://web.facebook.com" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="FooterLink"
                />


              </FooterLink>
              <FooterLink href="https://twitter.com/" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className="FooterLink"
                />

              </FooterLink>
              <FooterLink href="https://instagram.com/" className="FooterLink">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className="FooterLink"
                />
                
              </FooterLink>
            </div>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
