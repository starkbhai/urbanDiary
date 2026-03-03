import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function DesktopBanner() {
  return (
    <div>
       <section className="relative w-full h-[70vh] min-h-[600px] bg-[#2F4739] overflow-hidden">
      {/* Background Image - Replace with your actual image paths */}
      <div className="absolute inset-0">
        <Image
          src="/images/desktop-banner.jpg" // Replace with your desktop image path
          alt="Handicraft banner"
          fill
          priority
          className="object-cover hidden md:block"
          sizes="100vw"
        />
        <Image
          src="/images/mobile-banner.webp" // Replace with your mobile image path
          alt="Handicraft banner mobile"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          {/* Pre-heading */}
          <p className="text-[#DDEFE0] text-sm md:text-base font-medium mb-2 tracking-wider">
            AMAZING OFFER! GET 10% ADDITIONAL DISCOUNT
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Indian Handmade Gifts
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
            Discover traditional craft with a touch of artistic personalization
          </p>
          
          {/* CTA Button */}
          <Link
            href="/collections/all"
            className="inline-flex items-center px-8 py-4 bg-[#DDEFE0] text-[#2F4739] font-semibold text-lg rounded-md hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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

          {/* Free Shipping Badge */}
          <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4h14l-1 7H4L3 4z" />
              </svg>
              FREE DOMESTIC SHIPPING
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-2 0v1h2z" clipRule="evenodd" />
                <path d="M3 11h14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
              </svg>
              FREE SURPRISE GIFT
            </span>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}


