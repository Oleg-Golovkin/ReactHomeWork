import React from 'react';
import Header from '../header/Header';
import Auction from '../auction/Auction';
import Lots from '../lots/Lots';
import Range from '../range/Range'
import Services from '../services/Services';
import Interesting from "./../interesting/Interesting"
import Footer from "./../footer/Footer"
import { useMediaQuery } from "react-responsive";
import {changeMedia576px,  
  changeMedia767px,
  changeMedia992px,
  changeMediaMin577px,
  changeMediaMin766px,} from './mediaSlice'
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(changeMedia576px(useMediaQuery({ query: '(max-width: 576px)' })))  
  dispatch(changeMedia767px(useMediaQuery({ query: '(max-width: 767px)' })))
  dispatch(changeMedia992px(useMediaQuery({ query: '(max-width: 992px)' })))
  dispatch(changeMediaMin577px(useMediaQuery({ query: '(min-width: 577px)' })))
  dispatch(changeMediaMin766px(useMediaQuery({ query: '(min-width: 766px)' })))


  return (
    <>
      <Header/>
      <main>
        <Auction/>
        <Lots/>
        <Range/>
        <Services/>
        <Interesting/>
      </main>
      <Footer/>
        
    </>
  );
}

export default App;
