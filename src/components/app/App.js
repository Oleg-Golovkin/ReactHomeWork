import React from 'react';
import Header from '../header/Header';
import Auction from '../auction/Auction';
import Lots from '../lots/Lots';
import { useMediaQuery } from "react-responsive";
import {changeMedia576px,
  changeMediaMin577px,
  changeMedia767px,
  changeMedia992px} from './mediaSlice'
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(changeMedia576px(useMediaQuery({ query: '(max-width: 576px)' })))
  dispatch(changeMediaMin577px(useMediaQuery({ query: '(min-width: 577px)' })))
  dispatch(changeMedia767px(useMediaQuery({ query: '(max-width: 767px)' })))
  dispatch(changeMedia992px(useMediaQuery({ query: '(max-width: 992px)' })))


  return (
    <>
      <Header/>
      <main>
        <Auction/>
        <Lots/>
      </main>   
    </>
  );
}

export default App;
