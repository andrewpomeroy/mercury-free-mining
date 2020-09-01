import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry, getAsset }) => {

  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'])}
    />
  );
};

CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CustomPagePreview;
