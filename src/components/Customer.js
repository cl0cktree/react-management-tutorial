import React from 'react';

function Customer(){
    return (
        <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
    )
};

function CustomerProfile(){
    return (
        <div>
            <img src={this.props.image} alt="profile"/>
            <h2>{this.props.name}({this.props.id})</h2>
        </div>
    )
};

function CustomerInfo(){
    return (
        <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
    )
};

export default Customer;