import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

import "../components(CSS)/Main.css";
export class Search extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.explore} value='get movie' className="formStyle">          
                <Form.Group className="mb-3" >            
                <Form.Control type="text" placeholder="Search For Movie" name='movie' style={{ textAlign: 'center' }} />          
                </Form.Group>          
                <Button variant="primary" type="submit" > Explore </Button>        
                </Form>
            </div>
        )
    }
}

export default Search
