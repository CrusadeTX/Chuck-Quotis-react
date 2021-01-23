import Header from '../components/Header/Header';
import FilterMenu from '../components/Menu/Filter_Menu';
import CardQuote from '../components/Quote/Quote_Card';
import CardRow from '../components/Quote/Quote_Row'

function Home(props){
    return <>
     <div className="container-lg container-fluid ">
    <Header/>
    <FilterMenu/>
    <div>
    <CardQuote/>
    <CardRow/>
    </div>
    </div>
    </>
}
export default Home;