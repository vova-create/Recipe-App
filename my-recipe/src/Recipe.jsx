
const Recipe = (props) => {
    const ingredients = props.ingredients
    console.log(ingredients)
    return (
        <div className='recipe-wrapper'>
            <h2>{props.label}</h2>
            <img src={props.img} alt="Food"/>
            <div>{ingredients.map((element) => element.text)}</div>
        </div>
    )
}

export default Recipe