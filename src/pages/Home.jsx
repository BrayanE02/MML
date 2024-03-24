import * as testdata from '../services/json/testMovie.json';

import Search from '../components/Search';

import 'swiper/css'

import "../css/Home.css"
import SwiperBar from '../components/SwiperBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

function Home() {
    var moviesListComedies = [testdata, testdata, testdata, testdata, testdata,]
    var moviesListTop = [testdata, testdata, testdata, testdata, testdata,]
    var moviesListNew = [testdata, testdata, testdata, testdata, testdata,]
    return (
        <>
            <h2 className='h2Home'>My Movie List</h2>
            <Search></Search>
            <div className='carouselDiv'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="swiper-car"
                >
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + testdata.backdrop_path} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + "/gklkxY0veMajdCiGe6ggsh07VG2.jpg"} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg"} className="d-block " alt="..." /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-car' ><img src={"https://image.tmdb.org/t/p/w500/" + "/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg"} className="d-block " alt="..." /></SwiperSlide>
                </Swiper>
            </div>
            
            <br></br>
            <h3>Top Movies</h3>
            <SwiperBar movies={moviesListTop}></SwiperBar>
            <br></br>
            <h3>Best Comedies</h3>
            <SwiperBar movies={moviesListComedies}></SwiperBar>
            <br></br>
            <h3>New Movies</h3>
            <SwiperBar movies={moviesListNew}></SwiperBar>

        </>
    )
}

export default Home;