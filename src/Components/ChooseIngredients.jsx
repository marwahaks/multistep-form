import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'axios';
import {externals} from './config.json';
import { throws } from 'assert';

class ChooseIngredients extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    async componentDidMount() {
        const usernamePasswordBuffer = Buffer.from(externals.api_key + ':' + externals.api_secret);
const base64data = usernamePasswordBuffer.toString('base64');
        var axios = require('axios').default;
        var eee = externals.url + '/products.json';
        let kam = null;

        var url= "https://" + externals.api_key + ":" + externals.api_secret + "@smrtesting.myshopify.com/admin/api/2021-01/products.json"
var graphli = "https://smrtesting.myshopify.com/api/2021-01/graphql.json";


var efs = await axios.post(graphli,'{shop{name}}', {headers:{"X-Shopify-Storefront-Access-Token": "996b365bcde196105a693bd997e86cf1", "Accept":"application/json", "Content-Type": "application/graphql"}});
        var dsdsd = await axios.get(url).then(response =>{
            console.log('ASASASASA' + response.data);
            kam =response;
            return response;
          }).catch(function(error) {
            console.log('EEEEEEE' + error);
          }); 



        
// const axiosObject = axios.create({
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Basic ${base64data}`,
//     }
// });
//     var eerererefff = axiosObject.get(eee).then(response =>{
//         console.log('Authenticatedsss' + response.data);
//         eee =response;
//         return response;
//       }).catch(function(error) {
//         console.log('Errorssss on Authentication' + error);
//       });

        
        // var usdsdsd =externals.api_key;
        // var psdsdsdsd = externals.api_secret;
        // var erer = axios.get(axios.defaults.baseURL, {    withCredentials: true, headers: {    "Accept": "application/json",
        // "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","Access-Control-Allow-Credentials":true}}, 
        //     {auth: {username: externals.api_key, password:externals.api_secret}}).then(response =>{
        //         console.log('Authenticated' + response.data);
        //         eee =response;
        //         return response;
        //       }).catch(function(error) {
        //         console.log('Error on Authentication' + error.message);
        //       });
        // var erererefff = erer.data;
        // var eresadaasd = "stop";
        var tere = axios.defaults.headers;


    //  var instance = axios.create({baseURL: externals.URL, headers:{common:{}}});
    //  instance.interceptors.update
    //   var api = externals;
    //   axios.def
    //   axios.defaults.headers.common = {

    //     "X-API-Key":api.api_key,
    //     "X-API-Secret":api.api_secret
    //   }
    //   axios.get(api.url)
    //     .then(res => {
    //       const persons = res.data;
    //       this.setState({ persons });
    //     })
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        var data =  this.componentDidMount();

        return(
        <Form color='blue' >
            <h1 className="ui centered">Select Ingredients</h1>
            <div className='block'>
            <Button value='subscription' onClick={this.props.handleChange('productType')}>What</Button>
            <Button value='single' onClick={this.props.handleChange('productType')}>AHHH</Button>
            </div>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default ChooseIngredients;