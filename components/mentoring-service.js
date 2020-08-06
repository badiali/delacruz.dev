import css from "styled-jsx/css";
import CodeReview from "./assets/code-review";
import Button from "./button";
import Section from "./section";
import { manatee, aliceBlue, spaceCadet } from "./colors";

function MentoringService() {
  return (
    <>
      <Section id="mentoring" bgColor={spaceCadet}>
        <div className="container has-text-centered has-dark-background">
          <h1 className="title">Mentoring profesional</h1>
          <h2 className="subtitle">
            Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
          </h2>

          <div className="cta">
            <Button href="/mentoring">Saber más</Button>
          </div>

          <div className="picture">
            <CodeReview width="30vw" height="auto" />
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .cta {
    margin-top: 2rem;
  }

  .picture {
    margin-top: 2rem;
  }
`;

export default MentoringService;
