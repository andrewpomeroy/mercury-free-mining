import React from 'react';
// import TagStyles from "./style.module.css"
export class TestWidgetPreview extends React.Component {
  render() {
    return React.createElement(
      'ul',
      {
        // className: TagStyles.tags,
      },
      this.props.value.map(function(value, index) {
        return React.createElement(
          'li',
          {
            // className: TagStyles.tag,
            key: index,
          },
          value
        );
      })
    );
  }
}
export default TestWidgetPreview;
