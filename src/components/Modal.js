import React from 'react'
import PropTypes from 'prop-types'



class Modal extends React.Component {
  render() {

    let close = <i className="close" onClick={() => {(e) => { this.props.onCloseArticle(e)}}}>&times;</i>

    return (
      <div id="background-modal" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}} onClick={(e) => {this.props.onCloseArticle(e)}}>
        <div id="modal" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
          <article id="myCryptoWorld" className={`${this.props.article === 'myCryptoWorld' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {close}
            <h2 className="major">myCryptoWorld</h2>
            <span className="image main"></span>
            <p>myCryptoWorld is a smartphone application that serve as a account aggregator for cryptocurrency exchanges. In the future, it will be possible to trade directly inside the app, and to communicate via a social networks for traders.</p>
            <p>The technology used are : react-native , firebase and graphql.</p>
            
          </article>

        </div>
      </div> 
    )
  }
}

Modal.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Modal
