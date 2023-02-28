import React, { useState, useEffect } from 'react';

const MovingSquare = () => {
  const [position, setPosition] = useState({
    x: Math.floor(Math.random()*200 ),
    y: Math.floor(Math.random()*200),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition({
        x: Math.floor(Math.random()*200 ),
        y: Math.floor(Math.random()*200 ),
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '200px',
        height: '200px',
        border: '1px solid black',
        marginBottom: '100px',
        marginTop:'30px',
        marginLeft:'100px',
      }}
    />
  );
};

export default MovingSquare;
