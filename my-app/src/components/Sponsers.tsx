import Image from "next/image";
import Apple from "@/app/ATS/Apple.png";
import Micro from "@/app/ATS/Microsoft.png";
import Slack from "@/app/ATS/Slack.png";
import Google from "@/app/ATS/Google.png";
import React from "react";

export const Sponsors = () => {
    return (
        <div className="max-w-[1920px] mx-auto py-[80px] px-[40px] sm:py-[140px] sm:px-[220px] gap-[100px] flex flex-col items-center font-title">
            {/* Section Title */}
            <div className="text-center mb-6">
                <h2 className="font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-[-0.02em] text-[#212529] transition-transform duration-500 hover:scale-105">
                    Our sponsors
                </h2>
            </div>
            <div className="w-[1482px] h-[71px] flex justify-between items-center">
                <div className="w-[110px] h-[65px] pt-2 gap-1 hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Image src={Apple} alt="Apple Logo" className="hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="w-[287px] h-[62px] hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Image src={Micro} alt="Microsoft Logo" className="hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="w-[280px] h-[71px] hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Image src={Slack} alt="Slack Logo" className="hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="w-[211px] h-[69.81px] gap-4px hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Image src={Google} alt="Google Logo" className="hover:opacity-80 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    );
};
