import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Card from '../components/Card'
import Form from '../components/Form'
import Input from '../components/Input'
import Select from '../components/Select'

import Person from '../utils/Person'

const Home = () => {
    const [t] = useTranslation('global')

    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [weight, getWeight] = useState(0)
    const [height, getHeight] = useState(0)
    const [lifestyles, getLifestyles] = useState('')

    return (
        <>
            <Card>
                <Form>
                    <Input name='age' label={t('home.age')} type='number' onChange={setAge} />
                    <Select name='gender' label={t('home.gender')} values={Person.GENDER} onChange={setGender} getTranslation={t} />
                    <Input name='weight' label={t('home.weight')} type='number' onChange={getWeight} />
                    <Input name='height' label={t('home.height')} type='number' onChange={getHeight} />
                    <Select name='lifestyles' label={t('home.lifestyles')} values={Person.LIFE_STYLES} onChange={getLifestyles} getTranslation={t} />
                </Form>
            </Card>
        </>
    )
}

export default Home