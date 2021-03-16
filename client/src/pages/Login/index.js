import React, { Component } from 'react';
import { userLogout, userLogin } from '../../redux/actions/userActions';
import {connect} from "react-redux";
import './Floating-Labels.css'
import './Login.css';
import {history} from "../../helpers";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userLogin(username, password));
        }
    }
    getOut() {
        history.push('/');
    }
    render() {
        const { auth } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="d-lg-flex half w-100">
                <div className="half-sign contents shadow-sm p-3 mb-5 bg-white">
                    <div className="header-back-block w-100 d-flex">
                        <button type="button" className="close get-out"
                                onClick={() => this.getOut()}>
                            <img className="align-baseline" src="https://cabinet.dah-online.com/assets/icons/login_page/arrow_left.svg"/>
                                <span className="get-out-text"> На головну</span>
                        </button>
                    </div>
                    <div className="h-50 w-100 d-flex align-items-center">
                        <div className="sign-in w-100">
                            <h3 className="text-center">Login</h3>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-label-group' + (submitted && !username ? ' has-error' : '')}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="username" required autoFocus
                                        value={username}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="username">Username</label>
                                    {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                    }
                                </div>

                                <div className={'form-label-group' + (submitted && !password ? ' has-error' : '')}>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           placeholder="Password" required
                                           value={password}
                                           onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                    {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-outline-dark">Login</button>
                                    {auth.loggedIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Login);
