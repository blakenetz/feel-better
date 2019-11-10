import React from "react";

const quotes = [
  { quote: "No Feeling is Final" },
  { quote: "make your loves multiply" },
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

function Quote({ quote, author, current, index }) {
  const className =
    current === index ? "current" : current - 1 === index ? "previous" : "next";

  return (
    <li className={className}>
      <h1>{quote}.</h1>
      {author && <h2>- {author}</h2>}
    </li>
  );
}

function PaginationButton({ type, title, handleClick }) {
  return (
    <button onClick={handleClick} className={`btn btn--${type}`} title={title}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
}

function Quotes(props) {
  const [current, setSlide] = React.useState(0);

  function goBack() {
    const previous = current - 1;
    setSlide(previous < 0 ? quotes.length - 1 : previous);
  }

  function goForward() {
    const next = current + 1;
    setSlide(next >= quotes.length ? 0 : next);
  }

  const style = {
    transform: `translateX(-${current * (100 / quotes.length)}%)`,
  };

  return (
    <section className="quotes">
      <div className="wrapper">
        <ul style={style}>
          {quotes.map((quote, i) => (
            <Quote {...quote} key={i} current={current} index={i} />
          ))}
        </ul>

        <div className="controls">
          <PaginationButton
            type="previous"
            title="show previous quote"
            handleClick={goBack}
          />

          <PaginationButton
            type="next"
            title="Show next quote"
            handleClick={goForward}
          />
        </div>
      </div>
    </section>
  );
}

export default Quotes;
