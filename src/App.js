import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imageKeyword: '',
  };

  handleFormSubmit = imageKeyword => {
    this.setState({ imageKeyword });
  };

  render() {
    const { imageKeyword } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageKeyword={imageKeyword} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
