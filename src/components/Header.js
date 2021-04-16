import React, {Component} from 'react';
import logo from '../images/olx-logo.png';
import {Link} from 'react-router-dom';
import {getFromStorage} from '../utils/storage';


class Header extends Component{

    state = {
        isLoading: '',
        token: ''
    }

    onLogOut = this.onLogOut.bind(this);

    componentDidMount(){
        const obj = getFromStorage('the_main_app');
        if(obj && obj.token){
            const {token}  = obj;
            // verify
            fetch('http://localhost:3001/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
                if(json.success){
                    this.setState({
                        token,
                        isLoading: false
                    });
                }
                else{
                    this.setState({
                        isLoading: false
                    });
                }
            });
        }
        else{
            this.setState({ isLoading: false })
        }
    }

    onLogOut(){
        console.log("logout is working");
        this.setState({
            isLoading: true
        });
        const obj = getFromStorage('the_main_app');
        if(obj && obj.token){
            const {token}  = obj;
            // verify
            fetch('http://localhost:3001/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if(json.success){
                    this.setState({
                        token: '',
                        isLoading: false
                    });
                }
                else{
                    this.setState({
                        isLoading: false
                    });
                }
            });
        }
        else{
            this.setState({ isLoading: false })
        }
    }

    render(){
        const logoStyle = {
            width: '92px',
            height: '92px'
        }
        const plm = {
            fontSize: '18px',
            fontWeight: 'bold',
            position: 'absolute',
            top: '34px',
            left: '125px'
        }
        const navbarBtnsMargin={
            margin: '24px 0'
        }
        const lstItmMrg = {
            margin: '5px'
        }
        const homeBtn = {
            fontSize: '18px'
        }


        if (this.state.isLoading) {
            return(
                <div><p>Lodaing ...</p></div>
            );
        }
        // if(this.state.token){
        //     return(
        //         <div>
                    
        //         </div>
        //     )
        // }

            return(
                <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pull-left">
                        <div className="pull-left">
                            <a title="Market Place - Sell and Buy on Market Place" href="/"><img src={logo} style={logoStyle} alt="market place logo"/></a>
                        </div>
                        <span className="pull-right" style={plm}>Pakistan's Largest Marketplace</span>
                    </div>
                    <div className="pull-right" style={navbarBtnsMargin}>
                        <ul className="nav navbar-nav">

                            <li className="nav-item" 
                            style={lstItmMrg}>
                            <Link 
                            to="/user-account" 
                            className="btn btn-default" 
                            style={homeBtn}>
                            <i className="fa fa-user"></i> 
                            <strong> My Account</strong>
                            </Link>
                            </li>

                            <li 
                            className="nav-item" 
                            style={lstItmMrg}>
                            <Link 
                            to="/user-account" 
                            className="btn btn-warning" 
                            style={homeBtn}>
                            <strong>Submit an Ad</strong>
                            </Link>
                            </li>
                            <li 
                            className="nav-item" 
                            style={lstItmMrg} 
                            onClick={this.onLogOut}>
                            <Link to="/user-account" 
                            className="btn btn-warning" 
                            style={homeBtn}>
                            <strong>Logout</strong>
                            </Link>
                            </li> 
                            <li 
                            className="nav-item" 
                            style={lstItmMrg}>
                            <Link
                            className="btn btn-warning" 
                            style={homeBtn} 
                            to="/view-ads">
                            <strong>View Ads</strong>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            );
    }
}

export default Header;