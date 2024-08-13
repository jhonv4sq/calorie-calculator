import './css/App.css'
import Home from './views/Home'
import Response from './views/Response'
import Button from './components/Button'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function App() {
    const [t, i18n] = useTranslation('global')
    const language = i18n.resolvedLanguage

    return (
        <>
            <Router>
                <header className='w-full flex justify-center bg-[#111517] border-b border-blue-400'>
                    <nav className='w-full px-[15px] py-3 mx-auto sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1066px] flex justify-between'>
                        <div className='h-full flex items-center'>
                            <Link to='/calorie-calculator' className='text-white text-lg uppercase'>
                                {t('navbar.home')}
                            </Link>
                        </div>
                        <ul className='text-sm flex'>
                            <li>
                                <Button text='ES' type='button' className='bg-transparent text-gray-500' disabled={language === 'es'} onClick={() => i18n.changeLanguage('es')} />
                            </li>
                            <li>
                                <Button text='EN' type='button' className='bg-transparent text-gray-500' disabled={language === 'en'} onClick={() => i18n.changeLanguage('en')} />
                            </li>
                        </ul>

                    </nav>
                </header>
                <section>
                    <div className='wrappers'>
                        <Routes>
                            <Route path='/calorie-calculator' element={<Home t={t} />} />
                            <Route path='/calorie-calculator/response' element={<Response t={t} />} />
                        </Routes>
                    </div>
                </section>
            </Router>
        </>
    )
}

export default App
