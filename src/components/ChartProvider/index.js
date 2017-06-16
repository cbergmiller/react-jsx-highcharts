import React, { Component } from 'react';
import PropTypes from 'prop-types';
import providedProps from '../../utils/providedProps';
import cleanPropsBeforeUpdate from '../../utils/cleanPropsBeforeUpdate';

function getDisplayName (Component) {
  return Component.displayName || Component.name || 'Component';
}

export default function provideChart(WrappedComponent) {
  class ChartProvider extends Component {
    static displayName = `ChartProvider(${getDisplayName(WrappedComponent)})`;

    static contextTypes = {
      chart: PropTypes.object
    };

    constructor (props, context) {
      super(props, context);

      providedProps('ChartProvider', ['get', 'update', 'addAxis', 'addSeries', 'setTitle']);
    }

    render () {
      const chart = this.context.chart;

      return (
        <WrappedComponent
          {...this.props}
          get={chart.get.bind(chart)}
          update={cleanPropsBeforeUpdate(chart.update.bind(chart))}
          addAxis={cleanPropsBeforeUpdate(chart.addAxis.bind(chart))}
          addSeries={cleanPropsBeforeUpdate(chart.addSeries.bind(chart))}
          setTitle={cleanPropsBeforeUpdate(chart.setTitle.bind(chart))} />
      );
    }
  }

  return ChartProvider;
}