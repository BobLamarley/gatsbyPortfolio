import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import GoogleMapReact from 'google-map-react'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    static defaultProps = {
      center: {
        lat: 48.3838502,
        lng: -4.5514561
      },
      zoom: 11
    }


    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const AnyReactComponent = ({ text }) => <div>{text}</div>

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>bigEars : a data presentational app written in Vue</h2>
                        </header>
                        <p>During my last year internship, I worked on a project from scratch on the front-end part.
                        I chose Vue.js, Vuex and webpack to complete this project, and I will explain how in this article </p>
                        <ul className="actions">
                            <li><a href="/hello-world" className="button">Learn More</a></li>
                        </ul>

                        <header className="major">
                            <h2>myCryptoWorld : a cryptocurrency portfolio tracker</h2>
                        </header>
                        <p>During my freetime, I used to play around with new technology especially Javascript. This is what i did by creating a smartphone app in react Native who uses GraphQL and other cools stuffs. </p>
                        <ul className="actions">
                            <li><a href="/hello-world" className="button">Read More here</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>I am currently looking for a FullStack developer job, you can contact me if you are interested</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                            <div style={{ height: '46vh', width: '100%' }}>
                              <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAqKSQ45TjlsgVlof3_4Or4Y0FvC0jQosE" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                              >
                                <AnyReactComponent
                                  lat={48.269265}
                                  lng={-4.8045334}
                                />
                              </GoogleMapReact>
                            </div>

                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Rue du kreisker<br />
                                        Bohars, 29820<br />
                                        Britanny, France
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        06-25-78-82-40
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">tms.mignon@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-download"><span className="label">CV</span></h3>
                                        <a href="http://www.thomas-mignon.com/public/CV_Thomas_Mignon.pdf">Get my CV</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
