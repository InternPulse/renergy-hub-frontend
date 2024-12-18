import { Button } from '../../components/ui/button';
import { useState } from 'react';
import PriceSection from '../components/ui-sections/Price';
import Vendor from '../components/ui-sections/Vendor';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from '../components/ui-sections/image-gallery';
import { useProductStore } from '../store/store';
import { useEffect } from 'react';
import ViewCard from '../components/ui-sections/featureProducts';
import { Separator } from '../../components/ui/separator';
import BreadcrumbNav from '../components/ui-sections/headBreadCrumbs';
import { Outlet ,Link} from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const index = parseInt(id as string);
  const navigate = useNavigate();
  const [isDclicked, setIsDclicked] = useState(true);
  const [isRClick, setIsRClick] = useState(false);
  const { 
    testProducts, 
    setDetailProducts, 
    detailProducts, 
    getProduct, 

   
    
   
    getReviews, 
    review 
  } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (testProducts.length === 0) {
          await Promise.all([getProduct(), getReviews()]);
        }

        if (testProducts.length > 0 && index) {
          const product = testProducts.find((p) => p.id === index);

          if (product) {
            setDetailProducts(product);
            console.log("Product found:", product);
            console.log("Review found:", review);
          } else {
            console.warn("No product found with the provided index.");
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [index, testProducts, getProduct, setDetailProducts, getReviews, review]);

  const handleDetailClick = () => {
    setIsDclicked(true);
    setIsRClick(false);
    navigate(`/product/detail/${index}`);
  };

  const handleReviewClick = () => {
    setIsDclicked(false);
    setIsRClick(true);
    navigate(`/product/detail/${index}/review`);
  };

  return (
    <div className="flex flex-col p-4 lg:p-8 gap-8 mx-auto">
      <nav>
        <BreadcrumbNav products={detailProducts} />
      </nav>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-center lg:items-start">
        <ImageGallery />
        <PriceSection products={detailProducts} />
        <Vendor products={detailProducts} />
      </main>

      <section className="flex flex-col gap-8">
        <main className="flex flex-col gap-8">
          <ul className="flex gap-2">
            <li>
              <button onClick={handleDetailClick} className="bg-none p-0">
                <p className={isDclicked ? 'text-green-500' : ''}>DETAILS</p>
              </button>
            </li>
            <li>
              <button onClick={handleReviewClick} className="bg-none p-0">
                <p className={isRClick ? 'text-green-500' : ''}>REVIEWS</p>
              </button>
            </li>
          </ul>

          <Separator />
          <section>
            <Outlet />
          </section>
        </main>

        <section className="flex flex-col gap-8 md:p-8">
          <div className="text-center text-black">
            <p>YOU MAY ALSO LIKE</p>
          </div>
          <div className="lg:flex-row flex flex-col gap-4 lg:gap-12 items-center justify-center">
            {testProducts.slice(0, 3).map((product) => (
              <ViewCard products={product} key={product.id} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant={'outline'}
              className="bg-white text-black rounded-lg border-[#2C742F]"
              size={'sm'}
              asChild
            >
              <Link to="/product">View more</Link>
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductDetail;
