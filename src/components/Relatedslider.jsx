import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Add this line to import navigation styles
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import BCard from './BCFixpic';
import productDetails from './data';
import Wrapper from './Wrapper';

export default function App() {
  return (
    <>
    <Wrapper>
    <h1 className='uppercase text-2xl mb-2 font-bold my-3 ha'>Related products</h1>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Pagination]} // Also include Navigation module here
        className="mySwiper mt-10"
        breakpoints={{
          // When window width is >= 640px
          240: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // When window width is >= 768px

          // When window width is >= 1024px
          824: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {productDetails.slice(0, 8).map((product) => (
          <SwiperSlide key={product.id} >
            <BCard product={product} /> 
          </SwiperSlide>
        ))}
      </Swiper>

      </Wrapper>
    </>
  );
}
