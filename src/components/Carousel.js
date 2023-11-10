import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Create this file for custom styling


const Carousell = () => {
    const [images,setImages]=useState([]);
    useEffect(()=>{
        setImages(['https://drive.google.com/uc?id=10JyiNmf4kaiiXat1-NWUGY1coj6gFm5Y','https://drive.google.com/uc?export=view&id=1hajmGBlx_jLhEy05mJtumjLM-60QZvM8','https://drive.google.com/uc?id=11bfmWxM0OGC1MYsqrFopr5is1pRjjG0f','https://drive.google.com/uc?id=1vU6mFOQ7sNH0x6vP2-p2cFs7VYtzTEzC'])
    },[])

  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={1} interval={2000}>
          <img
            src={image}
            alt={`Slide ${1}`}
            className="carousel-item img-fluid d-block h-45"
          />
          <Carousel.Caption>
            <button className="btn btn-primary">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousell;