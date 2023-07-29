import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import { DataProject } from './Data';

const NavList=()=>{
    const dispatch = useDispatch()
    const [Data, setData] = useState(DataProject[0]);
    let Langue = useSelector(e=>e.LanguagePage)
    useEffect(()=>{
        if(Langue === "Fr"){
            setData(DataProject[0])
        }else{
            setData(DataProject[1])
        }

    },[Langue]);
    // console.log(Langue);
    return <nav className="navbar navbar-expand-md navbar-light bg-black bg-light-sm py-2 bg-opacity-50">
            <div className='container'>
                <a href='/' className='navbar-brand text-light fs-1'>
                    <img src='images/Mohamed.svg' alt='error'/>
                </a>

                <div className="collapse navbar-collapse" id="main">
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><a href='#accueil' className='btn btn-outline-warning btn-floating m-1'><i className="bi bi-house"></i><span className='m-2'>{Data.Nav[0]}</span></a></li>
                        <li className='nav-item'><a href='#a_propos' className='btn btn-outline-warning btn-floating m-1'><i className="bi bi-person"></i><span className='m-2'>{Data.Nav[1]}</span></a></li>
                        <li className='nav-item'><a href='#projets' className='btn btn-outline-warning btn-floating m-1'><i className="bi bi-kanban"></i><span className='m-2'>{Data.Nav[2]}</span></a></li>
                        <li className='nav-item'><a href='#contact' className='btn btn-outline-warning btn-floating m-1'><i className="bi bi-chat-right-text"></i><span className='m-2'>{Data.Nav[3]}</span></a></li>
                    </ul>
                </div>
                <div className="bg-transparent">
                    <select className="btn btn-outline-light m-1" onChange={e=>dispatch({type:"Langue",Data:e.target.value})}>
                        <option className="dropdown-item bg-transparent" value="Fr">Fr</option>
                        <option className="dropdown-item" value="En">En</option>
                    </select>
                </div>
            </div>
    </nav>
}
export default NavList