import Header from '../components/Header/Header';
import FilterMenu from '../components/Menu/Filter_Menu';

function Home(props){
    return <>
     <div className="container-lg container-fluid ">
    <Header/>
    <FilterMenu/>
    </div>
    </>
}
export default Home;