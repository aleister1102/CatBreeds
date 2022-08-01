function Main({ cats }) {
    console.log(cats)
    return (
        <main>
            <div className="cat-card">
                <div className="cat-card-img">
                    <img
                        src="https://nekos.best/api/v2/neko/0544.png"
                        alt="Cat"
                    />
                </div>
                <div className="cat-card-body">
                    <h1>Abyssinian</h1>
                    <strong>Egypt</strong>
                    <p>
                        <span>Temperament: </span>Active, Energetic,
                        Independent, Intelligent, Gentle
                    </p>
                    <p>
                        <span>Life Span: </span>14 - 15 years
                    </p>
                    <p>
                        <span>Weight: </span>3 - 5 Kg
                    </p>
                    <p>
                        <span>Description: <br /></span>The Abyssinian is easy to care
                        for, and a joy to have in your home. They’re
                        affectionate cats and love both people and other
                        animals.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main
