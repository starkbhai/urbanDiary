import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Book, Feather, PenTool } from "lucide-react";
import { categories, products } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-stone-900">
            UrbanDiary
          </div>
          <div className="hidden md:flex gap-8 text-stone-600 font-medium">
            <Link href="#" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link
              href="#products"
              className="hover:text-stone-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="hover:text-stone-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </Link>
          </div>
          <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Banner Section */}
      <div>
        <section className="relative w-full bg-[#2F4739]">
          {/* Desktop Image with Overlay */}
          <div className="relative hidden md:block w-full">
            {" "}
            {/* Added relative here */}
            <img
              src="/images/desktop_banner.png"
              alt="Desktop banner"
              className="w-full h-auto"
            />
            {/* Content overlay - NOW absolute positioned over image */}
            <div className="absolute inset-0 flex items-center">
              {" "}
              {/* Changed to absolute */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <p className="text-[#DDEFE0] text-sm md:text-base font-medium mb-2 tracking-wider">
                    AMAZING OFFER! GET 10% ADDITIONAL DISCOUNT
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Indian Handmade Gifts
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                    Discover traditional craft with a touch of artistic
                    personalization
                  </p>
                  <Link
                    href="/collections/all"
                    className="inline-flex items-center px-8 py-4 bg-[#DDEFE0] text-[#2F4739] font-semibold text-lg rounded-md hover:bg-white transition-colors duration-300 shadow-lg"
                  >
                    SHOP NOW
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4h14l-1 7H4L3 4z" />
                      </svg>
                      FREE DOMESTIC SHIPPING
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-2 0v1h2z"
                          clipRule="evenodd"
                        />
                        <path d="M3 11h14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
                      </svg>
                      FREE SURPRISE GIFT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative block md:hidden w-full">
            <img
              src="/images/mobile_banner.png"
              alt="Mobile banner"
              className="w-full h-auto"
            />
            {/* Optional: Add mobile text overlay here */}
            {/* <div className="absolute inset-0 flex items-center p-6">
        <div className="text-white">
          <h2 className="text-2xl font-bold">Mobile Title</h2>
        </div>
      </div> */}
          </div>
        </section>
      </div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-40">
          {/* Using a product image as background, heavily blurred or darkened */}
          <Image
            src={products[0].img}
            alt="Hero Background"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless Stories Deserve <br />{" "}
            <span className="text-amber-400">Timeless Keepers</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted leather journals and diaries.
            Made with passion, designed for your legacy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="#products"
              className="bg-amber-500 text-stone-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
            >
              Explore Collection <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Handcrafted</h3>
              <p className="text-stone-600">
                Every journal is bound by hand using traditional techniques
                passed down through generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Premium Leather
              </h3>
              <p className="text-stone-600">
                We use only the finest full-grain leather that ages beautifully
                and tells its own story.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                Eco-Friendly
              </h3>
              <p className="text-stone-600">
                Our paper is handmade from recycled cotton, tree-free and
                perfect for any ink.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Curated Collections
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Find the perfect style that resonates with your spirit.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link
                href={cat.href}
                key={idx}
                className="group relative aspect-square overflow-hidden rounded-xl bg-stone-100"
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-serif font-bold text-lg">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Featured Journals
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our most loved pieces, ready to be filled with your thoughts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-stone-900 shadow-sm">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="font-serif text-xl font-bold mb-2 text-stone-900 line-clamp-1"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {Object.entries(product.details)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-stone-500">{key}</span>
                          <span className="text-stone-900 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                  </div>
                  <button className="w-full bg-stone-900 text-white py-3 rounded-xl font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                UrbanDiary
              </h2>
              <p className="max-w-md mb-6">
                We specialize in crafting handmade leather diaries, designed
                with care and precision to bring timeless elegance to your daily
                notes. Each piece is made from premium leather, ensuring
                durability and style. Looking for something unique.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="font-bold text-white">Sazid Khilchi</li>
                <li>
                  <a
                    href="tel:+916350374315"
                    className="hover:text-white transition-colors"
                  >
                    +91 63503 74315
                  </a>
                </li>
                <li>Sudarshanpura 22 godam jaipur</li>
                <li>info@urbandiary.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            © {new Date().getFullYear()} UrbanDiary. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
