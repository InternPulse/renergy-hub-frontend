
// this is a container for all the filter buttons

import { CategoryFilter } from './category-filter' 
// import { ProductFilter } from './product-filter'
import { VendorFilter } from './vendor-filter'


function FilterContainer() {

  return (
    <div className='flex gap-4 overflow-x-scroll lg:overflow-hidden py-4'>
     
     <CategoryFilter/>
{/*      
      <ProductFilter/>
      */}
      <VendorFilter/>
     
      
      {/* <Button>click me</Button> */}
    </div>
  )
}

export default FilterContainer
