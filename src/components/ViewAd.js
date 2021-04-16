import React, {Component} from 'react';
import '../styles/view-ad.css';
import car from '../images/car.jpg';
import 'react-router-dom';
import '../components/ViewAds';

class ViewAd extends Component{
    state = {
        ad: [],
        isLoading: false
    }
    componentDidMount(){
        fetch('http://localhost:3001/adverts/ad/'+ this.props.params)
              .then(res => res.json())
              .then((json) => {
                  console.log('json', json);
                  this.setState({
                      isLoading: true,
                      ad: json,
                  })
              })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="add-container">
                            <div className="pull-left">
                                <div>
                                    <h2>Ford Car</h2>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><i className="fa fa-map-pin"></i> Karachi</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item"><i className="fa fa-clock-o"></i> added on August 18, 2018 6:04am</li>
                                        <li className="list-inline-item">Ad ID: 89753</li>
                                    </ul>
                                </div>
                                <div className="divider"></div>
                                <div>
                                    <img className="img-fluid" src={car} alt="ford-car"/>
                                </div>
                                <div className="divider"></div>
                                <div className="single-listing-thumbnails">
                                    <div className="single-listing-thumbnail">
                                        <img className="img-fluid" src={car} alt=""/>
                                    </div>
                                    <div className="single-listing-thumbnail">
                                        <img className="img-fluid" src={car} alt=""/>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="single-item-detail">
                                    <div className="single-item-metadata">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">Model: 2017</li>
                                            <li className="list-inline-item">Condition: used</li>
                                        </ul>
                                    </div>
                                    <div className="single-item-description">
                                         Description: This is the moter byke and its new in condition having 2400 CC engine.
                                    </div>
                                </div>
                            </div>
                            <div className="pull-right">
                                <div className="single-item-price-container">
                                    <div className="left-triangle"></div>
                                    <div className="single-listing-item-price">
                                        <div className="item-price">
                                            RS. {400000}
                                        </div>
                                    </div>
                                </div>
                                <div className="olx-box-main">
                                    <div className="box-main-inner">
                                        <div className="col-sm-3 col-lg-3">
                                            <i className="fa fa-user fa-3x"></i>
                                        </div>
                                        <div className="col-sm-9 col-lg-9">
                                            <h4 className="seller-name">Abid Khan</h4>
                                            <p className="text-muted">Member since:  August 18, 2018</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="olx-box-main">
                                    <div className="box-main-inner content-margin-left">
                                        <h4>Seller Information</h4>
                                        <span className="text-muted">
                                            Name: Abid Khan
                                            <br/>
                                            Phone: 0312764329
                                        </span>
                                    </div>
                                </div>
                                <div className="olx-box-main">
                                    <div className="box-main-inner content-margin-left">
                                        <h4 className="text-center">Safety Tips for Buyers</h4>
                                        <ol className="safety-tips">
                                            <li>Meet seller at a safe location</li>
                                            <li>Check the item before you buy</li>
                                            <li>Pay only after collecting item</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="divider"></div>

                                <div className="divider"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAd;