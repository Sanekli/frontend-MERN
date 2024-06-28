import {SIGNUP,SIGNIN,CURRENT,PRODUCT, GET_PRODUCT, RESERVATION, GET_RESERVATION, DELETE_RESERVATION} from "../Consts/action-type"
import axios from 'axios'



export const SignUp = (userData,History) => async (dispatch) => {
try {
    const SignUpUsers = await axios.post('https://backend-mern-qam4.onrender.com/api/auth/SignUp',userData)
    dispatch(
{        type : SIGNUP ,
        payload : SignUpUsers ,
})
// localStorage.setItem('token', SignUpUsers.data.token)
History('/Login')
} catch (error) {
    console.log(error)  
}
}


export const SignIn = (userData, history) => async (dispatch) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    try {
        const SignInUsers = await axios.post('https://backend-mern-qam4.onrender.com/api/auth/SignIn', userData);
        dispatch({
            type: SIGNIN,
            payload: SignInUsers.data
        });
        console.log(SignInUsers);
        dispatch(CurrentUser(SignInUsers.data.token));
        // setTimeout(() => {
        //     window.location.replace(window.location.protocol + '//' + window.location.host);
        // }, 500);
        localStorage.setItem('token',SignInUsers.data.token)
        history('/');
    } catch (error) {
        console.error('Login error:', error.response.data.msg); 
        throw error; 
    }
};

export const CurrentUser = (token) => async (dispatch) => {
    const config={  
        headers:{           
        Authorization: token 
                }}
    try {
        const GetUser = await axios.get('https://backend-mern-qam4.onrender.com/api/auth/current',config)
        dispatch(
            {            
                type : CURRENT ,
                payload : GetUser.data
            }
        )
        console.log(GetUser.data);
        localStorage.setItem('current_user',JSON.stringify(GetUser.data.user))
    } catch (error) {
        console.log(error)
    }
}

export const Product = (newProducts) => async (dispatch) => {
    
    try {
        const AddingProduct = await axios.post('https://backend-mern-qam4.onrender.com/api/product/addingNewProduct',newProducts)
        dispatch (
            { 
                type : PRODUCT ,
                payload : AddingProduct.data
            }
        )
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}


export const getProducts = () => async(dispatch)=>{
    try {
        const res = await axios.get('https://backend-mern-qam4.onrender.com/api/product/listNewProduct')
dispatch(
    {            
        type : GET_PRODUCT ,
        payload : res.data.viewProduct,
    }
    
)
} catch (error) {
console.log(error)
}
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const productById = await axios.get(`https://backend-mern-qam4.onrender.com/api/product/listNewProduct/${id}`)
        dispatch (
            { 
                type : 'getOneProduct' ,
                payload : productById.data.oneProduct
            }
        )
    } catch (error) {
        console.log (error)
    }

}


export const deleteProduct = (id) => async (dispatch) => {
    try {
        const productById = await axios.delete(`https://backend-mern-qam4.onrender.com/api/product/deletePosts/${id}`)
        dispatch (
            { 
                type : 'deleteProduct' ,
                payload : productById.data.oneProduct
            }
        )
        
    } catch (error) {
        console.log (error)
    }

}
export const Reservation = (newReservation, navigate) => async (dispatch) => {
    
    try {
        const AddingReservation = await axios.post('https://backend-mern-qam4.onrender.com/api/product/addingNewReservation',newReservation)
        dispatch (
            { 
                type : RESERVATION ,
                payload : AddingReservation.data
            }
        )
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
export const getReservation = () => async(dispatch)=>{
    try {
        const res = await axios.get('https://backend-mern-qam4.onrender.com/api/product/listNewReservation')
dispatch(
    {            
        type : GET_RESERVATION ,
        payload : res.data.viewReservation,
    }
    
)
} catch (error) {
console.log(error)
}
}

export const deleteReservation = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://backend-mern-qam4.onrender.com/api/product/deleteReservation/${id}`);
        dispatch({
            type: DELETE_RESERVATION,
            payload: id,
        });
        dispatch(getReservation())
        alert('Reservation deleted successfully');
    } catch (error) {
        console.error('Error deleting reservation:', error.response?.data?.msg || error.message);
        alert('Failed to delete reservation');
    }
};
