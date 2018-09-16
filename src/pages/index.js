import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import {Timeline, TimelineEvent} from 'react-event-timeline'


import GoogleMapReact from 'google-map-react'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'

import full01 from '../assets/images/myCryptoWorldHome.png'
import full02 from '../assets/images/fulls/02.jpg'

import arkeaLogo from '../assets/images/arkeaLogo.png'
import isenLogo from '../assets/images/isenLogo.jpg'
import immofacileLogo from '../assets/images/immofacileLogo.jpg'


const DEFAULT_IMAGES = [
    { id: 'myCryptoWorld', src: full01, thumbnail: full01, caption: 'myCryptoWorld', description: 'myCryptoWorld is a portfolio for cryptocurrency written in react-native'},
    { id: 'immofacile', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
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

                    <section id="article">
                        <header className="major">
                            <h2>bigEars : a data presentational app written in Vue</h2>
                        </header>
                        <p>During my last year internship, I worked on a project from scratch on the front-end part.
                        I chose Vue.js, Vuex and webpack to complete this project, and I will explain how in this article </p>
                        <ul className="actions">
                            <li><a href="/bigears/" className="button">Read more</a></li>
                        </ul>
                    </section>


                    <section id="project">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            id,
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="timeline">
                    <h2>Timeline</h2>
                      <Timeline>
                             <TimelineEvent title="ISEN Engineering school : student"
                                            createdAt="2013 - 2018"
                                            icon={<i className="icon fa-book"></i>}
                             >
                             <img src={isenLogo} id="isenLogo"/>
                            <div>
                                Courses involving math, physics, statistics, computer technologies and big data
                            </div>
                            </TimelineEvent>
                            <TimelineEvent title="Arkea internship : Fullstack Developper"
                                           createdAt="2017 - 2018"
                                           icon={<i className="icon fa-pencil"></i>}
                                       >
                                <img src={arkeaLogo} id="arkeaLogo" />
                                <div>
                                 I spent one year internship at a large French bank working on trendy technologies such as Vue.js, Vuex, Graphql, Webpack and back-ends in java
                                </div>
                            </TimelineEvent>
                            <TimelineEvent title="Immofacile internship : Frontend Developper"
                                           createdAt="2015 - 2016"
                                           icon={<i className="icon fa-pencil"></i>}
                                       >
                                <img src={immofacileLogo} id="immofacileLogo" />
                                <div>
                                 I spent one year internship at a small company working on software for real estate agencies written in PHP/Jquery.
                                </div>
                            </TimelineEvent>
                     </Timeline>
                    </section>

                    <section id="contact">
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
