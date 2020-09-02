import React from 'react';
//import Pic from '../../asset/image/dahae_Kim.png';
import { Link } from 'react-router-dom';
const About_Us_Dowon = () => {
  return (
    <div>
      <div>
        {/* <img
          src={Pic}
          alt='Pic'
          style={{
            width: '250px'
          }}
        /> */}
      </div>
      <div>
        <h3>Dowon Kim</h3>
        <h4>Developer</h4>
        <h6>Auburn University 23’ </h6>
        <h6>Computer Science major</h6>

        <h6> dzk0055@auburn.edu </h6>
        <h6> 334) 531-0495</h6>
        <Link to='research/others/dowon'>More Info</Link>
      </div>
    </div>
  );
};

export default About_Us_Dowon;