require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import List from "./components/List";
import Detail from "./components/Detail";

import {contacts} from "./data/contacts";

let state = {};

window.addEventListener("hashchange", () =>setState({location: location.hash}));

setState({
    location: location.hash,
    contacts: contacts
})

function setState(changes) {
    state = Object.assign({}, state, changes);

    let contact;

    let location = state.location.replace(/^#\/?|\/$/g, "").split("/");
    if (location[0] === "contact" ){
        contact = state.contacts.find(item => item.id == location[1]);
    }


    const CONTACT_APP = (
        <div>
            <Header/>
            <List contacts = {state.contacts}/>
            <Detail contact = {contact}/>
        </div>

    );

    ReactDOM.render(CONTACT_APP, document.getElementById("react-app"));


}
