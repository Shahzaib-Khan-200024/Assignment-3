
import Image from "next/image";
import Logo from "@/app/ATS/Logo.png";
import React from "react";
export const Footer = () => {
    return (
        <div className="w-full h-[461px] py-[140px] px-[220px] font-inter bg-[#043873] gap-[200px] font-title">
            <div className="w-full h-[289px] flex gap-[100px] text-white">
                <div className="flex w-full h-[169px] gap-[100px] justify-between">
                    <div className="w-[295px] h-[169px] gap-[15px] hover:scale-105 transition-transform duration-500 ease-in-out">
                        <div className="w-[191px] h-[34px]">
                            <Image
                            src={Logo}
                            alt="Logo"
                            className="transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="w-[240px] h-[120px]">
                            <p className="font-normal text-lg leading-[30px] text-[#F7F7EE] hover:text-[#FFE492] transition-all duration-500 ease-out">
                                Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                            </p>
                        </div>
                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
                        <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] transition-all duration-500 ease-out">
                            product
                        </h2>
                        <p className="text-base text-[#FFE492] hover:text-white transition-colors duration-500 ease-in-out">
                            Overview
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Pricing
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Customer stories
                        </p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-4 flex flex-col">
                        <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] transition-all duration-500 ease-out">
                            Resources
                        </h2>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Blog
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Guides & tutorials
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Help center
                        </p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-4 flex flex-col">
                        <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] transition-all duration-500 ease-out">
                            Company
                        </h2>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            About us
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Careers
                        </p>
                        <p className="text-white hover:text-[##FFE492] transition-colors duration-500 ease-in-out">
                            Media kit
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-0 border-t border-[#2E4E73]"></div>
            <div className="w-full h-[20px] flex items-center justify-center">
                <div className="w-[169px] h-[20px] gap-[60px]">
                    <p className="font-normal text-base text-white tracking-[-0.02em]">
                        ©2021 Whitepace LLC.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;