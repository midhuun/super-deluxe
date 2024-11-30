

const OfferCard = () => {
  return (
    <div className="md:w-[80%] w-full px-2 py-4 border rounded-lg shadow-lg border-l border-l-black">
      <h1 className="font-semibold">Offers of the day</h1>
      <ul className="font-light px-5 text-sm list-disc">
        <li>5% Off on Purchase of 2+ Products</li>
        <li>40% off on Boxers</li>
        <li>Free Shipping on Orders above 999/-</li>
      </ul>

    </div>
  )
}

export default OfferCard