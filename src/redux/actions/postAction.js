import { DELETE_POST , CREATE_POST } from './actionTypes';

export const deletePost = id =>{
    return {
        type : DELETE_POST,
        payload : id
    }
};

export const createPost = payload =>{
    return{
        type : CREATE_POST,
        payload
    }
};