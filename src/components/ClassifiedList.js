import React, {Component} from 'react'
import '../styles/classified-list.css'
import properties from '../images/properties.png'
import cars from '../images/cars.png'
import  electronics from '../images/electronics.png'
import furniture from '../images/furniture.png'
import jobs from '../images/jobs.png'
import mobiles from '../images/mobiles.png'
import bikes from '../images/bikes.png'
import books from '../images/books.png'
import fashion from '../images/fashion.png'
import pets from '../images/pets.png'
import services from '../images/services.png'
import {Link} from 'react-router-dom'

class ClassifiedList extends Component{
    state = {
        ads: [],
        isLoading: false
    }

    componentDidMount(){
        fetch('http://localhost:3001/adverts/ads')
        .then(res => res.json())
        .then((json) => {
            console.log('json', json);
            this.setState({
                isLoading: true,
                ads: json,
            })
        })
    }

    

    render(){

        const mrgCategoryCenter = {
            marginRight: 'auto',
            marginLeft: 'auto' 
        }

        const {ads, isLoading} = this.state;

        if(!isLoading){
            return(
                <div>
                    <p>Classified are loading ...</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h4>Total ads: {ads.length}</h4>
                    <table style={mrgCategoryCenter}>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads', search:ads.category}}>
                                <div>
                                    <img className="catigory-img" src={properties} alt="properties"/>
                                </div>
                                <div>
                                    <span>Properties</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={cars} alt="cars"/>
                                </div>
                                <div>
                                        <span>Cars</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={electronics} alt="electronics"/>
                                </div>
                                <div>
                                        <span> Electronics</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={furniture} alt="furniture"/>
                                </div>
                                <div>
                                        <span>Furniture</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={jobs} alt="jobs"/>
                                </div>
                                <div>
                                        <span>Jobs</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={mobiles} alt="mobiles"/>
                                </div>
                                <div>
                                        <span>Mobiles</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={bikes} alt="bikes"/>
                                </div>
                                <div>
                                        <span>Bikes</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={books} alt="books"/>
                                </div>
                                <div>
                                        <span>Books</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={fashion} alt="fashion"/>
                                </div>
                                <div>
                                        <span>Fashion</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={pets} alt="pets"/>
                                </div>
                                <div>
                                        <span>Pets</span>
                                </div>
                            </Link>
                        </td>
                        <td className="text-center">
                            <Link to={{pathname: '/view-category-ads'}}>
                                <div>
                                        <img className="catigory-img" src={services} alt="services"/>
                                </div>
                                <div>
                                        <span>Services</span>
                                </div>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
                </div>
            );   
        }
    }
}

export default ClassifiedList