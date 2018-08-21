import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export const AddNote = props => {
    return (
        <div className="add-form-wrap" >
            <h3>Create New Note:</h3>
            <form>
                <input className="add-title-input" placeholder="Note Title" /> <br/>
                <textarea className="add-text-input" placeholder="Note Content" />
                <div className="save-btn" >Save</div>
            </form>
        </div>
    )
}