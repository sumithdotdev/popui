import { FaCheck } from "react-icons/fa"

export default function Card({ title, cost, info }: { title: String, cost: number, info: string[] }) {
    return (
        <div className="w-100 h-125 bg-white border border-gray-300 shadow text-black">
            <div className="flex flex-col m-10 gap-y-5 h-105">
                <p className="font-bold text-xl tracking-wider">{title}</p>

                <div className="flex">
                    <p>$</p>
                    <p className="font-bold text-5xl">{cost}</p>
                    <p className="flex items-end pl-2">/MONTH</p>
                </div>

                {/* <div className="h-1 w-80 bg-[#00b289]"></div> */}
                <hr className="text-[#00b289] border-2" />

                <div className="flex flex-col gap-y-1">
                    {info.map((i) => {
                        return (
                            <div className="flex gap-x-1 items-center">
                                <FaCheck color="green" size={14} />
                                <p>{i}</p>
                            </div>
                        )
                    })}
                </div>

                <button className="bg-[#00b289] py-4 text-white text-sm font-bold tracking-wider mt-auto">
                    START FREE
                </button>
            </div>
        </div>
    )
}