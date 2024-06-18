import React from 'react'
import ProfilePic from "../Assets/camila-afonso-t.png"
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading"> Testimonial</p>
                <h1 className="primary-heading">
                    What they Are Saying
                </h1>
                <p className="primary-text">
                    Here are some comments about Gourmet Backyard. Customers love the combination of fresh and delicious
                    dishes with the convenience of delivery. You can choose how often you'dlike
                    to receive these gourmet meals, enjoying a unique dining experience at home.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Gourmet Backyard is a charming outdoor restaurant offering fresh and delicious dishes prepared
                    with garden-fresh ingredients. With flexible delivery options, you can enjoy this unique dining
                    experience as often as you like, right in the comfort of your home.
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Camila Afonso</h2>
            </div>
        </div>
    );
};

export default Testimonial
