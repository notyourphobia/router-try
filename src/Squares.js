import React, { Component } from 'react'
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

// let id = useParams()

export default class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqrNum: []
        }
    }

    render() {
        return (
            <div >
                <Row >
                    {this.props.num.map((e, i) => {

                        return <Col key={i} className='py-3' md={1}>
                            <div className='square'>{e}</div>
                        </Col>

                    })}
                </Row>
            </div>
        )
    }
}