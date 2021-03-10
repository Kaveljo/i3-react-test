import {useEffect} from 'react';
import $ from "jquery";
const AboutCard = ({card}) => {

    useEffect(() => {
        if($('.about-card').offset().top){
            if($('.about-card').offset().top + $('.about-card').height() < ($(window).height())){
                $('.about-card').each(function(i){
                    setTimeout(function(){
                        $('.about-card').eq(i).addClass('fadeIn');
                    }, 400 * (i+1));
                });
            }
        }
    }, []);

    return (
        <div className="about-card">
            <img src={card.img} alt={card.id}/>
            <p>{card.text}</p>
        </div>
    )
}

export default AboutCard
