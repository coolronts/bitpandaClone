import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

export const Left = () => {
  return (
    <div>Hello Left</div>
  )
}

export const Right = () => {
  return (
    <div>Hello Right</div>
  )
}

export default function Home() {
  return (
    <div>
    
      <SplitScreen
        left={<Left />}
        right={<Right />}
      />

      
    </div>
  );
}