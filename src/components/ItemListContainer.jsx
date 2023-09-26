export const ItemListContainer = (props) => {

    console.log(props)
    return(
        <>
        <div className="py-24">
        <h1 className="text-2xl">{props.producto}</h1>
        <h2 className="text-lg">{props.color}</h2>
        <p className="text-gray-600">{props.precio}$</p>
        </div>
        <hr />
        </>
    )
}