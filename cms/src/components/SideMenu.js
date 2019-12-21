import React, { Component } from 'react'
import './sidemenu.css';
import profilepicture from './img/profile.png'
import navmenuobj from './navmenu.js';



export default class SideMenu extends Component {
    componentDidMount() {
        //all sidemenu items
        const overlay = document.getElementById("sidemenuoverlay");
        const menutray = document.getElementById("sidemenu");
        const navmenu = new navmenuobj(overlay,menutray);
        const sidemenuclose = document.getElementById("sidemenuclose");

        //sidemenu trigger
        const menubtn = document.getElementById(this.props.trigger);

        //sidemenu setting-up
        menubtn.addEventListener("click", navmenu.unwrapSideMenu);
        overlay.addEventListener("click", navmenu.wrapSideMenu);
    }
    render() {     
        return (
            <>
            <div id="sidemenuoverlay">
            </div>
            <div id="sidemenu">
                <ul id="sidemenuitems">
                    <li id="profile-item"><div id="profilewrapper"><img src={profilepicture}></img></div><a href="#">Admin</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Archive</a></li>
                    <li><a href="#">Drafts</a></li>
                </ul>
            </div>
            </>
        )
    }
}
