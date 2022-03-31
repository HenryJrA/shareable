import React from 'react';
import '../index.css';
import Lottie from 'react-lottie';
import animationData from '../lotties/lshare.json';


export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  );
}