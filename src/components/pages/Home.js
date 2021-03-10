import Card from '../UI/Card'
import $ from "jquery";

const Home = ({cards}) => {
    const mySlide = (direction) => {
        var width = document.getElementById('slider').offsetWidth;
        document.getElementById('slider').style.right = width;
        direction === "left" ? $('#slider div:last-child').prependTo('#slider') : $('#slider div:first-child').appendTo('#slider');
    }

    return (
        <div className="home">
            <div className="home-wrapper" id="slider">
                {cards.map((card)=>(
                    <Card key={card.id} card={card}/>
                ))}
            </div>
            <div className="home-buttons">
                <button onClick={() => mySlide('left')}>&#8249;</button>
                <button onClick={() => mySlide('right')}>&#8250;</button>
            </div>
        </div>
    )
}

export default Home