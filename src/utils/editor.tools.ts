import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import List from '@editorjs/list';
import Link from '@editorjs/link';
import InlineCode from '@editorjs/inline-code';
import Image from '@editorjs/image';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';

const uploadImagebyURL = (e: any) => {
  const link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (error) {
      reject(error);
    }
  });

  return link.then((url) => {
    return {
      success: 1,
      file: { url },
    };
  });
};

// const handleUploadByFile = (e: any) => {
//   return handleUploadImage(e).then((url: any) => {
//     if (url) {
//       return {
//         success: 1,
//         file: { url },
//       };
//     }
//   });
// };

const EditorTools = {
  embed: Embed,
  link: Link,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImagebyURL,
        // uploadByFile: handleUploadByFile,
      },
    },
  },
  list: {
    class: List,
    inlineToolBar: true,
  },
  marker: Marker,
  inlineCode: InlineCode,
  quote: {
    class: Quote,
    inlineToolBar: true,
  },
  header: {
    class: Header,
    config: {
      placeholder: 'Type Heading ...',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 3,
    },
  },
};

export default EditorTools;
