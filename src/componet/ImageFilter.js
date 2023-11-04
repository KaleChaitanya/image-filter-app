import React from 'react'
import CategoryButtons from './CategoryButtons'
import CategoryItem from './CategoryItem'
import Shop from './Shop'

const ImageFilter = () => {
    const updateFilter = [...new Set(Shop.map((elem) => elem.category)), 'All'];

    const [data, setData] = React.useState(Shop);
    const [catData, setCatData] = React.useState(updateFilter);

    const addFilter = (cat) => {
        if (cat === "All") {
            setData(Shop)
            return
        }
        const filterData = Shop.filter((currElem) => {
            return cat === currElem.category;
        })
        setData(filterData)
    }
    return (
        <>
            <h1 className='text-center my-2 heading'>Filter Images with category</h1>
            <hr />
            <CategoryButtons addFilter={addFilter} catData={catData} />
            <CategoryItem data={data} />
        </>
    )
}

export default ImageFilter
