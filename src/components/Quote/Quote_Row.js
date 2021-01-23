  import '../../css/style.css'
  import image from '../../images/1.jpg'


const QuoteRow = ()=>{
    return <>
        <div className="d-flex border-top w-100">
            <img className="card-img-top thumbnail" src={image} alt=''/>
            <div className="card-body">
                <span className="card-text">Some qsuick2 example text to build on the card title and make up the bulk of the card's content.</span>
            </div>
        </div>
    </>
}
export default QuoteRow;