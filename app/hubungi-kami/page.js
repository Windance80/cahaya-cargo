'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HubungiKami() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/images/1.PNG',
        '/images/2.PNG',
        '/images/3.PNG',
        '/images/4.jpg',
        '/images/5.webp',
        '/images/6.jpg',
        '/images/7.jpeg',
        '/images/8.jpg',
    ];

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div>
            <Navbar />

            {/* carousel images start */}

            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                {/* Carousel Container */}
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div key={index} className="min-w-full">

                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={800}
                                height={400}
                                className="w-full h-96 object-cover"
                                priority={index === 0} // Optimize first image
                            />
                        </div>
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                >
                    &#10094;
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                >
                    &#10095;
                </button>

                {/* Dots for AngledArrow */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* carousel images end */}

            {/* Hubungi kami start */}

            <section className="container mx-auto my-10">
                <div className="flex flex-col text-center items-center justify-center mb-4">
                    <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
                    <p className="text-xl opacity-50">------ Kunjungi alamat kantor kami ------</p>
                </div>
                <div className="flex flex-col md:flex-row text-left  justify-center p-4">
                    <div>
                        <span className="text-xl opacity-50">
                            Office Jakarta
                        </span>
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
                    <div>

                    </div>
                </div>
            </section>

            {/* Hubungi kami end */}



            <Footer />
        </div>
    );
}