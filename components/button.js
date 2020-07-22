import cx from "classnames";
import css from "styled-jsx/css";
import colors from "./colors";

function Button({
  big = false,
  children,
  className,
  darkbg = false,
  href,
  huge = false,
  outlined = false,
  title,
  withAnimation = false,
  ...props
}) {
  return (
    <>
      <a href={href} title={title} {...props} className={cx(className, { big, huge, outlined, darkbg })}>
        {children}
        {withAnimation && (
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-swup-page="about"
          >
            <path d="M1.51351 0.000244141L0 1.32543L4.97297 5.6796L0 10.0338L1.51351 11.3589L8 5.6796L1.51351 0.000244141Z"></path>
          </svg>
        )}
      </a>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  a {
    border-radius: 4px;
    border: 1px solid ${colors.primary};
    background: ${colors.primary};
    color: ${colors.white};
    display: block;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    padding: 5px 15px 6px;
    position: relative;
    transition: all 0.3s ease-out;
    word-break: keep-all;
    white-space: nowrap;
  }

  a:hover,
  a:active {
    background: ${colors.primaryHover};
    cursor: pointer;
  }

  a svg {
    animation: arrow 2.5s infinite;
    display: inline-block;
    fill: ${colors.white};
    margin-left: 0.3rem;
    vertical-align: middle;
    width: 0.5rem;
  }

  .big {
    font-size: 1.2rem;
  }

  .huge {
    font-size: 1.5rem;
  }

  .outlined {
    background-color: transparent;
    color: ${colors.primary};
    transition: all 0.2s ease-out;
  }

  .darkbg.outlined {
    background-color: transparent;
    color: ${colors.white};
    transition: all 0.2s ease-out;
    border: 1px solid ${colors.white};
  }

  .outlined:hover,
  .outlined:active {
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  .darkbg.outlined:hover,
  .darkbg.outlined:active {
    color: ${colors.primaryText};
    background-color: ${colors.white};
  }

  @media (min-width: 768px) {
    a {
      font-size: 1rem;
    }

    a svg {
      margin-left: 0.9375rem;
    }
  }

  @keyframes arrow {
    0%,
    100% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0px);
    }
  }
`;

export default Button;
