import './CardCoursera.css';

const CardCoursera = (props) => {
    return (
        <div className='domain-card'>
            <div className="img">
                <img src={props.imgUrl} />
            </div>
            <div className='content-coursera-card'>
                <div className='title-coursera-card'>{props.title}</div>
                <span className='span-coursera-card'>{props.span}</span>
            </div>
        </div>
    );
};

export default CardCoursera;