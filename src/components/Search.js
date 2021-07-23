import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

export class Search extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.explore} value='get movie'>          
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
