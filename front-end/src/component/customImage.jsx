import React from 'react';
import '../style/home.scss';
const CustomImage = ({imgSrc, pt}) =>{
  
  return (
    <div className="custom-image" style={{paddingTop: pt}}>
      <img src ={imgSrc} alt= "custom"></img>
  </div>
  );
}

export default CustomImage;