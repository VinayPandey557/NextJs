
export default function({ children }: {
    children: React.ReactNode
}) {
    return <div>
        <div className="border-b text-center">
        20% off for next 30 Days
        </div>
        {children}
    </div>
}