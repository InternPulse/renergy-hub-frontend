import { Link } from "react-router-dom"
import { ChevronsRight, ArrowLeft } from 'lucide-react'
import { Button } from "../../../Components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../Components/ui/breadcrumb"


export default function BreadcrumbNav() {
  return (
    <div className="flex items-center gap-4 p-4 text-sm">
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <Link to="/products">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </Button>
      <Breadcrumb>
        <BreadcrumbList className="">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            
     <Link to="/products">Productss</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            
            <Link to="/products/categories">Categories</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink  asChild>
            
            <Link to="/products/categories/solar-panels">Solar Panels</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronsRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Fireman 380W Solar Panel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

