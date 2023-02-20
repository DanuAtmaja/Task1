import React, {useState} from 'react';
import { data } from "../data/Index.js";
import Header from "../shared/component/header/Index.jsx";
import ServiceItem from "./ServiceItem.jsx";
import Footer from "../shared/component/footer/Index.jsx";

const Home = () => {
  return (
    <>
      <Header headerLink={data.headerLink} />
      <section className="hero" id="hero">
          <div className="carousel">
            <ul className="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked/>
              <li className="slide-container">
                <div className="slide-image">
                  <img
                    src="/images/hero.png" />
                  <div className="carousel-container">
                    <h1>We <span>Create Digital Experiences</span> that matter</h1>
                    <button className="btn btn-findout">Find Out More</button>
                  </div>
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-3" className="prev-slide">
                    <img src="/icons/icon-arrow-l-large-rev.svg" alt=""/>
                  </label>
                  <label htmlFor="img-2" className="next-slide">
                    <img src="/icons/icon-arrow-r-large-rev.svg" alt=""/>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2"/>
              <li className="slide-container">
                <div className="slide-image">
                  <img
                    src="/images/hero.png" />
                  <div className="carousel-container">
                    <h1>We <span>Create Digital Experiences</span> that matter</h1>
                    <button className="btn btn-findout">Find Out More</button>
                  </div>
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-1" className="prev-slide">
                    <img src="/icons/icon-arrow-l-large-rev.svg" alt=""/>
                  </label>
                  <label htmlFor="img-3" className="next-slide">
                    <img src="/icons/icon-arrow-r-large-rev.svg" alt=""/>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3"/>
              <li className="slide-container">
                <div className="slide-image">
                  <img src="/images/hero.png" />
                  <div className="carousel-container">
                    <h1>We <span>Create Digital Experiences</span> that matter</h1>
                    <button className="btn btn-findout">Find Out More</button>
                  </div>
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-2" className="prev-slide">
                    <img src="/icons/icon-arrow-l-large-rev.svg" alt=""/>
                  </label>
                  <label htmlFor="img-1" className="next-slide">
                    <img src="/icons/icon-arrow-r-large-rev.svg" alt=""/>
                  </label>
                </div>
              </li>
              <div className="carousel-dots">
                <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
              </div>
            </ul>
          </div>
      </section>
      <section className="about" id="about">
        <p>Get Started is proud to have been creating digital experiences for 16 years. With a portfolio that includes some of the biggest names in Australian government, retail and the corporate sector, our knowledge and understanding of the digital world is well recognised.</p>
      </section>
      <section className="service">
        <div className="service-content">
          <h2>Services</h2>
          <div className="service-content--collection">
            {data.services.map((item, index) => {
              return (
                <ServiceItem service={item} key={index}/>
              );
            })}
          </div>
          <div className="container">
            <button className="btn btn-view" type="button">View All</button>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-container">
          <h2>Blog</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
