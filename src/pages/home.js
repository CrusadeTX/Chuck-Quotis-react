import Header from '../components/Header/Header';
import FilterMenu from '../components/Menu/Filter_Menu';
import CardQuote from '../components/Quote/Quote_Card';
import CardRow from '../components/Quote/Quote_Row'
import {Alert } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react';
import { getQuotes } from '../redux/actions';

function Home(props){
    
    const quotes = useSelector(state=>state.quotes);
    //const limit = useSelector(state=>state.filter);
    
    const dispatch = useDispatch();
    const loadQuotes = () =>{
        
        
        //console.log('hi')
       // console.log(quotes)
        if(!quotes.length){
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    There are no quotes!
                </Alert>
            </div>
        }
        const quoteCards = quotes.map(quote => {
            return <CardQuote
                key={quote.id}
                id={quote.id}
                text={quote.joke}
            />
        })


        return quoteCards;
        }
        

    return <>
     <div className="container-lg container-fluid ">
    <Header/>
    <FilterMenu/>
    <div id="quote-container" class="col-lg-9 d-flex flex-wrap col-12 justify-content-center order-2 order-lg-1">
  {loadQuotes()}
    </div>
    </div>
    </>
}
export default Home;