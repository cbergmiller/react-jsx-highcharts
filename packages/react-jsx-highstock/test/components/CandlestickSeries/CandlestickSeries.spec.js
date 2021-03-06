import React from 'react';
import { shallow } from 'enzyme';
import CandlestickSeries from '../../../src/components/CandlestickSeries/CandlestickSeries';
import Series from 'react-jsx-highcharts/src/components/Series';

describe('<CandlestickSeries />', function ()  {
  it('renders a <Series />', function ()  {
    const wrapper = shallow(<CandlestickSeries id="mySeries" />);
    expect(wrapper).to.have.type(Series);
  });

  it('renders a <Series type="candlestick" />', function () {
    const wrapper = shallow(<CandlestickSeries id="mySeries" />);
    expect(wrapper).to.have.prop('type').equal('candlestick');
  });

  it('passes other props through to <Series />', function () {
    const wrapper = shallow(<CandlestickSeries id="myOtherSeries" data={[1, 2, 3, 4]} />);
    expect(wrapper).to.have.prop('data').eql([1, 2, 3, 4]);
  });
});
