
interface ratingProps{
    rating: number
}
const Rating = ({rating}: ratingProps) => {
     const totalStars = 5;

    




  return (
    <>
    <section className=''>
        <header className="">
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

                
        </header>
        </section>
    
    </>
  )
}

export default Rating