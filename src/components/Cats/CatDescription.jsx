export function CatDescription({ description }) {
    return (
        <div className="cat-card-desc">
            <span>
                Description: <br />
            </span>
            <p>{description}</p>
        </div>
    );
}
