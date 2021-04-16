
// ViewAds.js file show all the ads list

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/view-ads.css';
// import img from '../images/download.jpeg'

class ViewAds extends Component{
    state = {
        ads:[],
        isLoading: false
    }

    componentDidMount(){
        fetch('http://localhost:3001/adverts/ads')
        .then(res => res.json())
        .then((json) => {
            console.log('josn', json);
            this.setState({
                isLoading: true,
                ads: json,
            })
        })
    }
    
render(){

    const {ads, isLoading} = this.state;

    if(!isLoading){
        return(
            <div className="text-center">
                <p>Ads are loading ...</p>
            </div>
        );
    }

    else{
            return(
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <h2>View Ads</h2>
                                    <h4>Total Ads: {ads.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {ads.map(ad => (
                                    <div className="col-lg-12 back-view-ad" key={ad._id}>
                                    <div className="col-lg-3 single-img-container">
                                        <a href=""><img className="img-fluid" src={ad.productImage} alt="img"/></a>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="item-title">
                                            <h3><Link to={{pathname:'/view-ad', search:ad._id, state: { fromViewAds: true }}}><h3>{ad.title}</h3></Link></h3>
                                            <p><strong>Category: {ad.category}</strong></p>
                                            <div className="pull-left">
                                                <p className="price">Rs: {ad.price}</p>
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
                            ))};        
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ViewAds;
