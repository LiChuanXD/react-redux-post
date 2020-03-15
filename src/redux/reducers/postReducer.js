import { DELETE_POST , CREATE_POST } from '../actions/actionTypes';

const initState = {
    posts : [
        {
            id : 1,
            post : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Etiam erat velit scelerisque in dictum non consectetur a erat. Ipsum dolor sit amet consectetur adipiscing. Morbi enim nunc faucibus a pellentesque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Auctor augue mauris augue neque gravida in fermentum et. Urna duis convallis convallis tellus id interdum velit laoreet id. Eu scelerisque felis imperdiet proin."
        },
        {
            id : 2,
            post : "Sit amet nulla facilisi morbi. Volutpat blandit aliquam etiam erat. Neque viverra justo nec ultrices dui sapien eget. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Scelerisque felis imperdiet proin fermentum leo. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Tincidunt vitae semper quis lectus nulla at. Feugiat nisl pretium fusce id velit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Nibh tellus molestie nunc non blandit massa. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Ornare arcu odio ut sem nulla pharetra diam sit. Rhoncus urna neque viverra justo. Nibh sit amet commodo nulla facilisi nullam. Sollicitudin aliquam ultrices sagittis orci a."
        },
        {
            id : 3,
            post : "Dignissim sodales ut eu sem. Quam vulputate dignissim suspendisse in. Eu nisl nunc mi ipsum faucibus vitae. Odio aenean sed adipiscing diam donec adipiscing tristique. Feugiat nisl pretium fusce id velit ut. Nullam non nisi est sit amet facilisis magna. Volutpat sed cras ornare arcu. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Viverra maecenas accumsan lacus vel. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc scelerisque viverra mauris in aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing."
        }
    ]
};

export const postReducer = ( state = initState , action) =>{
    console.log(action)
    switch(action.type){
        case DELETE_POST:
            return{
                ...state ,
                posts : state.posts.filter(x=>x.id !== action.payload)
            };

        case CREATE_POST:
            return{
                ...state ,
                posts : [...state.posts , action.payload]
            }

        default:
            return state;
    }
};
