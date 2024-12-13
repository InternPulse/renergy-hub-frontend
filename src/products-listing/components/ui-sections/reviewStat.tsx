
import { Separator } from '../../../components/ui/separator';
import { Progress } from '../../../components/ui/progress';
import { useProductStore } from '../../store/store';

interface RatingData {
    rating: number
    count: number
  }
  
  // const ratings: RatingData[] = [
  //   { rating: 5, count: 26 },
  //   { rating: 4, count: 12 },
  //   { rating: 3, count: 4 },
  //   { rating: 2, count: 1 },
  //   { rating: 1, count: 1 },
  // ]
  


const ReviewStat = () => {
     const totalStars = 5;
     const {review} = useProductStore();
 // Step 1: Create an array to store the counts of each rating (1 to 5)
 const ratings: RatingData[] = Array.from({ length: totalStars }, (_, i) => ({
  rating: i + 1,
  count: 0,
}));

// Step 2: Populate the ratings array with the counts from the API response
review.forEach((review) => {
  const reviewRating = review.rating;
  const ratingIndex = ratings.findIndex((r) => r.rating === reviewRating);
  if (ratingIndex !== -1) {
    ratings[ratingIndex].count += 1;
  }
});

// Step 3: Calculate the total number of reviews
const totalReviews = review.length;

// Step 4: Calculate the average rating
const rating =
  review.reduce((sum, review) => sum + review.rating, 0) / totalReviews || 0;



  return (
    <>
    <section className='flex flex-col gap-4'>
        <header className="flex justify-between items-center gap-2">
                            <div>
                        {[...Array(totalStars)].map((_, index) => {
                const currentRating = index + 1;

                return (
                    <span
                    key={index}
                    className="text-2xl"
                    style={{
                        color: currentRating <= rating ? "#ffc107" : "#e4e5e9"
                    }}
                    >
                    &#9733;
                    </span>
                );
                })}
                </div>

                <p className='text-black'>{rating}</p>
        </header>
        <Separator className='bg-[#CCCCCC]'/>
        <main> 
            
        <div className="flex flex-col gap-3">
      {ratings.reverse().map((rating) => (
        <div key={rating.rating} className="flex items-center gap-3 justify-between">
          <span className="text-sm font-medium w-3 text-black">{rating.rating}</span>
          <div className="flex-1">
            <Progress
              value={(rating.count / totalReviews) * 100}
              className="h-6 [&>*]:bg-yellow-400  rounded-sm "
            />
          </div>
          <span className="text-sm font-medium w-8 flex justify-end text-black">{rating.count}</span>
        </div>
      ))}
    </div>

        </main>



    </section>
    
    </>
  )
}

export default ReviewStat