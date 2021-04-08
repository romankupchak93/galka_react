import React, {Component} from 'react';
import {connect} from "react-redux";
import {history} from "../../_helpers";
import {alertActions, userActions} from '../../_actions';
import {Link} from "react-router-dom";
import {ArrowLeft, Eye, EyeSlash} from "react-bootstrap-icons";
import './css/Login.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            message: '',
            type: 'password',
            submitted: false
        };
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
        this.showHide = this.showHide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input'
        })
    }
    render() {
        const { alert } = this.props;

        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <div className="d-lg-flex half w-100">
                <div className="half-sign contents shadow-sm p-3 mb-5 bg-white">
                    <div className="header-back-block w-100 d-flex">
                        <Link to="/">
                            <button type="button" className="btn btn-arrow arrow-left btn-link">
                                <ArrowLeft/> На головну
                            </button>
                        </Link>
                    </div>
                    <div className="h-50 w-100 d-flex align-items-center">
                        <div className="sign-in w-100">
                            <h5 className="mb-3">Персональний кабінет <span style={{color: '#f25d23', fontWeight: '700'}}>«Галка»</span></h5>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="username"
                                           value={username}
                                           placeholder="username"
                                           onChange={this.handleChange}
                                           className={'form-control' + (submitted && !username ? ' is-invalid' : '')}/>
                                    <label htmlFor="username">Логін</label>
                                    {submitted && !username &&
                                    <label className="floatingInputInvalid">Логін є обов'язковим</label>
                                    }
                                </div>
                                <div className="form-group input-group">
                                    <div className="right-inner-addon">
                                        <span className="show_password" onClick={this.showHide}>{this.state.type === 'input' ? <EyeSlash/> : <Eye/>}</span>
                                        <div className="form-floating mb-3">
                                            <input type={this.state.type}
                                                   name="password"
                                                   value={password}
                                                   placeholder="Password"
                                                   onChange={this.handleChange}
                                                   className={'form-control' + (submitted && !password ? ' is-invalid' : '')}/>
                                             <label htmlFor="password">Пароль</label>
                                            {submitted && !password &&
                                            <label className="floatingInputInvalid">Пароль є обов'язковим</label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button className="btn btn-outline-dark">
                                            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"/>}
                                            Вхід
                                        </button>
                                </div>
                                {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    const { alert } = state;
    return {
        loggingIn,
        alert
    };
}
export default connect(mapStateToProps)(LoginPage);
