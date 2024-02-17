import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export default function MeIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M15.9993 15.1795C14.8993 15.1795 13.9577 14.7878 13.1743 14.0045C12.391 13.2211 11.9993 12.2795 11.9993 11.1795C11.9993 10.0795 12.391 9.13778 13.1743 8.35444C13.9577 7.57111 14.8993 7.17944 15.9993 7.17944C17.0993 7.17944 18.041 7.57111 18.8243 8.35444C19.6077 9.13778 19.9993 10.0795 19.9993 11.1795C19.9993 12.2795 19.6077 13.2211 18.8243 14.0045C18.041 14.7878 17.0993 15.1795 15.9993 15.1795ZM6.66602 24.8205V22.6256C6.66602 22.0752 6.82627 21.5602 7.14678 21.0807C7.46729 20.6013 7.89849 20.229 8.44038 19.9641C9.69849 19.3607 10.9575 18.9081 12.2173 18.6064C13.4771 18.3047 14.7378 18.1538 15.9993 18.1538C17.2609 18.1538 18.5216 18.3047 19.7814 18.6064C21.0412 18.9081 22.3002 19.3607 23.5583 19.9641C24.1002 20.229 24.5314 20.6013 24.8519 21.0807C25.1724 21.5602 25.3327 22.0752 25.3327 22.6256V24.8205H6.66602ZM7.99935 23.4871H23.9993V22.6256C23.9993 22.3299 23.904 22.0521 23.7134 21.7923C23.5228 21.5325 23.2592 21.3128 22.9224 21.1333C21.825 20.6017 20.6935 20.1944 19.5279 19.9115C18.3623 19.6286 17.1861 19.4871 15.9993 19.4871C14.8126 19.4871 13.6364 19.6286 12.4708 19.9115C11.3052 20.1944 10.1737 20.6017 9.07628 21.1333C8.73953 21.3128 8.47585 21.5325 8.28525 21.7923C8.09465 22.0521 7.99935 22.3299 7.99935 22.6256V23.4871ZM15.9993 13.8461C16.7327 13.8461 17.3605 13.585 17.8827 13.0628C18.4049 12.5406 18.666 11.9128 18.666 11.1795C18.666 10.4461 18.4049 9.81837 17.8827 9.29614C17.3605 8.77392 16.7327 8.51281 15.9993 8.51281C15.266 8.51281 14.6382 8.77392 14.116 9.29614C13.5938 9.81837 13.3327 10.4461 13.3327 11.1795C13.3327 11.9128 13.5938 12.5406 14.116 13.0628C14.6382 13.585 15.266 13.8461 15.9993 13.8461Z"
        fill={props?.color || "#A1A1AA"}
      />
    </svg>
  );
}