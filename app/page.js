import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import RanjeCard from "@/components/RanjeCard";
import ProductSlider from "@/components/ProductSlider";
import Promo from "@/components/Promo";
import productHeading from '@/assets/product-heading.png';
import Doctor from "@/components/Doctor";
import Articles from "@/components/Articles";
import BlogHeading from '@/assets/blog-heading.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb | Vacation rentals, cabins, beach houses, & more </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {/* Desktop Header */}
      <Header />
      {/* Mobile Header */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px-0">
        <section className="pt-[7%]">
          <div>
            <RanjeCard />
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