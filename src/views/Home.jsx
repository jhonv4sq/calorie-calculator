import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Card from '../components/Card'
import Form from '../components/Form'
import Input from '../components/Input'
import Select from '../components/Select'
import Button from '../components/Button'

import Person from '../utils/Person'
import calculate from '../utils/calculate'
import homeRules from '../config/formValidation/rules';

const Home = ({t}) => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()

    const formEvents = {t, register, errors, homeRules}

    const getErrorMessages = (errorsJson) => {
        return Object.entries(errorsJson).reduce((newArray, [key, value]) => {
            let field = t('home.' + key)
            newArray.push('<p>'+ t('home.error.'+ value.type, {field: field}) +'</p>')
            return newArray
        }, [])
    }

    const onValid = (data) => {
        console.log('entra')
        let person = new Person(data)

        let idealWeight = calculate.idealWeight(person)
        let dcn = calculate.calorieNeeds(person, idealWeight)

        Swal.fire({
            text: t('home.alert.success'),
            icon: 'success'
        }).then(() => {
            navigate('/calorie-calculator/response', { state: { idealWeight, dcn } })
        })
    }

    const onInvalid = (errors) => {
        let errorMessages = getErrorMessages(errors).join('')

        Swal.fire({
            html: errorMessages,
            icon: "warning",
            showCloseButton: true,
          })
    }


    return (
        <Card>
            <Card.Header>
                <h3 className='text-base font-bold text-center uppercase w-full sm:w-60'>
                    {t('home.header')}
                </h3>
            </Card.Header>
            <Card.Body>
                <Form handleSubmit={ handleSubmit(onValid, onInvalid) } >
                    <Input name='age' label={t('home.age')} formEvents={formEvents} type='number' min='0' />
                    <Select name='gender' label={t('home.gender')} values={Person.GENDER} formEvents={formEvents} />
                    <Input name='weight' label={t('home.weight')} formEvents={formEvents} type='number' min='0' />
                    <Input name='height' label={t('home.height')} formEvents={formEvents} type='number' step='0.01' min='0' />
                    <Select name='lifeStyles' label={t('home.lifeStyles')} values={Person.LIFE_STYLES} formEvents={formEvents} />
                    <Button text={t('home.submit')} type='submit' />
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Home
