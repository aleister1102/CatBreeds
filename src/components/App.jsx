import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import '../styles/index.scss'
import '../styles/responsive.scss'
import '../animations/loading.scss'

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
	const data = useFetch(
		`https://api.thecatapi.com/v1/breeds?${apiKey}`,
	)
	const [cats, setCats] = useState([])

	useEffect(() => {
		setCats(data)
	}, [data])

	return (
		<div className='App'>
			<Header cats={cats} />
			<Main cats={cats} />
			<Footer />
		</div>
	)
}

export default App
