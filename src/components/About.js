import {useSelector } from 'react-redux';
import React,{useState, useEffect} from "react";
import { DataProject } from './Data';
import '../App.css';
const About =()=>{
    const [Data, setData] = useState(DataProject[0]);
    let Langue = useSelector(e=>e.LanguagePage)
    const jsxDescription = { __html: Data.description };
    useEffect(()=>{
        if(Langue === "Fr"){
            setData(DataProject[0])
        }else{
            setData(DataProject[1])
        }

    },[Langue]);
    return <div className="container padding_About" id="a_propos">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-5 align-items-center-md animate__animated animate__zoomIn py-2 text-center">
                    <img src="images/Profil.jpg" alt="Profil" className="image_width p-2-sm user-select-none rounded-circle mx-md-auto" />
                </div>
                <div className="col-lg-10 col-md-8 col-sm-7 animate__animated animate__zoomIn py-5">
                    <p className="text-light text-justify align-items-center-lg fs-1-lg user-select-none" dangerouslySetInnerHTML={jsxDescription} />
                </div>
            </div>
    </div>

}
export default About