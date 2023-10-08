import {useSelector } from 'react-redux';
import React,{useState, useEffect} from "react";
import Typewriter from "typewriter-effect";
import { DataProject } from './Data';
import '../App.css';

const Profil=()=>{
    const [Data, setData] = useState(DataProject[0]);
    let Langue = useSelector(e=>e.LanguagePage)
    useEffect(()=>{
        if(Langue === "Fr"){
            setData(DataProject[0])
        }else{
            setData(DataProject[1])
        }

    },[Langue]);
    return <div className='container' id="accueil" style={{padding:"100px 20px"}}>
        <div className='row align-items-center' >
            <div className='col-7' data-aos="fade-down-right">
                <div className='h4 text-white user-select-none'>{Data.profil[0]}, <span className="h6 px-2">{Data.profil[1]}</span></div>
                <div className='h1 text-warning user-select-none'>MOHAMED OUBIDA</div>
                <div className='h5 text-light user-select-none'>{Data.profil[2]}</div>
                <div className='h5 text-info user-select-none Typewriter-font-size'>
                <Typewriter options={{
                    autoStart: true,
                    loop: true,
                    delay:75,
                    strings: ["HTML5 / CSS3  . . .", "JavaScript / React.Js  . . .","PHP / Laravel  . . .", "MySQL / MongoDB  . . .", "Bootstrap / TailwindCss"],
                }}/>
                </div>
                <div className='py-4'><a href='fichiers/CV-MOUBIDA.pdf' target="_blank" className='btn btn-warning px-4 py-2'>{Data.profil[3]}</a></div>
            </div>
            <div className='col-5 animate__animated animate__zoomIn'>
                <img src="images/44.png" alt='profil' className='rounded w-100 p-lg-5'/>
            </div>
            
        </div>
        
    </div>

}
export default Profil