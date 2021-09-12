export default function container({ children }) {
    return (
        <div className="bg-gray-200">
            <div className="mx-auto mx-w-xl w-[80%] ">
                {children}
            </div>
        </div>
    );
}
