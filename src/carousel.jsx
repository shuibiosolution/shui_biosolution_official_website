import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/carousel.css";

function SHUICarousel() {
    return (
        <Carousel autoplay dotPosition="bottom" className="title">
            <div>
                <img src="/title1.png" className="carousel-image"/>
            </div>
            <div>
                <img src="/title2.png" className="carousel-image"/>
            </div>
            <div>
                <img src="/title3.png" className="carousel-image"/>
            </div>
        </Carousel>
    );
}

export default SHUICarousel;