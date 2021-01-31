import Header from '../components/Header/Header';
import FilterMenu from '../components/Menu/Filter_Menu';
import CardQuote from '../components/Quote/Quote_Card';
import CardRow from '../components/Quote/Quote_Row'
import {Alert } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react';
import { getQuotes } from '../redux/actions';
import axios from 'axios';
import qs from 'qs';

function Home(props){
    
    const quotes = useSelector(state=>state.quotes);
    
    const dispatch = useDispatch();
    const loadQuotes = () =>{
        dispatch(getQuotes({
            limitTo: 'explicit',
        },
        ))
        console.log('hi')
        console.log(quotes)
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
    <div>
  {loadQuotes()}
    <CardRow/>
    </div>
    </div>
    </>
}
export default Home;