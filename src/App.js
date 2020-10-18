import React from "react";
import "./App.css";
import * as reactBootstrap from "react-bootstrap";
import luz from "./assets/freestocks-j7RrJ0Ff5bc-unsplash.jpg";
import luzIcon from "./assets/electricidad_icono.png";
import maceta from "./assets/paula-brustur-ZT5VWmiVAQw-unsplash.jpg";
import autoIcon from "./assets/transporte_avion.png";
import habitIcon from "./assets/habitos_icono.png";
import luz2 from "./assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
import luz3 from "./assets/jd-x-pj1aVH2tiLE-unsplash.jpg";
import mov1 from "./assets/marek-rucinski-b0bFZKjWDVY-unsplash.jpg";
import mov2 from "./assets/chuttersnap-gts_Eh4g1lk-unsplash.jpg";
import mov3 from "./assets/robert-tudor--8x6Ffud7Bk-unsplash.jpg";
import habits1 from "./assets/mika-baumeister-vorH-CF_SZI-unsplash.jpg";
import habits2 from "./assets/antonino-visalli-vhxfC9lXLmE-unsplash.jpg";
import habits3 from "./assets/zach-zook-5ed1zAlFnM0-unsplash.jpg";
import logo from "./assets/logo-02.png";

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <a href="#home"><img src={logo} style={{ height: "3.1em", width: "4em" }}></img></a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      <reactBootstrap.Navbar bg="dark" variant="dark">
        <reactBootstrap.Navbar.Brand href="#home">
          <img src={logo} style={{ height: "3.1em", width: "4em" }}></img>
        </reactBootstrap.Navbar.Brand>
        <reactBootstrap.Nav
          className="mr-auto font-size: 1.5rem
    font-weight: 100 navbar-fixed-top"
        >
          <reactBootstrap.Nav.Link href="#home">Home</reactBootstrap.Nav.Link>
          <reactBootstrap.Nav.Link href="#features">
            Login
          </reactBootstrap.Nav.Link>
          <reactBootstrap.Nav.Link href="#pricing">
            CO2++
          </reactBootstrap.Nav.Link>
        </reactBootstrap.Nav>
        <reactBootstrap.Form inline>
          <reactBootstrap.FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <reactBootstrap.Button variant="outline-info">
            Buscar
          </reactBootstrap.Button>
        </reactBootstrap.Form>
      </reactBootstrap.Navbar>

      <header>
        <section class="container-fluid px-0">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div
                id="headingGroup"
                class="text-black text-center d-none d-lg-block mt-5"
              >
                <h1>
                  <img
                    src={logo}
                    style={{ height: "3.1em", width: "4em" }}
                  ></img>
                </h1>
                <p style={{ color: "white" }}>
                  Somos una solución inteligente al impacto ambiental de
                  nuestras acciones ¿Cómo lo hacemos? Tu registras tu actividad,
                  nosotros calculamos y te ayudamos a ahorrar dinero y gasto
                  energético. Explora tus resultados, acepta el reto y forma
                  parte del cambio inteligente con las opciones Smart 02 que
                  tenemos para ti.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid" src={maceta} alt="macetita" />
            </div>
          </div>
        </section>
      </header>

      <section>
        <div class="row align-items-center content">
          <div class="col-md-6 order-2 order-md-1">
            <reactBootstrap.Carousel>
              <reactBootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={habits1}
                  alt="First slide"
                />
                <reactBootstrap.Carousel.Caption>
                  <h3>Acumula baterías</h3>
                  <p>¿Cómo?</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={habits2}
                  alt="Third slide"
                />

                <reactBootstrap.Carousel.Caption>
                  <h3>Menos tabaco</h3>
                  <p>Mejora tu salud y apoya al mundo.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={habits3}
                  alt="Third slide"
                />

                <reactBootstrap.Carousel.Caption>
                  <h3>Vida en tu hogar</h3>
                  <p>Verde es vida.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
            </reactBootstrap.Carousel>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 style={{ color: "#92E092" }}>Hábitos</h2>
                <img
                  id="icons"
                  src={habitIcon}
                  alt=""
                  class="d-none d-lg-inline "
                  height="50em"
                  width="50em"
                />
                <p class="lead" style={{ color: "white" }}>
                  En tu día a día se esconden muchas acciones que tienen
                  consecuencias dañinas para el medio ambiente. ¿Conoces cómo
                  revertirlas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row align-items-center content">
          <div class="col-md-6 order-1 order-md-2">
            <reactBootstrap.Carousel>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={mov1} alt="First slide" />
                <reactBootstrap.Carousel.Caption>
                  <h3>Actívate</h3>
                  <p>Elige transporte alternativo.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={mov2} alt="Third slide" />

                <reactBootstrap.Carousel.Caption>
                  <h3>Menos gas, más vida</h3>
                  <p>Disminuye tu uso de autómovil</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={mov3} alt="Third slide" />

                <reactBootstrap.Carousel.Caption>
                  <h3>El metro es cool</h3>
                  <p>tu-ru-ru.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
            </reactBootstrap.Carousel>
          </div>

          <div class="col-md-6 text-center order-2 order-md-1">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 style={{ color: "#92E092" }}>Movilidad</h2>
                <img
                  id="icons"
                  src={autoIcon}
                  alt=""
                  class="d-none d-lg-inline"
                  height="50em"
                  width="50em"
                />
                <p class="lead" style={{ color: "white" }}>
                  Tu forma de moverte a casa, al trabajo o viajar por tierra,
                  cuenta a la hora de disminuir tu impacto ecológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row align-items-center content">
          <div class="col-md-6 order-2 order-md-1">
            <reactBootstrap.Carousel>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={luz} alt="First slide" />
                <reactBootstrap.Carousel.Caption>
                  <h3>Tengo una idea</h3>
                  <p>Es un foco.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={luz2} alt="Third slide" />

                <reactBootstrap.Carousel.Caption>
                  <h3>Mundo conectado</h3>
                  <p>Desde aquí se ve mi casa.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
              <reactBootstrap.Carousel.Item>
                <img className="d-block w-100" src={luz3} alt="Third slide" />

                <reactBootstrap.Carousel.Caption>
                  <h3>Una tele viejita</h3>
                  <p>Y en blanco y negro.</p>
                </reactBootstrap.Carousel.Caption>
              </reactBootstrap.Carousel.Item>
            </reactBootstrap.Carousel>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2 style={{ color: "#92E092" }}>Consumo Eléctrico</h2>
                <img
                  id="icons"
                  src={luzIcon}
                  alt=""
                  class="d-none d-lg-inline"
                  height="50em"
                  width="50em"
                />
                <p class="lead" style={{ color: "white" }}>
                  Dos tercios de las emisiones totales de gases de efecto
                  invernadero se deben al modo en que producimos y usamos la
                  energía. Conoce qué gastos hay detrás de cada vez que
                  enciendes o apagas la luz o cargas tu celular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
