// export const deleteProduct = (productId) => {
//     return {
//         type: "DELETE_PRODUCT",
//         payload: { productId }
//     }
// }

// export const addProduct = (product) => {
//     return {
//         type: "ADD_PRODUCT",
//         payload: { product }
//     }
// }

// import jwt from 'jsonwebtoken'
import toast from 'react-hot-toast'
import axios from 'axios'

export const addProduct = (name,imageUrl,description,category,color,price, listPrice,stock) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:3003'
        const res = await axios.post(`${base_Url}/api/v1/product/add`, {
            name,imageUrl,description,category,color,price, listPrice,stock
        })
        // console.log(res.data)
        const { product, message } = res.data
        if (product) {
            toast.success(message)

            dispatch({
                type: "ADD_PRODUCT",
                payload: { product }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_PRODUCT_FAILED"
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};

export const deleteProduct = (id) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:3003'
        const res = await axios.delete(`${base_Url}/api/v1/product/delete/${id}`)
        console.log(res.data)
        const { product, message } = res.data
        if (product) {
            toast.success(message)

            dispatch({
                type: "DELETE_PRODUCT"
            })
        } else {
            toast.error(message)
            dispatch({
                type: "DELETE_PRODUCT_FAILED"
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};

export const getProducts = (name, description) => async (dispatch) => {
    const res = await axios.get('http://localhost:3003/api/v1/product/all')
    const { products } = res.data
    dispatch({
        type: "GET_PRODUCTS",
        payload: { products }
    })
}