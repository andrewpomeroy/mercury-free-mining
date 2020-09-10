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
import { TestWidgetControl, TestWidgetPreview } from '../widgets/testWidget';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget('testWidget', TestWidgetControl, TestWidgetPreview);

const PreviewShim = element => props => (
  <CSSInjector>
    <ThemeProvider>
      <GlobalStyleWrapper>
        {element(props)}
      </GlobalStyleWrapper>
    </ThemeProvider>
  </CSSInjector>
)

CMS.registerPreviewTemplate('index', PreviewShim(IndexPagePreview));
CMS.registerPreviewTemplate('about', PreviewShim(AboutPagePreview));
CMS.registerPreviewTemplate('products', PreviewShim(ProductPagePreview));
CMS.registerPreviewTemplate('test', PreviewShim(TestPagePreview));
CMS.registerPreviewTemplate('custom', PreviewShim(CustomPagePreview));
CMS.registerPreviewTemplate('blog', PreviewShim(BlogPostPreview));
