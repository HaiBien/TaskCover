import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const LinkSquareIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      fontSize="inherit"
      strokeWidth={1.5}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.18009 16.0204C7.42009 15.9504 6.6701 15.6004 6.0901 14.9904C4.7701 13.6004 4.7701 11.3204 6.0901 9.93038L8.2801 7.63039C9.6001 6.24039 11.7701 6.24039 13.1001 7.63039C14.4201 9.02039 14.4201 11.3004 13.1001 12.6904L12.0101 13.8404"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.8202 7.98047C16.5802 8.05047 17.3302 8.40047 17.9102 9.01047C19.2302 10.4005 19.2302 12.6805 17.9102 14.0705L15.7202 16.3705C14.4002 17.7605 12.2302 17.7605 10.9002 16.3705C9.58016 14.9805 9.58016 12.7005 10.9002 11.3105L11.9902 10.1605"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

export default memo(LinkSquareIcon);
