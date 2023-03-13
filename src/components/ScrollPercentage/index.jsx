/* eslint-disable no-unused-vars */
import * as React from 'react';
import { InView } from 'react-intersection-observer';

import { calculateVerticalPercentage } from '../../helpers/calculateVerticalPercentage';

function isPlainChildren(props) {
  return typeof props.children !== 'function';
}

export class ScrollPercentage extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static displayName = 'ScrollPercentage';

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    threshold: 0,
  };

  state = {
    percentage: 0,
    inView: false,
    entry: undefined,
  };

  node = undefined;

  monitoring = false;

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.onChange &&
      (prevState.percentage !== this.state.percentage || prevState.inView !== this.state.inView)
    ) {
      this.props.onChange(this.state.percentage, this.state.entry);
    }

    if (prevProps.root !== this.props.root) {
      if (this.monitoring) {
        this.monitorScroll(false, prevProps.root);
        this.monitorScroll(this.state.inView);
      }
    }

    if (prevState.inView !== this.state.inView) {
      this.monitorScroll(this.state.inView, prevProps.root);
    }
  }

  componentWillUnmount() {
    this.monitorScroll(false);
  }

  handleScroll = () => {
    if (!this.node) return;
    const bounds = this.node.getBoundingClientRect();
    const percentage = calculateVerticalPercentage(bounds, this.props.threshold, this.props.root);
    if (percentage !== this.state.percentage) {
      this.setState({
        percentage,
      });
    }
  };

  handleInView = (inView, entry) => {
    this.node = entry.target;
    this.setState({ entry, inView });
  };

  handleRenderProps = ({ ref }) => {
    const { percentage, entry, inView } = this.state;
    if (!isPlainChildren(this.props)) {
      return this.props.children({
        percentage,
        entry,
        inView,
        ref,
      });
    }

    return null;
  };

  monitorScroll(enabled, target) {
    const root = target || this.props.root || window;

    if (enabled) {
      if (this.monitoring) return;
      root.addEventListener('scroll', this.handleScroll, { passive: true });
      root.addEventListener('resize', this.handleScroll);
      this.handleScroll();
      this.monitoring = true;
    } else {
      if (!this.monitoring) return;
      root.removeEventListener('scroll', this.handleScroll);
      root.removeEventListener('resize', this.handleScroll);
      this.monitoring = false;
    }
  }

  render() {
    return (
      <InView onChange={this.handleInView}>
        {!isPlainChildren(this.props) ? this.handleRenderProps : this.props.children}
      </InView>
    );
  }
}
