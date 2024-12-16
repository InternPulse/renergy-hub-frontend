import { ProductsSaved, Product } from '../db/ProductsData';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "../../components/ui/card"

  import { Button } from '../../components/ui/button';
  

const SavedProducts = () => {
  return (
    <section className=" md:ml-[250px] w-full h-full mb-10 px-3 py-3">
        <h1 className="">Saved Products(5)</h1>
        {/* product container */}
        <div className='grid w-fit gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {ProductsSaved.map((product: Product, index: number) => (
                <Card className='w-[230px]' key={index}>
                <CardHeader>
                  <img src={product.img} alt="img" />
                </CardHeader>
                <CardContent>
                  <p  className='text-[13px]'>
                    {product.item}
                  </p>
                  <h2>
                    {product.price}
                  </h2>
                </CardContent>
                <CardFooter>
                  <Button className='bg-[#007300] w-full'>
                    <h1 className='text-white text-semibold'>Buy Now</h1>
                  </Button>
                </CardFooter>
              </Card>
              
            ))
            }
        </div>
    </section>
  )
}

export default SavedProducts
