import React from 'react';

export class TestWidgetControl extends React.Component {
  handleChange = e => {
    const separator = this.props.field.get('separator', ', ');
    this.props.onChange(e.target.value.split(separator).map(e => e.trim()));
  };

  render() {
    const separator = this.props.field.get('separator', ', ');
    const { value } = this.props;
    return React.createElement('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange,
    });
  }
}
export default TestWidgetControl;
