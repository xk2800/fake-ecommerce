import Link from "next/link";
import Image from 'next/image';

export default function Products({ products }) {

    //console.log(products);

    return (
        <div>
            <h2 className="font-main">All Products Available</h2>
            <div className="grid grid-cols-4 gap-[15px] font-secondary">
                {products.map(prods => (

                    <Link href={'products/' + prods.id} key={prods.id}>
                        <a>
                            <div className="border px-[20px] py-[10px] rounded-[10px] bg-white hover:shadow-2xl hover:border-gray-200 hover:border-[1.5px]">
                                <div className="text-center">
                                    <Image src={prods.image}
                                        alt={prods.title}
                                        width={150}
                                        height={150}
                                        className=""
                                    />
                                    <p className="line-clamp-1 hover:line-clamp-3">{prods.title}</p>
                                    RM{prods.price}
                                </div>
                            </div>
                        </a>
                    </Link>

                ))}
            </div>
        </div >
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    //console.log(data);

    return {
        props: { products: data }
    };
};