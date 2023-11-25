export default function Container({children}) {
    return (
        <div className="w-12/12 h-max">
            {children}
        </div>
    )
}