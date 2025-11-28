import Image from "next/image";
import Link from "next/link";
import { Award, Users, Globe, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            {/* Navigation (Reused for consistency) */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="font-serif text-2xl font-bold text-stone-900">
                        UrbanDiary
                    </Link>
                    <div className="hidden md:flex gap-8 text-stone-600 font-medium">
                        <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
                        <Link href="/#products" className="hover:text-stone-900 transition-colors">Shop</Link>
                        <Link href="/about" className="text-stone-900 font-bold">About</Link>
                        <Link href="/#contact" className="hover:text-stone-900 transition-colors">Contact</Link>
                    </div>
                    <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                        Shop Now
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {/* Abstract pattern or texture could go here */}
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Journey</h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                        Crafting legacies in leather for over a decade.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/sazid-khilchi.jpg"
                                    alt="Sazid Khilchi - Founder"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-serif text-lg font-bold text-stone-900">"Quality is not an act, it is a habit."</p>
                                <p className="text-stone-500 mt-2 text-sm">- Sazid Khilchi</p>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">
                                    A Decade of <span className="text-amber-600">Excellence</span>
                                </h2>
                                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                                    We specialize in crafting handmade leather diaries, designed with care and precision to bring timeless elegance to your daily notes. Each piece is made from premium leather, ensuring durability and style. Looking for something unique? You've come to the right place.
                                </p>
                                <p className="text-lg text-stone-600 leading-relaxed">
                                    For over 10 years, we have been making and selling handmade journals all over India. Our passion for craftsmanship has allowed us to serve thousands of happy customers, delivering products that are not just stationery, but keepsakes.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div className="font-serif text-3xl font-bold text-stone-900 mb-1">10+</div>
                                    <div className="text-stone-500 text-sm">Years of Experience</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div className="font-serif text-3xl font-bold text-stone-900 mb-1">2 Lac+</div>
                                    <div className="text-stone-500 text-sm">Journals Sold</div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link href="/#contact" className="inline-flex items-center gap-2 text-stone-900 font-bold hover:text-amber-600 transition-colors">
                                    Get in touch with us <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="bg-stone-900 text-stone-400 py-12 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} UrbanDiary. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
