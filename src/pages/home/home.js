import React from 'react';
import Topbar from '../../components/topbar/Topbar.js';
import Sidebar from '../../components/sidebar/sidebar.js';
import Rightbar from '../../components/rightbar/Rightbar.js';
import Feed from '../../components/feed/feed.js';
import './home.css';

export default function Home() {
    return (
    <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        
    </>
    );
}
