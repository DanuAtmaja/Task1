import React from 'react';
import Header from "../Header/Index.jsx";
import { data } from "../Data/Index.js";
import ServiceItem from "./ServiceItem.jsx";

const Home = () => {
  return (
    <>
      <Header headerLink={data.headerLink} />
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>We <span>Create Digital Experiences</span> that matter</h1>
          <button className="btn btn-findout">Find Out More</button>
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
            <button className="btn btn-view">View All</button>
          </div>
        </div>
      </section>
      <section className="blog" id="blog">
        <h2>Blog</h2>
      </section>
    </>
  );
};

export default Home;
