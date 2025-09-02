"use client"

import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'

export default function PreviewImage() {

  const { theme } = useTheme();

  return (
    <section className="py-8 mb-16">
      <Link href="/user/johndoe">
        <div className="mx-auto max-w-5xl rounded-xl shadow-2xl border border-primary">
          <Image 
            src={theme === "light" ? "/images/previewImage.png" : "/images/previewImageDark.png"}
            alt="Preview" 
            width={800} 
            height={500} 
            className="w-full h-auto object-cover rounded-xl" 
            priority
            unoptimized
            />
        </div>
      </Link>
    </section>
  )
}
