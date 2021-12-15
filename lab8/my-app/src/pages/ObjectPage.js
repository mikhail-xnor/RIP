import { Link } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";


function ObjectPage(params) {
    const langsList = params.location.data
    return (
        <div>
            <HeaderComp></HeaderComp>
            <h2>Процессор {langsList.name}</h2>
            <h4>Частота работы:</h4>
            <p>{langsList.frequency}</p>
            <p><b>Архитектура: </b>{langsList.architecture}</p>
            <Link to="/list"><button>Назад</button></Link>
            <FooterComp></FooterComp>
        </div>
    );
}

export default ObjectPage;