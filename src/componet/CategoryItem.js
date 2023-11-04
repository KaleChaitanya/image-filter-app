import React from 'react'

const CategoryItem = ({ data }) => {
    const myStyle = {
        width: "18rem"
    }
    return (
        <>
            <div className="container-fluid my-5 mx-5">
                <div className='row'>
                    {
                        data.map((currElem) => {
                            const { id, image, name, category, price, description } = currElem;
                            return (
                                <div className="card mx-3 my-3" style={myStyle} key={id}>
                                    <img className="card-img-top card-image" src={image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{description}</p>
                                        <p className="card-text">Price: {price}</p>
                                        <a href="#" className="btn btn-primary">Order Now</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryItem
