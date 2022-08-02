import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import '../styles/index.scss'
import '../styles/responsive.scss'
import '../animations/loading.scss'
import { useEffect } from 'react'

function App() {
    const data = useFetch('https://api.thecatapi.com/v1/breeds')
    const [cats, setCats] = useState([])

    useEffect(() => {
        setCats(data)
    }, [data])

    return (
        <div className="App">
            <Header cats={cats} />
            <Main cats={cats} />
            <Footer />
        </div>
    )
}

export default App
