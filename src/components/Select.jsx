const Select = ({name = '', label = '', values = {}, getTranslation = () => {}, register, ...props }) => {
    return(
        <div className="text-lg flex flex-col text-left">
            <label className="text-white text-[12px] font-normal leading-tight text-blue-gray-400 ml-2 tracking-wider">
                {label}
            </label>
            <select 
            className="rounded-[7px] border-none bg-[#94a3b8] bg-opacity-50 px-8 py-2 text-center text-sm font-normal outline-none backdrop-blur-md text-slate-200"
            {...register(name, {
                required: true
            })}
            {...props}
            >
                <option value="" className="text-black">
                    {getTranslation('home.select')}
                </option>
                {
                    Object.keys(values).map((key) => (
                        <option key={key} value={key} className="text-black">
                            {getTranslation(values[key])}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select