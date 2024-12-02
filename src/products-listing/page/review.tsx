import ReviewCard from "../components/ui-sections/reviewCard"
import ReviewStat from "../components/ui-sections/reviewStat"
const Review = () => {
  return (
    <>
    <main className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
         <ReviewCard />
         <ReviewStat />


    </main>
    </>

  )
}

export default Review