import { ImageDrop } from './imagePasteDrop';
import ImageResize from './imageResize';
import { MagicUrl } from './magic-url';
import MarkdownShortcuts from './markdown-shortcuts';
import highlightInit from './highlight';
import QuillBetterTable from './quill-better-table/quill-better-table';
import Image from './image';

import { toolbarInit, LinkHandler, undoHandler, redoHandler, TableHandler, ImageHandler } from './toolbar';
import { showTitle } from './iconTitle/title';
import QSyntax from './syntax';

// Quill.register(
//   {
//     'modules/imageResize': ImageResize,
//     'modules/imageDrop': ImageDrop,
//     'modules/magicUrl': MagicUrl,
//     'modules/markdownShortcuts': MarkdownShortcuts,
//     'modules/toolbarTable': ToolbarTable,
//   },
//   true,
// );

export {
  highlightInit,
  ImageDrop,
  Image,
  ImageResize,
  MagicUrl,
  MarkdownShortcuts,
  QuillBetterTable,
  QSyntax,
  
  toolbarInit,
  showTitle,
  LinkHandler,
  TableHandler,
  ImageHandler,
  undoHandler,
  redoHandler,
};
