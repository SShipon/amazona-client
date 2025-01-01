'use client';

import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Back to top button */}
      <div className="w-full">
        <Button
        
          className="bg-gray-800 w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/careers">Careers</Link>
              </li>
              <li>
                <Link href="/page/blog">Blog</Link>
              </li>
              <li>
                <Link href="/page/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/sell">Sell products on site</Link>
              </li>
              <li>
                <Link href="/page/become-affiliate">Become an Affiliate</Link>
              </li>
              <li>
                <Link href="/page/advertise">Advertise Your Products</Link>
              </li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/shipping">Shipping Rates & Policies</Link>
              </li>
              <li>
                <Link href="/page/returns-policy">Returns & Replacements</Link>
              </li>
              <li>
                <Link href="/page/help">Help</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4 flex-wrap md:flex-nowrap">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="w-14"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer links and contact info */}
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          123 Main Street, Anytown, USA | Phone: +1 (123) 456-7890
        </div>
      </div>
    </footer>
  );
}
