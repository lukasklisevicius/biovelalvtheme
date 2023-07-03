import '../../styles/products.scss'
export default function  Products(props){
    // console.log(props.className)
    return(
        <div className={`products with-spice ${[props.className]}`}>
            <div className='max'>
            {
                props.products.nodes.map((product,idx)=>{
                    return(<Product key={idx} product={product}/>)
                })
            }
            </div>
        </div>
    )
}

function Product(props){

    if(props.product.product.imgagePng != null)
    return(
        <div className="card">
            <img src={props.product.product.imgagePng.mediaItemUrl}></img>
            <p className='title'><b>{props.product.title}</b></p>
            {/* <p>{props.product.product.description}</p> */}
        </div>
    )
}