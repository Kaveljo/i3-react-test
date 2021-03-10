const Card = ({card}) => {
    return (
        <div className="home-card">
            <img src={card.img} alt="Slika" className="home-card-image"/>
            <p className="home-card-text">{card.text}</p>
        </div>
    )
}

export default Card