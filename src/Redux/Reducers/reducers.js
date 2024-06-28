import {SIGNUP,SIGNIN,CURRENT,PRODUCT, RESERVATION,GET_PRODUCT,GET_RESERVATION, LOGOUT, DELETE_RESERVATION} from "../Consts/action-type"


const initalState = {
    SignUpUsers : {},
    SignInUsers : {} ,
    GetUser : {} ,
    newProduct : {} ,
    newReservation : {} ,
    getReservation : [] ,
    getProduct: [],
    getOneProduct : []
}
  

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGNUP: return{
            ...state ,
            SignUpUsers : action.payload
        }
        case SIGNIN : 
            return {
                ...state ,
                SignInUsers : action.payload
            }
            case CURRENT : 
            return {
                ...state ,
                GetUser : action.payload
            }
            case PRODUCT : 
            return {
                ...state ,
                newProduct  : action.payload
            }
            case RESERVATION : 
            return {
                ...state ,
                newReservation  : action.payload
            }
            case GET_PRODUCT : 
            return {
                ...state ,
                getProduct  : action.payload
            }
            case GET_RESERVATION : 
            return {
                ...state ,
                getReservation  : action.payload
            }
            case 'getOneProduct': 
            return {
                ...state ,
                getOneProduct : [action.payload]
            }
            case LOGOUT:
                return {
                    SignUpUsers : {},
                    SignInUsers : {} ,
                    GetUser : {} ,
                    newProduct : {} ,
                    newReservation : {} ,
                    getReservation : [] ,
                    getProduct: [],
                    getOneProduct : []
                }
                case DELETE_RESERVATION:
                    return {
                        ...state,
                        getReservation: state.getReservation.filter(reservation => reservation._id !== action.payload)
                    };
        default: return state
        
    }
}

export default UserReducer ;



