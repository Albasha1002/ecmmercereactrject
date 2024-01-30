import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
     
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      
      
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
export const ProductCard = ({product}) => {
    const navigate=useNavigate();
  return (
    
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transistion-all cursor-pointer'>
    
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top'
            src={product.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{product.title}</p>
                 <p >{product.brand}</p>
            </div>
            <div className='flex items-center space-x-2' >
                <p className='font-semibold'>
                   {product.discountedPrice}
                </p>
                <p className='line-through opacity-50'>
                   {product.price}
                </p>
                <p className='text-green-600 font-semibold'>
                    {product.discountPercent}%
                </p>
            </div>
        </div>
    </div>
  )
}
