const Card = ({ children }) => {
    return (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            {children}
        </div>
    )
}
export default Card