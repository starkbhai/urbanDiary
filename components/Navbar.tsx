import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="font-serif text-2xl font-bold text-stone-900">
                    UrbanDiary
                </Link>
                <div className="hidden gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium text-stone-600 hover:text-amber-700">
                        Home
                    </Link>
                    <Link href="#products" className="text-sm font-medium text-stone-600 hover:text-amber-700">
                        Shop
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-stone-600 hover:text-amber-700">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-stone-600 hover:text-amber-700">
                        Contact
                    </Link>
                </div>
                <button className="rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800">
                    Cart (0)
                </button>
            </div>
        </nav>
    );
}
