import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from './Card';

function SwiperBar(props) {
    const swipes = props.movies.map((movie =>{
        return(
            <SwiperSlide key={Math.random(1, 10000)}><Card movie={movie} setOneMovieIDFunc={props.setOneMovieIDFunc} ></Card></SwiperSlide>
        )
    }))
    return(
        <Swiper
        modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={5.5}
                navigation={true}
            >
                {swipes}
            </Swiper>
    );
}
export default SwiperBar;