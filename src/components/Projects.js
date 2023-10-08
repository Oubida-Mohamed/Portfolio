
import React from 'react';
import { projects } from "./Data";
import '../App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import {Navigation, Pagination} from 'swiper';
// import 'swiper-bundle.min.mjs';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

const Projects=()=>{
    // console.log(window.matchMedia("(max-width: 576px)").matches);

    return <div className='padding_Projects' id="projets">
            <div className="container d-lg-flex" >
            <Swiper 
            spaceBetween={25}
            slidesPerView={(window.matchMedia("(max-width: 576px)").matches?1:2)}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={true}
            >
                        {projects.map((e)=>{return <SwiperSlide key={e.Id} className='width_Projets'>
                            <a href='/Portfolio'  target='_blank' className='w-100 h-80 rounded card-img-top'>
                                <img src={e.Image} alt={e.Name} className='width_Projets'/>
                            </a>
                        </SwiperSlide>})}
            </Swiper>
            
        </div>
        <div className='swiper_Hand'>
            <i className="bi bi-hand-index-thumb text-warning"></i>
        </div>
    </div>
    
}
export default Projects;
