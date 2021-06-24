import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/carousel.css";

function SHUICarousel() {
    return (
        <Carousel autoplay dotPosition="bottom" className="carousel">
            <div class="carousel-container">
                <img src="/title1.png" className="carousel-image"/>
                <div class="carousel-text"><img src="/title4.png" /></div>
            </div>
            <div>
                <img src="/title2.png" className="carousel-image"/>
                <div class="carousel-text"><img src="/title4.png" /></div>
            </div>
            <div>
                <img src="/title3.png" className="carousel-image"/>
                <div class="carousel-text"><img src="/title4.png" /></div>
            </div>
        </Carousel>
    );
}

export default SHUICarousel;