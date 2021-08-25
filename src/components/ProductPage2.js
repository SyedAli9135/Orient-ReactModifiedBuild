import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Header1 from './Header1'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import './ProductPage2.css'
const axios = require('axios')
const ProductPage2 = () => {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [variants, setVariants] = useState([])
  const getProducts = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/Products/').then((res) => {
        if (products.length !== 0) {
        } else {
          setProducts(res.data)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
  const getVariants = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/Variants/').then((res) => {
        if (variants.length !== 0) {
        } else {
          setVariants(res.data)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProducts()
    getVariants()
  }, [products, variants])
  const data = [
    {
      id: 1,
      image: '../images/Rectangle55.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 2,
      image: '../images/Rectangle56.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 3,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 4,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 5,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 6,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 7,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 8,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
  ]

  const handleClick = (id) => {
    history.push(`/productcheckout/${id}`)
  }

  return (
    <>
      <div>
        <Navbar />
        <Header1 />
        <div id="productpage2-row-wrapper" class="productpage2-row">
          <div className="productpage2-myclass">
            {products && products.length
              ? products.map((item) =>
                  products.indexOf(item) === 2 ||
                  (products.indexOf(item) > 2 &&
                    (products.indexOf(item) + 1) % 3 === 0) ? (
                    <div className="productpage2-myclass2">
                      <img
                        onClick={() => handleClick(item.id)}
                        class="card img-top"
                        src={item.image}
                        alt=""
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          <strong>{item.title}</strong>
                        </h5>
                        <p class="card-text">
                          <strong>{item.text}</strong>
                        </p>
                        <p class="card-text">
                          {variants.map((variant) => {
                            let productId = variant.url.slice(
                              variant.url.length - 2,
                            )
                            console.log(productId[0])
                            if (productId[0] === item.id.toString())
                              return <p>PKR: {variant.price}</p>
                          })}
                        </p>
                        <div className="productpage1-buttons">
                          <button>EN M/ US M</button>
                          <button>ADD</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id="card-child" class="card border-0">
                      <img
                        onClick={() => handleClick(item.id)}
                        id="img-width"
                        width="550px"
                        class="card img-top"
                        src={item.image}
                        alt=""
                      />
                      <div id="productpage1-content" class="card-body">
                        <h5 class="card-title">
                          <strong>{item.title}</strong>
                        </h5>
                        <p class="card-text">
                          <strong>{item.text}</strong>
                        </p>
                        <p class="card-text">
                          {variants.map((variant) => {
                            let productId = variant.url.slice(
                              variant.url.length - 2,
                            )
                            console.log(productId[0])
                            if (productId[0] === item.id.toString())
                              return <p>PKR: {variant.price}</p>
                          })}
                        </p>
                        <div className="productpage1-buttons">
                          <button>EN M/ US M</button>
                          <button>ADD</button>
                        </div>
                      </div>
                    </div>
                  ),
                )
              : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProductPage2
