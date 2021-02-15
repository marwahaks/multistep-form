import React, { Component, RefFindNode } from 'react';
import UserDetails from './UserDetails.jsx';
import ProductType from './ProductType';
import Confirmation from './Confirmation';
import ChooseIngredients from './ChooseIngredients.jsx';
import axios from 'axios'
import {externals} from './config.json';

// import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        productType: '',
        ingredients:[],
        completeDishes: []
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    componentDidMount () {
    
      }
    // selectedState = button => event => {
    //     this.setState('$("#sin").click()')

    // }

    render(){
        const {step} = this.state;
        const { firstName, lastName, email, productType} = this.state;
        const values = { firstName, lastName, email, productType};
        switch(step) {
            case 1:
                return <UserDetails
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 2:
                return <ProductType
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        selectedState = {this.selectedState}
                        values={values}
                        />
            case 4:
                return <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />

                        case 3:
                            return <ChooseIngredients
                                    nextStep={this.nextStep}
                                    handleChange = {this.handleChange}
                                    // componentDidMount = {this.componentDidMount}
                                    prevStep={this.prevStep}
                                    config = {this.config}
                                    values={values}
                                    />

        }
    }
}
export default MainForm;
