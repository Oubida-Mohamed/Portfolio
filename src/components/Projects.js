
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
            {/* <Carousel autoPlay={true} infiniteLoop={true} interval={2000} stopOnHover={true} transitionTime={1000} showThumbs={false}> */}
                {projects.map((e)=>{return <SwiperSlide key={e.Id} className='w-100'>
                    <a href='https://github.com/Oubida-Mohamed/Portfolio' rel="noreferrer" target='_blank' className='w-100 h-80 rounded card-img-top'>
                        <img src={e.Image} alt={e.Name} className='w-100'/>
                    </a>
                </SwiperSlide>})}
            {/* </Carousel> */}
            </Swiper>
    </div>
    
}
export default Projects;
