import Link from "next/link";
import Image from 'next/image';

export default function Products({ products }) {

    //console.log(products);

    return (
        <div>
            <h2>All Products Available</h2>
            <div className="grid grid-cols-4 gap-[10px]">
                {products.map(prods => (
                    <div className="border px-[20px] py-[10px] rounded-[10px]">
                        <Link href={'products/' + prods.id} key={prods.id}>
                            <a>

                                <Image src={prods.image}
                                    alt={prods.title}
                                    width={150}
                                    height={150}
                                />
                                <p className="line-clamp-1">{prods.title}</p>
                                RM{prods.price}


                            </a>
                        </Link>
                    </div>
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