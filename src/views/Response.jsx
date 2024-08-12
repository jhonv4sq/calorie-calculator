import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'

const Response = () => {
    const [t] = useTranslation('global')

    const location = useLocation();
    const { idealWeight, dcn } = location.state || {}

    return (
        <>
            <Card>
                <Card.Body>
                    <div className='text-justify'>
                        <p className='mb-3'>
                            {t('response.ideal-weight', {idealWeight: idealWeight})}
                        </p>
                        <p className='whitespace-pre-wrap'>
                            {t('response.dcn', {dcn: dcn})}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Response
