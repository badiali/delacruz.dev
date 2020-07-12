import { useEffect } from "react";

function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

const MOBILE_BREAKPOINT = 768;

var applyResponsiveChanges = debounce(function () {
  var timeline = window.document.querySelector(".timeline");
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    if (timeline && timeline.className.indexOf("is-centered") !== -1) {
      timeline.className = timeline.className.replace("is-centered", "");
    }
  }

  if (window.innerWidth > MOBILE_BREAKPOINT) {
    if (timeline && timeline.className.indexOf("is-centered") === -1) {
      timeline.className = timeline.className + " is-centered";
    }
  }
}, 250);

function Experience() {
  useEffect(() => {
    window.addEventListener("resize", applyResponsiveChanges);
    applyResponsiveChanges();

    return () => {
      window.removeEventListener("resize", applyResponsiveChanges);
    };
  }, []);

  return (
    <section id="experience" className="section has-text-centered has-background-light is-medium">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Mi experiencia</h1>
        <h2 className="subtitle is-spaced">
          He estado trabajando en la industria de software durante más de una década. Echa un vistazo a mi experiencia.
        </h2>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-dark">Hoy</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a title="Tempus Labs" target="_blank" rel="nofollow noopener" href="https://tempus.com">
                    <img loading="lazy" width="263" height="67" alt="Tempus Logo" src="./images/tempus-logo.png" />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">Desde octubre 2019</p>
                  <p>
                    <strong>Senior Fullstack Engineer en Tempus Labs</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>
                      Desarrollo de aplicaciones web con{" "}
                      <a title="React" rel="nofollow noopener" href="https://reactjs.org/" target="_blank">
                        React
                      </a>
                    </li>
                    <li>
                      Desarrollo de aplicaciones móviles con{" "}
                      <a title="React Native" rel="nofollow noopener" href="https://reactnative.dev/" target="_blank">
                        React Native
                      </a>
                    </li>
                    <li>
                      Desarrollo de servicios y microservicios con{" "}
                      <a title="NestJS" rel="nofollow noopener" href="https://nestjs.com/" target="_blank">
                        NestJS
                      </a>
                      ,{" "}
                      <a title="PostgreSQL" rel="nofollow noopener" href="https://www.postgresql.org/" target="_blank">
                        PostgreSQL
                      </a>
                      ,{" "}
                      <a title="Terraform" rel="nofollow noopener" href="https://www.terraform.io/" target="_blank">
                        Terraform
                      </a>{" "}
                      y{" "}
                      <a
                        title="Google Cloud Platform"
                        rel="nofollow noopener"
                        href="https://cloud.google.com/"
                        target="_blank"
                      >
                        Google Cloud Platform
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2018</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a title="King" target="_blank" rel="nofollow noopener" href="https://king.com">
                    <img loading="lazy" width="263" height="67" alt="King Logo" src="./images/king-logo.png" />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De marzo 2018 a julio 2019</p>
                  <p>
                    <strong>Senior JavaScript Engineer en King</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>
                      <strong>Mentoring</strong> a compañeros y compañeras del departamento que deseaban mejorar en su
                      especialidad o crecer asumiendo otras competencias
                    </li>
                    <li>
                      Desarrollo de aplicaciones web con{" "}
                      <a title="React" rel="nofollow noopener" href="https://reactjs.org/" target="_blank">
                        React
                      </a>
                    </li>
                    <li>Participación en la definición de arquitectura de Front-End</li>
                    <li>
                      Pruebas unitarias con{" "}
                      <a title="Jest" rel="nofollow noopener" href="https://jestjs.io/" target="_blank">
                        Jest
                      </a>
                    </li>
                    <li>
                      Implementación de interfaz de usuario con{" "}
                      <a title="Ant Design" rel="nofollow noopener" href="https://ant.design/" target="_blank">
                        Ant Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2017</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a title="Workshare" target="_blank" rel="nofollow noopener" href="https://www.workshare.com/">
                    <img
                      loading="lazy"
                      width="263"
                      height="67"
                      alt="Workshare Logo"
                      src="./images/workshare-logo.png"
                    />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De noviembre 2017 a febrero 2018</p>
                  <p>
                    <strong>Senior Front-End Developer en Workshare</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>
                      <strong>Mentoría</strong> en la definición de proceso de trabajo ágil y entrega contínua
                      sostenible respaldado por pruebas automáticas
                    </li>
                    <li>Contribución en la definición de arquitectura en el Front-End</li>
                    <li>Desarrollo de aplicaciones web con React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2016</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a href="https://typeform.com" title="Typeform" target="_blank" rel="nofollow noopener">
                    <img loading="lazy" width="263" height="67" alt="Typeform Logo" src="./images/typeform-logo.png" />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De abril 2016 a octubre 2017</p>
                  <p>
                    <strong>Tech Lead en Typeform</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>
                      <strong>Mentoring</strong> a compañeros de equipo en desarrollo de software guiado por tests (
                      <a
                        href="https://www.jamesshore.com/Agile-Book/test_driven_development.html"
                        title="Test-Driven development"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        TDD
                      </a>
                      ).
                    </li>
                    <li>Participación en la definición de arquitectura de Front-End</li>
                    <li>Liderazgo tecnológico de equipos de desarrollo</li>
                    <li>
                      Facilitación y construcción de una comunidad de Front-End basada en el aprendizaje y en compartir
                      el conocimiento
                    </li>
                    <li>
                      Desarrollo de aplicaciones web con React y{" "}
                      <a title="Redux" target="_blank" rel="nofollow noopener" href="https://redux.js.org/">
                        Redux
                      </a>
                    </li>
                    <li>
                      Automatización de pruebas unitarias, integración y aceptación con{" "}
                      <a href="https://mochajs.org/" title="Mocha" target="_blank" rel="nofollow noopener">
                        Mocha
                      </a>{" "}
                      y{" "}
                      <a href="https://cucumber.io/" title="Cucumber" target="_blank" rel="nofollow noopener">
                        Cucumber
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2013</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a href="https://www.fotocasa.es/" title="Fotocasa" target="_blank" rel="nofollow noopener">
                    <img loading="lazy" width="263" height="67" alt="Fotocasa Logo" src="./images/fotocasa-logo.png" />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De 2013 a 2016</p>
                  <p>
                    <strong>Tech Lead en Adevinta</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>Liderazgo tecnológico de uno de los equipos de producto del portal Inmobiliario Fotocasa.</li>
                    <li>
                      Liderazgo y ejecución de la transformación del Front-End de la compañía, de una plataforma
                      monolítica en .NET hacia una Single-Page Application desacoplada del Back-End implementada con
                      React y basada en{" "}
                      <a
                        href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                        title="Arquitectura Hexagonal"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        Arquitectura Hexagonal
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2010</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a href="https://www.inmofactory.com/" title="Inmofactory" target="_blank" rel="nofollow noopener">
                    <img
                      loading="lazy"
                      width="263"
                      height="67"
                      alt="Inmofactory Logo"
                      src="./images/inmofactory-logo.png"
                    />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De 2010 a 2013</p>
                  <p>
                    <strong>Programador .NET en Adevinta</strong>
                  </p>
                  <ul className="responsibilities-list">
                    <li>
                      Desarrollo de{" "}
                      <a
                        href="https://www.inmofactory.com/"
                        title="Inmofactory"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        Inmofactory
                      </a>
                      , el CRM inmobiliario del grupo en España
                    </li>
                    <li>
                      Diseño e implementación de búsquedas Near Real Time (NRT) con{" "}
                      <a href="https://lucene.apache.org/core/" title="Lucene" target="_blank" rel="nofollow noopener">
                        Lucene
                      </a>
                    </li>
                    <li>
                      Desarrollo con{" "}
                      <a
                        href="https://dotnet.microsoft.com/apps/aspnet"
                        title="ASP.NET"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        ASP.NET
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-dark">2006</span>
          </header>

          <div className="timeline-item is-dark">
            <div className="timeline-marker is-dark"></div>
            <div className="timeline-content">
              <div className="box">
                <div className="image-box">
                  <a
                    href="https://dotnet.microsoft.com/"
                    title=".NET Framework"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <img loading="lazy" width="263" height="67" alt="dotNET Logo" src="./images/dotNET-logo.png" />
                  </a>
                </div>
                <div className="experience-box">
                  <p className="heading">De 2006 a 2009</p>
                  <p>
                    <strong>Consultor especializado en .NET Framework</strong>
                  </p>
                  <p>
                    Trabajé en consultorías como{" "}
                    <a href="https://www.everis.com/spain/es/home-1" rel="noopener nofollow" title="everis">
                      everis
                    </a>{" "}
                    o{" "}
                    <a title="ATOS" href="https://atos.net/es/spain" rel="noopener nofollow">
                      ATOS
                    </a>
                    , aprendiendo de grandes profesionales los fundamentos de programación que luego me servirían
                    durante el resto de mi carrera profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <header className="timeline-header">
            <span className="tag is-medium is-dark">Inicio</span>
          </header>
        </div>
      </div>
    </section>
  );
}

export default Experience;