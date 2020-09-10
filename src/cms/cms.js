import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import CustomPagePreview from './preview-templates/CustomPagePreview';
import TestPagePreview from './preview-templates/TestPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import CSSInjector from './CSSInjector';
import ThemeProvider from '../components/ThemeProvider';
import GlobalStyleWrapper from '../components/GlobalStyleWrapper';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('test', TestPagePreview);
CMS.registerPreviewTemplate('custom', CustomPagePreview);
CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <ThemeProvider>
      <GlobalStyleWrapper>
        <BlogPostPreview {...props}></BlogPostPreview>
      </GlobalStyleWrapper>
    </ThemeProvider>
  </CSSInjector>
))
