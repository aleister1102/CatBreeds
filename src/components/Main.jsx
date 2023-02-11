import React, { useRef, useEffect, useState } from 'react'

import _ from 'lodash'

import { Cats } from './Cats/Cats'
import { Loading } from './Loading'
import { Origins } from './Origins'

function sliceBefore(str, char) {
    return str.substring(0, str.indexOf(char))
}

function Main({ cats }) {
    const [origins, setOrigins] = useState([])
    const [filter, setFilter] = useState('')
    const refs = useRef([])

    useEffect(() => {
        function getOrigins() {
            return _.countBy(cats, (cat) => {
                return cat.origin
            })
        }
        function sortOrigins(origins) {
            return _.toPairs(origins).sort((a, b) => a[1] - b[1])
        }

        setOrigins(() => {
            return [...sortOrigins(getOrigins()), ['All']]
        })
    }, [cats])

    function onClick(index) {
        const value = refs.current[index].innerHTML
        const filter = sliceBefore(value, '(')
        setFilter(filter)
    }

    return (
        <main>
            <Origins origins={origins} refs={refs} onClick={onClick} />
            {cats.length ? <Cats cats={cats} filter={filter} /> : <Loading />}
        </main>
    )
}

export default Main
