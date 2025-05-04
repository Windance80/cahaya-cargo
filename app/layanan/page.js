'use client'

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Layanan() {
    const [activeTab, setActiveTab] = useState('LCL by Sea');

    const tabs = [
        { name: 'LCL by Sea', id: 'lcl-sea' },
        { name: 'LCL by Air', id: 'lcl-air' },
        { name: 'FCL', id: 'fcl' },
    ];

    const content = {
        'LCL by Sea': (
            <div className="text-black bg-white p-6 rounded-lg shadow-md">
                <Image
                    src="/images/lvl-by-sea.png"
                    width={0}
                    height={0}
                    objectFit="cover"
                    sizes="100vw, 100vw"
                    className="w-full h-auto"
                    alt="lcl by sea"
                />
                Less Container Load by Sea adalah pengiriman barang menggunakan kapal kargo untuk kuantitas dan ukuran kecil di dalam satu container bersama pengiriman lainnya. Keuntungan dari LCL adalah biaya pengiriman import barang dari China ke Indonesia akan jauh lebih murah, mulai dari sekitar 4 juta/CBM dengan minimum pengiriman 0.1CBM per sekali kirim. Kami akan menjamin pengiriman barang Anda selalu dalam keadaan aman. Jika terjadi kehilangan, kami akan menggantinya sesuai dengan jumlah nilai barang.
            </div>
        ),
        'LCL by Air': (
            <div className="text-black bg-white p-6 rounded-lg shadow-md">

                <Image
                    src="/images/lvl-by-air.png"
                    width={0}
                    height={0}
                    objectFit="cover"
                    sizes="100vw, 100vw"
                    className="w-full h-auto"
                    alt="lcl by air"
                />
                Less Container Load by Air adalah pengiriman barang melalui jalur udara atau menggunakan pesawat. Kelebihan dari pengiriman import barang dari China ke Indonesia ini adalah estimasi waktu yang lebih cepat hanya 5-7 Hari. Biaya tambahan akan dikenakan untuk produk yang mengandung Baterai dan Bermerk (Branded). Pengiriman LCL by Air dapat dilakukan dengan minimum berat 3Kg untuk sekali pengiriman.
            </div>
        ),
        'FCL': (
            <div className="text-black bg-white p-6 rounded-lg shadow-md">
                <Image
                    src="/images/fcl.png"
                    width={0}
                    height={0}
                    objectFit="cover"
                    sizes="100vw"
                    className="w-full h-auto"
                    alt="fcl"
                />
                Full Container Load adalah pengiriman barang dalam satu kontainer penuh sehingga import barang dari China Anda dapat dikirim tanpa tercampur dengan milik orang lain. Anda juga dapat menggunakan jasa FCL untuk pengiriman barang dalam jumlah besar di satu kontainer. Satu kontainer dapat menampung barang mulai 78 CBM hingga 80 CBM. Pengiriman barang FCL ini hanya bisa melalui jalur laut/kapal kargo dengan estimasi pengiriman sekitar 3-4 Minggu.
            </div>
        ),
    };

    return (
        <div>
            <Navbar />
            {/* hero image */}
            <section className="container mx-auto h-full my-8 mb-12">
                <Image
                    src="/images/layanan-hero.jpg"
                    layout="fill"
                    alt="layanan hero image"
                    objectFit="cover"
                    className="-z-30"
                />
                <div className="absolute inset-0 bg-black opacity-50 -z-20">
                </div>
                <div className="flex items-center justify-center ">
                    <div className="text-left text-white px-4 ">
                        <h1 className="text-4xl font-bold mb-2">Layanan Kami</h1>
                        <p className="text-lg mb-2">
                            Semua layanan kami profesional dan memuaskan
                        </p>
                        <div className="container mx-auto">
                            {/* Tab Navigation */}
                            <div className="flex border-b border-gray-200 mb-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`px-4 py-1 font-medium focus:outline-none transition-colors ${activeTab === tab.name
                                            ? 'border-b-2 border-blue-500 text-blue-300'
                                            : 'text-gray-300 hover:text-white'
                                            }`}
                                        onClick={() => setActiveTab(tab.name)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            {/* Tab Content */}
                            <div>{content[activeTab]}</div>
                        </div>
                        {/* <div className="container">
                            <div id="LCL by Sea" className="text-black bg-white">
                                Less Container Load by Sea adalah pengiriman barang menggunakan kapal kargo untuk kuantitas dan ukuran kecil di dalam satu container bersama pengiriman lainnya. Keuntungan dari LCL adalah biaya pengiriman import barang dari China ke Indonesia akan jauh lebih murah, mulai dari sekitar 4 juta/CBM dengan minimum pengiriman 0.1CBM per sekali kirim. Kami akan menjamin pengiriman barang Anda selalu dalam keadaan aman. Jika terjadi kehilangan, kami akan menggantinya sesuai dengan jumlah nilai barang.
                            </div>
                            <div id="LCL by Air" className="text-black bg-white">
                                Less Container Load by Air adalah pengiriman barang melalui jalur udara atau menggunakan pesawat. Kelebihan dari pengiriman import barang dari China ke Indonesia ini adalah estimasi waktu yang lebih cepat hanya 5-7 Hari. Biaya tambahan akan dikenakan untuk produk yang mengandung Baterai dan Bermerk (Branded). Pengiriman LCL by Air dapat dilakukan dengan minimum berat 3Kg untuk sekali pengiriman.
                            </div>
                            <div id="FCL" className="text-black bg-white">
                                Full Container Load adalah pengiriman barang dalam satu kontainer penuh sehingga import barang dari China Anda dapat dikirim tanpa tercampur dengan milik orang lain. Anda juga dapat menggunakan jasa FCL untuk pengiriman barang dalam jumlah besar di satu kontainer. Satu kontainer dapat menampung barang mulai 78 CBM hingga 80 CBM. Pengiriman barang FCL ini hanya bisa melalui jalur laut/kapal kargo dengan estimasi pengiriman sekitar 3-4 Minggu.
                            </div>
                        </div> */}
                    </div>
                </div>
            </section >

            {/* Kategori produk start */}
            <section className="container mx-auto py-8 mb-10">
                <div >
                    <h1 className="text-4xl font-bold">Kategori Produk</h1>
                    <p>Berbagai macam kategori barang yang dapat kami impor</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/tas.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="tas"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Tas</h2>
                        <p className="text-center mt-2">Tas fashion wanita, tas fashion pria, tas ransel, tas branded, tas gantung, tas gunung, dan lainnya.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/sepatu.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="sepatu"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Sepatu</h2>
                        <p className="text-center mt-2">Sepatu fashion, sepatu kulit, sepatu pria, sepatu wanita, sandal, dan lainnya.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/gelang.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="cincin jam gelang"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Umum & Lartas</h2>
                        <p className="text-center mt-2">Aksesoris, gelang, klip, ikat rambut, kacamata, casing HP, dan lainnya. Segala jenis barang yang bebas izin import.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/ijin-masuk.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="ijin dokumen"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Izin Masuk</h2>
                        <p className="text-center mt-2">Kami membantu pengurusan izin masuk produk-produk khusus yang Anda inginkan.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/garmen.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="garmen"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Semi Garmen</h2>
                        <p className="text-center mt-2">Kaos kaki, pakaian dalam, handuk, serbet, dan lainnya. Segala jenis kain yang berukuran kecil.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/kosmetik.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="kosmetik"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Kosmetik, Obat-Obatan, Makanan</h2>
                        <p className="text-center mt-2">Segala jenis kosmetik, makanan, minuman, obat-obatan, rempah, dan lainnya.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/forklift.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="forklift"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Mesin dan Barang Berat</h2>
                        <p className="text-center mt-2">Berbagai jenis produk yang berkaitan dengan mesin dan barang berat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/tekstil.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="w-full h-auto rounded-lg aspect-square object-cover"
                            alt="tekstil"
                        />
                        <h2 className="text-2xl font-bold text-center mt-4">Tekstil</h2>
                        <p className="text-center mt-2">Produk yang masuk kategori tekstil, seperti katun, katun toyobo, benang, serat benang, dan lainnya.</p>
                    </div>
                </div>
                {/* <div className="flex flex-col">
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/tas.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="tas"
                        />
                        <h2 className="text-2xl font-bold text-center">Tas</h2>
                        <p className="text-center">Tas fashion wanita, Tts fashion pria, tas ransel, tas branded, tas gantung, tas gunung, dan Lainnya.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/sepatu.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="sepatu"
                        />
                        <h2 className="text-2xl font-bold text-center">Sepatu</h2>
                        <p className="text-center">Sepatu fashion, sepatu kulit, sepatu pria, sepatu wanita, sandal, dan lainnya</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/gelang.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="cincin jam gelang"
                        />
                        <h2 className="text-2xl font-bold text-center">Umum & Lartas</h2>
                        <p className="text-center">Aksesoris, gelang, klip, ikat rambut, kacamata, casing HP, dan lainnya. Segala jenis barang yang bebas izin import.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/ijin-masuk.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"                            
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="ijin dokumen"
                        />
                        <h2 className="text-2xl font-bold text-center">Izin Masuk</h2>
                        <p className="text-center">Kami membantu pengurusan izin masuk produk-produk khusus yang Anda inginkan.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/garmen.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"                            
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="garmen"
                        />
                        <h2 className="text-2xl font-bold text-center">Semi Garmen</h2>
                        <p className="text-center">Kaos kaki, pakaian dalam, handuk, serbet, dan lainnya. Segala jenis kain yang berukuran kecil.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/kosmetik.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"                            
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="kosmetik"
                        />
                        <h2 className="text-2xl font-bold text-center">Kosmetik, Obat-Obatan, Makanan</h2>
                        <p className="text-center">Segala jenis kosmetik, makanan, minuman, obat-obatan, rempah, dan lainnya.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/forklift.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"                            
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="forklift"
                        />
                        <h2 className="text-2xl font-bold text-center">Mesin dan Barang Berat</h2>
                        <p className="text-center">Berbagai jenis produk yang berkaitan dengan mesin dan barang berat.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src="/images/tekstil.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            objectFit="cover"                            
                            className="w-50 h-auto mt-4 aspect-[1]"
                            alt="tekstil"
                        />
                        <h2 className="text-2xl font-bold text-center">Tekstil</h2>
                        <p className="text-center">Produk yang masuk kategori tekstil, seperti katun, katun toyobo, benang, serat benang, dan lainnya.</p>
                    </div>
                </div> */}

            </section>




            {/* Kategori produk end */}





            {/* <section className="container mx-auto py-12">
                <h1 className="text-3xl font-bold text-center mb-2">Layanan Kami</h1>
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <Image src="/images/sea-freight.jpg" alt="Pengiriman Laut" width={400} height={300} className="md:mr-8 mb-4 md:mb-0" />
                        <div>
                            <h2 className="text-2xl font-semibold">Pengiriman Laut</h2>
                            <p>
                                Kami menawarkan pengiriman laut untuk barang besar dan berat dengan biaya kompetitif. Cocok untuk import dari China, Jepang, dan Eropa.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <Image src="/images/air-freight.jpg" alt="Pengiriman Udara" width={400} height={300} className="md:mr-8 mb-4 md:mb-0" />
                        <div>
                            <h2 className="text-2xl font-semibold">Pengiriman Udara</h2>
                            <p>
                                Layanan pengiriman udara untuk barang yang membutuhkan kecepatan, seperti elektronik dan barang berharga.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <Image src="/images/customs.jpg" alt="Jasa Kepabeanan" width={400} height={300} className="md:mr-8 mb-4 md:mb-0" />
                        <div>
                            <h2 className="text-2xl font-semibold">Jasa Kepabeanan</h2>
                            <p>
                                Kami menangani semua dokumen dan izin kepabeanan untuk memastikan barang Anda sampai tanpa hambatan.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <Image src="/images/door-to-door.jpg" alt="Pengiriman Door-to-Door" width={400} height={300} className="md:mr-8 mb-4 md:mb-0" />
                        <div>
                            <h2 className="text-2xl font-semibold">Pengiriman Door-to-Door</h2>
                            <p>
                                Layanan lengkap dari pengambilan barang di negara asal hingga pengantaran ke alamat Anda di Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div >
    );
}