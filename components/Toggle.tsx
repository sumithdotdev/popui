export default function Toggle({ }) {
    return (
        <label className="flex relative cursor-pointer w-20 h-10 rounded-4xl bg-[#00b289]">
            <input type="checkbox" className="sr-only peer" />
            <span className="w-2/5 h-4/5 bg-white absolute rounded-2xl top-1 left-1 peer-checked:left-11 transition-all"></span>
        </label>
    )
}