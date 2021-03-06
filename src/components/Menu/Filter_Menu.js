import React, {useEffect} from 'react';
import { Button } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import { getQuotes, setFilter, setLayout } from '../../redux/actions';
const FilterMenu = ()=>{
    const filter = useSelector(state=>state.filter)
    const layout = useSelector(state=>state.layout)
    const dispatch = useDispatch();

    const changeView = () =>{
        console.log('clicked')
        if (layout === 'Card'){
            dispatch(setLayout('Row'))
            //console.log('Row')
            
        }
        else{
            dispatch(setLayout('Card'))
            //console.log('Card')
        }
        console.log(layout)
        

    }
    const inputOnChange = (event) =>{
        dispatch(setFilter(event.target.value))
        loadQuotes(event.target.value)
        

    }
    const loadQuotes=(limit)=>{
        dispatch(getQuotes({
            limitTo: limit,
        }));
    }
    useEffect((filter) => {
        dispatch(setLayout('Card'))
        loadQuotes(filter);
    }, []);

    return  <>
        <div className="row mt-3 shadow p-2">
            <div className="d-flex align-items-center col-lg-2 col-12">
            <Button color="danger" className="btn text-center btn-block lg-btn my-2 my-lg-0" onClick={changeView}>Change View</Button>
            {/*<button id="change-view-btn" className="btn btn-danger text-center btn-block lg-btn my-2 my-lg-0">Change View</button>*/}
            </div>
            <div className="d-flex align-items-center col-lg-8 col-12 justify-content-center">
                <div className="d-flex align-items-center">
                    <span className="text-danger h4">Category: </span>
                </div>
                <div>
                    <form className="d-flex align-items-center">
                    <div className="custom-control custom-radio mx-2">
                     <label className="custom-control-label text-danger h6">
                        <input
                            type="radio"
                            name="limit"
                            value="nerdy"
                            checked={'nerdy'===filter}
                            onChange={inputOnChange}
                            className="custom-control-input"
                        />
                        Nerdy
                    </label>   
                    </div>
                    <div className="custom-control custom-radio mx-2">
                    <label className="custom-control-label text-danger h6">
                        <input
                            type="radio"
                            name="limit"
                            value="explicit"
                            checked={'explicit'===filter}
                            onChange={inputOnChange}
                            className="custom-control-input"
                        />
                        Explicit
                    </label>  
                    </div>
                    <div className="custom-control custom-radio mx-2">
                    <label className="custom-control-label text-danger h6">
                        <input
                            type="radio"
                            name="limit"
                            value=''
                            checked={''===filter}
                            onChange={inputOnChange}
                            className="custom-control-input"
                        />
                        All
                    </label>  
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    
}
export default FilterMenu;