import React from 'react'

function Rating({product}) {
    return (
        <div>
            {product.rating} from {product.numReviews} reviews
        </div>
    )
}

export default Rating
