import { shallow } from 'enzyme';
import React from 'react';
import HolidayPackages from './holiday_packages';

describe('<HolidayPackages />', () => {
    let wrapper;
    

    beforeEach(() => {
        wrapper = shallow(<HolidayPackages />);
    });

    describe('Check I can see all sorting options', () => {
        test('Has sort alphabetically option', () => {
            expect(wrapper.find('[data-name="sort-alphabetically"]').length).toBe(1);
        });

        test('Has sort by price option', () => {
            expect(wrapper.find('[data-name="sort-by-price"]').length).toBe(1);
        });

        test('Has sort by star option', () => {
            expect(wrapper.find('[data-name="sort-by-star"]').length).toBe(1);
        });
    });

    describe('Check sort value has been updated accordingly ', () => {

        test('sort dataset alphabetically', () => {
            wrapper.find('[data-name="sort-alphabetically"]').props().onClick();
            expect(wrapper.find('[data-name="sort-alphabetically"]').hasClass('active')).toEqual(true);
            expect(wrapper.find('[data-name="sort-by-price"]').hasClass('active')).toEqual(false);
            expect(wrapper.find('[data-name="sort-by-star"]').hasClass('active')).toEqual(false);
        });

        test('sort dataset by price', () => {
            wrapper.find('[data-name="sort-by-price"]').props().onClick();
            expect(wrapper.find('[data-name="sort-alphabetically"]').hasClass('active')).toEqual(false);
            expect(wrapper.find('[data-name="sort-by-price"]').hasClass('active')).toEqual(true);
            expect(wrapper.find('[data-name="sort-by-star"]').hasClass('active')).toEqual(false);
        });

        test('sort dataset alphabetically', () => {
            wrapper.find('[data-name="sort-by-star"]').props().onClick();
            expect(wrapper.find('[data-name="sort-alphabetically"]').hasClass('active')).toEqual(false);
            expect(wrapper.find('[data-name="sort-by-price"]').hasClass('active')).toEqual(false);
            expect(wrapper.find('[data-name="sort-by-star"]').hasClass('active')).toEqual(true);
        });

    });


});