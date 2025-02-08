import { client } from "@/sanity/lib/client";
import AddtoCartbtn from "@/app/component/AddtoCartbtn";

type PageProps = { params: { slug: string } };

export default async function Page({ params }: PageProps) {
  const productData = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      name, id, discountPercentage, description,
      stockLevel, price, isFeaturedProduct, category,
      "image": image.asset->url,
      "slug": slug.current
    }`,
    { slug: params.slug }
  );

  return (
    <div>
      <AddtoCartbtn productdata={productData} />
    </div>
  );
}
