import { Link } from "react-router-dom";

export default function Nav (){
return (
    <div>
        <Link to={"/home"}>home</Link>
        <Link to={"/posts"}>posts</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/register"}>register</Link>
    </div>
)      
}