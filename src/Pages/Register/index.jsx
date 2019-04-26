import React, { useState ,useEffect } from 'react';
import useName from '../../Hooks/useName';
import axios from 'axios';


function Register(props) {
    const [username, setName] = useName('');
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
           username,
           password,
           email
        }
        // console.log(username,email,password)
        axios.post('http://localhost:8080/user/',body).then(res=>{
            // console.log(res.headers.authorization)
            // localStorage.setItem('authorization',res.headers.authorization)
            alert('te has registrado');
        }).catch(console.error)
    }
    

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}//le paso el evento y recojo el e.target.value
                value={username}
            />
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

export default Register;
