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
import homeRules from '../config/formValidation/rules';

const Home = () => {
    const [t] = useTranslation('global')
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()

    const formEvents = {t, register, errors, homeRules}

    const onSubmit = (data) => {
        let person = new Person(data)

        let idealWeight = calculate.idealWeight(person)
        let dcn = calculate.calorieNeeds(person, idealWeight)

        navigate('/calorie-calculator/response', { state: { idealWeight, dcn } })
    }
    console.log(errors)

    return (
        <>
            <Card>
                <Card.Header>
                    <h3 className='text-base font-bold text-center uppercase w-60 max-sm:w-full'>
                        {t('home.header')}
                    </h3>
                </Card.Header>
                <Card.Body>
                    <Form handleSubmit={ handleSubmit(onSubmit) } >
                        <Input name='age' label={t('home.age')} formEvents={formEvents} type='number' />
                        <Select name='gender' label={t('home.gender')} values={Person.GENDER} formEvents={formEvents} />
                        <Input name='weight' label={t('home.weight')} formEvents={formEvents} type='number' />
                        <Input name='height' label={t('home.height')} formEvents={formEvents} type='number' step='0.01' />
                        <Select name='lifeStyles' label={t('home.lifestyles')} values={Person.LIFE_STYLES} formEvents={formEvents} />
                        <Button text={t('home.submit')} type='submit' />
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home
