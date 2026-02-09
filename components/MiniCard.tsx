export default function MiniCard({ title, info, cost }: { title: string, info: string, cost: number }) {
    return (
        <div className="flex text-black justify-between w-255 shadow-md">
            <div className="flex flex-col m-5 px-2 tracking-wide">
                <p className="text-2xl">{title}</p>
                <p className="text-sm">{info}</p>
            </div>
            <div className="flex flex-col m-5 items-center tracking-wide">
                <p className="font-bold text-4xl">${cost}</p>
                <p className="text-sm">/MONTH</p>
            </div>
        </div>
    )
}