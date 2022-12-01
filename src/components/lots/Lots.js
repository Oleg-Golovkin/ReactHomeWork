import Separator from "../separator/Separator"
import Timer from "../timer/Timer"
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {reduxThunkImg, onActiveSwiper} from './lotsSlice'
import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import { CSSTransition } from 'react-transition-group';
import Spinner from "../spinner/Spinner"


import popular from './../../icons/lots/popular.png'
import prev from './../../icons/lots/prev.png'
import next from './../../icons/lots/next.png'

import 'swiper/css';
import './lots.sass'

const Lots = () => {
    const dispatch = useDispatch();
    const lots = useSelector((state)=> state.lotsSlice.lots);
    const activeSwiper = useSelector((state)=> state.lotsSlice.activeSwiper);
    const imgLoadingStatus = useSelector((state)=> state.lotsSlice.imgLoadingStatus);
    const deadline = useSelector((state)=> state.lotsSlice.deadline)
    
    useEffect(()=> {
        dispatch(reduxThunkImg())
    // eslint-disable-next-line   
    }, [])

    const swiperSlide = lots.map((item, i) =>{
        return(
            <SwiperSlide 
                key={uniqid()}>
                    <div className="swiper-slide__wrapper">
                        <div className="swiper-slide__subWrapper">
                            <Timer deadline = {deadline[i]}/>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="swiper-slide__dsc">
                        Arnold & Son Worldtimer discovery of antarctica
                        </div>
                        <div className="swiper-slide__evaluate evaluate-slide_views">
                            <div className="evaluate-slide__block evaluate-slide__block_views">
                                <div className="evaluate-slide__icon evaluate-slide__icon_vies"></div>
                                <div className="evaluate-slide__num evaluate-slide__num_views">1 098</div>
                                <div className="evaluate-slide__line evaluate-slide__line_vies"></div>                                
                            </div>
                            <div className="evaluate-slide__main">
                                <div className="evaluate-slide__main-wrapper">  
                                    <div className="evaluate-slide__square-icon"></div>                              
                                    <div className="evaluate-slide__title">Текущая ставка</div>
                                    <div className="evaluate-slide__sum">323 312</div>
                                    <div className="evaluate-slide__sum-labble">&#8381;</div>
                                </div>
                            </div>
                            <div className="evaluate-slide__block evaluate-slide_vote"> 
                                <div className="evaluate-slide__icon evaluate-slide__icon_vote "></div>
                                <div className="evaluate-slide__num evaluate-slide__num_vote">75</div>
                                <div className="evaluate-slide__line evaluate-slide__line_vote"></div>                                   
                            </div>
                        </div>
                        <button className="swiper-slide__btn">ПОДНЯТЬ СТАВКУ</button>
                    </div>
            </SwiperSlide>
        )
    })  
    const navigation =
            <div className="swiper-button_wrapper">
                <div style={{display: activeSwiper ? "flex" : "none"}} className="swiper-button-prev swiper-button swiper-button_prev ">
                    <img className="swiper-button__img swiper-button__img_prev" src={prev} alt="prev" />
                    <div className="swiper-button__line swiper-button__line_prev"></div>
                    <div className="swiper-button__round swiper-button__round_prev"></div>
                </div>
                <div onClick={()=> dispatch(onActiveSwiper(!activeSwiper))} className="swiper-button__title">{activeSwiper ? "Все слоты" : "Обратно"}</div>
                <div style={{display: activeSwiper ? "flex" : "none"}} className="swiper-button-next swiper-button swiper-button_next">
                    <img className="swiper-button__img swiper-button__img_next" src={next} alt="next" />
                    <div className="swiper-button__line swiper-button__line_next"></div>
                    <div className="swiper-button__round swiper-button__round_next"></div>
                </div>
            </div>

    const swiper = 
            <CSSTransition 
            in={activeSwiper} 
            timeout={300}         
            classNames="swiper-transition">
                <div className="swiper-transition">
                    <Swiper
                        spaceBetween={100}
                        slidesPerView={3}
                        watchSlidesProgress= {true}
                        breakpoints = {{
                            320: {
                                slidesPerView: 1,
                                grid: {
                                        rows: 1,
                                        fill: "row"
                                },
                            },
                            // when window width is >= 480px
                            632: {
                                slidesPerView: 2,
                                grid: {
                                        rows: 1,
                                        fill: "row"
                                }, 
                            },
                            992: 
                            {
                                grid: {
                                        rows: 1,
                                        fill: "row",
                                },
                                slidesPerView: 3,
                                
                            },        
                        }}
                        rewind = {true}
                        onSlideChange={() => console.log('slide change')}
                        modules={[Grid, Navigation]}
                        grid = {{rows: 1,
                            fill: "row"}}
                        navigation = {{
                            nextEl: '.swiper-button_next',
                            prevEl: '.swiper-button_prev',
                        }}
                        // slideToClickedSlide = {true}
                        // loop = {true}
                        // direction = "vertical"
                        // enabled = {false}
                        // effect = {'cards'}
                        simulateTouch = {true}
                        >
                                
                        {swiperSlide}
                        {navigation}
                    </Swiper>
                </div>
            </CSSTransition>
    
    const allLots = 
            <CSSTransition 
                    in={!activeSwiper} 
                    timeout={300}         
                    classNames="swiper-transition-all-slide">
                        <div>
                            <div className="swiper-slide__all-slide">
                                {swiperSlide}                        
                            </div>
                            {navigation}
                        </div>
            </CSSTransition>
    
    const spinner = imgLoadingStatus === "loading" ? <Spinner/> : null
    return(
        <section className="lots container">
            <img 
                src={popular} 
                className="title title_lots"
                alt='title'>
            </img>
            <h2 className="sub-title sub-title_lots">
                лоты Под аукцион
            </h2>
            <Separator/> 
            {spinner}
            {swiper}
            {allLots}
        </section> 
    )
}

export default Lots