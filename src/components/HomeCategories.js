import React from 'react'
// import SocialMedia from './SocialMedia';
import ClassifiedList from './ClassifiedList';
import ViewAds from './ViewAds';

const HomeCategories = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ClassifiedList/>
                </div>
            </div>
            <ViewAds/>
        </div>
    );
}

export default HomeCategories;