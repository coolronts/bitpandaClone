import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitScreen leftWeight={'w-1/4'} rightWeight={'w-1/4'}>
          <MyPortfolio/>
          <CreditCard />
      </SplitScreen>
    </div>
  );
}