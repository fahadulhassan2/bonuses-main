import React, { useState } from "react";
import Link from "next/link";

function ClearButton({ children, className, path, outside, ...props }: any) {
  const classNames =
    `bg-gradient-to-b from-clearBY via-clearBM to-clearBY rounded-md cursor-pointer ` +
    (className || "");
  return !outside ? (
    <Link href={`${path ? path : "/"}`}>
      <div className={classNames}>{children}</div>
    </Link>
  ) : (
    <a href={path} target="_blank" rel="noreferrer">
      <div className={classNames}>{children}</div>
    </a>
  );
}

function DarkButton({ children, className, path, ...props }: any) {
  const classNames =
    `bg-gradient-to-b from-clearBY/25 via-clearBM/25 to-clearBY/25 cursor-pointer rounded-md border border-darkBorder ` +
    (className || "");

  return (
    <Link href={`${path ? path : "/"}`}>
      <div className={classNames}>{children}</div>
    </Link>
  );
}

function RewardsButton({ children, className, path, ...props }: any) {
  const classNames =
    `bg-rewardsBg cursor-pointer rounded-md relative ` + (className || "");

  return (
    <div>
      <div className={classNames}>
        <svg
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[22px] left-[-5px]"
        >
          <path
            d="M8.75072 5.66776C9.34483 6.06354 9.34483 6.93646 8.75072 7.33224L1.80442 11.9597C1.13984 12.4024 0.25 11.926 0.25 11.1274L0.250001 1.87256C0.250001 1.07402 1.13984 0.597596 1.80442 1.04032L8.75072 5.66776Z"
            fill="#7A7AA9"
          />
        </svg>
        {children}
        <svg
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[22px] right-[-5px] rotate-180"
        >
          <path
            d="M8.75072 5.66776C9.34483 6.06354 9.34483 6.93646 8.75072 7.33224L1.80442 11.9597C1.13984 12.4024 0.25 11.926 0.25 11.1274L0.250001 1.87256C0.250001 1.07402 1.13984 0.597596 1.80442 1.04032L8.75072 5.66776Z"
            fill="#7A7AA9"
          />
        </svg>
      </div>
    </div>
  );
}

function RewardButtonMain({
  children,
  className,
  path,
  code,
  reward,
  hover,
  ...props
}: any) {
  const classNames =
    `bg-rewardsBg cursor-pointer rounded-r-md rounded-l-md relative ` +
    (className || "");

  return (
    <div
      className={classNames}
      onClick={() => {
        navigator.clipboard.writeText(code);
      }}
    >
      <svg
        width="10"
        height="13"
        viewBox="0 0 10 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[42px] left-[-5px]"
      >
        <path
          d="M8.75072 5.66776C9.34483 6.06354 9.34483 6.93646 8.75072 7.33224L1.80442 11.9597C1.13984 12.4024 0.25 11.926 0.25 11.1274L0.250001 1.87256C0.250001 1.07402 1.13984 0.597596 1.80442 1.04032L8.75072 5.66776Z"
          fill={`${hover ? "#7781FF" : "#7A7AA9"}`}
        />
      </svg>

      <div
        className="flex flex-row items-center space-x-2"
        onClick={() => {
          navigator.clipboard.writeText(code);
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.22 12.4976C12.22 12.7755 11.9876 13 11.7 13H7.0525V7.09662H12.22V12.4976ZM5.9475 13H1.3C1.01238 13 0.780001 12.7755 0.780001 12.4976V7.09662H5.9475V13ZM0.52 3.3285H2.9185C2.6975 2.99251 2.5675 2.59372 2.5675 2.16667C2.5675 0.97186 3.57338 0 4.81 0C5.48275 0 6.08888 0.288889 6.5 0.744203C6.91113 0.288889 7.51725 0 8.19 0C9.42663 0 10.4325 0.97186 10.4325 2.16667C10.4325 2.59372 10.3041 2.99251 10.0815 3.3285H12.48C12.7676 3.3285 13 3.55302 13 3.83092V6.02899H7.0525V3.3285H5.9475V6.02899H0V3.83092C0 3.55302 0.232375 3.3285 0.52 3.3285ZM7.0525 3.2657H8.19C8.81725 3.2657 9.3275 2.77271 9.3275 2.16667C9.3275 1.56063 8.81725 1.06763 8.19 1.06763C7.56275 1.06763 7.0525 1.56063 7.0525 2.16667V3.2657ZM4.81 3.2657H5.9475V2.16667C5.9475 1.56063 5.43725 1.06763 4.81 1.06763C4.18275 1.06763 3.6725 1.56063 3.6725 2.16667C3.6725 2.77271 4.18275 3.2657 4.81 3.2657Z"
            fill={`${hover ? "#7A7AA9" : "#7781FF"}`}
          />
        </svg>
        <div
          className={`${
            hover ? "text-sm text-warningTxt" : "text-lg text-white"
          } font-bold`}
        >
          {reward}
        </div>
      </div>
      {hover ? (
        <div
          className="flex flex-row items-center space-x-2"
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
        >
          <div className="font-bold text-xl">{code}</div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.12"
              d="M1.1665 4.89996C1.1665 3.59329 1.1665 2.93996 1.42084 2.44063C1.64454 2.0016 2.00148 1.64466 2.4405 1.42096C2.93984 1.16663 3.59317 1.16663 4.89984 1.16663H5.59984C6.9065 1.16663 7.55984 1.16663 8.05917 1.42096C8.4982 1.64466 8.85514 2.0016 9.07884 2.44063C9.33317 2.93996 9.33317 3.59329 9.33317 4.89996V5.59996C9.33317 6.90663 9.33317 7.55996 9.07884 8.05929C8.85514 8.49832 8.4982 8.85526 8.05917 9.07896C7.55984 9.33329 6.9065 9.33329 5.59984 9.33329H4.89984C3.59317 9.33329 2.93984 9.33329 2.4405 9.07896C2.00148 8.85526 1.64454 8.49832 1.42084 8.05929C1.1665 7.55996 1.1665 6.90663 1.1665 5.59996V4.89996Z"
              fill="#7781FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.89984 0.729126H4.88059C4.24359 0.729126 3.73842 0.729126 3.33184 0.762376C2.91534 0.796209 2.56359 0.867376 2.24217 1.03071C1.72066 1.29652 1.29673 1.72066 1.03117 2.24229C0.867254 2.56313 0.796087 2.91546 0.762837 3.33196C0.729004 3.73854 0.729004 4.24371 0.729004 4.88071V5.61921C0.729004 6.25621 0.729004 6.76138 0.762254 7.16796C0.796087 7.58446 0.867254 7.93621 1.03059 8.25763C1.2964 8.77913 1.72053 9.20307 2.24217 9.46863C2.563 9.63254 2.91534 9.70371 3.33184 9.73754C3.5885 9.75854 3.88542 9.76671 4.22959 9.76904C4.22959 10.1068 4.23367 10.3885 4.24884 10.6283C4.26867 10.9468 4.31009 11.2198 4.40634 11.4759C4.54527 11.8451 4.76144 12.1804 5.0404 12.4594C5.31936 12.7384 5.65468 12.9545 6.02392 13.0935C6.28059 13.1897 6.553 13.2311 6.87209 13.251C7.18417 13.2708 7.56917 13.2708 8.0545 13.2708H9.11909C9.75609 13.2708 10.2613 13.2708 10.6678 13.2375C11.0843 13.2037 11.4361 13.1325 11.7581 12.9692C12.2793 12.7035 12.703 12.2795 12.9685 11.7582C13.1324 11.4362 13.2036 11.0845 13.2374 10.668C13.2707 10.2614 13.2707 9.75621 13.2707 9.11921V8.05463C13.2707 7.56929 13.2707 7.18429 13.2514 6.87221C13.231 6.55313 13.1896 6.28013 13.0933 6.02404C12.9544 5.6548 12.7382 5.31949 12.4593 5.04052C12.1803 4.76156 11.845 4.54539 11.4758 4.40646C11.2191 4.31021 10.9473 4.26879 10.6282 4.24896C10.342 4.2341 10.0555 4.22749 9.76892 4.22913C9.76909 3.92979 9.75858 3.63055 9.73742 3.33196C9.70359 2.91546 9.63242 2.56371 9.46909 2.24229C9.20343 1.72087 8.77951 1.29695 8.25809 1.03129C7.93609 0.867376 7.58434 0.796209 7.16784 0.762376C6.76125 0.729126 6.25609 0.729126 5.61909 0.729126H4.89984ZM9.77067 5.10413V5.61921C9.77067 6.25621 9.77067 6.76138 9.73742 7.16796C9.70359 7.58446 9.63242 7.93621 9.46909 8.25763C9.20343 8.77905 8.77951 9.20297 8.25809 9.46863C7.93609 9.63254 7.58434 9.70371 7.16784 9.73754C6.76125 9.77079 6.25609 9.77079 5.61909 9.77079H5.104C5.10517 10.1021 5.10867 10.36 5.1215 10.5735C5.139 10.8517 5.17284 11.0267 5.22534 11.1679C5.3204 11.4205 5.46829 11.6498 5.65912 11.8407C5.84996 12.0315 6.07934 12.1794 6.33192 12.2745C6.47309 12.327 6.64809 12.3608 6.92692 12.3777C7.20809 12.3952 7.56567 12.3958 8.06967 12.3958H9.09984C9.76075 12.3958 10.2298 12.3958 10.5967 12.3655C10.9583 12.3363 11.1829 12.2797 11.3608 12.1893C11.7175 12.0075 12.0074 11.7176 12.1892 11.361C12.2796 11.183 12.3356 10.9585 12.3653 10.5968C12.3957 10.2293 12.3957 9.76088 12.3957 9.09996V8.06921C12.3957 7.56579 12.3957 7.20821 12.3782 6.92646C12.3607 6.64821 12.3274 6.47321 12.2743 6.33204C12.1793 6.07946 12.0314 5.85008 11.8406 5.65924C11.6497 5.46841 11.4203 5.32052 11.1678 5.22546C11.0266 5.17296 10.8516 5.13913 10.5733 5.12221C10.306 5.10873 10.0383 5.10289 9.77067 5.10471V5.10413ZM2.63942 1.81063C2.81675 1.72021 3.04075 1.66421 3.403 1.63446C3.7705 1.60471 4.2395 1.60413 4.89984 1.60413H5.59984C6.26075 1.60413 6.72975 1.60413 7.09667 1.63446C7.45834 1.66363 7.68292 1.72021 7.86084 1.81063C8.21747 1.99237 8.50743 2.28233 8.68917 2.63896C8.77959 2.81688 8.83559 3.04146 8.86534 3.40313C8.89509 3.77063 8.89567 4.23963 8.89567 4.89996V5.59996C8.89567 6.26088 8.89567 6.72988 8.86534 7.09679C8.83617 7.45846 8.77959 7.68304 8.68917 7.86096C8.50743 8.21759 8.21747 8.50755 7.86084 8.68929C7.68292 8.77971 7.45834 8.83571 7.09667 8.86546C6.72917 8.89521 6.26075 8.89579 5.59984 8.89579H4.89984C4.2395 8.89579 3.76992 8.89579 3.403 8.86546C3.04134 8.83629 2.81675 8.77971 2.63884 8.68929C2.28221 8.50755 1.99225 8.21759 1.8105 7.86096C1.72009 7.68304 1.66409 7.45846 1.63434 7.09679C1.60459 6.72929 1.604 6.26029 1.604 5.59996V4.89996C1.604 4.23963 1.604 3.77004 1.63434 3.40313C1.6635 3.04146 1.72009 2.81688 1.8105 2.63896C1.99225 2.28233 2.28221 1.99237 2.63884 1.81063H2.63942Z"
              fill="#7781FF"
            />
          </svg>
        </div>
      ) : null}
      <svg
        width="10"
        height="13"
        viewBox="0 0 10 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[42px] right-[-5px] rotate-180"
      >
        <path
          d="M8.75072 5.66776C9.34483 6.06354 9.34483 6.93646 8.75072 7.33224L1.80442 11.9597C1.13984 12.4024 0.25 11.926 0.25 11.1274L0.250001 1.87256C0.250001 1.07402 1.13984 0.597596 1.80442 1.04032L8.75072 5.66776Z"
          fill={`${hover ? "#7781FF" : "#7A7AA9"}`}
        />
      </svg>
    </div>
  );
}

export { ClearButton, DarkButton, RewardsButton, RewardButtonMain };