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

    const main_amount = 1000;
    let discount, discount_rate = 0;
    discount = main_amount - products.price;
    discount_rate = discount / 10;

    return (
        <div className="h-screen font-secondary text-lg">
            <br />
            <div className="bg-white border-[color:var(--mybrown)] border-[2px] rounded-[10px] grid lg:grid-cols-4 lg:grid-rows-2 m-[20px] py-[10px]">
                <div className="lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1 mx-auto">
                    <Image src={products.image}
                        alt={products.title}
                        width={450}
                        height={450}
                        className="object-contain h-full"
                    />
                </div>
                <div className="lg:col-span-2 lg:row-span-2 mr-[10px]">

                    <p className="font-bold">{products.title}</p>
                    <p className="text-[16px] capitalize">{products.category}</p>
                    <div className="border-[color:var(--myblack)] border-[2px] w-[20%] mt-[10px] mb-[20px]"></div>
                    <p className="font-bold">RM{products.price}</p>
                    <div className="my-[10px]">5 Stars | 5 Reviews</div>
                    <p>{products.description}</p>
                    <p className="my-[10px]">
                        <span className="font-bold">Quantity:</span>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            defaultValue="1"
                            min="1"
                            className="mx-[10px] text-center w-[5%] bg-gray-100"
                        />
                    </p>
                    <p>Free Shipping</p>
                    <div className="uppercase text-center my-[10px]">
                        <div className="mb-[10px]" id="buttons">add to cart</div>
                        <div className="bg-[color:var(--myblack)] text-white font-bold" id="buttons">buy now</div>
                    </div>

                </div>
            </div>


        </div>
    );
}