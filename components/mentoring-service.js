import css from "styled-jsx/css";
import colors from "./colors";
import Button from "./button";
import TextBox from "./text-box";

function MentoringService() {
  return (
    <>
      <section id="mentoring" className="mentoring">
        <div className="diagonal-bar"></div>
        <div className="container">
          <div className="row">
            <TextBox />
            <object
              type="image/svg+xml"
              data="https://www.swyg.com/static/images/undraw_super_woman_dv0y.svg"
              role="presentation"
            ></object>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .mentoring {
    /* background-color: ${colors.backgroundMentoring}; */
    padding-bottom: 9rem;
    padding-top: 9rem;
    color: ${colors.white};
    position: relative;
  }

  .row {
    margin-left: 50px;
    width: 40%;
    position: absolute;
    top: -100px;
  }

  object {
    position: absolute;
    left: 50vw;
    top: 0;
  }

  .diagonal-bar {
    background-image: linear-gradient(142deg, #41e0fd, #2cbfcf 53%, #29aac0);
    height: 440px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%) rotate(-6deg);
    width: 200%;
    z-index: -2;
  }
`;

export default MentoringService;
