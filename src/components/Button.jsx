const Button = ({ text = '', className = '', ...props }) => {
    return (
        <button className={`transition ease-in duration-200 outline-none focus:outline-none disabled:text-white disabled:border-transparent ${className}`} {...props}>
            {text}
        </button>
    )
}

export default Button
