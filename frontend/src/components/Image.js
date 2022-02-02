import React from 'react';
import pic from "../images/image.png";

function Image() {
  return <img src={pic} style={{width:"100%",maxWidth:"450px",height:"auto"}}/>;
}

export default Image;
