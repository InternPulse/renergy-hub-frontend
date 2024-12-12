import { Skeleton } from "../../../components/ui/skeleton";

const SkeletonDetail = () => {
  return (
    <>
    <div className="flex flex-col p-4 lg:p-8 gap-8 mx-auto">
    
    <section className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-[600px] w-full" />
      <Skeleton className="h-[600px] w-full" />
      <Skeleton className="h-[600px] w-full" />
    </section>

    <Skeleton className="h-[600px] w-full" />
    </div>
    </>


  )
}

export default SkeletonDetail