import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string | null;
    nombre: string | null;
}

const initialState = {
    validando: true,
    token: null,
    username: null,
    nombre: null
}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = { type: 'logout'} | { type: 'login', payload: LoginPayload };
 
const authReducer = (state:AuthState, action:AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: null,
                nombre: null
            }
        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                username: action.payload.username,
                nombre: action.payload.nombre
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }
    , [])
    if(validando){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
  return (
    <>
    <h3>Login</h3>
    { 
        (token) 
            ? <div className="alert alert-success">Autenticado como: {nombre}</div> 
            : <div className="alert alert-danger">No autenticado</div>
    }
     { 
        (!token) 
            ? <button className="btn btn-primary" onClick={()=> dispatch({type: 'login', payload: {nombre:'Cris', username:' bcris'}})}> Login</button>
            : <button className="btn btn-danger" onClick={()=> dispatch({type: 'logout'})}>Logout</button>
    } 

    </>
  )
}
