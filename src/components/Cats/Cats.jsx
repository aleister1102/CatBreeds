import React from 'react'

import { CatDescription } from './CatDescription'
import { CatImage } from './CatImage'

function filterCatByOrigin(cats, filter) {
    return cats.filter((cat) => {
        if (filter.match('All')) return true
        const pattern = new RegExp(filter, 'gi')
        return cat.origin.match(pattern)
    })
}

export function Cats({ cats, filter }) {
    const filteredCats = filterCatByOrigin(cats, filter)

    return filteredCats.map(
        (
            {
                image,
                name,
                origin,
                temperament,
                life_span,
                weight,
                metric,
                description
            },
            index
        ) => {
            return (
                <div key={index} className="cat-card">
                    <CatImage image={image} />
                    
                    <div className="cat-card-body">
                        <h1>{name}</h1>
                        <strong>{origin}</strong>
                        <p>
                            <span>Temperament: </span>
                            {temperament}
                        </p>
                        <p>
                            <span>Life Span: </span>
                            {life_span} years
                        </p>
                        <p>
                            <span>Weight: </span>
                            {weight.metric} Kg
                        </p>
                        <CatDescription description={description} />
                    </div>
                </div>
            )
        }
    )
}
