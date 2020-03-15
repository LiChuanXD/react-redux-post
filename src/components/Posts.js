import React , { Component } from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../redux/actions/postAction';

class Posts extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleDelete(x){
        this.props.deletePost(x);
    };

    render(){
        const postsList = this.props.posts.length ? (
            this.props.posts.map(x=>{
                return(
                    <div className="card" key={x.id}>
                        <div className="card-body">
                            <p>{x.post}</p>
                            <button onClick={()=>{this.handleDelete(x.id)}} className="btn btn-danger float-right">Delete Post</button>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="text-center">
                <h1>No Posts...</h1>
            </div>
            )
        return(
            <div>
                {postsList}
            </div>
        )
    }

};

const mapStateToProps = (state) =>{
    return{
        posts : state.post.posts
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost : id=>dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Posts);