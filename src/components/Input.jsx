const Input = ({ name = '', label = '', formEvents = {}, ...props }) => {
    const register = formEvents.register
    const rules = formEvents.homeRules[name]
    const errors = formEvents.errors[name]

    return(
        <div className="text-lg flex flex-col text-left">
            <label className="text-white text-[12px] font-normal leading-tight ml-2 tracking-wider">
                {label}
            </label>
            <input
                className={`rounded-[7px] border-[1px] ${errors ? 'border-red-600' : 'border-transparent focus:border-blue-400'} bg-[#94a3b8] bg-opacity-50 px-8 py-2 text-center text-sm font-normal placeholder-slate-200 shadow-lg outline-none backdrop-blur-md text-slate-200`}
                {...register(name, rules)}
                {...props}
            />
            <span></span>

        </div>
    )
}

export default Input
