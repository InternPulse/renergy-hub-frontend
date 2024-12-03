
//props
const VendorCard = () => {
  return (
    <>
    <ul className="flex flex-col gap-2 text-black">
        <li className="items-center flex justify-center max-w-[98px] p-4">vendor.img</li>
        <li className="max-w-[128px] text-wrap">vendor.name</li>
        <li className="font-semibold">vendor.price</li>


    </ul>
    
    
    </>
  )
}

export default VendorCard