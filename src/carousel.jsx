import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "/public/stylesheets/carousel.css";

function SHUICarousel() {
    return (
        <div className="carousel">
            <Carousel autoplay dotPosition="bottom">
                <div class="carousel-container">
                    <img src="/title1.png" className="carousel-image" />
                    <div>
                        <img src="/title4.png" className="carousel-text" />
                        <img src="/carousel-text.png" className="carousel-text" id="carousel-ch-en-text" />
                        <a href=""> <img src="/carousel-about.png" className="carousel-text" id="carousel-about" /> </a>
                        <a href=""> <img src="/carousel-contact.png" className="carousel-text" id="carousel-contact" /> </a>

                    </div>
                </div >
                <div class="carousel-container">
                    <img src="/title2.png" className="carousel-image" />
                    <div>
                        <img src="/title5.png" className="carousel-text" />
                        <img src="/carousel-text.png" className="carousel-text" id="carousel-ch-en-text" />
                        <a href=""> <img src="/carousel-about.png" className="carousel-text" id="carousel-about" /> </a>
                        <a href=""> <img src="/carousel-contact.png" className="carousel-text" id="carousel-contact" /> </a>
                    </div>
                </div>
                <div class="carousel-container">
                    <img src="/title3.png" className="carousel-image" />
                    <div>
                        <img src="/title4.png" className="carousel-text" />
                        <img src="/carousel-text.png" className="carousel-text" id="carousel-ch-en-text" />
                        <a href=""> <img src="/carousel-about.png" className="carousel-text" id="carousel-about" /> </a>
                        <a href=""> <img src="/carousel-contact.png" className="carousel-text" id="carousel-contact" /> </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default SHUICarousel;