import React ,{Component} from 'react';
import img from '../images/download.jpeg';
import {Link} from 'react-router-dom';



class ViewCategoryAds extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <h2>Properties Ads</h2>
                                <h4>Total Ads {2}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                            <div className="col-lg-12 back-view-ad">
                                <div className="col-lg-3 single-img-container">
                                    <a href=""><img className="img-fluid" src={img} alt="car"/></a>
                                </div>
                                <div className="col-lg-9">
                                    <div className="item-title">
                                        <h3><Link to={{pathname:'/view-ad'}}><h3>Honda Car</h3></Link></h3>
                                        <p><strong>Category: Car</strong></p>
                                        <div className="pull-left">
                                            <p className="price">Rs: {7896}</p>
                                        </div>
                                        <div className="pull-right">
                                            <button className="btn btn-primary">
                                                <i className="fa fa-heart"></i>
                                            </button>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
            </div>
        );
    }
}

export default ViewCategoryAds;