import Search from '../components/Search';

import 'swiper/css'

import "../css/Home.css"
import SwiperBar from '../components/SwiperBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

function Home(params) {
    var moviesListComedies = params.topComedy;
    var moviesListTop = params.topMovies;
    var moviesListNew = params.newMovies;

    var backDrops = params.backdrops;

    return (
        <>
            <Search></Search>
            <div className='carouselDiv'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="swiper-car"
                >
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[0]} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[1]} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[2]} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[3]} className="d-block " alt="..." /></SwiperSlide>
                </Swiper>
            </div>
            
            <br></br>
            <h3>Top Movies</h3>
            <SwiperBar movies={moviesListTop} setOneMovieIDFunc={params.setOneMovieIDFunc}></SwiperBar>
            <br></br>
            <h3>Best Comedies</h3>
            <SwiperBar movies={moviesListComedies} setOneMovieIDFunc={params.setOneMovieIDFunc}></SwiperBar>
            <br></br>
            <h3>New Movies</h3>
            <SwiperBar movies={moviesListNew} setOneMovieIDFunc={params.setOneMovieIDFunc}></SwiperBar>

        </>
    )
}

export default Home;