import React from 'react'
import bannerImage from '../assets/images/banner/banner.jpg';
import mobileBanner from '../assets/images/banner/mobileBanner.jpg';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
  return (
    <>
  <div className="d-none d-md-block" style={{height:"100vh", width:"100vw"}}>
    <img src={bannerImage} style={{width:"100%",height:"100%",objectFit:"cover"}} />
  </div>

  <div className="d-md-none" style={{height:"100vh", width:"100vw"}}>
    <img src={mobileBanner} style={{width:"100%",height:"100%",objectFit:"cover"}} />
  </div>

  <div
  className="position-absolute d-none d-md-flex desktop-btn-position"
  style={{ gap: "50px" }}
>
  <button className=" fs-2 banner-btn-wrap varam-btn" onClick={() => navigate("/varam")}>PADAPPAI</button>
  <button className=" fs-2 banner-btn-wrap ponmar-btn" onClick={() => navigate("/ponmar")}>PONMAR</button>
</div>

<div
  className="position-absolute d-flex d-md-none mobile-btn-position"
  style={{ width:"100%", gap:"12px" }}
><button className="varam-btn fs-4 banner-btn-wrap"onClick={() => navigate("/varam")}>PADAPPAI</button>
  <button className="ponmar-btn fs-4 banner-btn-wrap"onClick={() => navigate("/ponmar")}>PONMAR</button></div>

</>
  );
};

export default Home;
