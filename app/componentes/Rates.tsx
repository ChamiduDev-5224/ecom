import Image from "next/image";
import React, { useState } from "react";
interface RateInterface {
  rate: number;
}

const Rates: React.FC<RateInterface> = ({ rate }) => {
  return (
    <div className="flxr">
       {Array.from({ length: rate }, (_, index) => (
         <Image
         src="/icons/star-icon.svg"
         className="cursor-pointer"
         width={24}
         height={24}
         alt={`Rate-${index}`}
         key={index}
       />
      ))}
     
    </div>
  );
};

export default Rates;