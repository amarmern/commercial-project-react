import React from "react";

import "./custom-button.styles.scss";
// import { CustomButtonContainer } from "./custom-button.styles";

//Using Styled-Component

// const CustomButton = ({ children, ...props }) => (
//   <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
// );


//Ising SASS

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
