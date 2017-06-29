import React, { Component } from 'react';
import { mount } from 'enzyme';
import provideAxis from '../../../src/components/AxisProvider';
import { createMockChart, createMockAxis } from '../../test-utils';

const WrappedComponent = props => (
  <div />
);
const AxisWrappedComponent = provideAxis(WrappedComponent);

describe('<AxisProvider />', function () {

  beforeEach(function () {
    this.axis = createMockAxis();
    this.chart = createMockChart();
    this.chart.get.withArgs('myAxisId').returns(this.axis);

    this.context = {
      chart: this.chart
    };
  });

  describe('provided prop functions', function () {
    beforeEach(function () {
      this.axis.update.withArgs({ prop: 'Test9876' }).returns('update method mock');
      this.axis.remove.withArgs({ prop: 'Test1234' }).returns('remove method mock');
      this.axis.addPlotBand.withArgs({ prop: 'Test4567' }).returns('addPlotBand method mock');
      this.axis.removePlotBand.withArgs({ prop: 'Test7654' }).returns('removePlotBand method mock');
      this.axis.addPlotLine.withArgs({ prop: 'Test4444' }).returns('addPlotLine method mock');
      this.axis.removePlotLine.withArgs({ prop: 'Test5555' }).returns('removePlotLine method mock');
    });

    it('should pass the `update` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().update({ prop: 'Test9876' })).to.eql('update method mock');
    });

    it('should pass the `remove` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().remove({ prop: 'Test1234' })).to.eql('remove method mock');
    });

    it('should pass the `addPlotBand` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().addPlotBand({ prop: 'Test4567' })).to.eql('addPlotBand method mock');
    });

    it('should pass the `removePlotBand` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().removePlotBand({ prop: 'Test7654' })).to.eql('removePlotBand method mock');
    });

    it('should pass the `addPlotLine` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().addPlotLine({ prop: 'Test4444' })).to.eql('addPlotLine method mock');
    });

    it('should pass the `removePlotLine` function of the axis to the wrapped component', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().removePlotLine({ prop: 'Test5555' })).to.eql('removePlotLine method mock');
    });

    it('should pass all other props through to the WrappedComponent', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" prop1="bob" prop264="dave" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().prop1).to.eql('bob');
      expect(wrapper.props().prop264).to.eql('dave');
    });
  });

  describe('properly scoped prop functions', function () {
    beforeEach(function () {
      this.axis.update.withArgs({ prop: 'Test9876' }).returnsThis();
      this.axis.remove.withArgs({ prop: 'Test1234' }).returnsThis();
      this.axis.addPlotBand.withArgs({ prop: 'Test4567' }).returnsThis();
      this.axis.removePlotBand.withArgs({ prop: 'Test7654' }).returnsThis();
      this.axis.addPlotLine.withArgs({ prop: 'Test4444' }).returnsThis();
      this.axis.removePlotLine.withArgs({ prop: 'Test5555' }).returnsThis();
    });

    it('the scope of the `update` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().update({ prop: 'Test9876' })).to.eql(this.axis);
    });

    it('the scope of the `remove` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().remove({ prop: 'Test1234' })).to.eql(this.axis);
    });

    it('the scope of the `addPlotBand` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().addPlotBand({ prop: 'Test4567' })).to.eql(this.axis);
    });

    it('the scope of the `removePlotBand` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().removePlotBand({ prop: 'Test7654' })).to.eql(this.axis);
    });

    it('the scope of the `addPlotLine` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().addPlotLine({ prop: 'Test4444' })).to.eql(this.axis);
    });

    it('the scope of the `removePlotLine` function should be bound to the axis', function () {
      const wrapper = mount(<AxisWrappedComponent axisId="myAxisId" />, {context: this.context}).find(WrappedComponent);
      expect(wrapper.props().removePlotLine({ prop: 'Test5555' })).to.eql(this.axis);
    });
  });
});
