import React from "react";
import useTheme from "hooks/useTheme";

const IconLineTextCenter = () => {
  const { isDarkMode } = useTheme();
  const c = isDarkMode ? "#F2FFF2" : "#212121";
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9255_4056)">
        <path
          d="M7.13068 16.3992C6.33068 15.9992 5.63068 15.4992 4.93068 14.8992C4.86069 14.8372 4.80615 14.7597 4.77143 14.6729C4.73671 14.5861 4.72275 14.4924 4.73068 14.3992L5.03068 13.7992H6.03068C7.03068 14.9992 8.13068 15.4992 9.73068 15.4992C10.7307 15.4992 11.5307 15.1992 12.0307 14.8992C12.6307 14.4992 12.6307 13.6992 12.6307 13.5992C12.8307 12.3992 11.7307 11.4992 11.7307 11.4992H13.8307C14.1307 12.1992 14.2307 12.6992 14.2307 13.1992V13.9992L13.6307 15.1992C13.0307 15.9992 12.5307 16.1992 12.0307 16.3992C11.281 16.7638 10.4637 16.9681 9.63068 16.9992C8.63068 16.9992 7.83068 16.6992 7.13068 16.3992ZM6.93068 8.99923L6.13068 8.29923C5.73068 7.79923 5.63068 7.49923 5.63068 6.69923C5.63068 5.99923 5.73068 5.39923 6.13068 4.89923C6.53068 4.29923 7.13068 3.89923 7.73068 3.59923C9.23869 2.99296 10.9227 2.99296 12.4307 3.59923C13.0719 3.78545 13.6564 4.12923 14.1307 4.59923L14.4307 5.29923C14.4307 5.39923 14.6307 5.69923 14.2307 5.99923C13.8307 6.19923 13.3307 6.09923 13.2307 5.99923C12.926 5.56579 12.512 5.22076 12.0307 4.99923C11.6307 4.79923 11.0307 4.69923 10.0307 4.59923C9.33068 4.59923 8.63068 4.79923 8.03068 5.19923C7.23068 5.79923 7.03068 5.99923 7.03068 6.69923C7.03068 7.49923 7.53068 7.69923 8.23068 8.19923C8.83068 8.59923 9.33068 8.89923 10.1307 9.19923H6.93068V8.99923Z"
          fill={c}
        />
        <path d="M3.13086 10.5V9H17.1309V10.5H3.13086Z" fill={c} />
      </g>
      <defs>
        <clipPath id="clip0_9255_4056">
          <rect
            width={20}
            height={20}
            fill="white"
            transform="translate(0.130859)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconLineTextCenter;