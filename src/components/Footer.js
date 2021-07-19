
import React from "react";
// import { Row,Container,Column } from "react-bootstrap";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
          <Row className="copyRight">
              <h5>
                  @Copy Right Land-Movei
              </h5>
          </Row>
        <Row className="links">
          
            {/* <Heading>About Us</Heading> */}
            {/* <FooterLink href="#">About us</FooterLink> */}
            {/* <FooterLink href="#">Vision</FooterLink> */}
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          
          {/* <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column> */}
          {/* <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column> */}
         
            {/* <Heading>Social Media</Heading> */}
            <FooterLink href="#">
             
              <img className="images" src="http://oflisback.github.io/react-favicon/img/github.ico">
              
              </img>
            </FooterLink>
            <FooterLink href="#">
        
                  <img className="images" src="http://oflisback.github.io/react-favicon/img/github.ico">
                  
                  </img>
              
            </FooterLink>
            <FooterLink href="#">
          
            <img src="http://oflisback.github.io/react-favicon/img/github.ico">
                  
                  </img>
              
            </FooterLink>
            <FooterLink href="#">
           
            <img className="images" src="http://oflisback.github.io/react-favicon/img/github.ico">
                  
                  </img>
              
            </FooterLink>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;