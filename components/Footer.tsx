export default function Footer() {
    return (
        <footer className="bg-stone-900 py-12 text-stone-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-serif text-xl font-bold text-white">UrbanDiary</h3>
                        <p className="mt-4 text-sm">
                            Handcrafted leather journals for the modern writer.
                            Preserving the art of traditional bookbinding.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Shop</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>123 Artisan Way</li>
                            <li>Jaipur, Rajasthan, India</li>
                            <li>hello@urbandiary.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-stone-800 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} UrbanDiary. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
