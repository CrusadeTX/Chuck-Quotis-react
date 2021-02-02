import {
    Card, 
    CardImg,
    CardBody,
  } from 'reactstrap';
  import '../../css/style.css'
  import images from '../../images//images.js'



const QuoteCard = props =>{
    const GenerateRandomImage = ()=>{

        let random = Math.floor(Math.random() * Math.floor(7));
        return images[random];

    }
    return <>
        <Card className='shadow m-2 card-quote'>
        <CardImg className="card-img-top img-full-size" src={GenerateRandomImage()}/>
        <CardBody>
         <span className="card-text">{props.text}</span>
        </CardBody>
        </Card>
        {/*<div id="card-template" className="card shadow m-2 card-quote">
            <img className="card-img-top img-full-size" src="" alt=''/>
            <div className="card-body">
                <span className="card-text">Some qsuick2 example text to build on the card title and make up the bulk of the card's content.</span>
            </div>
        </div>*/}
    </>
}
export default QuoteCard;