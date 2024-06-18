import React from 'react'
import AboutBackground from "../Assets/gb-about-background-t.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading"> About</p>
            <h1 className="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
            At Gourmet Backyard, food is not just a meal but a culinary experience that balances freshness, flavor, and quality. Located in a tranquil garden setting, our restaurant celebrates 
            locally sourced ingredients prepared to provide a balanced and delicious diet. With flexible delivery options,
             you can enjoy this gourmet cuisine in the comfort of your home, ensuring healthy eating without compromising 
             on culinary pleasure.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button"> Learn more</button>
                <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>;
};

export default About
