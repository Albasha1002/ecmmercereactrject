export const color=[
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
]


export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
  export const singleFilters = [
    {
      id: 'price',
      name: 'Price',
      options: [
        { value: '159-399', label: '159 - 399' },
        { value: '399-999', label: '399 - 999'},
        { value: '999-1999', label: '999 - 1999'},
        { value: '1999-2999', label: '1999 - 2999' },
        
      ],
    },
    {
      id: 'discount',
      name: 'DISCOUNT RANGE',
      options: [
        { value: '10%', label: '10% and Above' },
        { value: '20%', label: '20% and Above'},
        { value: '30%', label: '40% and Above' },
        { value: '50%', label: '50% and Above'},
        { value: '60%', label: '60% and Above'},
        { value: '70%', label: '70% and Above'},
        { value: '80%', label: '80% and Above'},
      ],
    },
    {
      id: 'stock',
      name: 'Availability',
      options: [
        { value: 'in_stock', label: 'In Stock' },
        { value: 'out_of_stock', label: 'Out Of Stock' },
       
      ],
    },
  ]