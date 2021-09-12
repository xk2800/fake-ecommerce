export default function container({ children }) {
    return (
        <div className="bg-[color:var(--myoffwhite)]">
            <div className="mx-auto mx-w-xl w-[80%] text-[color:var(--myblack)]">
                {children}
            </div>
        </div>
    );
}
