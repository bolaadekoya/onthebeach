import { faChevronDown, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { formatDate } from '../../shared';
import './holiday.css';

function Holiday(props) {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore)
    }

    let stars = [];

    if (props.star > 0) {
        for (let cnt = 0; cnt < props.star; cnt++) {
            stars.push(<FontAwesomeIcon key={ cnt } className="star" icon={ faStar } />)
        }
    }

    return (
        <div className="cont">
            <div className="wrapper">
                <div className="img-cont">
                    <img alt="" src={ props.image } />
                    <button className="read-more" onClick={ handleClick }>{
                        showMore ?
                            <span>Read less about this hotel <FontAwesomeIcon className="icon" icon={ faChevronDown } /></span>
                            : <span>Read more about this hotel <FontAwesomeIcon className="icon" icon={ faChevronRight } /></span>
                    }
                    </button>
                </div>
                <div className="details">
                    <div className="name">{ props.name }</div>
                    <div className="location">{ props.location }, { props.state }</div>
                    <div>{ stars }</div>
                    <div className="passengers">
                        { props.passenger.adults > 0 && <div><span>{ props.passenger.adults }</span>Adults,</div> }
                        { props.passenger.children > 0 && <div><span>{ props.passenger.children }</span>{ props.passenger.children > 1 ? 'children' : 'child' } </div> }
                        { props.passenger.infant > 0 && <div> & <span>{ props.passenger.infant }</span>infant</div> }
                    </div>
                    <div className="date">
                        <span>{ formatDate(props.startDate) }</span> for
                        <span> { props.duration }days</span>
                    </div>
                    <div className="departure">departing from <span>{ props.depart_from } </span></div>
                    <button className="book-now ">
                        <span>Book now</span>
                        <span>£{ props.price }</span>
                    </button>
                </div>
            </div>
            { showMore &&
                <div className="description">
                    <h4>Overview</h4> { props.description }
                </div>
            }
        </div>
    )
}

export default Holiday;