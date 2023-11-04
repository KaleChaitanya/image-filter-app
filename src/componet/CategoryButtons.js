import React from 'react'
const CategoryButtons = ({ addFilter, catData }) => {
    return (
        <>
            <div className='d-flex justify-content-around'>
                {
                    catData.map((currElem, index) => {
                        return (
                            <button className='btn btn-info' onClick={() => addFilter(currElem)} key={index}>{currElem}</button>
                        )
                    })
                }
            </div>
        </>
    )
}
export default CategoryButtons