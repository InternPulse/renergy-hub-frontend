// "use client"

// import * as React from "react"
// import Image from "next/image"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import { cn } from "../../lib/utils"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// interface ImageGalleryProps {
//   images: {
//     src: string
//     alt: string
//   }[]
// }

// export default function ImageGallery({ images }: ImageGalleryProps = {
//   images: [
//     {
//       src: "/placeholder.svg",
//       alt: "Solar Panel"
//     },
//     {
//       src: "/placeholder.svg",
//       alt: "Solar Panel Thumbnail 1"
//     },
//     {
//       src: "/placeholder.svg",
//       alt: "Solar Panel Thumbnail 2"
//     },
//     {
//       src: "/placeholder.svg",
//       alt: "Solar Panel Thumbnail 3"
//     }
//   ]
// }) {
//   const [selectedImage, setSelectedImage] = React.useState(0)
//   const [isZoomed, setIsZoomed] = React.useState(false)

//   const handlePrevious = () => {
//     setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//   }

//   const handleNext = () => {
//     setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
//   }

//   const handleThumbnailClick = (index: number) => {
//     setSelectedImage(index)
//   }

//   const handleImageClick = () => {
//     setIsZoomed(true)
//   }

//   return (
//     <div className="w-full max-w-2xl mx-auto p-4">
//       <div className="relative aspect-[3/4] w-full mb-4">
//         <Image
//           src={images[selectedImage].src}
//           alt={images[selectedImage].alt}
//           fill
//           className="object-cover rounded-lg cursor-zoom-in"
//           onClick={handleImageClick}
//         />
//         <div className="absolute right-4 bottom-4 flex gap-2">
//           <button
//             onClick={(e) => {
//               e.stopPropagation()
//               handlePrevious()
//             }}
//             className="p-2 rounded-full bg-white/80 hover:bg-white"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={(e) => {
//               e.stopPropagation()
//               handleNext()
//             }}
//             className="p-2 rounded-full bg-white/80 hover:bg-white"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-2">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={cn(
//               "relative aspect-[3/4] overflow-hidden rounded-lg",
//               selectedImage === index && "ring-2 ring-primary"
//             )}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//       <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
//         <DialogContent className="max-w-3xl w-full h-[80vh] p-0">
//           <div className="relative w-full h-full">
//             <Image
//               src={images[selectedImage].src}
//               alt={images[selectedImage].alt}
//               fill
//               className="object-contain"
//             />
//             <div className="absolute bottom-4 right-4 flex gap-2">
//               <button
//                 onClick={handlePrevious}
//                 className="p-2 rounded-full bg-white/80 hover:bg-white"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-white/80 hover:bg-white"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

