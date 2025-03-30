import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { useGetAllGalleriesQuery } from '../../redux/services/gallery';

const ImageGallery:React.FC = () => {

    const { data: GalleryData, isLoading, isError, refetch } = useGetAllGalleriesQuery();

  return (
    <>
    <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {GalleryData && GalleryData?.galleries?.length > 0 && GalleryData?.galleries?.map((el)=>{
            return(
                <SwiperSlide key={el._id}>
                    <img src={el.imageUrl} alt={el.title} />
                </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  )
}

export default ImageGallery;
