import { sizeChart } from '../../utils/sizechart'

const SizeCard = () => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
    <thead>
        <tr className="text-xs md:text-base">
            <th className="border border-gray-300 px-4 py-2">SIZE</th>
            <th className="border border-gray-300 px-4 py-2">CHEST</th>
            <th className="border border-gray-300 px-4 py-2">SHOULDER</th>
            <th className="border border-gray-300 px-4 py-2">LENGTH</th>
            <th className="border border-gray-300 px-4 py-2">SLEEVE LENGTH</th>
        </tr>
    </thead>
    <tbody>
        {sizeChart.map((item) => (
            <tr className="text-xs md:text-base" key={item.size}>
                <td className="border border-gray-300 px-4 py-2">{item.size}</td>
                <td className="border border-gray-300 px-4 py-2">{item.chest}</td>
                <td className="border border-gray-300 px-4 py-2">{item.shoulder}</td>
                <td className="border border-gray-300 px-4 py-2">{item.length}</td>
                <td className="border border-gray-300 px-4 py-2">{item.sleeveLength}</td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default SizeCard