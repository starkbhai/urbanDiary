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
            <Link href="#" className="hover:text-stone-900 transition-colors">Home</Link>
            <Link href="#products" className="hover:text-stone-900 transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
            <Link href="#contact" className="hover:text-stone-900 transition-colors">Contact</Link>
          </div>
          <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
            Shop Now
          </button>
        </div>
      </nav>

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
            Timeless Stories Deserve <br /> <span className="text-amber-400">Timeless Keepers</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted leather journals and diaries.
            Made with passion, designed for your legacy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="#products" className="bg-amber-500 text-stone-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
              Explore Collection <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
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
              <p className="text-stone-600">Every journal is bound by hand using traditional techniques passed down through generations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Premium Leather</h3>
              <p className="text-stone-600">We use only the finest full-grain leather that ages beautifully and tells its own story.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-stone-600">Our paper is handmade from recycled cotton, tree-free and perfect for any ink.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Curated Collections</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Find the perfect style that resonates with your spirit.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link href={cat.href} key={idx} className="group relative aspect-square overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-serif font-bold text-lg">{cat.name}</h3>
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
            <h2 className="font-serif text-4xl font-bold mb-4">Featured Journals</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our most loved pieces, ready to be filled with your thoughts.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 group">
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
                  <h3 className="font-serif text-xl font-bold mb-2 text-stone-900 line-clamp-1" title={product.name}>{product.name}</h3>
                  <div className="space-y-2 mb-6">
                    {Object.entries(product.details).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-stone-500">{key}</span>
                        <span className="text-stone-900 font-medium">{value}</span>
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
              <h2 className="font-serif text-2xl font-bold text-white mb-4">UrbanDiary</h2>
              <p className="max-w-md mb-6">
                We specialize in crafting handmade leather diaries, designed with care and precision to bring timeless elegance to your daily notes. Each piece is made from premium leather, ensuring durability and style. Looking for something unique.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="font-bold text-white">Sazid Khilchi</li>
                <li><a href="tel:+916350374315" className="hover:text-white transition-colors">+91 63503 74315</a></li>
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
