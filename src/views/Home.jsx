import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Card from '../components/Card'
import Form from '../components/Form'
import Input from '../components/Input'
import Select from '../components/Select'
import Button from '../components/Button'

import Person from '../utils/Person'
import calculate from '../utils/calculate'

const Home = () => {
    const [t] = useTranslation('global')
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        let person = new Person(data)

        let idealWeight = calculate.idealWeight(person)
        let dcn = calculate.calorieNeeds(person, idealWeight)

        navigate('/calorie-calculator/response', { state: { idealWeight, dcn } })
    }

    return (
        <>
            <Card>
                <Form handleSubmit={ handleSubmit(onSubmit) } >
                    <Input name='age' label={t('home.age')} register={register} type='number' />
                    <Select name='gender' label={t('home.gender')} values={Person.GENDER} getTranslation={t} register={register} />
                    <Input name='weight' label={t('home.weight')} register={register} type='number' />
                    <Input name='height' label={t('home.height')} register={register} type='number' step='0.01' />
                    <Select name='lifeStyles' label={t('home.lifestyles')} values={Person.LIFE_STYLES} getTranslation={t} register={register} />
                    <Button text={t('home.submit')} type='submit' />
                </Form>
            </Card>
        </>
    )
}

export default Home
