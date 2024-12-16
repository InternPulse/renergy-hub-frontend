//Reviewer Card Information
import { Separator } from '../../../components/ui/separator';
import Rating from "./rating"
import img from '../../../../public/Persona.svg'
import { useProductStore } from '../../store/store';
const ReviewCard = () => {
  const {review}=useProductStore();
  return (
    <>
    <div className='flex flex-col gap-4'>
     {review.map((review) => (
       <main className='flex flex-col gap-4 ' key={review.id}>
     
       <div className="flex gap-2" >
         <img src={img} alt='' className='rounded-full w-[60px] h-[60px]'/>
         <ul className="text-black flex flex-col gap-2">
           <li className="flex gap-2 items-center">
               <div className="flex gap-2 items-center">
                 <p className="text-2xl">{review.user.firstName}</p>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                       <path d="M7.16732 18.75L5.58398 16.0833L2.58398 15.4167L2.87565 12.3333L0.833984 10L2.87565 7.66667L2.58398 4.58333L5.58398 3.91667L7.16732 1.25L10.0007 2.45833L12.834 1.25L14.4173 3.91667L17.4173 4.58333L17.1257 7.66667L19.1673 10L17.1257 12.3333L17.4173 15.4167L14.4173 16.0833L12.834 18.75L10.0007 17.5417L7.16732 18.75ZM9.12565 12.9583L13.834 8.25L12.6673 7.04167L9.12565 10.5833L7.33398 8.83333L6.16732 10L9.12565 12.9583Z" fill="black"/>
                       </svg>
               </div>
                 <p className="text-[#999999]"> {new Date(review.datePosted).toLocaleDateString()} </p>
           </li>
           <li>
             <Rating rating={review.rating} />
            
           </li>
           <li>
               <p>{review.comment}</p>
          </li>
          <li className="flex gap-2">
             <p className="text-[#999999]">Reply</p>
             <div className="flex gap-1 items-center ">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                   <path d="M6.16667 10L9.5 2.5C10.163 2.5 10.7989 2.76339 11.2678 3.23223C11.7366 3.70107 12 4.33696 12 5V8.33333H16.7167C16.9583 8.3306 17.1976 8.38042 17.418 8.47935C17.6384 8.57828 17.8347 8.72394 17.9932 8.90626C18.1518 9.08858 18.2688 9.30318 18.3361 9.53521C18.4035 9.76723 18.4196 10.0111 18.3833 10.25L17.2333 17.75C17.1731 18.1474 16.9712 18.5097 16.6649 18.77C16.3586 19.0303 15.9686 19.1712 15.5667 19.1667H6.16667M6.16667 10V19.1667M6.16667 10H3.66667C3.22464 10 2.80072 10.1756 2.48816 10.4882C2.17559 10.8007 2 11.2246 2 11.6667V17.5C2 17.942 2.17559 18.3659 2.48816 18.6785C2.80072 18.9911 3.22464 19.1667 3.66667 19.1667H6.16667" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   {/* <p>like number</p> */}
             </div>
             <div className="flex gap-1 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
               <path d="M15.5841 12.4196L11.9174 20.6696C11.1881 20.6696 10.4886 20.3799 9.97288 19.8641C9.45716 19.3484 9.16743 18.6489 9.16743 17.9196V14.2529H3.97909C3.71334 14.2559 3.45012 14.2011 3.20765 14.0923C2.96519 13.9835 2.74928 13.8233 2.57489 13.6227C2.4005 13.4222 2.2718 13.1861 2.1977 12.9309C2.1236 12.6756 2.10588 12.4074 2.14576 12.1446L3.41076 3.8946C3.47706 3.45744 3.69911 3.05896 4.03601 2.7726C4.37291 2.48623 4.80196 2.33127 5.24409 2.33627H15.5841M15.5841 12.4196V2.33627M15.5841 12.4196H18.0316C18.5504 12.4288 19.0545 12.2471 19.4482 11.9092C19.8419 11.5712 20.0979 11.1005 20.1674 10.5863V4.1696C20.0979 3.65541 19.8419 3.18465 19.4482 2.84669C19.0545 2.50873 18.5504 2.32709 18.0316 2.33627H15.5841" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg> 
             {/* <p> dislike number</p> */}
   
               </div>
          </li>
   
          {/* map the replies */}
          <li></li>
   
          
         </ul>
   
         
       </div>
       <Separator className='bg-[#CCCCCC] mt-4'/>
       </main> 
      ))}
    
    </div>
    </>
  )
}

export default ReviewCard