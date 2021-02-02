  import '../../css/style.css'
  import images from '../../images//images.js'


const QuoteRow = props =>{
    const GenerateRandomImage = ()=>{

        let random = Math.floor(Math.random() * Math.floor(7));
        return images[random];

    }
    return <>
        <div className="d-flex border-top w-100">
            <img className="card-img-top thumbnail" src={GenerateRandomImage()} alt=''/>
            <div className="card-body">
                <span className="card-text">{props.text}</span>
            </div>
        </div>
    </>
}
export default QuoteRow;