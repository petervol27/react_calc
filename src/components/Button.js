function Button({ value, styleName, onBtnClick }) {
  return (
    <>
      <button className={styleName} onClick={onBtnClick}>
        {value}
      </button>
    </>
  );
}

export default Button;
