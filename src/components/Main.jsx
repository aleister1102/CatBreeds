import useFetch from '../hooks/useFetch'

function Loading() {
    console.log('Loading...')
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

function CatCards({ cats }) {
    const fallbackImg = 'https://nekos.best/api/v2/neko/0314.png'

    return cats.map((cat, index) => {
        return (
            <div key={index} className="cat-card">
                <div className="cat-card-img">
                    <img src={cat.image ? cat.image.url : fallbackImg} alt="" />
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
    return <main>{cats.length ? <CatCards cats={cats} /> : <Loading />}</main>
}

export default Main
