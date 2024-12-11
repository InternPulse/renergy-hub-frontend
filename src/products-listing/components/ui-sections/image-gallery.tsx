// Page.tsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './custom-swiper.css'
import { images } from './images'; // Ensure this is typed properly in your images file

//@ts-expect-error
import 'swiper/css';
//@ts-expect-error
import 'swiper/css/free-mode';
//@ts-expect-error
import 'swiper/css/navigation';
//@ts-expect-error
import 'swiper/css/thumbs';



// Define types for Swiper instance and images
import type { Swiper as SwiperType } from 'swiper'; // Import the type for Swiper instance

export default function Page() {
  // Define the type for thumbsSwiper as SwiperType | null
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom on click
  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <section className="py-4">
      <div className="container">
        {/* Main Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`h-96 w-full rounded-lg ${isZoomed ? 'zoom-swiper' : ''}`} // Conditional class for zoom
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={`flex p-16 h-full w-full items-center justify-center border border-slate-200 rounded-lg ${isZoomed ? 'zoomed' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`block h-full w-full ${isZoomed ? 'swiper-zoomable-image' : ''} `}
 
                /> <button className='absolute bottom-2 right-2 p-2' onClick={toggleZoom}>
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none">
  <path d="M25.3024 17.6961C26.7791 17.6958 28.2298 18.0859 29.5072 18.8269C30.7846 19.568 31.8434 20.6336 32.5762 21.9157C33.309 23.1979 33.6898 24.651 33.68 26.1277C33.6701 27.6045 33.27 29.0524 32.5201 30.3247L37.2524 35.0611C37.6339 35.4561 37.8449 35.985 37.8401 36.534C37.8354 37.083 37.6152 37.6082 37.2269 37.9965C36.8387 38.3847 36.3135 38.6049 35.7645 38.6097C35.2155 38.6144 34.6865 38.4034 34.2916 38.022L29.5551 33.2897C28.2829 34.0395 26.835 34.4396 25.3582 34.4495C23.8814 34.4593 22.4283 34.0786 21.1462 33.3457C19.864 32.6129 18.7984 31.5542 18.0574 30.2767C17.3164 28.9993 16.9263 27.5487 16.9266 26.0719L16.9371 25.6531C17.0445 23.5069 17.9728 21.4841 19.5298 20.0031C21.0868 18.5221 23.1535 17.6961 25.3024 17.6961ZM23.8219 3.65214C24.2146 3.25959 24.7471 3.03906 25.3024 3.03906C25.8576 3.03906 26.3901 3.25959 26.7828 3.65214L30.9706 7.84001C31.1706 8.03316 31.3301 8.26422 31.4399 8.51969C31.5496 8.77516 31.6074 9.04992 31.6098 9.32795C31.6122 9.60598 31.5592 9.88171 31.454 10.139C31.3487 10.3964 31.1932 10.6302 30.9966 10.8268C30.8 11.0234 30.5662 11.1789 30.3089 11.2842C30.0515 11.3894 29.7758 11.4424 29.4978 11.44C29.2197 11.4376 28.945 11.3798 28.6895 11.2701C28.434 11.1603 28.203 11.0008 28.0098 10.8008L25.3024 8.09546L22.5949 10.8008C22.2343 11.1614 21.7546 11.3779 21.2457 11.4099C20.7369 11.4419 20.2338 11.2871 19.8309 10.9746L19.6341 10.8008C19.2415 10.4082 19.021 9.87565 19.021 9.32042C19.021 8.76518 19.2415 8.23268 19.6341 7.84001L23.8219 3.65214ZM40.5734 20.4036C40.9661 20.0111 41.4986 19.7905 42.0538 19.7905C42.6091 19.7905 43.1416 20.0111 43.5342 20.4036L47.7221 24.5915C48.1147 24.9841 48.3352 25.5166 48.3352 26.0719C48.3352 26.6271 48.1147 27.1596 47.7221 27.5523L43.5342 31.7402C43.1393 32.1216 42.6104 32.3326 42.0614 32.3279C41.5123 32.3231 40.9872 32.1029 40.5989 31.7147C40.2107 31.3264 39.9905 30.8012 39.9857 30.2522C39.9809 29.7032 40.192 29.1743 40.5734 28.7793L43.2788 26.0719L40.5734 23.3644C40.2129 23.0039 39.9963 22.5241 39.9643 22.0153C39.9323 21.5064 40.0871 21.0033 40.3996 20.6004L40.5734 20.4036ZM7.07047 20.4036C7.26363 20.2036 7.49469 20.0441 7.75016 19.9344C8.00562 19.8246 8.28039 19.7668 8.55842 19.7644C8.83645 19.762 9.11218 19.815 9.36952 19.9203C9.62685 20.0256 9.86065 20.181 10.0573 20.3777C10.2539 20.5743 10.4093 20.808 10.5146 21.0654C10.6199 21.3227 10.6729 21.5984 10.6705 21.8765C10.6681 22.1545 10.6103 22.4293 10.5005 22.6847C10.3908 22.9402 10.2313 23.1713 10.0313 23.3644L7.32593 26.0719L10.0313 28.7793C10.3918 29.1399 10.6084 29.6196 10.6404 30.1285C10.6724 30.6374 10.5176 31.1405 10.2051 31.5433L10.0313 31.7402C9.63862 32.1327 9.10612 32.3532 8.55088 32.3532C7.99565 32.3532 7.46314 32.1327 7.07047 31.7402L2.88261 27.5523C2.49005 27.1596 2.26953 26.6271 2.26953 26.0719C2.26953 25.5166 2.49005 24.9841 2.88261 24.5915L7.07047 20.4036ZM19.6341 41.3429C20.0267 40.9504 20.5592 40.7299 21.1145 40.7299C21.6697 40.7299 22.2022 40.9504 22.5949 41.3429L25.3024 44.0483L28.0119 41.3429C28.3725 40.9824 28.8522 40.7658 29.3611 40.7338C29.8699 40.7018 30.373 40.8566 30.7759 41.1691L30.9727 41.3429C31.3653 41.7356 31.5858 42.2681 31.5858 42.8234C31.5858 43.3786 31.3653 43.9111 30.9727 44.3038L26.7849 48.4916C26.3922 48.8842 25.8597 49.1047 25.3044 49.1047C24.7492 49.1047 24.2167 48.8842 23.824 48.4916L19.6362 44.3038C19.2436 43.9111 19.0231 43.3786 19.0231 42.8234C19.0231 42.2681 19.2415 41.7356 19.6341 41.3429Z" fill="black"/>
</svg>
                </button>
        
              </div>
             
            </SwiperSlide>
          ))}
               
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex p-4 border border-slate-200 rounded-lg  h-full w-full items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block  h-full w-full object-cover"
                 
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
