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
        male: 'home.male',
        female: 'home.female'
    }

    static LIFE_STYLES = {
        sedentary: 'home.sedentary',
        lightActivity: 'home.light-activity',
        moderateActivity: 'home.moderate-activity',
        highActivity: 'home.high-activity',
        veryHighActivity: 'home.very-high-activity'
    }

    constructor(data) {
        this.age = data.age
        this.gender = data.gender
        this.height = data.height
        this.weight = data.weight
        this.lifeStyles = data.lifeStyles
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
