import Search from '../components/Search';

import 'swiper/css'

import "../css/Home.css"
import SwiperBar from '../components/SwiperBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

function Home(params) {
    var moviesListComedies = params.topComedy;
    var moviesListTop = params.topMovies;
    var moviesListNew = params.newMovies;

    var backDrops = params.backdrops;

    return (
        <>
            <Search updateSearch={params.changeSearch}></Search>
            <div className='carouselDiv'>
                <Swiper
                    effect='cards'
                    autoplay={{
                        delay:5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="swiper-car"
                >
                    <SwiperSlide className='swiper-slide-car' ><div className='img-div-slider'><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[0]} className="d-block " alt="..." /><p className='img-text'>{backDrops[1]}</p></div></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><div className='img-div-slider'><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[2]} className="d-block " alt="..." /><p className='img-text'>{backDrops[3]}</p></div></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><div className='img-div-slider'><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[4]} className="d-block " alt="..." /><p className='img-text'>{backDrops[5]}</p></div></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><div className='img-div-slider'><img src={"https://image.tmdb.org/t/p/w500/" + backDrops[6]} className="d-block " alt="..." /><p className='img-text'>{backDrops[7]}</p></div></SwiperSlide>
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