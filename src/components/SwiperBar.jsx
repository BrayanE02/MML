import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

function SwiperBar(props) {
    const swipes = props.movies.map((movie =>{
        return(
            <SwiperSlide key={Math.random(1, 10000)}><Card movie={movie} ></Card></SwiperSlide>
        )
    }))
    return(
        <Swiper
                spaceBetween={10}
                slidesPerView={3.5}
            >
                {swipes}
            </Swiper>
    );
}
export default SwiperBar;