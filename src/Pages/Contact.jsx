import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Monday',
      c_time: '7:00 AM-5:00 PM',
    },
    {
      id: 2,
      c_day: 'Tuesday',
      c_time: '7:00 AM-5:00 PM',
    },
    {
      id: 3,
      c_day: 'Wednesday',
      c_time: '7:00 AM-5:00 PM',
    },
    {
      id: 4,
      c_day: 'Thursday',
      c_time: '7:00 AM-5:00 PM',
    },
    {
      id: 5,
      c_day: 'Friday',
      c_time: '7:00 AM-5:00 PM',
    },
    {
      id: 6,
      c_day: 'Saturday',
      c_time: 'Closed',
    },
    {
      id: 7,
      c_day: 'Sunday',
      c_time: 'Closed',
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7212998212!2d-95.50656788487815!3d30.330444281779165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473c718ad50423%3A0x7df421359abddd1a!2sWhite%20Oak%20Dental%20Care!5e0!3m2!1sen!2sus!4v1689329088972!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                 Hours
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://goo.gl/maps/Cw7LS87ahNaPet5x6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:9362490824">Call</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
              White Oak Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
