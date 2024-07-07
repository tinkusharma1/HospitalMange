import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>

        <p>The project focuses on automating routine tasks, reducing paperwork, and minimizing the chances of human error, which are critical in a hospital environment. A well-designed hospital management system ensures that patient records are easily accessible, secure, and up-to-date, facilitating better decision-making by healthcare professionals. Moreover, it improves the patient experience by reducing wait times, enabling seamless communication between departments, and providing timely access to medical history and treatment plans.</p>

        <p>In addition, the project reflects a commitment to leveraging technology to improve healthcare delivery. It incorporates modern technologies and best practices in software development, ensuring scalability, reliability, and user-friendliness. Ultimately, the hospital management project aims to create a more efficient healthcare system that prioritizes patient well-being, supports healthcare professionals, and contributes to the overall improvement of healthcare services.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
