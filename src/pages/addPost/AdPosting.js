import React, {Component} from 'react';
import './add-posting.css';
import configs from "../../config";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
  } from "@material-ui/core";
const axios = require('axios');



class AdPosting extends Component{
    state = {
        adPostError: '',
        title: '',
        category:'',
        model: '',
        condition: '',
        price: '',
        description: '',
        sellerName: '',
        soldCity: '',
        phoneNum: '',
        productImage: null
    }
        onChangeTitle = this.onChangeTitle.bind(this);
        onChangeCategory = this.onChangeCategory.bind(this);
        onChangeModel = this.onChangeModel.bind(this);
        onChangeCondition = this.onChangeCondition.bind(this);
        onChangePrice = this.onChangePrice.bind(this);
        onChangeDescription = this.onChangeDescription.bind(this);
        onChangeSellerName = this.onChangeSellerName.bind(this);
        onChangeCity = this.onChangeCity.bind(this);
        onChangePhoneNum = this.onChangePhoneNum.bind(this);
        onChangeProductImageOne = this.onChangeProductImageOne.bind(this);
        onSubmitAd = this.onSubmitAd.bind(this);

        onChangeTitle(event){
            this.setState({
                title : event.target.value,
            });
        }

        onChangeCategory(event){
            this.setState({
                category: event.target.value,
            });
        }

        onChangeModel(event){
            this.setState({
                model: event.target.value,
            })
        }

        onChangePrice(event){
            this.setState({
                price: event.target.value,
            })
        }

        onChangeCondition(event){
            this.setState({
                condition: event.target.value,
            })
        }

        onChangeDescription(event){
            this.setState({
                description: event.target.value,
            })
        }

        onChangeSellerName(event){
            this.setState({
                sellerName: event.target.value,
            })
        }

        onChangeCity(event){
            this.setState({
                soldCity: event.target.value,
            })
        }

        onChangePhoneNum(event){
            this.setState({
                phoneNum: event.target.value,
            })
        }

        onChangeProductImageOne(event){
            console.log(event.target.files[0]);
            this.setState({
                productImage: event.target.files[0]
            });
        }

        onSubmitAd(e){
            console.log("testing onSubmitAd function");
            console.log("this.state.title",this.state.title)
            console.log("this.state.title",this.state.category)
            console.log("this.state.title",this.state.model)
            console.log("this.state.title",this.state.condition)
            console.log("this.state.title",this.state.price)
            console.log("this.state.title",this.state.description)
            console.log("this.state.title",this.state.sellerName)
            console.log("this.state.title",this.state.soldCity)
            console.log("this.state.title",this.state.phoneNum)
            //console.log("this.state.title",this.state.productImage)
            var bodyFormData = new FormData();
            bodyFormData.append('productImage',this.state.productImage);
            bodyFormData.append('title',this.state.title);
            bodyFormData.append('category', this.state.category);
            bodyFormData.append('model', this.state.model);
            bodyFormData.append('condition', this.state.condition);
            bodyFormData.append('price', this.state.price);
            bodyFormData.append('description', this.state.description);
            bodyFormData.append('sellerName', this.state.sellerName);
            bodyFormData.append('soldCity', this.state.soldCity);
            bodyFormData.append('phoneNum', this.state.phoneNum);

            // Display the key/value pairs
            for (var pair of bodyFormData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            var url= `${configs.APP.APIURL}adpost`
            console.log("bodyFormData",bodyFormData.entries())
            console.log("url",url)
            axios.post(url,bodyFormData,config)
            .then((response) => {
                this.setState({
                            title: '',
                            category: '',
                            model: '',
                            condition: '',
                            price: '',
                            description: '',
                            sellerName: '',
                            soldCity: '',
                            phoneNum: ''
                })
                console.log("response", response);
            }).catch(error => {
                console.log(error.message);
              });
            

            e.preventDefault();
        };

    render(){
        return(
            <div className="container">
            <div className="row">
                <div class="col-sm-8">
                    
                    {
                        (this.state.adPostError) ? (
                            <strong><p>{this.state.adPostError}</p></strong>
                            ) : (null)
                    }
                        <h2>Post Your Ad</h2>
                        <form encType="multipart/form-data">
                            
                        <div class="form-group">
                                <label>Title</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select value={this.state.category} 
                                onChange={this.onChangeCategory} 
                                className="form-control">
                                    <option value="">Select category</option>
                                    <option value="Properties">Properties</option>
                                    <option value="Cars">Cars</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Jobs">Jobs</option>
                                    <option value="Mobiles">Mobiles</option>
                                    <option value="Bikes">Bikes</option>
                                    <option value="Books">Books</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Pets">Pets</option>
                                    <option value="Services">Services</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.model}
                                onChange={this.onChangeModel}
                                />
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                <select value={this.state.condition} onChange={this.onChangeCondition} className="form-control">
                                    <option value="">Select condition</option>
                                    <option value="new">New</option>
                                    <option value="old">Old</option>
                                    <option value="used">Used</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                />
                            </div>
                            <div className="from-group">
                                <label>Description</label>
                                <textarea name="adDiscription" 
                                className="form-control" 
                                row="7" 
                                value={this.state.description} 
                                onChange={this.onChangeDescription}>
                                </textarea>
                            </div>
                            <div className="image-margin">
                                <div className="">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        <input type="file"
                                        name="productImage" 
                                        onChange={this.onChangeProductImageOne} 
                                        className="form-control"/>
                                    </div>
                                </div>
                                
                            </div>
                            <span className="text-danger"></span>
                            <div className="divider"></div>
                            <div className="form-group">
                                <h4>Seller Information</h4>
                            </div>
                            <div className="form-group">
                                <label>Seller Name</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.sellerName}
                                onChange={this.onChangeSellerName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Item to be sold in which city??*</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.soldCity}
                                onChange={this.onChangeCity}
                                />
                            </div>
                            <div className="form-group">
                                <label>Seller phone number</label>
                                <TextField type="text" 
                                className="form-control" 
                                value={this.state.phoneNum}
                                onChange={this.onChangePhoneNum}
                                />
                            </div>
                            <div className="form-group">
                                <span className="text-muted">
                                    <small>By clicking Submit you confirm that you have carefully read and understood all the facts, statements and conditions stated in the Terms of Use & Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.</small>
                                </span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" onClick={this.onSubmitAd}>Submit Your Ad</button>
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>
        )
    }
}

export default AdPosting;