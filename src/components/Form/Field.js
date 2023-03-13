/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import { moAttr } from '../../../utils/moattr';
import FieldContext from './FieldContext';

export default class Field extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = FieldContext;

  cancelRegisterFunc;

  componentDidMount() {
    const { registerField } = this.context;
    this.cancelRegisterFunc = registerField(this);
  }

  componentWillUnmount() {
    if (this.cancelRegisterFunc) {
      this.cancelRegisterFunc();
    }
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  onStoreChange = (prevStore, curStore) => {
    const { shouldUpdate } = this.props;
    if (typeof shouldUpdate === 'function') {
      if (shouldUpdate(prevStore, curStore)) {
        this.forceUpdate();
      }
    } else {
      this.forceUpdate();
    }
  };

  getControlled = () => {
    const { name, children, ...rest } = this.props;
    const { getFieldValue, setFieldsValue, getFieldError } = this.context;
    return {
      error: getFieldError(name),
      ...rest,
      value: getFieldValue(name),
      onBlur: event => {
        if (event.target.value.length > 0) {
          moAttr.fieldAttr(name, event.target.value);
        }
      },
      onChange: event => {
        const newValue = event.target.value;
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  render() {
    const { children } = this.props;
    return React.cloneElement(children, { ...this.getControlled() });
  }
}
