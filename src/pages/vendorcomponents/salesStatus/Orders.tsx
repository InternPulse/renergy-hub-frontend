

const Orders = () => {
  return (
    <div className="lg:w-[49%] h-auto bg-white rounded-lg p-2">
      <h1 className="text-xl">Order Status</h1>
      <div className="flex justify-between mt-8 mb-8">
        <div className="h-4 w-[69%] bg-green-600 rounded-md" />
        <div className="h4 w-[19%] bg-[#F9D262] rounded-md" />
        <div className="h4 w-[9%] bg-[#DF7400] rounded-md"/>
      </div>
      <div className="mt-8 mb-8">
        <div className="flex justify-between">
            <div className="flex">
                <div className="bg-green-600 h-4 w-4 mt-auto mb-auto" />
                <h5 
                className="mt-auto mb-auto px-2"
                >Paid</h5>
            </div>
            <h6>68%</h6>
        </div>

        <div className="flex justify-between mt-4">
            <div className="flex">
                <div className="bg-[#F9D262] h-4 w-4 mt-auto mb-auto" />
                <h5
                className="mt-auto mb-auto px-2"
                >Cancelled</h5>
            </div>
            <h6>20%</h6>
        </div>

        <div className="flex justify-between mt-4">
            <div className="flex">
                <div className="bg-[#DF7400] h-4 w-4 mt-auto mb-auto" />
                <h5
                className="mt-auto mb-auto px-2"
                >Returned</h5>
            </div>
            <h6>12%</h6>
        </div>

      </div>
    </div>
  )
}

export default Orders
