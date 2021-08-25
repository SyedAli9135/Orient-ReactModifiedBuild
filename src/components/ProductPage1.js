import React, { useState, useEffect } from 'react'
import Header2 from './Header2'
import Navbar from './Navbar'
import './ProductPage1.css'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
const axios = require('axios')
const ProductPage1 = () => {
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
    <div>
      <Navbar />
      <Header2 />
      <div>
        <div className="productpage1">
          {products &&
            products.map((item) => (
              <>
                <div
                  onClick={() => handleClick(item.id)}
                  className="productpage1-column"
                >
                  <img src={item.image} width="100%" />
                  <strong>{item.title}</strong>
                  <p>
                    <strong>{item.text}</strong>
                  </p>

                  {variants.map((variant) => {
                    let productId = variant.url.slice(variant.url.length - 2)
                    console.log(productId[0])
                    if (productId[0] === item.id.toString())
                      return <p>PKR: {variant.price}</p>
                  })}
                  <div className="productpage1-buttons">
                    <button>EN M/ US M</button>
                    <button>ADD</button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage1
