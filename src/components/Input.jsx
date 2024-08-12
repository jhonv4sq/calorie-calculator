const Input = ({ name = '', label = '', register = () => {}, ...props }) => {
    return(
        <div className="text-lg flex flex-col text-left">
            <label className="text-white text-[12px] font-normal leading-tight text-blue-gray-400 ml-2 tracking-wider">
                {label}
            </label>
            <input
                className="rounded-[7px] border-none bg-[#94a3b8] bg-opacity-50 px-8 py-2 text-center text-sm font-normal placeholder-slate-200 shadow-lg outline-none backdrop-blur-md text-slate-200"
                {...register(name, {
                    required: true
                })}
                {...props}
            />

        </div>
    )
}

export default Input
