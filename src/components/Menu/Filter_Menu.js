import React from 'react';
import { Button } from 'reactstrap';
const FilterMenu = ()=>{
    return  <>
        <div className="row mt-3 shadow p-2">
            <div className="d-flex align-items-center col-lg-2 col-12">
            <Button color="danger" className="btn text-center btn-block lg-btn my-2 my-lg-0">Change View</Button>
            {/*<button id="change-view-btn" className="btn btn-danger text-center btn-block lg-btn my-2 my-lg-0">Change View</button>*/}
            </div>
            <div className="d-flex align-items-center col-lg-8 col-12 justify-content-center">
                <div className="d-flex align-items-center">
                    <span className="text-danger h4">Category: </span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="custom-control custom-radio mx-2">
                        <input type="radio" id="customRadio1" name="limit" value="nerdy" className="custom-control-input"/>
                        <label className="custom-control-label text-danger h6" for="customRadio1">Nerdy</label>
                    </div>
                    <div className="custom-control custom-radio mx-2">
                        <input type="radio" id="customRadio2" name="limit" value="explicit"className="custom-control-input"/>
                        <label className="custom-control-label text-danger h6" for="customRadio2">Explicit</label>
                    </div>
                    <div className="custom-control custom-radio mx-2">
                        <input type="radio" id="customRadio3" name="limit" value="all" className="custom-control-input"/>
                        <label className="custom-control-label text-danger h6" for="customRadio3">All</label>
                    </div>
                </div>
            </div>
        </div>
    </>
    
}
export default FilterMenu;