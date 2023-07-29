
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { projects } from "./Data";
const Projects=()=>{
    return <div className="container d-lg-flex" id="projets" style={{padding:"100px 20px"}}>
     
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000} stopOnHover={true} transitionTime={1000} showThumbs={false}>
                {projects.map((e)=>{return <div className="card" key={e.Id}>
                    <a href='https://youtu.be/qnkQtJjgyxU' rel="noreferrer" target='_blank' className='w-100 h-80 rounded card-img-top'>
                        <img src={e.Image} alt={e.Name}/>
                    </a>
                </div>})}
            </Carousel>
    </div>
}
export default Projects