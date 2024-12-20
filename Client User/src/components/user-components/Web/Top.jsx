import React from "react";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <div className="fixed top-0 z-10 bg-white py-2 w-screen flex gap-5 justify-between px-4 items-center">
      {/* logo */}

      <div className=" w-[50px]">
        <img src="/PNG/LOGO .png" alt="Logo" />
      </div>

      <div className="flex gap-3">

        <Link to="/wishlist">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.8065 6.20659C4.70663 5.30673 5.92731 4.80122 7.2001 4.80122C8.47288 4.80122 9.69356 5.30673 10.5937 6.20659L12.0001 7.61179L13.4065 6.20659C13.8493 5.74815 14.3789 5.38247 14.9646 5.13091C15.5502 4.87934 16.18 4.74693 16.8174 4.74139C17.4547 4.73585 18.0868 4.8573 18.6767 5.09865C19.2666 5.34 19.8025 5.69641 20.2532 6.1471C20.7039 6.59778 21.0603 7.13371 21.3016 7.72361C21.543 8.31352 21.6644 8.94558 21.6589 9.58292C21.6534 10.2203 21.5209 10.8501 21.2694 11.4357C21.0178 12.0214 20.6521 12.551 20.1937 12.9938L12.0001 21.1886L3.8065 12.9938C2.90664 12.0937 2.40112 10.873 2.40112 9.60019C2.40112 8.32741 2.90664 7.10673 3.8065 6.20659V6.20659Z"
                stroke="black"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 20.0909C10.041 20.6562 10.9755 21 12 21C13.0245 21 13.959 20.6562 14.6667 20.0909M4.50763 17.1818C4.08602 17.1818 3.85054 16.5194 4.10557 16.1514C4.69736 15.2975 5.26855 14.0451 5.26855 12.537L5.29296 10.3517C5.29296 6.29145 8.29581 3 12 3C15.7588 3 18.8058 6.33993 18.8058 10.4599L18.7814 12.537C18.7814 14.0555 19.3329 15.3147 19.9006 16.169C20.1458 16.5379 19.9097 17.1818 19.4933 17.1818H4.50763Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
