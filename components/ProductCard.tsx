import Image from 'next/image';
import { Product } from '@/lib/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
            <div className="relative aspect-square overflow-hidden bg-stone-200">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-bold text-stone-800 group-hover:text-amber-700">
                    {product.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">
                    {product.description}
                </p>
                <div className="mt-auto pt-4">
                    <span className="text-lg font-semibold text-amber-800">{product.price}</span>
                    <button className="mt-3 w-full rounded-md bg-stone-900 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
