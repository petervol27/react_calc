function FullCalculator() {
  return (
    <>
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-operation"></div>
          <div className="calc-typed">0</div>
        </div>
        <div className="calc-button-row">
          <button onclick="myclear()" className="ac">
            AC
          </button>
          <button className="opt">&#43;&#47;&#8722;</button>
          <button className="opt">&#37;</button>
          <button className="opt">&#247;</button>
          <button onclick="myclick()">7</button>
          <button onclick="myclick()">8</button>
          <button onclick="myclick()">9</button>
          <button className="opt">&#215;</button>
          <button onclick="myclick()">4</button>
          <button onclick="myclick()">5</button>
          <button onclick="myclick()">6</button>
          <button className="opt">&#8722;</button>
          <button onclick="myclick()">1</button>
          <button onclick="myclick()">2</button>
          <button onclick="myclick()">3</button>
          <button onclick="myplus()" className="opt">
            +
          </button>
          <button onclick="myclick()">0</button>
          <button onclick="dotclick()">.</button>
          <button>&#9003;</button>
          <button onclick="calcEquals()" className="opt">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default FullCalculator;
