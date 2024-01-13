import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
    <div>
        <h3 className="font-palanquin text-4xl font-bold text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>

        <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
    </div>
    <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review)=>(      
        <ReviewCard imgURL={review.imgURL} Name={review.customerName} Rating={review.rating} Feedback={review.feedback} />
      ))}
    </div>
    </section>
  )
}

export default CustomerReviews
