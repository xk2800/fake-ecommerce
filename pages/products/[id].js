import Image from 'next/image';

export const getStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const paths = data.map(products => {
        return {
            params: {
                id: products.id.toString()
            }
        };
    });

    return {
        paths,
        fallback: false
    };
};


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await res.json();

    //console.log(data);

    return {
        props: { products: data }
    };
};

export default function Details({ products }) {
    return (
        <div className="h-screen bg-green-800">
            <br />
            <div className="bg-white grid grid-cols-2">
                <Image src={products.image}
                    alt={products.title}
                    width={150}
                    height={150}
                    className="object-contain"
                />
                <div>
                    <p>{products.title}</p>
                    Rating | number of ratings | amount sold <br />
                    <p>RM{products.price}</p>
                    Shipping <br />
                    <br />
                    ---Add to Cart --- ---buy now---
                </div>
            </div>
            <br />
            ---Prod Specs--- <br />
            <p>{products.category}</p>
            ---Prod Description---<br />
            <p>{products.description}</p>



        </div>
    );
}