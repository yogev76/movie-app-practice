import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
class ActorComp extends React.Component {
    constructor(props) {
        super(props);
        // our car model constructor(brand, model,  km, year)
    }
    render() {
        const carTacardContentbleRows = [];
        console.log(this.props.cars)
        for(let i=0; i<this.props.cars.length; i++) {
            const actorCard = 
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' , textAlign: 'center'}}>
            
            <Card.Img variant="center" src={this.props.cars[i]['Image']} />
            <Card.Title>First Name : {this.props.cars[i].FirstName}<br />
                       Last Name : {this.props.cars[i].LastName}<br />
                       Age : {this.props.cars[i].getBirthday()} <br />
                       IMDB LINK : <a href={this.props.cars[i].Link}> PRESS </a>
            </Card.Title>
        
            {/* // <tr>
            //     <td>{this.props.cars[i]['FirstName']}</td>
            //     <td>{this.props.cars[i]['LastName']}</td>
            //     <td><img src={this.props.cars[i]['Image']}></img></td>
            //     <td><a href={this.props.cars[i]['Link']}>IMDB LINK</a></td>
            //     <td>{this.props.cars[i].getBirthday()}</td>
            //     </tr>  */}
            </Card>
        </Col>
            carTacardContentbleRows.push(actorCard);
        }
        return (
            // <Col sm={12} lg={4}>
            // <Card style={{ width: '18rem' }}>
                /* <Card.Img variant="top" src={this.props.cars[i]['Image']} />
             <Card.Body>  */
                /* <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Image</th>
                    <th>Link</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
        //         {carTableRows} */
        //     {/* </Card.Body> */}
          <Row>{carTacardContentbleRows}</Row>
        // </Card>
        // </Col>
            
        )
    //     <Table striped bordered hover>
    //     <thead>
    //         <tr>
    //             <th>FirstName</th>
    //             <th>LastName</th>
    //             <th>Image</th>
    //             <th>Link</th>
    //             <th>Birthday</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {carTableRows}
    //     </tbody>
    // </Table>
        
    // )
    }
}

export default ActorComp;
