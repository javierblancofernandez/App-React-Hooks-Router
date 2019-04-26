import { useState,useEffect} from 'react';

//si es un hook tiene que empezar por minuscula,esto es un hook personalizaso por ejemplo par ala validacion
function useName(initialState){
    const [name, setName] = useState(initialState);
    if(name.length>15){
        console.log("demasiado largo")
        setName(name.slice(0,15));
    }

    useEffect(()=>{
        console.log('name effect');
    })
    return [name, setName];
}

export default useName;