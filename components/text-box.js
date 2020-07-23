import css from "styled-jsx/css";

export default function TextBox() {
  return (
    <>
      <div className="text-box-gradient"></div>
      <div className="text-box">
        <h3>Mentoring profesional</h3>
        <p>Para programadores y programadoras que buscan dar un salto en su carrera profesional.</p>
        <img src="https://www.swyg.com/_next/static/undraw_organize_resume_utk5.svg" />
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .text-box {
    background: #fff;
    box-shadow: 0 3px 21px 0 rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    width: 90%;
    padding: 4em;
    margin: auto;
    position: relative;
  }

  .text-box-gradient {
    background-image: linear-gradient(90deg, #91d1ff, #24a3ff 51%, #992bff);
    width: 70%;
    height: 16px;
    position: relative;
    left: 15%;
    top: 8px;
    z-index: -1;
  }

  h3 {
    font-weight: 700;
    font-size: 30px;
    color: #111;
    line-height: 38px;
  }
`;
