import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const KeyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      fontSize="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.17989 22.7499C6.07989 22.7499 5.96989 22.7399 5.87989 22.7299L3.70989 22.4299C2.66989 22.2899 1.72989 21.3599 1.56989 20.2999L1.26989 18.1099C1.16989 17.4099 1.46989 16.4999 1.96989 15.9899L6.35989 11.5999C5.64989 8.75992 6.46989 5.75992 8.55989 3.68992C11.7999 0.459923 17.0699 0.449923 20.3199 3.68992C21.8899 5.25992 22.7499 7.34992 22.7499 9.56992C22.7499 11.7899 21.8899 13.8799 20.3199 15.4499C18.2199 17.5299 15.2299 18.3499 12.4099 17.6299L8.00989 22.0199C7.58989 22.4599 6.83989 22.7499 6.17989 22.7499ZM14.4299 2.75992C12.6799 2.75992 10.9399 3.41992 9.60989 4.74992C7.80989 6.53992 7.15989 9.15992 7.90989 11.5999C7.98989 11.8699 7.91989 12.1499 7.71989 12.3499L3.01989 17.0499C2.84989 17.2199 2.70989 17.6599 2.73989 17.8899L3.03989 20.0799C3.09989 20.4599 3.50989 20.8899 3.88989 20.9399L6.06989 21.2399C6.30989 21.2799 6.74989 21.1399 6.91989 20.9699L11.6399 16.2599C11.8399 16.0599 12.1299 15.9999 12.3899 16.0799C14.7999 16.8399 17.4299 16.1899 19.2299 14.3899C20.5099 13.1099 21.2199 11.3899 21.2199 9.56992C21.2199 7.73992 20.5099 6.02992 19.2299 4.74992C17.9299 3.42992 16.1799 2.75992 14.4299 2.75992Z"
        fill="currentColor"
      />
      <path
        d="M9.19008 20.5402C9.00008 20.5402 8.81008 20.4702 8.66008 20.3202L6.36008 18.0202C6.07008 17.7302 6.07008 17.2502 6.36008 16.9602C6.65008 16.6702 7.13008 16.6702 7.42008 16.9602L9.72008 19.2602C10.0101 19.5502 10.0101 20.0302 9.72008 20.3202C9.57008 20.4702 9.38008 20.5402 9.19008 20.5402Z"
        fill="currentColor"
      />
      <path
        d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(KeyIcon);