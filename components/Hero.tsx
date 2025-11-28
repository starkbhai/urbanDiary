import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative h-[70vh] w-full overflow-hidden bg-stone-900">
            <div className="absolute inset-0 opacity-60">
                <Image
                    src="/images/tree-of-life.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover blur-sm"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-7xl">
                    UrbanDiary
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-stone-200 sm:text-xl">
                    Discover the art of writing with our premium, handcrafted leather journals.
                    Each piece is a unique masterpiece, waiting for your story.
                </p>
                <div className="mt-10 flex gap-4">
                    <a
                        href="#products"
                        className="rounded-full bg-amber-700 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-600"
                    >
                        Shop Collection
                    </a>
                    <a
                        href="#about"
                        className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                        Our Story
                    </a>
                </div>
            </div>
        </div>
    );
}
