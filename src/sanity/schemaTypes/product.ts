export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Featured Product',
      },
      
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
    ],
  };
  