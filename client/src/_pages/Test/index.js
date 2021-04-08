import React, {Component} from "react";
import Search from "./Search";
import {Result} from "./Result"
import {Container, Row} from "react-bootstrap";

class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: []
        }
        this.search = this.search.bind(this)
    }
    search(results){
        this.setState({results})
    }
    render(){
        const { results } = this.state
        return (
            <Container fluid="md">
                <Row>
                    <Search onSearch={this.search} />
                    <Result {...results} />
                </Row>
            </Container>
        )
    }
}
export default Test
