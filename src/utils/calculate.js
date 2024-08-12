import Person from './Person'

const calculateCalorieNeeds = (person) => {
    let height = person.height
    let weight = person.weight
    let age = person.age
    let info = person.getData()
    
    // Devine Formula
    let idealWeight = info.data5 + 2.3 * (info.height - 60)

    let dephysis = false
    if (Math.round(weight) > Math.round(idealWeight)) {
        dephysis = true
    }

    height =  height * 100
    
    // Basal Metabolic Rate Harris-Benedict Formula
    let mul1 = info.data2 * idealWeight

    if (dephysis) {
        mul1 = info.data2 * weight
    }

    let mul2 = info.data3 * height
    let mul3 = info.data4 * age
    let bmr = info.data1 + mul1 + mul2 - mul3    

    // Daily Calorie Needs
    let dcn = Math.round(bmr * info.lifeStyles)

    if (dephysis) {
        dcn = dcn - 500
    }
    
    return {
        idealWeight: idealWeight,
        dcn: dcn
    }
}

export default calculateCalorieNeeds;