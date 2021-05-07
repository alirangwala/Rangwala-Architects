function Title({ title, span }) {
  return (
    <div className="Title">
      <h3 className="hero-text">
        {title}
        <span>{span} </span>
      </h3>
    </div>
  );
}

export default Title;
