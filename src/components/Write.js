import React , { Component } from 'react';
import { connect } from 'react-redux';
import {createPost} from '../redux/actions/postAction';

class Write extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : "",
            post : ""
        };
        this.handleWrite = this.handleWrite.bind(this);
        this.handlePost = this.handlePost.bind(this);
    };

    handleWrite(e){ 
        const randomId = Math.random() * 99999
        this.setState({
            id : randomId,
            post : e.target.value
        });
    };

    handlePost(e){
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState({
            ...this.state ,
            id : "",
            post : ""
        });
    };

    render(){
        return(
            <form onSubmit={this.handlePost}>
                <h1>Create Post :</h1>
                <textarea required onChange={this.handleWrite} value={this.state.post} id="textArea" className="form-control" placeholder="Type your post here.." />
                <input type="submit" className="btn btn-primary form-control font-weight-bold" value="Post" style={{fontSize : "20px"}} />
            </form>
        )
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        createPost : payload=>dispatch(createPost(payload))
    }
}

export default connect(null , mapDispatchToProps)(Write);