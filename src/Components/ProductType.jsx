import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class ProductType extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    selectedState = (e) =>{
        var selected = this.props.values.productType;
        if (selected == "single")
        {
            return true;
        }
        else if (selected == "subscription")
        {
            return true;
        }
        return false;
    }
    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Select Ordering Style</h1>
            <div className='block'>
            <Button id='sub' bubbles='true' value='subscription' onClick={this.props.handleChange('productType')}>Sub</Button>
            <Button id='sin' value='single' onClick={this.props.handleChange('productType')}>Single </Button>
            </div>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default ProductType;

// hover={this.props.selectedState('subscription')}