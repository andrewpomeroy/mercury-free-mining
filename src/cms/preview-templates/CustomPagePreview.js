import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry, widgetsFor, widgetFor }) => {
  // const sections = widgetsFor('test').map((section, index) =>
  //   section.getIn(['data']).toJS(),
  // );
  // return (
  //   <CustomPageTemplate
  //     title={entry.getIn(['data', 'title'])}
  //     anotherField={entry.getIn(['data', 'anotherField'])}
  //     test={sections}
  //   />
  // );
  const { title, anotherField, test } = entry.getIn(['data']).toJS();

  return (
    <CustomPageTemplate title={title} anotherField={anotherField} test={test} />
  );
};
export default CustomPagePreview;
