import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/gb-top-background-t.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
    return <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt=""></img>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className="primary-text">
                    Chefs specializing in healthy foods come together in a gourmet restaurant.
                    That offers healthy and delicious meals for your busy everyday life.
                </p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt=""></img>
            </div>
        </div>
    </div>
};

export default Home;