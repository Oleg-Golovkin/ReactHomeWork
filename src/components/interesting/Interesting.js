import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import { useSelector } from 'react-redux';


import Separator from "../separator/Separator"

import markTven from './../../img/interesting/markTven.png'

import title_interesting from './../../icons/interesting/title_interesting.png'
import arrow from './../../icons/interesting/arrow.png'


import "./interesting.sass"
import 'swiper/css';

const Interesting = () => {
    const quotes = useSelector((state)=> state.interestingSlice.quotes);
    const news = useSelector((state)=> state.interestingSlice.news);
    const events = useSelector((state)=> state.interestingSlice.events);
    const subscription = useSelector((state)=> state.interestingSlice.subscription);

    const navigation =
        <div className="swiper-button swiper-button_interesting">
            <div className="swiper-button__wrapper swiper-button__wrapper_prev swiper-button__wrapper_interesting">
                <div className="swiper-button__line swiper-button__line_interesting swiper-button__line_prev"></div>
                <div className="swiper-button__round swiper-button__round_interesting swiper-button__round_prev"></div>
            </div>
            <div className="swiper-button__title swiper-button__title_interesting"><img src={arrow} alt="arrow"/></div>
            <div className="swiper-button__wrapper swiper-button__wrapper_next swiper-button__wrapper_interesting">
                <div className="swiper-button__line swiper-button__line_interesting swiper-button__line_next"></div>
                <div className="swiper-button__round swiper-button__round_interesting swiper-button__round_next"></div>
            </div>
        </div>

    const swiperSlide = quotes.map(({name, data, content}, i) =>{
        return(
            <SwiperSlide 
                key={uniqid()}>
                    <div className="swiper-slide__subWrapper swiper-slide__subWrapper_interesting">
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

    const News = () => news.map(({data, title, dsc}) => {
        const description = dsc.length > 200 ? dsc.substring(0, 200) + "..." : dsc
        return (
            <div key={uniqid()} className = "news-event__subWrapper">
                <div className="news-event__data">{data}</div>
                <button className="news-event__title _btn-reset">{title}</button>
                <div className="news-event__content">{description}</div>
            </div>
            
        )
    })
    const Events = () => events.map(({title, dsc}) => {
        const description = dsc.length > 200 ? dsc.substring(0, 200) + "..." : dsc
        return (
            <div key={uniqid()} className = "news-event__subWrapper">
                <button className="news-event__title _btn-reset">{title}</button>
                <div className="news-event__content">{description}</div>
            </div>
            
        )
    })    
    const Subscription = () => subscription.map(({dsc}) => {
        const description = dsc.length > 200 ? dsc.substring(0, 200) + "..." : dsc
        return (
            <div key={uniqid()} className = "news-event__subWrapper">
                <div className="news-event__content">{description}</div>
            </div>
            
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
                    containerModifierClass="swiper_interesting-"
                    spaceBetween={100}
                    slidesPerView={1}
                    watchSlidesProgress= {true}
                    rewind = {true}
                    modules={[Grid, Navigation]}
                    grid = {{rows: 1,
                        fill: "row"}}
                    navigation = {{
                        nextEl: '.swiper-button__wrapper_next ',
                        prevEl: '.swiper-button__wrapper_prev',
                    }}
                    simulateTouch = {true}
                    >     
                    {swiperSlide}
                    {navigation}
                </Swiper>
                <div className="interesting__news-event news-event">
                    <div className="news-event__wrapper">
                        <div className="news-event__title-wrapper news-event__title-wrapper_news">Новости</div>
                        <News/>
                    </div>                
                    <div className="news-event__wrapper">
                        <div className="news-event__title-wrapper news-event__title-wrapper_events">События</div>
                        <Events/>
                    </div>
                    <div className="news-event__wrapper">
                        <div className="news-event__title-wrapper news-event__title-wrapper_subscription">Подписка</div>
                        <Subscription/>
                    </div>
                                    
                </div>
            </div>
        </section> 
    )
}

export default Interesting