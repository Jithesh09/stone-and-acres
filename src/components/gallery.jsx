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

      <style jsx>{`
        .amenities-pg-sec {
            padding: 80px 0;
            // background: #f8f8f8;
        }

        .prop-ament-wrap {
            position: relative;
        }

        .heading {
            text-align: center;
            margin-bottom: 50px;
        }

        .heading h3 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            font-weight: 500;
            color: #2d2d5f;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0;
        }

        /* Slick Carousel Custom Styles */
        .prop-ament-block {
            position: relative;
            margin-bottom: 50px;
        }

        .prop-ament-block .slick-slider {
            position: relative;
        }

        .proj-featured-card {
            position: relative;
            height: 350px;
            margin: 0 10px;
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.5s ease;
            transform: scale(0.85);
            opacity: 0.8;
        }

        .slick-center .proj-featured-card {
            height: 450px;
            transform: scale(1);
            opacity: 1;
            z-index: 10;
        }

        .proj-featured-card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s ease;
        }

        .proj-featured-card:hover .proj-featured-card-bg {
            transform: scale(1.05);
        }

        .proj-featured-card figure {
            position: relative;
            height: 100%;
            margin: 0;
        }

        .proj-featured-card figure a {
            display: block;
            height: 100%;
            text-decoration: none;
        }

        .proj-featured-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            padding: 30px 20px 20px;
            color: white;
            transition: all 0.5s ease;
        }

        .slick-center .proj-featured-content {
            padding: 40px 25px 25px;
        }

        .proj-featured-content p {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.5s ease;
        }

        .slick-center .proj-featured-content p {
            font-size: 1.3rem;
        }

        /* Custom Arrow Styles */
        .slick-prev,
        .slick-next {
            width: 50px !important;
            height: 50px !important;
            z-index: 10;
            background: rgba(255, 255, 255, 0.9) !important;
            border-radius: 50% !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            display: flex !important;
            justify-content: center;
            align-items: center;
        }

        .slick-prev:hover,
        .slick-next:hover {
            background: #2d2d5f !important;
        }

        .slick-prev:before,
        .slick-next:before {
            color: #2d2d5f !important;
            font-size: 35px !important;
            opacity: 1 !important;
            font-family: inherit;
        }

        .slick-prev:hover:before,
        .slick-next:hover:before {
            color: white !important;
        }

        .slick-prev {
            left: 15px !important;
        }

        .slick-next {
            right: 0px !important;
        }

        /* Slick Dots Styles */
        .slick-dots {
            bottom: -40px;
        }

        .slick-dots li button:before {
            font-size: 12px;
            color: #2d2d5f;
            opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
            opacity: 1;
            color: #2d2d5f;
        }

        /* Mobile Styles - Force 1 slide */
        @media (max-width: 768px) {
            .proj-featured-card {
                height: 300px !important;
                margin: 0 5px !important;
                transform: scale(1) !important;
                opacity: 1 !important;
            }

            .slick-center .proj-featured-card {
                height: 300px !important;
                transform: scale(1) !important;
            }

            /* Make non-center slides smaller on mobile */
            .slick-slide:not(.slick-center) .proj-featured-card {
                transform: scale(0.9) !important;
                opacity: 0.7 !important;
            }

            .slick-prev,
            .slick-next {
                width: 40px !important;
                height: 40px !important;
            }

            .slick-prev {
                left: -5px !important;
            }

            .slick-next {
                right: -5px !important;
            }
        }

        @media (max-width: 576px) {
            .heading h3 {
                font-size: 2rem;
            }

            .proj-featured-card {
                height: 250px !important;
            }

            .slick-center .proj-featured-card {
                height: 250px !important;
            }

            .proj-featured-content p {
                font-size: 1rem;
            }

            .slick-center .proj-featured-content p {
                font-size: 1.1rem;
            }
        }

        /* Fancybox compatibility */
        [data-fancybox] {
            cursor: pointer;
        }

        .slick-slider .slick-track,
        .slick-slider .slick-list {
            transform: translate3d(0, 0, 0);
            display: flex;
            justify-content: center;
            align-items: center;
        }
      `}</style>
    </section>
    
    </>
  );
};

export default GallerySection;