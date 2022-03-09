import React from 'react';

const Button = ({
   children,
   buttonStyle,
   onClick = null,
   type = 'button',
   btnDisabled = false,
}) => {
    
   const defaultStyle = `flex justify-center items-center gap-2 px-4 py-2 bg-white rounded-lg my-4 mx-4`;
   const checkStyle = buttonStyle ? buttonStyle : defaultStyle;

   return (
      <button
         className={btnDisabled ? buttonStyle : checkStyle}
         type={type}
         disabled={btnDisabled}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
