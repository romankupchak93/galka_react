import React, {Component} from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            setTimeout(() => {
                // it can be the result from your API i just harcoded it
                const results = ['hello', 'world', 'from', 'SO'].filter(value => value === this.state.searchValue)
                this.props.onSearch(results)
            }, 1000)
        })
    }

    render(){
        return (
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="searchValue"
                    placeholder="Номер замовлення"
                    onChange={this.handleOnChange}
                />
                <label htmlFor="turnId">Номер замовлення</label>
            </div>
        )
    }
}
export default Search