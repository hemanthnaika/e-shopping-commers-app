const initialState = {
  role: null
}

const adminReducer=(state=initialState,action)=>{
const{type,payload}=action
console.log(state)
switch(type) {
  case "SET_Admin_TOKEN":
    return {
        ...state, ...payload
    }
  case "Admin_Token":
    return payload
    
    case "AdminToken_FAILED":
    return {
     ...payload
    }
    default:
      return state
  }
} 
export default adminReducer