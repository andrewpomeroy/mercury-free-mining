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
import { Derp } from '../components/Content';
import { useEffect } from 'react';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

const OK = props => {
  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    console.log("iframe is", iframe);
  }, [])
  return <>{props.children}</>
}

CMS.registerWidget('testWidget', TestWidgetControl, TestWidgetPreview);
CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /<derp>(\S+)<\/derp>/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    // return 'youtube ' + obj.id;
    return '<derp>'+obj.id+'</derp>';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      <OK>
        <Derp>{obj.id} it's a preview</Derp>
      </OK>
      // '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});

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
