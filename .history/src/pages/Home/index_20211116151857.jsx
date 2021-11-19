import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import {SplitScreen} from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

function Left(){
  return  <div className="Chat" />;
}

function Right(){
  return (
     <div className="Chat" />;
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