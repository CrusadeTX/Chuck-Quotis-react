  import '../../css/style.css'
  import image from '../../images/1.jpg'


const QuoteRow = props =>{
    return <>
        <div className="d-flex border-top w-100">
            <img className="card-img-top thumbnail" src={props.imagePath} alt=''/>
            <div className="card-body">
                <span className="card-text">{props.text}</span>
            </div>
        </div>
    </>
}
export default QuoteRow;