import React, { useState } from "react";
import Image1 from "../assets/images/amenities/200-X-170---01.jpg";
import Image2 from "../assets/images/amenities/200-X-350-01.jpg";
import Image3 from "../assets/images/amenities/200-X-170---02.jpg";
import Image4 from "../assets/images/amenities/200-X-170---03.jpg";
import Image5 from "../assets/images/amenities/200-X-170---04.jpg";
import Image6 from "../assets/images/amenities/200-X-170---05.jpg";
import Image7 from "../assets/images/amenities/200-X-170---06.jpg";
import Image8 from "../assets/images/amenities/200-X-170---07.jpg";
import Image9 from "../assets/images/amenities/200-X-170---08.jpg";
import Image10 from "../assets/images/amenities/200-X-350.jpg";
import Image11 from "../assets/images/amenities/280-X-170---01.jpg";
import Image12 from "../assets/images/amenities/280-X-170---02.jpg";
import Image13 from "../assets/images/amenities/280-X-350---01.jpg";
import Image14 from "../assets/images/amenities/280-X-350---02.jpg";

const Amenities = () => {
  const [activeItem, setActiveItem] = useState(null);

  const categories = [
    {
      type: "big",
      items: [
        {
          name: "Underground Cable Feeder",
          url: "/jewellery",
          image: Image2,
          bgColor: "black",
          height: "66",
          review: {
            content: "I visited Lille by Chalani, and I must say, it was an absolute delight!",
            author: "Srinivas Prasad",
            rating: 5,
          },
        },
        {
          name: "Stone & Acres Layout Design",
          url: "/jewellery",
          image: Image1,
          bgColor: "black",
          height: "33",
          review: {
            content: "Firstly me n my husband feel extremely pleased!",
            author: "Pavigar Rajee",
            rating: 4,
          },
        },
      ],
    },
    {
      type: "medium",
      items: [
        {
          name: "Street Scene",
          url: "/jewellery",
          image: Image3,
          bgColor: "black",
          height: "33",
          review: {
            content: "The collections were nice, the staff were also super friendly!",
            author: "Bhargavi Ganesh",
            rating: 5,
          },
        },
        {
          name: "Home Theater Room",
          url: "/jewellery",
          image: Image4,
          bgColor: "black",
          height: "33",
          review: {
            content: "We are happy about our purchase. Staffs are extremely polite and friendly!",
            author: "Angella Benedict",
            rating: 4,
          },
        },
        {
          name: "Gym Interior",
          url: "/jewellery",
          image: Image5,
          bgColor: "black",
          height: "33",
          review: {
            content: "The collection of jewellery was very unique modern and elegant.",
            author: "Madhumathi A",
            rating: 5,
          },
        },
      ],
    },
    {
      type: "medium",
      items: [
        {
          name: "Modern Office Workspace",
          url: "/jewellery",
          image: Image10,
          bgColor: "black",
          height: "66",
          review: {
            content: "Visited the store during visit to the mall. I initially was walking away after glancing through the display.",
            author: "Haritha Katragadda",
            rating: 5,
          },
        },
        {
          name: "Library",
          url: "/jewellery",
          image: Image6,
          bgColor: "black",
          height: "33",
          review: {
            content: "The store has weight 18k and 22k collections.",
            author: "Elakiya kumar",
            rating: 4,
          },
        },
      ],
    },
    {
      type: "small",
      items: [
        {
          name: "Cricket net practice area",
          url: "/jewellery",
          image: Image11,
          bgColor: "black",
          height: "33",
          review: {
            content: "Unique and trendy collections.",
            author: "Sowmi",
            rating: 4,
          },
        },
        {
          name: "Playground structure",
          url: "/jewellery",
          image: Image12,
          bgColor: "black",
          height: "66",
          review: {
            content: "Amazing trendy collection. Had tough time to choose one among the lovely collection.",
            author: "Radhai Sridharan",
            rating: 5,
          },
        },
      ],
    },
    {
      type: "medium",
      items: [
        {
          name: "Multi Hall",
          url: "/jewellery",
          image: Image7,
          bgColor: "black",
          height: "33",
          review: {
            content: "I was visited very first time , I couldn’t take collection.",
            author: "Ragavi M",
            rating: 4,
          },
        },
        {
          name: "Snooker room.",
          url: "/jewellery",
          image: Image8,
          bgColor: "black",
          height: "33",
          review: {
            content: "Very unique designs with less weight and good hospitality.",
            author: "Tanushree Grandhe",
            rating: 5,
          },
        },
        {
          name: "Indoor pool",
          url: "/jewellery",
          image: Image9,
          bgColor: "black",
          height: "33",
          review: {
            content: "Very much impressed by their collections..",
            author: "Kanimozhi Ashokvijay",
            rating: 5,
          },
        },
      ],
    },
    {
      type: "big",
      items: [
        {
          name: "Carrom room",
          url: "/jewellery",
          image: Image14,
          bgColor: "black",
          height: "66",
          review: {
            content: "Beautiful light weight collection and unique designs.",
            author: "uchiha pranith",
            rating: 5,
          },
        },
        {
          name: "Table tennis room",
          url: "/jewellery",
          image: Image13,
          bgColor: "black",
          height: "33",
          review: {
            content: "Cute collections for kids.",
            author: "M Mathuvanthe",
            rating: 4,
          },
        },
      ],
    },
  ];

  const handleItemClick = (colIndex, itemIndex) => {
    debugger
    const itemKey = `${colIndex}-${itemIndex}`;
    setActiveItem(activeItem === itemKey ? null : itemKey);
  };

  const renderStars = (rating) => (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );

  return (
    <section className="shop-by-category-container px-2 px-md-5" id="amenities">
      <div className="row">
        <h2 className="section-title-normal text-center" data-aos="fade-left" data-aos-duration="1000">Amenities</h2>
      </div>
      <div id="shopByCategorySlider" className="category-slider" data-aos="fade-up" data-aos-duration="1000">
        {categories.map((column, colIndex) => (
          <div key={colIndex} className={`category-card-col box-w-${column.type}`}>
            {column.items.map((item, itemIndex) => {
              const itemKey = `${colIndex}-${itemIndex}`;
              const isActive = activeItem === itemKey;

              return (
                <div
                  key={itemIndex}
                  className={`category-card-container ${isActive ? "active" : ""}`}
                  onClick={() => handleItemClick(colIndex, itemIndex)}
                >
                  <div className={`category-card card-h-${item.height}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="images-fluid w-100 h-100 object-fit-cover"
                    />
                    <span className={`category-name background-${item.bgColor}`}>{item.name}</span>
                    {item.review && isActive && (
                      <div className="review-overlay">
                        <div className="review-content">
                          <p className="review-text">{item.review.content}</p>
                          <p className="review-author">- {item.review.author}</p>
                          {renderStars(item.review.rating)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
