import { Skeleton } from "../../../components/ui/skeleton";

const SkeletonProduct = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[40px] w-full" />
      <header className="flex items-center justify-between py-4">
        <Skeleton className="h-[40px] w-[80px]" />
        <Skeleton className="h-[40px] w-[200px]" />
      </header>
      <section className="grid grid-cols-2 gap-4 pt-4 lg:pt-8 pb-[11px] lg:pb-[18px] px-[11px] lg:gap-8 md:grid-cols-3 lg:grid-cols-5">
        {Array(10).fill(0).map((_, index) => (
          <div key={index} className="">
            <Skeleton className="h-[257px] w-full" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkeletonProduct;

