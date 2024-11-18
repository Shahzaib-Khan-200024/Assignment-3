import React from "react";

const CustomiseApp = () => {
    return (
        <>
            <div className="w-full h-[812.09px] top-[3268px] py-[140px] px-[220px] gap-[98px] font-inter flex items-center font-title">
                <div className="w-[714px] h-[532.09px] bg-[#C4DEFD] hover:shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 hover:opacity-70 transition-opacity duration-500 rounded-md"></div>
                </div>
                <div className="w-[669px] h-[411px]">
                    <div className="w-[669px] h-[200px]">
                        <h1 className="w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] transition-colors duration-500">
                            Customise it to your needs
                        </h1>
                    </div>
                    <div className="w-[669px] h-[90px]">
                        <p className="font-normal text-[19px] leading-[30px] tracking-[-0.02em] text-[#212529] hover:text-[#B0D4FF] transition-colors duration-500">
                            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own script and plugins using the Extension API.
                        </p>
                    </div>
                    <div className="w-[171px] h-[63px]"></div>
                    <button className="py-5 px-10 rounded-lg bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3A7FDD] transition-all duration-500 hover:scale-105">
                        <p className="font-medium text-lg leading-[23px] text-white hover:text-[#FFE492] transition-colors duration-500">
                            Let's Go
                        </p>
                        <span className="text-white text-lg ml-2 transform hover:translate-x-2 transition-transform duration-500">
                        →
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CustomiseApp;
