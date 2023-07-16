import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../Pages/images/slide3.jpg";
import slider_two from "../Pages/images/slide_two.png";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
              
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    marginRight: "5px",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  Bringing Confidence, One Smile at a Time
                </h2>
                
                {/* <div className="social_links"></div>
              </div>
              <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>Flexible Schedule</h2>
              <p>
              Our dedicated dentists provides top-quality dental care while accommodating your busy lifestyle with a flexible schedule.
              </p>
                  
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"> Chat with Doctor</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Best Price Guarantee</h2>
              <p>
              With our best price guarantee, our dentist's office ensures that you receive exceptional dental services at the most competitive prices in the area.
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Read More</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Our Hours</h2>
              <p>
                Monday – Friday : 7:00 am – 5:00 pm 
                
              </p>

              <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;