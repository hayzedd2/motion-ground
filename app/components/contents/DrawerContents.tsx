import { IoPlayCircleOutline } from "react-icons/io5";
import { RiEqualizer3Line } from "react-icons/ri";
import { CgCaptions } from "react-icons/cg";

export const DrawerArr = [
  {
    name: "Video Classification",
    color: "rgba(59,130,246,1)",
    content:
      "Automatically categorize and tag video content using advanced AI algorithms.",
    icon: (
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 26H16V24H21V18C21.0008 17.8168 21.052 17.6373 21.1479 17.4812C21.2438 17.3251 21.3807 17.1983 21.5438 17.1147C21.7068 17.0311 21.8897 16.994 22.0724 17.0072C22.2552 17.0205 22.4307 17.0837 22.58 17.19L28 21.06V10.94L22.58 14.81C22.4307 14.9163 22.2552 14.9795 22.0724 14.9928C21.8897 15.006 21.7068 14.9689 21.5438 14.8853C21.3807 14.8017 21.2438 14.6749 21.1479 14.5188C21.052 14.3627 21.0008 14.1832 21 14V8H4V16H2V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V12.06L28.42 8.19C28.5693 8.08373 28.7448 8.02051 28.9276 8.00724C29.1103 7.99396 29.2932 8.03115 29.4562 8.11473C29.6193 8.19832 29.7562 8.32509 29.8521 8.48121C29.948 8.63732 29.9992 8.81678 30 9V23C29.9992 23.1832 29.948 23.3627 29.8521 23.5188C29.7562 23.6749 29.6193 23.8017 29.4562 23.8853C29.2932 23.9689 29.1103 24.006 28.9276 23.9928C28.7448 23.9795 28.5693 23.9163 28.42 23.81L23 19.94V24C23 24.5304 22.7893 25.0391 22.4142 25.4142C22.0391 25.7893 21.5304 26 21 26ZM4.66667 19.3333V17.3333H12.6667V25.3333H10.6667V20.7473L4.08067 27.3333L2.66667 25.9193L9.25267 19.3333H4.66667Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    name: "Text-To-Speech",
    color: "rgba(245,158,11,1)",
    content:
      "Convert texts into natural-sounding speech with customizable voices",
    icon: (
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.0625 3.0625L10 3.0625V2H3.0625C2.78071 2 2.51045 2.11194 2.3112 2.3112C2.11194 2.51046 2 2.78071 2 3.0625V11.5625C2 11.8443 2.11194 12.1145 2.3112 12.3138C2.51045 12.5131 2.78071 12.625 3.0625 12.625H7V11.5625H3.0625L3.0625 3.0625ZM5.78125 9.96875H6.84375V6.25H8.4375V5.1875H4.1875V6.25H5.78125V9.96875ZM12.5 13C13.163 13 13.7989 12.7366 14.2678 12.2678C14.7366 11.7989 15 11.163 15 10.5V5.5C15 4.83696 14.7366 4.20107 14.2678 3.73223C13.7989 3.26339 13.163 3 12.5 3C11.837 3 11.2011 3.26339 10.7322 3.73223C10.2634 4.20107 10 4.83696 10 5.5V10.5C10 11.163 10.2634 11.7989 10.7322 12.2678C11.2011 12.7366 11.837 13 12.5 13ZM11 5.5C11 5.10218 11.158 4.72064 11.4393 4.43934C11.7206 4.15804 12.1022 4 12.5 4C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V10.5C14 10.8978 13.842 11.2794 13.5607 11.5607C13.2794 11.842 12.8978 12 12.5 12C12.1022 12 11.7206 11.842 11.4393 11.5607C11.158 11.2794 11 10.8978 11 10.5V5.5ZM16 9V10.5C16 11.4283 15.6313 12.3185 14.9749 12.9749C14.3185 13.6313 13.4283 14 12.5 14C11.5717 14 10.6815 13.6313 10.0251 12.9749C9.36875 12.3185 9 11.4283 9 10.5V9H8V10.5C8.00053 11.6065 8.40873 12.6741 9.14661 13.4987C9.88449 14.3232 10.9003 14.8471 12 14.97V16H10V17H15V16H13V14.97C14.0997 14.8471 15.1155 14.3232 15.8534 13.4987C16.5913 12.6741 16.9995 11.6065 17 10.5V9H16Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    name: "Image-to-3D",
    color: "rgba(16,185,129,1)",
    content:
      "Transform 2D images into detailed 3D models for immersive experiences.   ",
    icon: (
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        fill="currentColor"
        focusable="false"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></path>
        <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor"></path>
        <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor"></path>
        <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor"></path>
        <path
          d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
];
