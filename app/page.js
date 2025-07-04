"use client"

import Navbar from "./components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import VideoEmbed from "./components/VideoEmbed";
import Footer from "./components/Footer";

export default function Home() {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleVisibility = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  // Data for the lists (to avoid repetition in code)
  const faqItems = [
    {
      question: 'Bagaimana cara menggunakan jasa import Cahaya Cargo?',
      answer:
        'Caranya mudah. Cukup hubungi Layanan Pelanggan atau tim Penjualan kami untuk arahan lebih lanjut. Cahaya Cargo akan membantu proses pembayaran ke pemasok, pengiriman barang, pengurusan pajak dan bea cukai, hingga pengiriman ke alamat Anda.',
    },
    {


      question: 'Berapa lama proses pengiriman barang di Cahaya Cargo?',
      answer:
        'Waktu pengiriman barang import China Anda, kurang lebih 30 hari untuk pengiriman jalur Laut, dan sekitar 7 hari untuk pengiriman lewat Udara.',
    },
    {
      question: 'Kapan waktu operasional Layanan Pelangan Cahaya Cargo?',
      answer:
        'Layanan pelanggan kami beroperasi pada jam 08.00-22.00 di hari senin-Jumat dan pukul 08.00-17.00 di hari Sabtu.',
    },
    {
      question: 'Bagaimana jika saya ingin komplain, konsultasi, dan lainnya?',
      answer:
        'Waktu pengiriman barang import China Anda, kurang lebih 30 hari untuk pengiriman jalur Laut, dan sekitar 7 hari untuk pengiriman lewat Udara.',
    },
    {
      question: 'Bagaimana cara saya untuk mengikuti pembelajaran di Kelas Impor?',
      answer:
        'Anda bisa langsung mendaftarkan diri melalui website untuk mengikuti Kelas Impor. Setelah itu, Anda akan dihubungi langsung untuk menghadiri Kelas Impor secara online',
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        {/* <Image src="/images/sea-freight.jpg" alt="hero image" layout="fill" objectFit="cover" quality={100} priority className="-z-30" /> */}

        <Image src="/images/sea-freight.jpg" alt="hero image" fill  quality={100} priority className="-z-30 object-cover" />

        <div className="absolute inset-0 bg-black opacity-50 -z-20" />
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

      {/* Pencapaian sections */}
      <div className="relative w-full bg-blue-500 mt-10 text-white p-10 ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-10 px-4">Pencapaian Cahaya Cargo</h1>

          <div className="flex flex-row gap-x-10 ">
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
              <div className="flex flew-row md:flex-col md:items-center">
                <div>
                  <Image src="/images/account.svg" width={64} height={64} alt="akun icon" className="object-cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">20,000+</p>
                  <p>Pelanggan Loyal</p>
                </div>
              </div>
              <div className="flex flew-row md:flex-col md:items-center">
                <div>
                  <Image src="/images/box.svg" width={64} height={64} alt="box icon"  className="object-cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">15,000+</p>
                  <p>Total Kubikasi</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
              <div className="flex flew-row md:flex-col md:items-center">
                <div>
                  <Image src="/images/smiley.svg" width={64} height={64} alt="smiley icon" className="object-cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">94%</p>
                  <p>Kepuasan Pelanggan</p>
                </div>
              </div>
              <div className="flex flew-row md:flex-col md:items-center ">
                <div>
                  <Image src="/images/plane.svg" width={64} height={64} alt="akun icon"  className="object-cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">15,000+</p>
                  <p>Total Pengiriman</p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* Q&A sections */}
      <section className="flex flex-col px-4 mb-12 min-h-[75vh] items-center justify-center">

        <Image src="/images/faq_bg.jpg" alt="Q&A image background"  width={1920} height={1080} sizes="100vw" className="absolute opacity-10 h-[75vh] w-full object-cover z-[-1]" />

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
      {/* <section className="container mx-auto py-12 ">
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
      </section> */}

      {/* Testimoni pelanggan */}
      <div className="container mx-auto  my-8 outline-2 outline-gray-300 shadow-lg p-10 rounded-lg">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-3 px-4">Testimoni Pelanggan</h1>
        </div>

        <div className="flex flex-col md:flex-row md:gap-1 gap-8 items-center my-16 justify-center md:mx-auto">

          {/* carousel testimoni start */}
          <div className="w-full md:flex-1">
            <div className="flex-1 relative overflow-hidden">
              <div className="flex animate-slide">
                {/* <!-- Carousel Items --> */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-600 mb-4"><i>Forwarder terpercaya, impor barang dari China lancar, pengiriman cepat, sangat puas!</i></p>
                    <p>Budi Santoso</p>
                    <p className="text-gray-600">Penjual mainan anak</p>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-600 mb-4"><i>Forwarder Pelayanan profesional, harga kompetitif, barang dari China tiba aman, recommended!</i></p>
                    <p>Anita Wijaya</p>
                    <p className="text-gray-600">Penjual baju instagram</p>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-600 mb-4"><i>Proses impor mudah, forwarder responsif, sangat membantu bisnis saya, terima kasih!</i></p>
                    <p>Rudi Hartono</p>
                    <p className="text-gray-600">Penjual baju tiktok</p>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-600 mb-4"><i>Pengalaman impor dari China menyenangkan, forwarder andal, tepat waktu, luar biasa!</i></p>
                    <p>Siti Rahmah</p>
                    <p className="text-gray-600">Penjual alat2 rumah tangga instagram</p>
                  </div>
                </div>
                <div className="w-full flex-shrink-0">
                  <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                    <p className="text-gray-600 mb-4"><i>Impor dari China efisien, forwarder profesional, barang sampai tepat waktu, sangat recommended!</i></p>
                    <p>Dewi Lestari</p>
                    <p className="text-gray-600">Penjual komponen elektronik tiktok</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* carousel testimoni end */}

          {/* youtube start */}
          <VideoEmbed />
          {/* youtube end */}
        </div>
        {/* carousel pic start */}
        <div className="relative md:w-2/3 overflow-hidden mx-auto">
          <div className="flex animate-slide-pic">
            {/* <!-- Original 5 Images --> */}
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer1.webp" height={0} width={0} alt="pelanggan photo 1" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer2.webp" height={0} width={0} alt="pelanggan photo 2" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer3.png" height={0} width={0} alt="pelanggan photo 3" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer4.webp" height={0} width={0} alt="pelanggan photo 4" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer5.webp" height={0} width={0} alt="pelanggan photo 5" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            {/* <!-- Duplicated 5 Images for Seamless Loop --> */}
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer1.webp" height={0} width={0} alt="pelanggan photo 1" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer2.webp" height={0} width={0} alt="pelanggan photo 2" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer3.png" height={0} width={0} alt="pelanggan photo 3" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer4.webp" height={0} width={0} alt="pelanggan photo 4" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
            <div className="w-[33.3%] flex-shrink-0">
              <Image src="/images/customer5.webp" height={0} width={0} alt="pelanggan photo 5" sizes="(max-width: 768px) 20vw, 13.33vw" className="w-full h-auto object-cover aspect-[138/148]" />
            </div>
          </div>
        </div>


        {/* carousel pic end */}
      </div>

      {/* CTA */}
      <Footer />

    </div>
  );
}