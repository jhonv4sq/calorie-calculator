const Input = ({ name, type = 'text', label, onChange = () => {} }) => {
    return(
        <div className="mb-4 text-lg flex flex-col text-left">
            <label className="mb-2 text-sm text-white">{label}</label>
            <input 
                onChange={(e) => onChange(e.target.value)} 
                className="rounded-3xl border-none bg-[#94a3b8] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md text-slate-200" 
                type={type} 
                name={name} 
            />
        </div>
    )
}

export default Input;