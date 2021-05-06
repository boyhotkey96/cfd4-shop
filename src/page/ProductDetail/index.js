import productApi from 'api/productApi'
import Breadcrumb from 'components/Breadcrumb'
import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { addCart } from 'redux/reducers/cartReducer'
import Description from './components/Description'

export default function ProductDetail() {

  let routeMatch = useRouteMatch()
  let [product, setProduct] = useState()
  let [currentImage, setCurrentImage] = useState(0)
  let [amount, setAmout] = useState(1)
  let dispatch = useDispatch()

  useEffect(() => {
    productApi.detail(routeMatch.params.slug)
      .then(res => {
        if (res.data.length > 0) {
          setProduct(res.data[0])
        }
      })
  }, [routeMatch.params.slug])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  if (!product) return null;
  let real_price_text = new Intl.NumberFormat('vn').format(product.real_price)
  let price_text = new Intl.NumberFormat('vn').format(product.price)
  let { images, configurable_options } = product

  function sliderItemClick(i) {
    setCurrentImage(i)
  }

  function _changeAmount(e) {
    setAmout(parseInt(e.target.value))
  }

  return (
    <>
      <section className="product-detail">
        <Breadcrumb
          list={[
            {
              title: 'Home',
              link: '/'
            }, {
              title: 'Catalog',
              link: '/catalog'
            }, {
              title: 'Giày Abcs',
              link: '/'
            }
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Card */}
                  <div className="card">
                    {/* Badge */}
                    {
                      product.discount_rate ? <div className="badge badge-primary card-badge text-uppercase ">
                        - {product.discount_rate}%
                      </div> : null
                    }
                    {/* Slider */}
                    <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">
                      {
                        images.map((e, i) => (
                          <a href={e.large_url} className={currentImage === i ? 'active' : ''}>
                            <img src={e.medium_url} alt="..." className="card-img-top" />
                          </a>
                        ))
                      }
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="flickity-nav mx-n2 mb-10 mb-md-0 slider-thumbnail" >
                    {/* Item */}
                    {
                      images.map((e, i) => (
                        <div className={`col-12 px-2 ${currentImage === i ? 'active' : ''}`} style={{ maxWidth: '113px' }} onClick={sliderItemClick.bind(null, i)}>
                          {/* Image */}
                          <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.small_url})` }} />
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="col-12 col-md-6 pl-lg-10">
                  {/* Header */}
                  <div className="row mb-1">
                    <div className="col">
                      {/* Preheading */}
                      <a className="text-muted" href="shop.html">Sneakers</a>
                    </div>
                    <div className="col-auto">
                      {/* Rating */}
                      <div className="rating font-size-xs text-dark" data-value={4}>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <a className="font-size-sm text-reset ml-2" href="#reviews">
                        Reviews (6)
                      </a>
                    </div>
                  </div>
                  {/* Heading */}
                  <h3 className="mb-2">{product.name}</h3>
                  {/* Price */}
                  <div className="mb-7">
                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{price_text}</span>
                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{real_price_text} vnđ</span>
                    <span className="font-size-sm ml-1">({product.stock_item.qty > 0 ? 'Còn hàng' : 'Hết hàng'})</span>
                  </div>
                  {/* Form */}
                  {
                    configurable_options && configurable_options.map((e, i) => (
                      <div className="form-group product-option" key={i}>
                        {/* Label */}
                        <p className="mb-5">
                          {e.name} : {e.values.map((e1, i1) => <span className="option-value" key={i1}>{e1.label}</span>)}
                        </p>
                      </div>
                    ))
                  }
                  <div className="form-group">
                    <div className="form-row mb-7">
                      <div className="col-12 col-lg-auto">
                        {/* Quantity */}
                        <select className="custom-select mb-2" onChange={_changeAmount}>
                          {
                            [...Array(10)].map((e, i) => <option value={i + 1} selected={(i + 1) === amount}>{i + 1}</option>)
                          }
                        </select>
                      </div>
                      <div className="col-12 col-lg">
                        {/* Submit */}
                        <button type="submit" className="btn btn-block btn-dark mb-2" onClick={() => dispatch(addCart({ ...product, cartNum: amount }))}>
                          Add to Cart <i className="fe fe-shopping-cart ml-2" />
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* Wishlist */}
                        <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                          Wishlist <i className="fe fe-heart ml-2" />
                        </button>
                      </div>
                    </div>
                    {/* Share */}
                    <p className="mb-0">
                      <span className="mr-4">Share:</span>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Description description={product.description} />
    </>
  )
}