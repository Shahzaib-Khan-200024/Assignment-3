import Image from "next/image";
import logo from "@/app/ATS/Logo.png";
const Navbar = () => {
    return (
        <>
            <div className="w-full h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
                <div className="w-[191px] h-[34px]">
                    <Image src={logo} alt="Logo" width={191} height={34} />
                </div>
                <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                    <div className="w-[549px] h-[23px]">
                        <ul className="flex flex-row justify-between text-white font-title">
                            <li className="w-[78px] h-[23px] hover:text-[#FFE492] cursor-pointer">Products</li>
                            <li className="w-[78px] h-[23px] hover:text-[#FFE492] cursor-pointer">Solution</li>
                            <li className="w-[78px] h-[23px] hover:text-[#FFE492] cursor-pointer">Resources</li>
                            <li className="w-[78px] h-[23px] hover:text-[#FFE492] cursor-pointer">Pricing</li>
                        </ul>
                    </div>
                    <div className="w-[126px] h-[60px] font-title">
                        <button className="px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-[#e389b2]">Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;