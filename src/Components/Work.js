import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select your favorite dishes from our menu of original and delicious options.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how often you want to receive your meals, whether weekly or as needed.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Receive your gourmet meals quickly, straight to your door, ready to enjoy.",
    }
  ]


  return <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Work</p>
      <h1 className="primary-heading">How it Works</h1>
      <p className="primary-text">
        Our restaurant's delivery system guarantees the quick delivery of fresh dishes,
        made with ingredients harvested directly from our garden, ensuring exceptional
        quality and flavor in each order.
      </p>
    </div>
    <div className="work-section-bottom">
      {
        workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))
      }
    </div>
  </div>;
};

export default Work
