import React from 'react';
import '../index.css';
import Lottie from 'react-lottie';
import animationData from '../lotties/share.json';


export default function App() {
  const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={100}
        width={160}
      />
    </div>
  );
} 