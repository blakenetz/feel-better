import React from "react";
import classnames from "classnames";
import PropType from "prop-types";

const quotes = [
  { quote: "No Feeling is Final" },
  { quote: "Make your loves multiply" },
  {
    quote:
      "Practice kindness all day to everybody and you will realize you’re already in heaven now",
    author: "Jack Kerouac",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending",
    author: "C.S. Lewis",
  },
  {
    quote: "Forgive yourself",
  },
  {
    quote: "Be still. Be silent. For a moment at least",
  },
  { quote: "Whatever you're fishing for, catch and release" },
];

function Quote({ quote, author, current, index, handleClick }) {
  const classes = {
    current: current === index,
    previous: current - 1 === index,
    next: current + 1 === index,
  };

  return (
    <li className={classnames(classes)} onClick={handleClick}>
      <h2>{quote}.</h2>
      {author && <h3>- {author}</h3>}
    </li>
  );
}

function PaginationButton({ type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={classnames("btn", type)}
      title={`Show ${type} quote`}
    >
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
}

function Quotes(props) {
  const [current, setCurrent] = React.useState(0);

  function goBack() {
    const previous = current - 1;
    setCurrent(previous < 0 ? quotes.length - 1 : previous);
  }

  function goForward() {
    const next = current + 1;
    setCurrent(next >= quotes.length ? 0 : next);
  }

  function navigateQuote(i) {
    if (current === i) return;
    setCurrent(i);
  }

  const style = {
    transform: `translateX(-${current * (100 / quotes.length)}%)`,
  };

  return (
    <section className="quotes">
      <div className="wrapper">
        <h1>Someone once said...</h1>
        <ul style={style}>
          {quotes.map((quote, i) => (
            <Quote
              {...quote}
              key={i}
              current={current}
              index={i}
              handleClick={() => navigateQuote(i)}
            />
          ))}
        </ul>

        <div className="controls">
          <PaginationButton type="previous" handleClick={goBack} />
          <PaginationButton type="next" handleClick={goForward} />
        </div>
      </div>
    </section>
  );
}

Quote.propTypes = {
  quote: PropType.string.isRequired,
  author: PropType.string,
  current: PropType.number.isRequired,
  index: PropType.number.isRequired,
  handleClick: PropType.func.isRequired,
};
PaginationButton.propTypes = {
  type: PropType.oneOf(["previous", "next"]).isRequired,
  handleClick: PropType.func.isRequired,
};

export default Quotes;
