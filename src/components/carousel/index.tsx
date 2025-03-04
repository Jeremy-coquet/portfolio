import React from 'react';
import {CarouselType} from "@/types/carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import {styles} from "@/components/about/styles"
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Carousel: React.FC<CarouselType> = ({ items }) => {
    return (
        <div style={styles.languages}>
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
        </div>
    );
};

export default Carousel;