import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import { useSelector } from 'react-redux';


import Separator from "../separator/Separator"

import markTven from './../../img/interesting/markTven.png'

import title_interesting from './../../icons/interesting/title_interesting.png'
import prev from './../../icons/lots/prev.png'
import next from './../../icons/lots/next.png'

import "./interesting.sass"

const Interesting = () => {
    const quotes = useSelector((state)=> state.interestingSlice.quotes);

    const navigation =
            <div className="swiper-button_wrapper">
                <div className="swiper-button-prev swiper-button swiper-button_prev ">
                    <img className="swiper-button__img swiper-button__img_prev" src={prev} alt="prev" />
                    <div className="swiper-button__line swiper-button__line_prev"></div>
                    <div className="swiper-button__round swiper-button__round_prev"></div>
                </div>
                <div className="swiper-button__title">"Все слоты"</div>
                <div className="swiper-button-next swiper-button swiper-button_next">
                    <img className="swiper-button__img swiper-button__img_next" src={next} alt="next" />
                    <div className="swiper-button__line swiper-button__line_next"></div>
                    <div className="swiper-button__round swiper-button__round_next"></div>
                </div>
            </div>

    const swiperSlide = quotes.map(({name, data, content}, i) =>{
        return(
            <SwiperSlide 
                key={uniqid()}>
                    <div className="swiper-slide__wrapper swiper-slide__wrapper_interesting">
                            <div className="swiper-slide__img-wrapper swiper-slide__img-wrapper_interesting">
                                <img src={markTven} alt="markTven"/>
                            </div>
                            <div className="swiper-slide__quotes-wrapper">
                                <div className="swiper-slide__quotes-content">{content}</div>
                                <div className="swiper-slide__quotes-name">{name}</div>
                                <div className="swiper-slide__quotes-data">{data}</div>
                            </div>
                        </div>
            </SwiperSlide>
        )
    })
    
    return(
        <section className="interesting">
            <div className="container">
                <Separator 
                    subTitle = {"Цитаты"} 
                    img = {title_interesting} 
                    classSection={'interesting'}/> 
                <Swiper
                    containerModifierClass="swiper_interesting"
                    spaceBetween={100}
                    slidesPerView={1}
                    watchSlidesProgress= {true}
                    // breakpoints = {{
                    //     320: {
                    //         slidesPerView: 1,
                    //         grid: {
                    //                 rows: 1,
                    //                 fill: "row"
                    //         },
                    //     },
                    //     // when window width is >= 480px
                    //     632: {
                    //         slidesPerView: 1,
                    //         grid: {
                    //                 rows: 1,
                    //                 fill: "row"
                    //         }, 
                    //     },
                    //     992: 
                    //     {
                    //         grid: {
                    //                 rows: 1,
                    //                 fill: "row",
                    //         },
                    //         slidesPerView: 3,
                            
                    //     },        
                    // }}
                    rewind = {true}
                    onSlideChange={() => console.log('slide change')}
                    modules={[Grid, Navigation]}
                    grid = {{rows: 1,
                        fill: "row"}}
                    navigation = {{
                        nextEl: '.swiper-button_next',
                        prevEl: '.swiper-button_prev',
                    }}
                    
                    simulateTouch = {true}
                    >
                            
                    {swiperSlide}
                    {navigation}
                </Swiper>
            </div>

            
            
            
        </section> 
    )
}

export default Interesting