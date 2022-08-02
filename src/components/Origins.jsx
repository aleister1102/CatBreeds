function createOriginName(origin) {
    return `${origin[0]}${Number.isInteger(origin[1]) ? `(${origin[1]})` : ''}`
}

export function Origins({ origins, refs, onClick }) {
    return (
        <div className="cat-origins">
            {origins.map((origin, index) => {
                return (
                    <span
                        key={index}
                        ref={(element) => {
                            refs.current[index] = element
                        }}
                        onClick={() => onClick(index)}
                    >
                        {createOriginName(origin)}
                    </span>
                )
            })}
        </div>
    )
}
