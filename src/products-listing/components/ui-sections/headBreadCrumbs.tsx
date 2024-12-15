import { Link } from "react-router-dom"
import { ChevronsRight, ArrowLeft } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Separator } from '../../../components/ui/separator'
import { apiProduct } from "../../store/store"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb"

export type ProductProps = {
  products?: apiProduct
}

export default function BreadcrumbNav({products}: ProductProps) {
  return (
    <>
    <header className="hidden lg:flex flex-col gap-1">
      <Separator/>
    <div className="flex items-center gap-4 p-4 text-sm">
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <Link to="/product">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </Button>
      <Breadcrumb>
        <BreadcrumbList className="">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            
     <Link to="/product">Product</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            
            <Link to="#">Categories</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink  asChild>
            
            <Link to="#">{products?.category.categoryName}</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{products?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>  
    <Separator/>
    </header>  </>
    
  )
}

