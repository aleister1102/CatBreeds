import { IoLogoOctocat } from 'react-icons/io5'
import { useEffect, useState } from 'react'

function Header({ cats }) {
    const [avgWeight, setAvgWeight] = useState(0)
    const [avgLifespan, setAvgLifespan] = useState(0)

    useEffect(() => {
        function getWeightRanges(cats, delimeter) {
            return cats.map((cat) => cat.weight.metric.split(delimeter))
        }

        function getLifespanRanges(cats, delimeter) {
            return cats.map((cat) => cat.life_span.split(delimeter))
        }

        function computeAvgFromRange(range) {
            return range.reduce((sum, bound) => sum + +bound, 0) / 2
        }

        function computeAvgFromRanges(ranges) {
            return (
                ranges.reduce((sum, range) => {
                    return sum + computeAvgFromRange(range)
                }, 0) / ranges.length
            )
        }

        setAvgWeight(() => {
            const weightRanges = getWeightRanges(cats, ' - ')
            const avgWeight = computeAvgFromRanges(weightRanges)

            return isNaN(avgWeight) ? 0 : avgWeight.toFixed(2)
        })

        setAvgLifespan(() => {
            const lifespanRanges = getLifespanRanges(cats, ' - ')
            const avgLifespan = computeAvgFromRanges(lifespanRanges)

            return isNaN(avgLifespan) ? 0 : avgLifespan.toFixed(2)
        })
    }, [cats])

    return (
        <header>
            <IoLogoOctocat />
            <h1>Cats Paradise</h1>
            <p>
                There are <span>{cats.length} </span> cat breeds
            </p>
            <small>
                On average a cat can weight about <strong>{avgWeight} </strong>
                Kg and lives <strong>{avgLifespan} </strong> years.
            </small>
        </header>
    )
}

export default Header
