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
        <div>
            test
            <p>{products.title}</p>
        </div>
    );
}