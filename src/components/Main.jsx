import { createRef, useRef, useEffect, useState } from 'react'

function Loading() {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

function Origins({ origins, onClick, refs }) {
    return (
        <div className="cat-origins">
            {origins.map((origin, index) => {
                return (
                    <span
                        key={index}
                        ref={refs.current[index]}
                        onClick={() => onClick(index)}
                    >
                        {origin[0]}
                        {Number.isInteger(origin[1]) ? `(${origin[1]})` : ''}
                    </span>
                )
            })}
        </div>
    )
}

function Cats({ cats, origin }) {
    const fallbackImg = 'https://nekos.best/api/v2/neko/0314.png'

    return cats
        .filter((cat) => {
            if (origin === 'All') return true
            return cat.origin.match(origin)
        })
        .map((cat, index) => {
            return (
                <div key={index} className="cat-card">
                    <div className="cat-card-img">
                        <img
                            src={cat.image ? cat.image.url : fallbackImg}
                            alt=""
                        />
                    </div>
                    <div className="cat-card-body">
                        <h1>{cat.name}</h1>
                        <strong>{cat.origin}</strong>
                        <p>
                            <span>Temperament: </span>
                            {cat.temperament}
                        </p>
                        <p>
                            <span>Life Span: </span>
                            {cat.life_span} years
                        </p>
                        <p>
                            <span>Weight: </span>
                            {cat.weight.metric} Kg
                        </p>
                        <div className="cat-card-desc">
                            <span>
                                Description: <br />
                            </span>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
}

function Main({ cats }) {
    const [origins, setOrigins] = useState([])
    const refs = useRef([])
    const [origin, setOrigin] = useState('')

    useEffect(() => {
        function getOrigins() {
            return cats.reduce((acc, cat) => {
                if (acc[cat.origin]) acc[cat.origin] += 1
                else acc[cat.origin] = 1
                return acc
            }, {})
        }
        function sortOrigins(origins) {
            return Object.entries(origins).sort((a, b) => a[1] - b[1])
        }

        const catOrigins = getOrigins()
        const sortedOrigins = sortOrigins(catOrigins)

        setOrigins(() => {
            sortedOrigins.push(['All'])
            return sortedOrigins
        })
    }, [cats])
    ;(function createRefs(array) {
        if (refs.current.length !== array.length) {
            refs.current = new Array(array.length)
                .fill()
                .map((_, i) => refs.current[i] || createRef())
        }
    })(origins)

    function sliceBefore(str, char) {
        const pos = str.indexOf(char)
        return str.slice(0, pos < 0 ? str.length : pos)
    }

    function onClick(index) {
        const value = refs.current[index].current.innerHTML
        const origin = sliceBefore(value, '(')
        setOrigin(origin)
    }

    return (
        <main>
            {cats.length ? (
                <>
                    <Origins origins={origins} onClick={onClick} refs={refs} />
                    <Cats cats={cats} origin={origin} />
                </>
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default Main
