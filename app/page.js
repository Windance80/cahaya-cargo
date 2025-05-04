"use client"

import Navbar from "./components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleVisibility = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  // Data for the lists (to avoid repetition in code)
  const faqItems = [
    {
      question: 'Bagaimana cara menggunakan jasa import Wilopo Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Wilopo Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
    {
      question: 'Bagaimana cara menggunakan jasa import Wilopo Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Wilopo Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
    {
      question: 'Bagaimana cara menggunakan jasa import Wilopo Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Wilopo Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
    {
      question: 'Bagaimana cara menggunakan jasa import Wilopo Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Wilopo Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
    {
      question: 'Bagaimana cara menggunakan jasa import Wilopo Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Wilopo Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image src="/images/sea-freight.jpg" alt="hero image" layout="fill" objectFit="cover" quality={100} priority />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-left text-white px-4">

            <h1 className="text-4xl font-bold mb-4">Cahaya Cargo - Solusi Import Barang Anda</h1>
            <p className="text-lg mb-6">
              Kami menyediakan jasa pengiriman barang dari China, Taiwan, Jepang, Jerman, dan Eropa ke Indonesia dengan cepat dan aman.
            </p>
            <Link href="/hubungi-kami" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>

      </section>

      {/* Q&A sections */}
      <section className="flex flex-col px-4 my-12 min-h-[75vh] items-center justify-center">

        <Image src="/images/faq_bg.jpg" alt="Q&A image background" objectFit="cover" width={1920} height={1080} sizes="100vw" className="absolute opacity-10 h-[75vh] w-full object-cover z-[-1]" />

        <div className="text-left text-black py-20 items-center justify-center">
          <h1 className="text-4xl font-bold mb-3">Pertanyaan yang sering diajukan</h1>
          <p className="mb-2">Kami merangkum pertanyaan yang paling sering diajukan oleh customer kami.</p>

          <div className="flex flex-col md:flex-row gap-6">
            {/* left column: 3 lists */}
            <div className="flex-1 space-y-6">
              {faqItems.slice(0, 3).map((item, index) => (
                <li key={index} className="cursor-pointer" onClick={() => toggleVisibility(index)}>

                  {item.question}

                  <p className={`mt-2 transition-all duration-300 ${faqIndex === index ? 'block' : 'hidden'}`}>
                    {item.answer}
                  </p>
                </li>
              ))}
            </div>

            {/* right column: 2 lists */}
            <div className="flex-1 space-y-6">
              {faqItems.slice(3, 5).map((item, index) => (
                <li key={index} className="cursor-pointer" onClick={() => toggleVisibility(index + 3)}>

                  {item.question}

                  <p className={`mt-2 transition-all duration-300 ${faqIndex === index + 3 ? 'block' : 'hidden'}`}>
                    {item.answer}
                  </p>
                </li>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">

            <p className="mb-8">- - - - - - Punya pertanyaan lain - - - - - -</p>
            <Link href="/hubungi-kami" className="text-blue-900 px-6 py-3 rounded hover:bg-blue-700 hover:text-white outline">
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>


      </section>


      {/* Services Overview */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="/images/sea-freight.jpg" alt="Pengiriman Laut" width={300} height={200} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Pengiriman Laut</h3>
            <p>Pengiriman barang besar dengan biaya terjangkau melalui laut.</p>
          </div>
          <div className="text-center">
            <Image src="/images/air-freight.jpg" alt="Pengiriman Udara" width={300} height={200} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Pengiriman Udara</h3>
            <p>Pengiriman cepat untuk barang berharga dan waktu sensitif.</p>
          </div>
          <div className="text-center">
            <Image src="/images/customs.jpg" alt="Jasa Kepabeanan" width={300} height={200} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Jasa Kepabeanan</h3>
            <p>Penanganan dokumen dan izin kepabeanan dengan profesional.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Mengimpor Barang Anda?</h2>
        <Link href="/hubungi-kami" className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200">
          Kontak Kami
        </Link>
      </section>
    </div>
  );
}