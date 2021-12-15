import { Link } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

function HomePage() {
    return (
        <div>
            <HeaderComp></HeaderComp>
            <h2>Главная страница</h2>
            <p>Данное веб-приложение использует библиотеку React для создания пользовательского интерфейса.</p>
            <p>Приложение также взаимодействует с базой данных.</p>
            <Link to="/list"><button>Список объектов БД</button></Link>
            <FooterComp></FooterComp>
        </div>
    );
}

export default HomePage;