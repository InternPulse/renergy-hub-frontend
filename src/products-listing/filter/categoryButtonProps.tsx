
// this is a container for all the filter buttons

import { CategoryFilter } from './category-filter' 
import { ProductFilter } from './product-filter'
import { VendorFilter } from './vendor-filter'


function FilterContainer() {

  return (
    <div className='flex gap-4'>
      <ProductFilter/>
     
      <VendorFilter/>
      <CategoryFilter/>
      
      {/* <Button>click me</Button> */}
    </div>
  )
}

export default FilterContainer
