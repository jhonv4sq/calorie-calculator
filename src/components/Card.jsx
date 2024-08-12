const Card = ({ children }) => {
    return (
        <div className="py-10 rounded-xl bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md">
            {children}
        </div>
    )
}

const CardHeader = ({ children }) => {
    return (
        <div className="px-16 pb-5 max-sm:px-8 flex justify-center">
            {children}
        </div>
    )
}

const CardBody = ({ children }) => {
    return (
        <div className="px-16 max-sm:px-8">
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card
