import React from "react";
import profile_one_img from "./images/Profile_images/ethan.PNG";
import profile_two_img from "./images/Profile_images/lydia.PNG";
import "./Profile.css";
const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: profile_one_img,
      name: "Dr. Ethan Montgomery",
      occupation: "Dental Surgeon BDS",
      description:
        "Dr. Ethan Montgomery, a dedicated dentist with 15+ years of experience, specializes in cosmetic dentistry. With advanced training and a passion for creating beautiful smiles, he is highly skilled in his field.",
    },
    {
      id: 2,
      photo: profile_two_img,
      name: "Dr. Lydia Bennett",
      occupation: "Dental Surgeon BDS",
      description:
        "Dr. Lydia Bennett is a compassionate and knowledgeable dentist committed to helping her patients achieve optimal oral health. She creates a welcoming environment, making patients feel at ease during their dental visits.",
    },
  ];
  return (
    <>
      <div className="profile_section_container">
        <h2>
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Meet Our Team
        </h2>
        <div className="p_info_container">
          {your_profile_details.map((e, index) => (
            <div className="profile_details" key={index}>
              <img src={e.photo} alt="profile_image" id="your_profile_image" />
              <div className="profile_info">
                <h3 className="profile_name">{e.name}</h3>
                <h4 className="profile_occupation">{e.occupation}</h4>
              </div>
              <p className="profile_description">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
