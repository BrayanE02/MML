import * as testdata from '../services/json/testMovie.json';

import Search from '../components/Search';
import Card from '../components/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import "../css/Home.css"


function Home() {

    return (
        <>
            <Search></Search>
            <div className='carouselDiv'>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={"https://image.tmdb.org/t/p/w500/" + testdata.backdrop_path} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://image.tmdb.org/t/p/w500/" + "/zAepSrO99owYwQqi0QG2AS0dHXw.jpg"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://image.tmdb.org/t/p/w500/" + "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg"} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br></br>
            <h3>Top Movies</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={3.5}
            >
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
            </Swiper>
            <br></br>
            <h3>Best Comedies</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={3.5}
            >
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
            </Swiper>
            <br></br>
            <h3>New Movies</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={3.5}
            >
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
                <SwiperSlide><Card movie={testdata} /></SwiperSlide>
            </Swiper>
            
        </>
    )
}

export default Home;