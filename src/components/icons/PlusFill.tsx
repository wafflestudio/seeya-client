import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGElement> {
  color?: string;
}

export default function PlusFillIcon(props: Props) {
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
        d="M15.3326 22.0001H16.666V16.6668H21.9993V15.3334H16.666V10.0001H15.3326V15.3334H9.99931V16.6668H15.3326V22.0001ZM7.48647 26.6668C6.87281 26.6668 6.36042 26.4612 5.94931 26.0501C5.5382 25.639 5.33264 25.1266 5.33264 24.5129V7.48727C5.33264 6.8736 5.5382 6.36121 5.94931 5.9501C6.36042 5.53899 6.87281 5.33344 7.48647 5.33344H24.5121C25.1258 5.33344 25.6382 5.53899 26.0493 5.9501C26.4604 6.36121 26.666 6.8736 26.666 7.48727V24.5129C26.666 25.1266 26.4604 25.639 26.0493 26.0501C25.6382 26.4612 25.1258 26.6668 24.5121 26.6668H7.48647Z"
        fill={props?.color || "#000"}
      />
    </svg>
  );
}