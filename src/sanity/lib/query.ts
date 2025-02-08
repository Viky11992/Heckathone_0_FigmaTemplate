import { groq } from "next-sanity";

export const shopQuery = groq`*[_type == "product"]{
  name, id, discountPercentage,description
  , stockLevel, price, isFeaturedProduct,
    category,
    "image":image.asset->url,
    "slug": slug.current,
}`
