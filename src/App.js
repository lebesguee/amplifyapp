import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as reactBootstrap from "react-bootstrap";
import luz from "./assets/freestocks-j7RrJ0Ff5bc-unsplash.jpg"
import luzIcon from "./assets/electricidad_icono.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <reactBootstrap.Navbar bg="dark" variant="dark">
          <reactBootstrap.Navbar.Brand href="#home">
            Navbar
          </reactBootstrap.Navbar.Brand>
          <reactBootstrap.Nav className="mr-auto">
            <reactBootstrap.Nav.Link href="#home">Home</reactBootstrap.Nav.Link>
            <reactBootstrap.Nav.Link href="#features">
              Features
            </reactBootstrap.Nav.Link>
            <reactBootstrap.Nav.Link href="#pricing">
              Pricing
            </reactBootstrap.Nav.Link>
          </reactBootstrap.Nav>
          <reactBootstrap.Form inline>
            <reactBootstrap.FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <reactBootstrap.Button variant="outline-info">
              Search
            </reactBootstrap.Button>
          </reactBootstrap.Form>
        </reactBootstrap.Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>  
      <section class="container-fluid px-0">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div id="headingGroup" class="text-white text-center d-none d-lg-block mt-5">
                    <h1 class="">This<span>/</span>Is<span>/</span>Us</h1>                   
                </div>
            </div>
             <div class="col-lg-6">
                <img class="img-fluid" src={luzIcon} alt="Icono de Rayo"/>
             </div>
        </div>
      </section>

     
        <div class="row align-items-center content">
            <div class="col-md-6 order-2 order-md-1">
                <img src={luz} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>Consumo Eléctrico</h2>
                        <img id="icons" src="imgs/electricidad_icono.png" alt="" class="d-none d-lg-inline" height="50em" width="50em"/>
                        <p class="lead">Dos tercios de las emisiones totales de gases de efecto invernadero se deben al modo en que producimos y usamos la energía.

                            Conoce qué gastos hay detrás de cada vez que enciendes o apagas la luz o cargas tu celular.
                            </p>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>
  );
}

export default App;
