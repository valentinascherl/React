import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './css/app.css';
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import PageHeadings from "./components/PageHeading";
import ContentRow from "./components/ContentRow";
import ContentRow2 from "./components/ContentRow2";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div id="wrapper">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
      </head>
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <PageHeadings />
            <ContentRow />
            <ContentRow2 />
          </div>
        </div>
        <footer class="sticky-footer bg-white">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
