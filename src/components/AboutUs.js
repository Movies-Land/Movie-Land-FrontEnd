import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components(CSS)/AboutUs.css';
import ibrahim from '../img/ibrahim.jpg';
import mohammad from '../img/mohammad.jpg';
import abrar from '../img/abrar.jpg';
import mahmoud from '../img/mahmoud.jpg';
import suad from '../img/new1.jpg';
import jana from '../img/jana.jpg';
class AboutUs extends Component {
    render() {
        return (

            <div className="AboutUs-MainCard">
                <div className="blink">
                    Meet Our Team
                </div>
                <div className="inner-div">
                    <Card style={{ width: '18rem' }} className='AboutUs-card'>

                        <Card.Img variant="top" className='AboutUS-image'

                            src={mahmoud} />

                        <Card.Body>
                            <Card.Title className="teamMemberName" style={{}}>
                                Mahmoud Khader </Card.Title>
                                <Card.Text>
                                    Team Leader
                                </Card.Text>
                            <Card.Text>

                                Full Stack Developer &&
                                Civil engineer
                            </Card.Text>
                            <Card.Link className="CradLink" href="https://github.com/Mahmoud-Khader"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                            <Card.Link className="CradLink" href="https://www.linkedin.com/in/mahmoud-khader-432964131/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                        </Card.Body>

                    </Card>
                </div>
                

                <div className="inner-div">
                    <Card style={{ width: '18rem' }} className='AboutUs-card'>

                        <Card.Img variant="top" className='AboutUS-image'

                            src={suad} />

                        <Card.Body>
                            <Card.Title className="teamMemberName" style={{}}> Suad Talafha </Card.Title>
                            <Card.Text>
                                    Team Member
                                </Card.Text>
                            <Card.Text>
                                Full Stack Developer &&
                                Renewable energy engineer

                            </Card.Text>
                            <Card.Link className="CradLink" href="https://github.com/suadtalafha"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                            <Card.Link className="CradLink" href="https://linkedin.com/in/suad-talafha-34b1941b2"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                        </Card.Body>

                    </Card>
                </div>
                <div className="inner-div">
                    <Card style={{ width: '18rem' }} className='AboutUs-card'>

                        <Card.Img variant="top" className='AboutUS-image'

                            src={ibrahim} />

                        <Card.Body>
                            <Card.Title className="teamMemberName" style={{}}> Ibrahem Sarayrah  </Card.Title>
                            <Card.Text>
                                    Team Member
                                </Card.Text>
                            <Card.Text>

                                Full Stack Developer && 
                                <br></br>
                                Marketing
                            </Card.Text>
                            <Card.Link className="CradLink" href="https://github.com/IbrahemSarayrah"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                            <Card.Link className="CradLink" href="https://www.linkedin.com/in/ibrahem-sarayrah-3a4277210"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                        </Card.Body>

                    </Card>
                </div>
                <div className="inner-div">
                    <Card style={{ width: '18rem' }} className='AboutUs-card'>

                        <Card.Img variant="top" className='AboutUS-image'

                            src={mohammad} />

                        <Card.Body>
                            <Card.Title className="teamMemberName" style={{ fontFamily: 'cursive' }}> Mohammad Atta</Card.Title>
                            <Card.Text>
                                    Team Member
                                </Card.Text>
                            <Card.Text>
                                Full Stack Developer &&
                                Electrical Power Engineer
                            </Card.Text>
                            <div className="details-About">
                                <Card.Link className="CradLink" href="https://github.com/mr-atta"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                                <Card.Link className="CradLink" href="https://www.linkedin.com/in/mohammad-atta-"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                            </div>

                        </Card.Body>

                    </Card>
                </div>
                <div className="inner-div">
                    <Card style={{ width: '18rem' }} className='AboutUs-card'>

                        <Card.Img variant="top" className='AboutUS-image'

                            src={jana} />

                        <Card.Body>
                            <Card.Title className="teamMemberName" > Jana Abdelkader
                            </Card.Title>
                            <Card.Text>
                                    Team Member
                                </Card.Text>
                            <Card.Text>

                                Full Stack Developer &&
                                <br></br>
                                    Physicist

                            </Card.Text>
                                <Card.Link className="CradLink" href="https://github.com/Jana998-alt"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                                <Card.Link className="CradLink" href="https://www.linkedin.com/in/jana-abdelkader"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                        </Card.Body>

                    </Card>
                </div>
                    <div className="inner-div">
                        <Card style={{ width: '18rem' }} className='AboutUs-card'>

                            <Card.Img variant="top" className='AboutUS-image'

                                src={abrar} />

                            <Card.Body>
                                <Card.Title className="teamMemberName" style={{}}> Abrar algour</Card.Title>
                                <Card.Text>
                                    Team Member
                                </Card.Text>
                                <Card.Text>

                                    Full Stack Developer &&
                                    Civil engineer
                                </Card.Text>
                                <Card.Link className="CradLink" href="https://github.com/abrar189"><FontAwesomeIcon icon={["fab", "github"]} /></Card.Link>
                                <Card.Link className="CradLink" href="https://www.linkedin.com/in/abrar-algour-51a2141b6"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Card.Link>
                            </Card.Body>

                        </Card>
                    </div>
                </div>
                )
    }
}

                export default AboutUs
