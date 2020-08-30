import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render ExpensesSummary correctly with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={350.00} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1000.00} />);
    expect(wrapper).toMatchSnapshot();
});