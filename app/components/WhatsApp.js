import Image from "next/image";

export default function WhatsApp() {
    const phoneNumber = "081293603304"
    const message = "Halo, selamat datang! Kami menyediakan jasa import barang dari China, Taiwan, Eropa, dan Jepang. Bagaimana kami bisa membantu Anda? Silakan tanya atau minta penawaran!";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Contact us on WhatsApp"
        >
            <Image
                src="/images/whatsapp.ico"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8"
            />
        </a>
    );
}