import React , {useEffect} from 'react'
import './Product.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector } from 'react-redux'
import {getProducts, deleteProduct, CurrentUser} from '../../Redux/Actions/actions'
import Admin from '../admin/admin-addcard'
import { Button } from "react-bootstrap";

function Products() {

  const dispatch = useDispatch()

  const token = localStorage.getItem("token")
  useEffect(() => {
    dispatch(CurrentUser(token))
  }, []);
 useEffect(() => {
    dispatch(getProducts())
  } ,[])

let productList = useSelector((state) => state.Reducers.getProduct)
let userIsAdmin = JSON.parse(localStorage.getItem('current_user'))

  return (
    
<div >
<section className="dark" >
    {userIsAdmin?.role==='admin' ? <Admin/> : ''}
  {productList?.map((product) => 
  <div  className="container py-4" key={product._id}>
  <Link to={`/Details/${product._id}`} >
      <h1  className="h1 text-center" id="pageHeaderTitle">
      {product.title}
      </h1>
      <article className="postcard dark blue">
        <p className="postcard__img_link">
          <img className="postcard__img"
            src={product.url_images}alt="aaaa" />
        </p>
        <div className="postcard__text">
          <h1 className="postcard__title blue">
            <p className ="descri">{product.title}</p>
          </h1>
          <div className="postcard__subtitle small">
            <time >
            <i className="fa-solid fa-coins">
              {product.price}</i> 
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
          {product.description}
          </div>
        </div>
      </article>
      </Link>
      <Button variant="danger" onClick={() => dispatch(deleteProduct(product._id))}>
        delete
      </Button>
      </div>
  )}
  </section>
 
 
</div>

  )
}

export default Products
