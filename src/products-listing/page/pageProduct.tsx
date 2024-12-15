
import { Suspense } from 'react'
import { lazy } from 'react'
import SkeletonProduct from "../components/skeleton-loader.tsx/ske-products"; // Ensure the path is correct
// Lazy load ProductListing
const ProductListing = lazy(() => import("./products-listing"));
const PageProduct = () => {
  return (
    <>
     <Suspense fallback={<div className="p-4 md:p-8 lg:p-10"><SkeletonProduct/></div> }>
    <ProductListing />  
      </Suspense>
  </>
  )
}

export default PageProduct