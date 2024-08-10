class Person {
    static DATA = {
        male: [88.362, 13.397, 4.799, 5.677, 50],
        female: [447.593, 9.247, 3.098, 4.330, 45.5],
        lifeStyles: {
            sedentary: 1.2,
            lightActivity: 1.375,
            moderateActivity: 1.55,
            highActivity: 1.725,
            veryHighActivity: 1.9
        }
    }

    static GENDER = {
        male: 'Male',
        female: 'female'
    }

    static LIFE_STYLES = {
        sedentary: 'sedentary',
        lightActivity: 'Light Activity',
        moderateActivity: 'Moderate Activity',
        highActivity: 'High Activity',
        veryHighActivity: 'Very High Activity'
    }

    constructor(lifeStyles, gender, height) {
        this.lifeStyles = lifeStyles
        this.gender = gender
        this.height = height
    }

    heightInInches() {
        return Math.round(this.height * 39.37) 
    }
    
    getData() {
        let [data1, data2, data3, data4, data5] = Person.DATA[this.gender]
        let lifeStyles = Person.DATA['lifeStyles'][this.lifeStyles]
        return {
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4,
            data5: data5,
            lifeStyles: lifeStyles,
            height: this.heightInInches()
        }
    }
}

export default Person;
