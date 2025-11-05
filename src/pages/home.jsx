import React from 'react'
import bannerImage from '../assets/images/banner/banner.jpg';
import mobileBanner from '../assets/images/banner/mobileBanner.jpg';


const Home = () => {
  return (
    <>
  <div className="d-none d-md-block" style={{height:"100vh", width:"100vw"}}>
    <img src={bannerImage} style={{width:"100%",height:"100%",objectFit:"cover"}} />
  </div>

  <div className="d-md-none" style={{height:"100vh", width:"100vw"}}>
    <img src={mobileBanner} style={{width:"100%",height:"100%",objectFit:"cover"}} />
  </div>
</>
  );
};

export default Home;
