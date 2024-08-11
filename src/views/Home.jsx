import Card from '../components/Card'
import Form from '../components/Form'
import Input from '../components/Input'
import Select from '../components/Select'

import Person from '../utils/Person'

const Home = () => {
    return (
        <>
            <Card>
                <Form>
                    <Input name='age' label='Edad'/>
                    <Select name='gender' label='Sexo' values={Person.GENDER}/>
                    <Input name='weight' label='Peso'/>
                    <Input name='height' label='Altura'/>
                    <Select name='lifestyles' label='Estilos de vida' values={Person.LIFE_STYLES}/>
                </Form>
            </Card>
        </>
    )
}

export default Home