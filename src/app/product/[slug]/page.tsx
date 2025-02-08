import { client } from "@/sanity/lib/client";
import { tproduct } from "../../types"; // ✅ Use the same type as AddtoCartbtn
import AddtoCartbtn from "@/app/component/AddtoCartbtn"; // ✅ Corrected Import

type PageProps = { params: { slug: string } };

export default async function Page({ params }: PageProps) {
  if (!params?.slug) {
    return <div className="text-center text-red-500 font-bold text-lg">⚠️ Error: No product found</div>;
  }

  // ✅ Fetch Data & Ensure Correct Type
  const productData: tproduct[] = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      name, id, discountPercentage, description,
      stockLevel, price, isFeaturedProduct, category,
      "image": image.asset->url,
      "slug": slug.current
    }`,
    { slug: params.slug }
  );

  if (!productData || productData.length === 0) {
    return <div className="text-center text-red-500 font-bold text-lg">⚠️ Error: Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <AddtoCartbtn productdata={productData} /> {/* ✅ Now it will work fine */}
      </div>
    </div>
  );
}
