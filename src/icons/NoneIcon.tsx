import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const NoneIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 20C15.5137 20 20 15.5141 20 10C20 7.32667 18.9604 4.8151 17.0726 2.92745C15.1845 1.03964 12.6733 0 10 0C4.48589 0 0 4.48589 0 10C0 12.6733 1.03958 15.1849 2.92745 17.0726C4.81505 18.9604 7.32667 20 10 20ZM10 18.3333C8.0526 18.3333 6.20833 17.6714 4.72411 16.4543L16.4543 4.72411C17.6713 6.20833 18.3333 8.0526 18.3333 10C18.3333 14.5949 14.5949 18.3333 10 18.3333ZM10 1.66667C11.947 1.66667 13.7917 2.32865 15.2755 3.54573L3.54568 15.2759C2.3287 13.7917 1.66667 11.9474 1.66667 10C1.66667 5.40505 5.40505 1.66667 10 1.66667Z"
        fill="#666666"
      />
    </SvgIcon>
  );
};

export default NoneIcon;