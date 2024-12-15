
import { Suspense } from 'react'

import { lazy } from 'react'
import SkeletonDetail from '../components/skeleton-loader.tsx/ske-Detail'

const ProductDetail= lazy(() => import("./productDetails"));
const PageDetail = () => {
  return (
   <Suspense fallback={<div className=""><SkeletonDetail/></div> }>
     <ProductDetail/>
   </Suspense>
  )
}

export default PageDetail