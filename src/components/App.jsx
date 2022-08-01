import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import useFetch from '../hooks/useFetch'
import '../styles/index.scss'
import '../styles/responsive.scss'
import '../animations/loading.scss'


function App() {
    const url = 'https://api.thecatapi.com/v1/breeds'
    const cats = useFetch(url)

    return (
        <div className="App">
            <Header cats={cats} />
            <Main cats={cats} />
            <Footer />
        </div>
    )
}

export default App
