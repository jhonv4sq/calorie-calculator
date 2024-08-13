const homeRules = {
    age: {
        required: true,
        validate: (value) => value > 0,
    },
    gender: {
        required: true,
    },
    weight: {
        required: true,
        validate: (value) => value > 0,
    },
    height: {
        required: true,
        pattern: /^\d*\.\d+$/,
        validate: (value) => value > 0,
    },
    lifeStyles: {
        required: true,
    },
}

export default homeRules
