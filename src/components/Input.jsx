const Input = ({ name = '', label = '', onChange = () => {}, ...props }) => {
    return(
        <div className="relative text-lg flex flex-col text-left">
            <input 
                onChange={(e) => onChange(e.target.value)} 
                className="rounded-[7px] border-none bg-[#94a3b8] bg-opacity-50 px-8 py-2 text-center text-sm font-normal placeholder-slate-200 shadow-lg outline-none backdrop-blur-md text-slate-200"  
                name={name}
                {...props}
            />
            <label className="text-white pointer-events-none absolute left-0 top-[-1rem] flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 before:block before:h-1.5 before:w-2.5">
                {label}
            </label>
        </div>
    )
}

export default Input;