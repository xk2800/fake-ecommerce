import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between">

            <div className="relative inline-block px-4 py-4 text-base font-medium ">
                <Link href="/"><a className="hover:font-bold hover:text-blue-600">FakeStore.com</a></Link>
                
            </div>

            <div className="relative inline-block px-4 py-4 text-base font-medium ">
                <Link href="/products"><a className="hover:font-bold hover:text-blue-600">View All Products</a></Link>
            </div>
        </nav>
    );
}
