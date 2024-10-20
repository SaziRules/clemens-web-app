import Image from "next/image";
import Head from "next/head";
import RanjeCard from "@/components/RanjeCard";
import ProductSlider from "@/components/ProductSlider";
import productHeading from '@/assets/product-heading.png';
import Articles from "@/components/Articles";
import BlogHeading from '@/assets/blog-heading.png'
import Promo from "@/components/Promo";
import Doctor from "@/components/Doctor";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Clemens | Incontinece products and solutions</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px-0">
        <section className="pt-[7%]">
          <div>
            <RanjeCard />
            </div>     
        </section>

        <section className=" pt-[7%]">
          <div>
            <Promo />
          </div>
        </section>

        <section className="pt-[7%]">
          <div>
            <div className="flex items-center justify-center pb-[5%]">
              <Image src={productHeading} alt="" />
            </div>
            <ProductSlider />
            </div>     
        </section>

        <section className="pt-[7%]">
          <div>
            <Doctor />
          </div>
        </section>

        <section className="pt-[7%] pb-[7%]">
        <div className="flex items-center justify-center pb-[5%]">
              <Image src={BlogHeading} alt="" />
            </div>
          <Articles />
        </section>
      </main>
    </div>
    
  );
}