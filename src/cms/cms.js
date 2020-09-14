import React from 'react';
import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import CustomPagePreview from './preview-templates/CustomPagePreview';
import TestPagePreview from './preview-templates/TestPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ThemeProvider from '../components/ThemeProvider';
import GlobalStyleWrapper from '../components/GlobalStyleWrapper';
import withEmotion from './withEmotion';
import floatImageEditorComponent from './floatImageEditorComponent';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent(floatImageEditorComponent);

const PreviewShim = element =>
  withEmotion(props => (
    <ThemeProvider>
      <GlobalStyleWrapper>{element(props)}</GlobalStyleWrapper>
    </ThemeProvider>
  ));

CMS.registerPreviewTemplate('index', PreviewShim(IndexPagePreview));
CMS.registerPreviewTemplate('about', PreviewShim(AboutPagePreview));
CMS.registerPreviewTemplate('products', PreviewShim(ProductPagePreview));
CMS.registerPreviewTemplate('test', PreviewShim(TestPagePreview));
CMS.registerPreviewTemplate('custom', PreviewShim(CustomPagePreview));
CMS.registerPreviewTemplate('blog', PreviewShim(BlogPostPreview));
