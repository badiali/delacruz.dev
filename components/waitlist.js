import css from "styled-jsx/css";
import colors from "./colors";

export default function WaitList() {
  return (
    <>
      <div className="box">
        <form novalidate="" align="left" accept-charset="UTF-8">
          <div className="input">
            <input id="input-1" placeholder="Déjame tu email" name="email" type="email" />
            <button className="ui primary button">Contacta conmigo</button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .box {
    box-shadow: 0 3px 21px 0 rgba(0, 0, 0, 0.12);
    width: 75%;
  }

  .input {
    color: rgba(0, 0, 0, 0.87);
    display: inline-flex;
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
  }

  input {
    background: #fff;
    border-radius: 0.3rem;
    border-bottom-right-radius: 0;
    border-right-color: transparent;
    border-top-right-radius: 0;
    border: 1px solid rgba(34, 36, 38, 0.15);
    box-shadow: inset 0 0 0 0 transparent;
    color: rgba(0, 0, 0, 0.87);
    flex: 1 0 auto;
    font-size: 1em;
    line-height: 1.2em;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0.7em 1em;
    transition: color 0.1s ease, border-color 0.1s ease;
  }

  button {
    background-color: ${colors.primary};
    border-radius: 0 0.3rem 0.3rem 0;
    color: #eee;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    text-shadow: none;
    border: none;
    white-space: nowrap;
  }

  button:hover {
    cursor: pointer;
  }
`;
