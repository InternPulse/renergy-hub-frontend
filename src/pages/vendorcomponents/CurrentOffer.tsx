

const CurrentOffer = () => {
  return (
    <div className="w-[39%] h-auto bg-white rounded-lg p-2">
      <h1 className="text-xl mb-8">
        Current Offers
      </h1>

      <div className="flex-col justify-between mb-3">
        <div className="flex justify-between mb-1">
            <h3>
                40% Discount Offer
            </h3>
            <h4 className="text-gray-400">
                Expires 28th July 2025
            </h4>
        </div>
      <div className="h-8 w-full bg-gray-300 rounded-md">
        <div className="max-w-60 bg-green-300 h-8"/>
    </div>
      </div>

    <div className="flex-col justify-between mb-3">
        <div className="flex justify-between mb-1">
            <h3>
                Christmas Discount Offer
            </h3>
            <h4 className="text-gray-400">
                Expires 28th July 2025
            </h4>
        </div>
      <div className="h-8 w-full bg-gray-300 rounded-md">
        <div className="max-w-40 bg-green-300 h-8"/>
    </div>
      </div>

    </div>
  )
}

export default CurrentOffer
