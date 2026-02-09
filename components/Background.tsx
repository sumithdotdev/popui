export default function Background() {
    return (
        <div className="absolute inset-0 -z-50">
            {/* left side */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white"></div>

            {/* right angled shape */}
            <div className="absolute inset-y-0 right-0 w-2/3 bg-[#caf0f9]" style={{
                clipPath: 'polygon(7% 0%, 100% 0, 100% 60%, 30% 70%)',
            }}></div>
        </div>
    )
}