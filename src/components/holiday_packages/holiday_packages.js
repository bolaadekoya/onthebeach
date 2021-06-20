import { faPoundSign, faSortAlphaDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import iberostar from '../../assets/hotel-image-1.png';
import aguamarina from '../../assets/hotel-image-2.png';
import piramides from '../../assets/hotel-image-3.png';
import { sortArray } from '../../shared';
import Holiday from '../holiday/holiday';
import './holiday_packages.css';

function HolidayPackages() {

    const packages = [
        {
            package_id: 1,
            name: 'iberostar grand salome',
            location: 'costa adeje',
            state: 'Tenerife',
            star: 5,
            description: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Aquatic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea',
            passenger: {
                adults: 2,
                children: 2,
                infant: 1
            },
            startDate: '7/3/2019',
            duration: 7,
            price: 1136.50,
            depart_from: 'East Midlands',
            image: iberostar
        },
        {
            package_id: 2,
            name: 'aguamarina golf hotel',
            location: 'costa adeje',
            state: 'Tenerife',
            star: 4,
            description: 'The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Aquatic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea',
            passenger: {
                adults: 2,
                children: 1,
                infant: 0
            },
            startDate: '5/27/2019',
            duration: 7,
            price: 697.80,
            depart_from: 'Liverpool',
            image: aguamarina
        },
        {
            package_id: 3,
            name: 'Las piramides resort',
            location: 'costa adeje',
            state: 'Tenerife',
            star: 3,
            description: 'The Las Piramides resort has an exceptional location in the south of Tenerife, overlooking the Aquatic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea',
            passenger: {
                adults: 2,
                children: 2,
                infant: 0
            },
            startDate: '7/3/2019',
            duration: 7,
            price: 499.99,
            depart_from: 'Manchester',
            image: piramides
        }
    ];
    const [sortValue, setSortValue] = useState('price');
    const [sortType, setSortType] = useState('number');
    const [holidays, setHolidays] = useState([]);

    /**
     * useffect method is used to update the UI anytime the sortvalue changes
     */
    useEffect(() => {
        const sortedPackage = sortArray(packages, sortValue, sortType);
        setHolidays(sortedPackage);
    }, [sortValue]);

    /**
     * 
     * @param {*} val - sort value to update sortValue 'alphabetically', 'price' and 'star'
     * @param {*} type - update sort type - type can be string or number
     */
    const sortBy = (val, type) => {
        setSortValue(val);
        setSortType(type);
    }

    return (
        <div className="flex-cont">
            <div className="flex-item-left" role="button">
                <div data-name="sort-alphabetically" onClick={ () => sortBy('name', 'string') } className={ sortValue === 'name' ? 'active' : '' }>
                    sort
                    <span> alphabetically</span>
                    <FontAwesomeIcon className="icon" icon={ faSortAlphaDown } />
                </div>
                <div data-name="sort-by-price" onClick={ () => sortBy('price', 'number') } className={ sortValue === 'price' ? 'active' : '' }>
                    sort by
                    <span> price</span>
                    <FontAwesomeIcon className="icon" icon={ faPoundSign } />
                </div>
                <div data-name="sort-by-star" onClick={ () => sortBy('star', 'number') } className={ sortValue === 'star' ? 'active' : '' }>
                    sort by
                    <span> star rating</span>
                    <FontAwesomeIcon className="icon" icon={ faStar } />
                </div>
            </div>
            <div className="flex-item-right">
                { holidays.map((item, index) => {
                    return <Holiday { ...item } key={ index } />
                }) }
            </div>
        </div>
    )
}

export default HolidayPackages;