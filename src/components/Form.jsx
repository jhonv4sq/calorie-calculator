import React from "react";

const Form = ({...props}) => {
    return (
        <form className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8" 
            {...props}
        />
    )
}
export default Form