
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import jwtDecode from 'jwt-decode';


export const loginUser = (email, password) => async (dispatch) => {

    try {
        const base_Url = 'https://shopping-backend-api-gsve.onrender.com'

        const res = await axios.post(`${base_Url}/api/v1/auth/login`, {
            email, password
        })
        const { token, message } = res.data

        if (token) {
            toast.success('Login Success')
            // save token to the local storage
            localStorage.setItem('token', token)
            const decoded=jwtDecode(token)
            const { role } = decoded
        
            if (role === 1) 
            {
               localStorage.setItem("role",role)
               dispatch({
                   type:"Admin_Token",
                   payload:{role}
               })
            }
           else{
            dispatch({
                type: "AdminToken_FAILED",
                payload: { role: null }
            }) 
           } 

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};


export const signupUser = (email, firstName, lastName, password) => async (dispatch) => {

    try {
        const base_Url = 'https://shopping-backend-api-gsve.onrender.com'

        const res = await axios.post(`${base_Url}/api/v1/auth/signup`, {
            email, firstName, lastName, password
        })
        const { user } = res.data
        if (user) {
            toast.success('Signup Success')
            dispatch({
                type: "SIGNUP_SUCCESS",
                payload: {
                    signup: true
                }
            })
        } else {
            toast.error('Signup Failed')
            dispatch({
                type: "SIGNUP_FAILED",
                payload: { signup: false }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};

export const logoutUser = () => async (dispatch) => {

    try {
        toast.success("Logout Success !")

        //remove token from the local storage
        localStorage.clear();
       
        dispatch({
            type: "LOGOUT_SUCCESS",
           
        })
        window.location.reload(false);
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};



