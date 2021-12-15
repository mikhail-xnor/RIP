import { Link } from "react-router-dom";

function HeaderComp() {
    return (
        <div>
            <Link to='/'>Главная</Link>
            <hr></hr>
        </div>
    );
}

export default HeaderComp;