import { memo, useMemo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import useTheme from "hooks/useTheme";

const BudgetIcon = (props: SvgIconProps) => {
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
                d="M17 20.75H7C5.26991 20.75 3.97362 20.254 3.1098 19.3902C2.24598 18.5264 1.75 17.2301 1.75 15.5V8.5C1.75 6.76991 2.24598 5.47362 3.1098 4.6098C3.97362 3.74598 5.26991 3.25 7 3.25H17C18.7301 3.25 20.0264 3.74598 20.8902 4.6098C21.754 5.47362 22.25 6.76991 22.25 8.5V15.5C22.25 17.2301 21.754 18.5264 20.8902 19.3902C20.0264 20.254 18.7301 20.75 17 20.75ZM7 3.75C5.49651 3.75 4.28256 4.11533 3.44895 4.94895C2.61533 5.78256 2.25 6.99651 2.25 8.5V15.5C2.25 17.0035 2.61533 18.2174 3.44895 19.0511C4.28256 19.8847 5.49651 20.25 7 20.25H17C18.5035 20.25 19.7174 19.8847 20.5511 19.0511C21.3847 18.2174 21.75 17.0035 21.75 15.5V8.5C21.75 6.99651 21.3847 5.78256 20.5511 4.94895C19.7174 4.11533 18.5035 3.75 17 3.75H7Z"
                fill="#3699FF"
                stroke="#3699FF" 
            />
            <path
                d="M12 15.25C10.2061 15.25 8.75 13.7939 8.75 12C8.75 10.2061 10.2061 8.75 12 8.75C13.7939 8.75 15.25 10.2061 15.25 12C15.25 13.7939 13.7939 15.25 12 15.25ZM12 9.25C10.4839 9.25 9.25 10.4839 9.25 12C9.25 13.5161 10.4839 14.75 12 14.75C13.5161 14.75 14.75 13.5161 14.75 12C14.75 10.4839 13.5161 9.25 12 9.25Z"
                fill={fill}
                stroke={fill}
            />
            <path
                d="M3 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H3C5.58 8.25 6.25 7.58 6.25 5V4C6.25 3.59 6.59 3.25 7 3.25C7.41 3.25 7.75 3.59 7.75 4V5C7.75 8.42 6.42 9.75 3 9.75Z"
                fill="#3699FF"
            />
            <path 
                d="M22 9.75H21C17.58 9.75 16.25 8.42 16.25 5V4C16.25 3.59 16.59 3.25 17 3.25C17.41 3.25 17.75 3.59 17.75 4V5C17.75 7.58 18.42 8.25 21 8.25H22C22.41 8.25 22.75 8.59 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z" 
                fill="#3699FF" 
            />
            <path 
                d="M7 20.75C6.59 20.75 6.25 20.41 6.25 20V19C6.25 16.42 5.58 15.75 3 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H3C6.42 14.25 7.75 15.58 7.75 19V20C7.75 20.41 7.41 20.75 7 20.75Z" 
                fill="#3699FF" 
            />
            <path 
                d="M17 20.75C16.59 20.75 16.25 20.41 16.25 20V19C16.25 15.58 17.58 14.25 21 14.25H22C22.41 14.25 22.75 14.59 22.75 15C22.75 15.41 22.41 15.75 22 15.75H21C18.42 15.75 17.75 16.42 17.75 19V20C17.75 20.41 17.41 20.75 17 20.75Z" 
                fill="#3699FF" 
            />
        </SvgIcon>

    );
}

export default memo(BudgetIcon);
