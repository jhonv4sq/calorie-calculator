const Form = ({ children, handleSubmit = () => {} }) => {
    return (
        <form onSubmit={handleSubmit} className="grid gap-3">
            {children}
        </form>
    )
}
export default Form
