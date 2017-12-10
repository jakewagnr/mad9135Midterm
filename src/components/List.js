import React, {Component} from "react";
import {contacts} from "../data/contacts";
import {capitalizeFirst} from "../helpers/Helpers";

export default class List extends Component {
    constructor(props){
        super(props);

        this.state={
            contact: contacts
        };
    }


    render(){


        return(
            <div className="row">

                <div className="column list">
                    <ul>
                        {this.state.contact.map(function (item, i) {
                            return(
                                <li key={i}>
                                    <a href={"#contact/" + item.id}>
                                        <img src={contacts[i].picture.thumbnail}/>
                                        <h3>{capitalizeFirst(contacts[i].name.first)} {capitalizeFirst(contacts[i].name.last)}</h3>
                                        <p>{contacts[i].dob.slice(0, 10)}</p>
                                    </a>
                                </li>
                            );

                        })}

                    </ul>
                </div>
            </div>
        );
    }
}
