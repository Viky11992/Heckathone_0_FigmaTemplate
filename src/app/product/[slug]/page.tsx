
import { tparams } from "@/app/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import AddtoCartbtn from "@/app/component/AddtoCartbtn";


export default async function page({ params }: tparams) {
  
   
  const Productdata =
    await client.fetch(`*[_type == "product" && slug.current == '${params.slug}']{
  name, id, discountPercentage,description
  , stockLevel, price, isFeaturedProduct,
    category,
    "image":image.asset->url,
    "slug": slug.current,
}`);
  params;


  return (
    <div className="">
        <AddtoCartbtn productdata={Productdata}/>
     
    </div>
  );
}
