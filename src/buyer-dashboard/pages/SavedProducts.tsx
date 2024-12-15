import { ProductsSaved, Product } from '../db/ProductsData';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "../../components/ui/card"
  

const SavedProducts = () => {
  return (
    <section className="bg-yellow-300 md:ml-[250px] w-full h-full mb-10 px-3 py-3">
        <h1 className="">Saved Products(5)</h1>
        {/* product container */}
        <div className='grid w-fit gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {ProductsSaved.map((product: Product, index: number) => (
                <Card className='w-[230px]' key={index}>
                <CardHeader>
                  <img src={product.img} alt="img" />
                </CardHeader>
                <CardContent>
                  <h2>
                    {product.item}
                  </h2>
                  <h2>
                    {product.price}
                  </h2>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
              
            ))
            }
        </div>
    </section>
  )
}

export default SavedProducts
