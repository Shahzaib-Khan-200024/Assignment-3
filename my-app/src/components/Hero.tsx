import React from "react";

export const Hero = () => {
    return (
        <>
            <div className="py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center">
                <div className="w-[656px] h-[361px]">
                    <div className="w-[600px] h-[238px]">
                        <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mn-6 hover:text-[#FFE492] transition duration-500 hover:scale-105 font-title">
                            Get More Done with whitepace
                        </h2>
                        <p className="mt-6 font-normal text-lg leading-[30px] tracking-[-0.02em] hover:text-[#B0D4FF] transition duration-500 hover:translate-x-1 font-title">
                            Project management software that enables your team to
                            collaborate, plan, analyze, and manage everyday tasks.
                        </p>
                        <div className="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] mt-14 flex justify-between items-center hover:bg-[#3a7fdd] hover:scale-105">
                            <button className="hover:text-white transition duration-500 font-title">
                                Try Whitepace free →
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[824px] h-[549px] bg-[#C4DEFD] hover:scale-110 hover:shadow-2xl transition-transform duration-500"></div>
            </div>
        </>
    );
};
