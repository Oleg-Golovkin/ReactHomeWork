import Separator from "../separator/Separator"
import popular from './../../icons/lots/popular.png'
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {reduxThunkImg} from './lotsSlice'
import uniqid from 'uniqid'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import './lots.sass'


const Lots = () => {
    const dispatch = useDispatch();
    const img = useSelector((state)=> state.lotsSlice.img)
    
    useEffect(()=> {
        dispatch(reduxThunkImg())
    // eslint-disable-next-line   
    }, [])
    // console.log(img.map());
    const swiperSlide = img.map(item =>{
        return(
            <SwiperSlide 
                key={uniqid()}>
                    <img src={item.item} alt=""/>
            </SwiperSlide>
        )
    })

    console.log(img[0]);

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
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Grid]}
                grid = {{rows: 2,
                    fill: "row"}}>
                {/* {swiperSlide} */}
            </Swiper>
        </section> 
    )
}

export default Lots