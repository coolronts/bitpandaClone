import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

const Left = () => {
  return (
    <div>Hello Left</div>
  )
}

const Right = () => {
  return (
    <div>Hello Right</div>
  )
}

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitPane
      left={
        <Left />
      }
      right={
        <Right />
      } />

      
    </div>
  );
}