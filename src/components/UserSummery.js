import React, {Component} from 'react';


class UserSummery extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="background-pad">
                            <div className="pull-left">
                                <h1>Hello left</h1>
                            </div>
                            <div className="pull-right">
                                <h1>Hello right</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSummery;