import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Cahaya Cargo</h1>
                <ul className="flex space-x-6">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/layanan" className="hover:underline">Layanan</Link></li>
                    <li><Link href="/hubungi-kami" className="hover:underline">Hubungi Kami</Link></li>
                </ul>
            </div>
        </nav>
    );
}