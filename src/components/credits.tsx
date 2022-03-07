import React from "react";

export default function Credits() {
  return (
    <>
      <a href="https://kristoffer.is">made by kristoffer</a>

      <style>{`
        a {
          font-size: 15px;
          margin: auto auto 5px auto;
        }
          
        @media (prefers-color-scheme: dark) {
          a {
            color: #4a92f7;
          }
        }
      `}</style>
    </>
  );
}
