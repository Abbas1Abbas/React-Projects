import React from 'react'
import Accordion from './Components/accordion'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/StarRating'
import Slider from './Components/Slider'
import LoadMore from './Components/LoadMore'
import TreeView from './Components/TreeView'
import QrCode from './Components/QrCode'
import LightDark from './Components/lightDark'
import ScrollIndicator from './Components/ScrollIndicator'
import Tab from './Components/Tab'
import Pop from './Components/Pop'
import ScrollToTop from './Components/ScrollToTop'
import TicTacToe from './Components/TicTacToe'

const App = () => {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStar={10} />
      <Slider />
      <LoadMore />
      <TreeView />
      <QrCode />
      <LightDark />
      <ScrollIndicator />
      <Tab />
      <Pop />
      <ScrollToTop />
      <TicTacToe />
    </>
  )
}

export default App