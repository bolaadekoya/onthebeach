import { shallow } from 'enzyme';
import React from 'react';
import Holiday from './holiday';

describe('<Holiday />', () => {
    let wrapper;
    let mockData = {
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
        image: 'iberostar'
    };

    beforeEach(() => {
        wrapper = shallow(<Holiday { ...mockData } key={ 1 } />);
    });

    test('Check if component renders by checking if description exist on read more click', () => {
        wrapper.find('.read-more').props().onClick();
        expect(wrapper.text().includes('has an exceptional location')).toBe(true);
    });
});