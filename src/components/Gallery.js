import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import Modal from './Modal.js'

class Gallery extends Component {

  constructor(props) {
   super(props)
   this.state = {
     isArticleVisible: false,
     timeout: false,
     articleTimeout: false,
     article: '',
     loading: 'is-loading'
   }
   this.handleOpenArticle = this.handleOpenArticle.bind(this)
   this.handleCloseArticle = this.handleCloseArticle.bind(this)
 }

 componentDidMount () {
   this.timeoutId = setTimeout(() => {
       this.setState({loading: ''});
   }, 100);
 }

 componentWillUnmount () {
   if (this.timeoutId) {
       clearTimeout(this.timeoutId);
   }
 }

 handleOpenArticle(article) {
  this.setState({
    isArticleVisible: true,
    article
  })

  setTimeout(() => {
    this.setState({
      timeout: true
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      articleTimeout: true
    })
  }, 350)

}

handleCloseArticle(event) {

  event.stopPropagation()
  
  this.setState({
    articleTimeout: false
  })

  setTimeout(() => {
    this.setState({
      timeout: false
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      isArticleVisible: false,
      article: ''
    })
  }, 350)

}

    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (

                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        onClick={() => this.handleOpenArticle(obj.id)}
                    >
                        <img src={obj.thumbnail} id={obj.id+"Photo"} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
                <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
                  <div id="wrapper">
                    <Modal
                      isArticleVisible={this.state.isArticleVisible}
                      timeout={this.state.timeout}
                      articleTimeout={this.state.articleTimeout}
                      article={this.state.article}
                      onCloseArticle={this.handleCloseArticle}
                    />
                  </div>
                  
                </div>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';


export default Gallery;