import PreviewView from "./previewView";

class BookmarksView extends PreviewView {
  _parentEl = document.querySelector('.bookmarks');
  _errorMessage = 'Please bookmark to save your recipe..'; 
}

export default new BookmarksView();
