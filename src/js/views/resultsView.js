import PreviewView from "./previewView";

class ResultsView extends PreviewView {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'Try again, the recipe your searching for is not here..'; 
}

export default new ResultsView();
