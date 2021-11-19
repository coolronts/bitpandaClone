import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

const LeftHandComponent = ({ name }) => {
	return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
	return <p style={{ backgroundColor: 'red' }}>{message}!</p>;
}


export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitScreen leftWeight={1} rightWeight={3}>
			<LeftHandComponent name="Shaun" />
			<RightHandComponent message="Hello" />
		</SplitScreen>
      
    </div>
  );
}