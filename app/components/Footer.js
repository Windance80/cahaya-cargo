import Image from "next/image";

export default function Footer() {
    return (
        <section className="text-white mx-auto items-center h-[65vh] md:h-[45vh] relative">

            <Image src="/images/footer.jpeg" alt="footer image background"  width={1920} height={1080} sizes="100vw" className="absolute h-full w-full  object-cover z-[-1]" />

            <div className="absolute bg-blue-700 w-full h-full opacity-70  z-0"></div>

            <div className="relative flex flex-col md:flex-row md:items-center items-start px-8 justify-center h-full ">
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
            <div className="relative text-white p-4">
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
    );
}