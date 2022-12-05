import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';

import Separator from "../separator/Separator"

import title_interesting from './../../icons/interesting/title_interesting.png'
import prev from './../../icons/lots/prev.png'
import next from './../../icons/lots/next.png'

import "./interesting.sass"

const Interesting = () => {

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
    return(
        <section className="interesting">
            <div className="container">
                <Separator 
                    subTitle = {"Цитаты"} 
                    img = {title_interesting} 
                    classSection={'interesting'}/> 
            </div>
            
            
        </section> 
    )
}

export default Interesting