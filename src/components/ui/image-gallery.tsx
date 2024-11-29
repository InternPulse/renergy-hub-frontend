// "use client"

// import * as React from "react"

// import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// interface ImageGalleryProps {
//   images: {
//     src: string
//     alt: string
//   }[]
// }

// export function ImageGallery({ images }: ImageGalleryProps) {
//   const [currentIndex, setCurrentIndex] = React.useState(0)
//   const dialogRef = React.useRef<HTMLDialogElement>(null)

//   const showPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
//   }

//   const showNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
//   }

//   const openZoomView = () => {
//     dialogRef.current?.showModal()
//   }

//   const closeZoomView = () => {
//     dialogRef.current?.close()
//   }

//   React.useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowLeft") {
//         showPrevious()
//       } else if (event.key === "ArrowRight") {
//         showNext()
//       } else if (event.key === "Escape") {
//         closeZoomView()
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [])

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
//         <img
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
          
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover"
          
//         />
//         <button
//           onClick={openZoomView}
//           className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//           aria-label="Zoom in"
//         >
//           <ZoomIn className="w-5 h-5" />
//         </button>
//         <div className="absolute bottom-2 right-2 flex space-x-2">
//           <button
//             onClick={showPrevious}
//             className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={showNext}
//             className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-2">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`relative aspect-square bg-gray-100 rounded-md overflow-hidden ${
//               index === currentIndex ? "ring-2 ring-blue-500" : ""
//             }`}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
             
//               sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//       <dialog ref={dialogRef} className="p-0 m-4 max-w-5xl w-full max-h-[90vh] rounded-lg backdrop:bg-black/50">
//         <div className="relative aspect-square">
//           <img
//             src={images[currentIndex].src}
//             alt={images[currentIndex].alt}
           
//             sizes="(max-width: 1200px) 100vw, 80vw"
//             className="object-contain"
//           />
//           <button
//             onClick={closeZoomView}
//             className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//             aria-label="Close zoom view"
//           >
//             &times;
//           </button>
//           <div className="absolute bottom-2 right-2 flex space-x-2">
//             <button
//               onClick={showPrevious}
//               className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//               aria-label="Previous image"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={showNext}
//               className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//               aria-label="Next image"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   )
// }

