import React from 'react';
import {BrowserRouter, Route , Switch,Link,NavLink} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Todos from './Pages/Todos';

function Error404 (){
    return (
        <div>
            Error 404.
        </div>
        
    )
}
//Link para movermos entre paginas NavLink es mas pesado pq hay que pasarle mas props(mejor utilizar en una barra de navegacion)
function Header (){
    return (
        <nav>
           {/* <Link to="/todos">Todos</Link> 
           <Link to="/register">Register</Link> */}
           <NavLink activeClassName="activado" to="/todos" exact>Todos</NavLink>
           <NavLink activeClassName="activado" to="/register" exact>Register</NavLink>
           <NavLink activeClassName="activado" to="/login" exact>Login</NavLink>
        </nav>
    )
}
function Footer (){
    return (
        <nav>
            Mi footer
        </nav>
    )
}
//ATENCION el return solo devuelve un componente , un array de componentes o un string
function Layout (props){
    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}
//el path que ponemos en la url y componente ponemos exact para que sea la ruta exacta que muestre el componente.Switch Solo devuelve la ruta con la que primera coincide
function AppRouter (){
    return (
        <BrowserRouter>
        
        
        <Layout>
            <Switch>
                <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/todos" component={Todos} exact/>
                <Route path="*" component={Error404}/>
            </Switch>
        </Layout>
        
        

        </BrowserRouter>
    );
}

export default AppRouter;