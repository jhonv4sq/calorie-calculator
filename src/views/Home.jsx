import {React} from "react";
import {Form, Input} from "../components/*";

const Home = () => {
    return (
        <>
            <Form>
                <Input name='age' label='Edad'/>
                <Input name='gender' label='Sexo'/>
                <Input name='weight' label='Peso'/>
                <Input name='height' label='Altura'/>
            </Form>
        </>
    )
}

export default Home