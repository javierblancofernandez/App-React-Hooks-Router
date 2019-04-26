import React, { useState ,useEffect } from 'react';
import useName from '../../Hooks/useName';
import axios from 'axios';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(props)
    //optimiza los renderizados y sustituye componentDidMount componentdidUpdated  el useEffect lo puedo poner en cualquier hook
    // useEffect(()=>{
    //     console.log("ha cambiado name")

    //     return function (){
    //         unblock();
    //     }
    // },[name,password]);

    // const unblock= props.history.block(()=>{
    //     if(!name)return 'Me quieres abandonar';

    //     unblock();
    // })

    const onSubmit = (e) => {
        e.preventDefault();
        const body ={
           password,
           email
        }
        // console.log(username,email,password)
        axios.post('http://localhost:8080/user/auth',body).then(res=>{
            console.log(res.headers.authorization)
            localStorage.setItem('authorization',res.headers.authorization);
        }).catch(console.error)
    }
    

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value ={email}
            />
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="submit" value="Enviar" />

            <button onClick ={null}>Historial</button>
        </form>
    )

}

export default Login;
