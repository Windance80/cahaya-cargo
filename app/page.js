"use client"

import Navbar from "./components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import VideoEmbed from "./components/VideoEmbed";

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

      {/* Pencapaian sections */}
      <div className="relative w-full bg-blue-500 mt-10 text-white p-10 ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-10 px-4">Pencapaian Cahaya Cargo</h1>

          <div className="flex flex-row gap-x-10 ">
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
              <div className="flex flew-row md:flex-col md:items-center">
                <div>
                  <Image src="/images/account.svg" width={64} height={64} alt="akun icon" objectFit="cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">20,000+</p>
                  <p>Pelanggan Loyal</p>
                </div>
              </div>
              <div className="flex flew-row md:flex-col md:items-center">
                <div>
                  <Image src="/images/box.svg" width={64} height={64} alt="box icon" objectFit="cover" />
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
                  <Image src="/images/smiley.svg" width={64} height={64} alt="smiley icon" objectFit="cover" />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <p className="text-2xl">94%</p>
                  <p>Kepuasan Pelanggan</p>
                </div>
              </div>
              <div className="flex flew-row md:flex-col md:items-center ">
                <div>
                  <Image src="/images/plane.svg" width={64} height={64} alt="akun icon" objectFit="cover" />
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
      <div className="container mx-auto  my-8 outline-2 outline-gray-100 shadow-lg p-10">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-3 px-4">Testimoni Pelanggan</h1>
        </div>

        <div className="flex flex-col md:flex-row md:gap-1 gap-8 items-center my-16 justify-center md:mx-auto ">

          {/* carousel testimoni start */}
          <div className="flex-1 relative overflow-hidden">
            <div className="flex animate-slide">
              {/* <!-- Carousel Items --> */}
              <div className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 mb-4"><i>Forwarder terpercaya, <br />impor barang dari China lancar, <br />pengiriman cepat, sangat puas!</i></p>
                  <p>Budi Santoso</p>
                  <p className="text-gray-600">Penjual mainan anak</p>
                </div>
              </div>
              <div className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 mb-4"><i>Forwarder Pelayanan profesional, <br />harga kompetitif, <br />barang dari China tiba aman, <br />recommended!</i></p>
                  <p>Anita Wijaya</p>
                  <p className="text-gray-600">Penjual baju instagram</p>
                </div>
              </div>
              <div className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 mb-4"><i>Proses impor mudah, forwarder responsif,<br /> sangat membantu bisnis saya,<br /> terima kasih!</i></p>
                  <p>Rudi Hartono</p>
                  <p className="text-gray-600">Penjual baju tiktok</p>
                </div>
              </div>
              <div className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 mb-4"><i>Pengalaman impor dari China menyenangkan, <br />forwarder andal, tepat waktu, <br />luar biasa!</i></p>
                  <p>Siti Rahmah</p>
                  <p className="text-gray-600">Penjual alat2 rumah tangga<br /> instagram</p>
                </div>
              </div>
              <div className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 h-64 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 mb-4"><i>Impor dari China efisien, <br />forwarder profesional, <br />barang sampai tepat waktu, <br />sangat recommended!</i></p>
                  <p>Dewi Lestari</p>
                  <p className="text-gray-600">Penjual komponen elektronik tiktok</p>
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
        <div className="relative w-2/3 overflow-hidden mx-auto">
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
      <section className="text-white mx-auto items-center h-[45vh] relative">

        <Image src="/images/footer.jpeg" alt="footer image background" objectFit="cover" width={1920} height={1080} sizes="100vw" className="absolute h-full w-full object-cover z-[-1]" />

        <div className="absolute bg-blue-700 w-full h-full opacity-70  z-0"></div>

        <div className="relative flex flex-col md:flex-row md:items-center items-start px-8 justify-center h-full">
          <div>
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              className="mb-4"
              alt="Logo icon"
            />
            <span className="flex mb-2 gap-2">
              <Image
                src="/images/telephone.png"
                width={24}
                height={24}
                alt="Telephone icon"
              />
              (+62) 812-9360-3304
            </span>
            <span className="flex mb-2 gap-2">
              <Image
                src="/images/mail.png"
                width={24}
                height={24}
                alt="Mail icon"
              />
              cahayadayasejahtera@gmail.com
            </span>
            <span className="flex mb-2 gap-2 items-center">
              <Image
                src="/images/address.png"
                width={24}
                height={24}
                alt="Address icon"
              />
              <div>
                Ruko Graha Boulevard Summarecon Serpong <br />
                Blok GBVB No.10 Jalan Gading Serpong Boulevard  <br />
                Curug Sangereng, Kelapa Dua KABUPATEN TANGERANG Banten
              </div>
            </span>
          </div>

          <div className="text-xl mt-4">
            Get in Touch
            <Image
              src="/images/instagram.svg"
              width={32}
              height={32}
              alt="Instagram icon"
              className="mt-2"
            />
          </div>

        </div>

        {/* footer */}
        <div className="relative text-white pb-4">
          <div className="absolute bg-blue-700 left-0 top-0 h-full w-full z-0 " />
          <div className="flex flex-col items-center" >
            <div className="z-10">
              <p className="text-xl">Cahaya Cargo</p>
              <div>
                Ruko Graha Boulevard Summarecon Serpong <br />
                Blok GBVB No.10 Jalan Gading Serpong Boulevard  <br />
                Curug Sangereng, Kelapa Dua KABUPATEN TANGERANG Banten <br />
                Indonesia
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 h-full w-full bg-blue-700 opacity-20 z-10" />
        </div>

      </section>
    </div>
  );
}