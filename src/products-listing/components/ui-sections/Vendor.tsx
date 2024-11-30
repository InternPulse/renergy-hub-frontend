

const Vendor = () => {
  return (
    <>
     <section className="p-16">
    <ul>
        <li className="items flex justify-center rounded-full p-2">vendor.img</li>
        <li> 
          <div className="flex gap-2">
              <p>vendor.name</p>
          </div>
          <p></p>
          <span> rating </span>
        </li>

    </ul>
    <div>
        vendor product card
    </div>
    <hr/>
    <ul className="flex gap-4 text-wrap">
        <li className="flex flex-col ">
            <img src='' alt=''/>
            <h1>FREE LAGOS SHIPPING</h1>
           <p>
           Free Shipping on order above NGN2,000,000
           </p>
        </li>
        <li className="flex flex-col justify-items-center">
        <img src='' alt=''/>
            <h1>ONLINE SUPPORT 24/7 </h1>
           <p>
           Full technical and after sale support
           </p>
        </li>
    </ul>

    


    </section>
    
    
    </>
  )
}

export default Vendor