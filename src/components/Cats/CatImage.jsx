import React from 'react'

export function CatImage({ image }) {
    const fallbackImg = 'https://nekos.best/api/v2/neko/0314.png';

    return (
        <div className="cat-card-img">
            <img src={image ? image.url : fallbackImg} alt="" />
        </div>
    );
}
