import React from 'react';
import {CarouselType} from "@/types/carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledCarousel } from './styled';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Carousel: React.FC<CarouselType> = ({ items }) => {
    return (
        <StyledCarousel>
            <Swiper
                spaceBetween={20}
                slidesPerView={8}
                loop={true}
                autoplay={{delay: 1000}
                }
                modules={[Autoplay]}
              >
                {items.map((item, indexItem) => (
                    <SwiperSlide key={indexItem}>
                        <img src={item.logo} alt={item.title} width={60} height={60} />
                    </SwiperSlide>
                    ))}
            </Swiper>
        </StyledCarousel>
    );
};

export default Carousel;