import React , { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({
            ...this.state ,
            [e.target.name] : e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <li className="nav-item active mr-5">
                <a href="/" className="nav-link" type="button" data-toggle="modal" data-target="#loginModal">Login</a>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Login</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email :</label>
                                        <input className="float-right" onChange={this.handleChange} value={this.state.email} name="email" type="email" placeholder="*Email Address" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password :</label>
                                        <input className="float-right" onChange={this.handleChange} value={this.state.password} name="password" type="text" placeholder="*Password" id="password" />
                                    </div>

                                    <div className="modal-footer">
                                        <input type="submit" className="btn btn-primary" />
                                        <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </form>
                            </div>

                                    
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}

export default Login;