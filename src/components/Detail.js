import React, {Component} from "react";
import {capitalizeFirst} from "../helpers/Helpers";
import {getAge} from "../helpers/Helpers";


export default class Detail extends Component {
    render() {

        if (!this.props.contact) {
            return (
                <div className="details">Select a contact</div>
            );
        } else {

            return (
                <div className="details">
                    <h1>
                        {capitalizeFirst(this.props.contact.name.first)} {capitalizeFirst(this.props.contact.name.last)}
                    </h1>
                    <p>Gender: {capitalizeFirst(this.props.contact.gender)}</p>
                    <p>Birthday: {this.props.contact.dob.slice(0, 10)} ({getAge(this.props.contact.dob)} years old)</p>
                    <hr/>
                    <address>
                        <p>Street: {this.props.contact.location.street}</p>
                        <p>City: {capitalizeFirst(this.props.contact.location.city)}</p>
                        <p>Province: {capitalizeFirst(this.props.contact.location.state)}</p>
                        <p>Postcode: {this.props.contact.location.postcode}</p>
                    </address>
                    <hr/>
                    <p>Email: <a href="mailto:">{this.props.contact.email}</a></p>
                    <p>Phone: {this.props.contact.phone}</p>
                    <img src={this.props.contact.picture.large}/>
                </div>

            );
        }
    }
}

