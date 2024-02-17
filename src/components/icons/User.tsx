import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

export default function User(props: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 6.38461C6.175 6.38461 5.46875 6.09086 4.88125 5.50336C4.29375 4.91586 4 4.20961 4 3.38461C4 2.55959 4.29375 1.85333 4.88125 1.26583C5.46875 0.678333 6.175 0.384583 7 0.384583C7.825 0.384583 8.53125 0.678333 9.11875 1.26583C9.70625 1.85333 10 2.55959 10 3.38461C10 4.20961 9.70625 4.91586 9.11875 5.50336C8.53125 6.09086 7.825 6.38461 7 6.38461ZM0 13.6154V11.9692C0 11.5564 0.120192 11.1702 0.360575 10.8106C0.600958 10.4509 0.924358 10.1718 1.33078 9.97306C2.27436 9.52049 3.21858 9.18107 4.16345 8.95478C5.10833 8.7285 6.05385 8.61536 7 8.61536C7.94615 8.61536 8.89167 8.7285 9.83655 8.95478C10.7814 9.18107 11.7256 9.52049 12.6692 9.97306C13.0756 10.1718 13.399 10.4509 13.6394 10.8106C13.8798 11.1702 14 11.5564 14 11.9692V13.6154H0ZM1 12.6154H13V11.9692C13 11.7474 12.9285 11.5391 12.7856 11.3442C12.6426 11.1493 12.4449 10.9846 12.1923 10.85C11.3692 10.4513 10.5206 10.1458 9.6464 9.93363C8.77222 9.72145 7.89008 9.61536 7 9.61536C6.10992 9.61536 5.22778 9.72145 4.3536 9.93363C3.4794 10.1458 2.63077 10.4513 1.8077 10.85C1.55513 10.9846 1.35737 11.1493 1.21442 11.3442C1.07147 11.5391 1 11.7474 1 11.9692V12.6154ZM7 5.38461C7.55 5.38461 8.02083 5.18878 8.4125 4.79711C8.80417 4.40544 9 3.93461 9 3.38461C9 2.83461 8.80417 2.36378 8.4125 1.97211C8.02083 1.58044 7.55 1.38461 7 1.38461C6.45 1.38461 5.97917 1.58044 5.5875 1.97211C5.19583 2.36378 5 2.83461 5 3.38461C5 3.93461 5.19583 4.40544 5.5875 4.79711C5.97917 5.18878 6.45 5.38461 7 5.38461Z"
        fill={props.color ?? "black"}
      />
    </svg>
  );
}
