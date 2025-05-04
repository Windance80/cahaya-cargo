import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Layanan() {
    return (
        <div>
            <Navbar />
            <section className="container mx-auto py-12">
                <h1 className="text-3xl font-bold text-center mb-8">Layanan Kami</h1>
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
            </section>
        </div>
    );
}