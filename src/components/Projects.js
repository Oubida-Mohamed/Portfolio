
import React from 'react';
import { projects } from "./Data";


import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/css';

const Projects=()=>{


    return <div className="container d-lg-flex" id="projets" style={{padding:"100px 20px"}}>
    <Swiper navigation={true}
      spaceBetween={100}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={true}
      autoplaySpeed={{ delay: 500 }}
    >
                {projects.map((e)=>{return <SwiperSlide key={e.Id} className='w-100'>
                    <a href='#' rel="noreferrer" target='_blank' className='w-100 h-80 rounded card-img-top'>
                        <img src={e.Image} alt={e.Name} className='w-100'/>
                    </a>
                </SwiperSlide>})}
    </Swiper>
    </div>
    
}
export default Projects;
