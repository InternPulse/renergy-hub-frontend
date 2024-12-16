
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../src/components/ui/carousel"

import img1 from "./../vendorDashboard/assets/img1.png"
import img2 from "./../vendorDashboard/assets/img2.png"
import img3 from "./../vendorDashboard/assets/img3.png"

const TopSelling = () => {
  return (
    <div className="lg:w-[59%] h-auto bg-white rounded-lg p-2">
      <h1 className="text-xl">
        Top Selling Products
      </h1>
      <div className="w-8/12 mx-auto my-4">
        <Carousel>
        <CarouselContent>
          <CarouselItem className="w-2/3"><img src={img1} className="mx-auto" alt="" /></CarouselItem>
          <CarouselItem  className="w-2/3"><img src={img2} className="mx-auto" alt="" /></CarouselItem>
          <CarouselItem  className="w-2/3"><img src={img3} className="mx-auto" alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

    </div>
  )
}

export default TopSelling
