import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/images/gallery/400-X-400-01.jpg";
import Image2 from "../assets/images/gallery/400-X-400-02.jpg";
import Image3 from "../assets/images/gallery/400-X-400-03.jpg";
import Image4 from "../assets/images/gallery/400-X-400-04.jpg";
import Image5 from "../assets/images/gallery/400-X-400-05.jpg";
import Image6 from "../assets/images/gallery/400-X-400-06.jpg";
import Image7 from "../assets/images/gallery/400-X-400-07.jpg";
import Image8 from "../assets/images/gallery/400-X-400-08.jpg";
import Image9 from "../assets/images/gallery/400-X-400-09.jpg";
import Image10 from "../assets/images/gallery/400-X-400-10.jpg";
import Image11 from "../assets/images/gallery/400-X-400-11.jpg";
import Image12 from "../assets/images/gallery/400-X-400-12.jpg";

const GallerySection = () => {
  // Amenities data
  const amenities = [
    {
      image: Image1,
      title: "CRICKET NETS"
    },
    {
      image: Image2,
      title: "INFINITY WALKWAY"
    },
    {
      image: Image3,
      title: "KIDS PLAY AREA"
    },
    {
      image: Image4,
      title: "MULTIPURPOSE COURT"
    },
    {
      image: Image5,
      title: "OUTDOOR GYM"
    },
    {
      image: Image6,
      title: "OUTDOOR GYM"
    },
    {
      image: Image7,
      title: "OUTDOOR GYM"
    },
    {
      image: Image8,
      title: "OUTDOOR GYM"
    },
    {
      image: Image9,
      title: "OUTDOOR GYM"
    },
    {
      image: Image10,
      title: "OUTDOOR GYM"
    },
    {
      image: Image11,
      title: "OUTDOOR GYM"
    },
    {
      image: Image12,
      title: "OUTDOOR GYM"
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px"
        }
      }
    ]
  };
  const sliderSettingslg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px"
        }
      }
    ]
  };
  // Custom Arrow Components
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", background: "rgba(255, 255, 255, 0.9)", borderRadius: "50%", width: "50px", height: "50px" }}
        onClick={onClick}
      >
        &gt;
      </button>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", background: "rgba(255, 255, 255, 0.9)", borderRadius: "50%", width: "50px", height: "50px" }}
        onClick={onClick}
      >
        &lt;
      </button>
    );
  };

  return (
    <>
    <section className="amenities-pg-sec" id="gallery">
      <div className="container">
        <div className="prop-ament-wrap d-block d-md-none">
          <div className="heading">
            <h3>Gallery</h3>
          </div>

          <div className="prop-ament-block">
            <Slider {...sliderSettings} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />}>
              {amenities.map((amenity, index) => (
                <div key={index} className="proj-featured-card item">
                  <figure>
                    <a 
                      // href={amenity.largeImage} 
                      data-fancybox="amenities-g-square"
                      tabIndex={0}
                    >
                      <img 
                        src={amenity.image} 
                        className="img-responsive" 
                        loading="lazy" 
                        alt={amenity.title}
                        style={{ display: 'none' }}
                      />
                    </a>
                  </figure>
                  <div 
                    className="proj-featured-card-bg"
                    style={{
                      backgroundImage: `url('${amenity.image}')`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover'
                    }}
                  ></div>
                  {/* <div className="proj-featured-content">
                    <p>{amenity.title}</p>
                  </div> */}
                </div>
              ))}
            </Slider>
          </div>

          <div className="amenities-wrap pro_single_amenities" id="amenities-section">
            <div className="amenities-block">
              {/* Additional amenities content can go here */}
            </div>
          </div>
        </div>

        <div className="prop-ament-wrap d-none d-md-block">
          <div className="heading">
            <h3>Gallery</h3>
          </div>

          <div className="prop-ament-block">
            <Slider {...sliderSettingslg} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />}>
              {amenities.map((amenity, index) => (
                <div key={index} className="proj-featured-card item">
                  <figure>
                    <a 
                      // href={amenity.largeImage} 
                      data-fancybox="amenities-g-square"
                      tabIndex={0}
                    >
                      <img 
                        src={amenity.image} 
                        className="img-responsive" 
                        loading="lazy" 
                        alt={amenity.title}
                        style={{ display: 'none' }}
                      />
                    </a>
                  </figure>
                  <div 
                    className="proj-featured-card-bg"
                    style={{
                      backgroundImage: `url('${amenity.image}')`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    }}
                  ></div>
                  {/* <div className="proj-featured-content">
                    <p>{amenity.title}</p>
                  </div> */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default GallerySection;