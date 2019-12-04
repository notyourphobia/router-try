import React, { Component } from 'react'
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css'
import Squares from './Squares'

// export default class Squares extends Component {
//   constructor(props) {
//     super(props);
//   }
//   let id = useParams();
// render(){
//   return (
//     <div>
//       <Row>
//         <Col>
//           <Link exact to={'/'}>
//             <Button variant="outline-dark" size='lg'>Back</Button>
//           </Link>
//         </Col>
//       </Row>

//       {Array(id).map(e => {
//         return <div>{e}</div>
//       })}
//     </div>
//   )
// }
// }


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currNums: [],
      num: 0,
      nums: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (event) =>{
    let arr = []
    console.log(event.target.value)
    for (let i = 1; i <= event.target.value; i++) {
      arr.push(i)
    }
    this.setState({
      num: event.target.value,
      currNums: arr
    })
  }
  handleClick(){
    this.setState({
      nums: this.state.currNums
    })
  }

  render() {
    return (
      <Container>
        <Router>

          <Form>
            <Form.Group>
              <Row>
                <Col className='py-3'>
                  <Form.Label>
                    <h2>Enter a number:</h2>
                  </Form.Label>
                  <Form.Control onChange={this.handleChange} size='lg' type="number" placeholder="How many squares do you want?" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Link to={this.state.num > 0 ? '/' + String(this.state.num) : '/'}>
                    <Button onClick = {this.handleClick} variant="outline-dark" size='lg'>Make Squares!</Button>
                  </Link>
                </Col>
              </Row>
            </Form.Group>
          </Form>



          <Switch>
            <Route path='/:num'>
              <Squares num={this.state.nums} />
            </Route>
          </Switch>
        </Router >
      </Container >
    )
  }
}
