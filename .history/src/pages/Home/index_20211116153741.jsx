import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import TopMovers from '../../components/TopMovers'

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <MyPortfolio />
      <CreditCard />
      
    </div>
  );
}