import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitScreen 
        left={<MyPortfolio />}
        right={<CreditCard />}
        leftWeight={1} rightWeight={3}
      />      
    </div>
  );
}