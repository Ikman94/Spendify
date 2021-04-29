import React, { useEffect, useRef, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../img/Group1.png';
import image2 from '../img/Group2.png';
import image3 from '../img/Group3.png';
import image4 from '../img/Group4.png';
import image5 from '../img/IMG_1979.JPG';

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#00C49F", "#FFBB28"];
const slideImages = [
    // image1,
    // image2,
    // image3,

    // '../img/Group2.png'
    {
        img: image1,
        description: "Budget, Expense and Track",
        download: "Download Now",
        button1: "Get it on Google Play",
        button2: "Download on the app store"
    },
    {
        img: image2,
        description: "You deserve financial freedom",
        download: "Download Now",
        button1: "Get it on Google Play",
        button2: "Download on the app store"
    },
    {
        img: image3,
        description: "Self financial education with MySpendify",
        download: "Download Now",
        button1: "Get it on Google Play",
        button2: "Download on the app store"
    },
    {
        img: image4,
        description: "A penny's worth",
        download: "Download Now",
        button1: "Get it on Google Play",
        button2: "Download on the app store"
    },
    {
        img: image3,
        description: "Be the boss of your money",
        download: "Download Now",
        button1: "Get it on Google Play",
        button2: "Download on the app store"
    },

]
const delay = 2500;
export default function Slider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 110}%, 0, 0)` }}
            >
                {slideImages.map((slide, index) => (
                    <div
                        className="slide"
                        key={index}
                        // style={{ backgroundColor }}
                    >
                        <img src={slide.img}/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}
