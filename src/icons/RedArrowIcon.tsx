import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const RedArrowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 16 16"
      fill="none"
      fontSize="inherit"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.7933 1.33398H5.20665C2.77998 1.33398 1.33331 2.78065 1.33331 5.20732V10.7873C1.33331 13.2207 2.77998 14.6673 5.20665 14.6673H10.7866C13.2133 14.6673 14.66 13.2207 14.66 10.794V5.20732C14.6666 2.78065 13.22 1.33398 10.7933 1.33398ZM9.19331 10.0007C9.38665 10.194 9.38665 10.514 9.19331 10.7073C9.09331 10.8073 8.96665 10.854 8.83998 10.854C8.71331 10.854 8.58665 10.8073 8.48665 10.7073L6.13331 8.35398C5.93998 8.16065 5.93998 7.84065 6.13331 7.64732L8.48665 5.29398C8.67998 5.10065 8.99998 5.10065 9.19331 5.29398C9.38665 5.48732 9.38665 5.80732 9.19331 6.00065L7.19331 8.00065L9.19331 10.0007Z"
        fill="#F64E60"
      />
    </SvgIcon>
  );
};

export default RedArrowIcon;
