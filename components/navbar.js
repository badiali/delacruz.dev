import Link from "next/link";
import css from "styled-jsx/css";
import Button from "./button";
import colors from "./colors";

function NavBar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-left">
          <Link href="/">
            <a className="logo" title="Dani de la Cruz">
              <img src="/danidev.svg" alt="Dani de la Cruz" width="30" height="30" />
            </a>
          </Link>

          <div className="navbar-sections">
            <Link href="/blog">
              <a data-tracking="navbar-blog">Blog</a>
            </Link>
            <Link href="/#skills">
              <a data-tracking="navbar-skills">Sobre mí</a>
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <Button
            title="Mentoring a medida para programadores de Front-End"
            href="/contactar"
            data-tracking="navbar-cta"
          >
            Contactar
          </Button>
        </div>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .navbar-right {
    margin: auto 10px;
    min-width: 120px;
  }

  .navbar {
    background-color: ${colors.white};
    border-bottom: 1px solid #edf2f7;
    display: flex;
    height: 50px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .navbar-left {
    display: flex;
    margin: auto 10px;
  }

  .navbar-sections {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }

  .navbar-sections a {
    display: block;
    color: ${colors.primaryText};
    margin: auto 10px;
    white-space: nowrap;
  }

  .navbar-sections a:hover {
    color: ${colors.primary};
  }

  .logo {
    opacity: 1;
    transition: opacity 0.2s ease;
    min-width: 20px;
  }

  .logo:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
    margin-bottom: 0;
    vertical-align: text-top;
  }

  a {
    display: block;
  }
`;
export default NavBar;
