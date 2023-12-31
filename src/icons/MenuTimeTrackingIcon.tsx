import { memo, useMemo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import useTheme from "hooks/useTheme";

const MenuTimeTrackingIcon = (props: SvgIconProps) => {
  const { isDarkMode } = useTheme();

  const fill = useMemo(
    () => (isDarkMode ? "#FFFFFF" : "#212121"),
    [isDarkMode],
  );

  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      fontSize="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22.25C7.03614 22.25 3 18.2139 3 13.25C3 8.28614 7.03614 4.25 12 4.25C16.9639 4.25 21 8.28614 21 13.25C21 18.2139 16.9639 22.25 12 22.25ZM12 4.75C7.31386 4.75 3.5 8.56386 3.5 13.25C3.5 17.9361 7.31386 21.75 12 21.75C16.6861 21.75 20.5 17.9361 20.5 13.25C20.5 8.56386 16.6861 4.75 12 4.75Z"
        fill={fill}
        stroke="#3699FF"
      />
      <path
        d="M12 13.25C11.8661 13.25 11.75 13.1339 11.75 13V8C11.75 7.86614 11.8661 7.75 12 7.75C12.1339 7.75 12.25 7.86614 12.25 8V13C12.25 13.1339 12.1339 13.25 12 13.25Z"
        fill={fill}
        stroke="#3699FF"
      />
      <path
        d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default memo(MenuTimeTrackingIcon);
