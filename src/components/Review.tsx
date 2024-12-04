import eclipse from "../assets/Ellipse.png";
import review_img from "../assets/review_img.png";
import review_profile1 from "../assets/review_profile1.png";
import green_thumb from "../assets/green_thumb.png";
import five_stars from "../assets/five_stars.png";
import four_stars from "../assets/four_stars.png";
import white_thumb from "../assets/white_thumb.png";
import review_profile2 from "../assets/review_profile2.png";
import { Link } from "react-router-dom";

const Review = () => {
	return (
		<div className="flex flex-col items-center mt-10">
			<div className="w-[90%] sm:w-[580px] p-0 relative">
				<h2 className="text-[25px] sm:text-[45px] leading-none font-semibold text-center">
					What Our Customers Say
					<span className="absolute sm:top-16 sm:right-[410px] top-7 right-24 left-1">
						About
					</span>
					<span className="relative inline-block ml-44 sm:ml-24">
						<img
							src={eclipse}
							alt=""
							className=" sm:h-[90px] sm:w-[320px] object-contain"
						/>
						<span className="absolute inset-0 flex items-center justify-center text-hardYellow font-semibold">
							Renergy Hub.
						</span>
					</span>
				</h2>
			</div>

			<div className="flex flex-col mt-[50px] lg:flex-row justify-center items-center gap-8">
				<div className="w-full sm:w-[300px] md:w-[400px] lg:w-[480px] lg:h-[500px] rounded">
					<img
						className="rounded-xl w-full h-full object-cover"
						src={review_img}
						alt=""
					/>
				</div>

				<div className="flex flex-col  gap-8 lg:gap-10 justify-center items-center">
					<div className="w-full sm:w-[320px] md:w-[400px] lg:w-[500px] lg:h-[230px] bg-hardGreen text-white text-sm rounded-2xl p-5">
						<img src={five_stars} alt="Five Stars" />
						<p className="text-[16px] sm:text-[18px] mt-7 w-full sm:w-[320px] md:w-[380px] lg:w-[400px]">
							Their team handled our concerns and cleared our doubts about the
							product. They were always available to answer questions.
						</p>
						<div className="flex gap-4 sm:gap-6 mt-5 relative">
							<img
								src={review_profile1}
								alt="Luke Paul"
								className="w-14 h-14 rounded-full"
							/>
							<div>
								<p className="text-[16px]">Luke Paul</p>
								<span className="text-gray-200 text-[12px]">
									CEO of Kings Hotel
								</span>
							</div>
						</div>
						<div className="bg-white h-12 w-12 rounded-full flex items-center justify-center absolute right-0 sm:right-10 lg:right-0 xl:right-28 md:right-48 mb-10 sm:mb-6">
							<img src={green_thumb} alt="" className="h-6 w-6 sm:h-8 sm:w-8" />
						</div>
					</div>

					<div className="relative w-full sm:w-[320px] md:w-[400px] lg:w-[500px] lg:h-[240px] bg-gray-200 text-gray-700 text-sm rounded-2xl p-5">
						<img src={four_stars} alt="Four Stars" />
						<p className="text-[16px] sm:text-[18px] mt-7 w-full sm:w-[320px] md:w-[380px] lg:w-[400px]">
							Their work is very neat, nice, and smooth. Renergy hub panels are
							known for their durability, efficiency, and reliability. Good for
							all homes.
						</p>
						<div className="flex gap-4 sm:gap-6 mt-5">
							<img
								src={review_profile2}
								alt="John Mark"
								className="w-14 h-14 rounded-full"
							/>
							<div>
								<p className="text-[16px]">John Mark</p>
								<span className="text-gray-600 text-[12px]">
									CEO of Markingtour
								</span>
							</div>
							<div className="bg-white h-12 w-12 rounded-full flex items-center justify-center absolute right-0 sm:right-10  lg:right-0  xl:-right-2 md:right-0  bottom-[-8px]">
								<img
									src={white_thumb}
									alt=""
									className="h-6 w-6 sm:h-8 sm:w-8"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full sm:w-[90%] lg:w-[1024px] mt-12 p-5 flex flex-col sm:flex-row justify-between items-center bg-softGreen">
				<h2 className="text-[30px] sm:text-[35px] lg:text-[40px] font-semibold text-center sm:text-left">
					Are You The Next One?
				</h2>
				<Link to="/product">
					{" "}
					<button className="text-white font-semibold px-6 py-2 bg-hardGreen mt-6 sm:mt-0 rounded hover:bg-hardYellow w-[180px] sm:w-[200px] lg:w-[200px]">
						Buy Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Review;
