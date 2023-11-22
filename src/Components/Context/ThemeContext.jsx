import React, { createContext, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [isBlue, setIsBlue] = useState(() => {
    const storedValue = localStorage.getItem("isBlue");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleTheme = () => {
    setIsBlue((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isBlue", JSON.stringify(newMode));
      return newMode;
    });
  };

  const bodyStyle = {
    backgroundColor: isBlue ? 'blue' : '#FFF',
    color: isBlue ? '#FFF' : 'blue',
  };

  useEffect(() => {
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;
  }, [bodyStyle]);

  return (
    <TemaContext.Provider value={{ isBlue, toggleTheme }}>
      <div style={bodyStyle}>
        {children}
      </div>
    </TemaContext.Provider>
  );
};