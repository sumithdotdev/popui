import Image from "next/image"
import { FaCaretDown } from "react-icons/fa"

export default function Navbar({ }) {
    return (
        <nav className="flex justify-around text-black m-6">
            {/* logo */}
            <div className="flex">
                <span>
                    <Image src={"/image.png"} alt="Brand" width={32} height={32} />
                </span>
                <div>
                    <p className="text-[#00b289] tracking-wider font-bold text-2xl">bonsai</p>
                </div>
            </div>

            {/* dropdowns */}
            <div className="flex gap-x-10 tracking-wide">
                <button className="flex items-center gap-x-2 text-[#4c4d5f]">Product <FaCaretDown></FaCaretDown> </button>
                <button className="flex items-center gap-x-2 text-[#4c4d5f]">Templates <FaCaretDown></FaCaretDown></button>
                <button className="text-[#4c4d5f]">Pricing</button>
                <button className="text-[#4c4d5f]">Reviews</button>
            </div>

            {/* buttons */}
            <div className="flex gap-x-10">
                <button className="border border-[#00b289] p-2 text-[#00b289] rounded-sm font-bold tracking-wide">LOG IN</button>
                <button className="p-2 tracking-wide bg-[#00b289] text-white rounded-sm px-4 font-bold">START FREE</button>
            </div>
        </nav>
    )
}