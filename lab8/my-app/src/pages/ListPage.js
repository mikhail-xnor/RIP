import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import getObjects from "../modules/GetObjects.js";


function ListPage() {

    const [langsList, setLangsList] = useState([])
    const [langsNames, setLangsNames] = useState([])

    const handleObjectsList = async () => {
        const names = []
        const langs = await getObjects()
        for (let lang of langs) {
            names.push(lang['name']);
        }
        setLangsList(langs)
        setLangsNames(names)
    }

    useEffect(()=>{
        handleObjectsList()
    }, [])

    return (
        <div>
            <HeaderComp></HeaderComp>
            <h2>Список объектов таблицы CPU</h2>
            <ul>
                {langsNames.map((name)=>{
                    return (
                        <li key={name}>
                            <Link to={{pathname: "/list/object", data: langsList.find(o => o.name == name)}}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
            <FooterComp></FooterComp>
        </div>
    );
}

export default ListPage;