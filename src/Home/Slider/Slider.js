import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../images/img (01).jpg'
import img2 from '../../images/img (02).jpg'
import img3 from '../../images/img (03).jpg'

const Slider = () => {
    return (
        <div>
        <Carousel showThumbs={false} swipeable={true} >
                <div>
                    <img src={img1} />
                    <button className="legend">H lskdjf;skj;dflkj;dklfi</button>
                    
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
    );
};

export default Slider;