import { useState } from 'react';
import Button from './Button';
import { evaluate } from 'mathjs';
function FullCalculator() {
  const [equation, setEquation] = useState(0);
  const handleInput = (action) => {
    console.log(action);
    console.log(equation);
    if (action === '=') {
      setEquation(evaluate(equation));
    } else if (action === 'ac') {
      setEquation(0);
    } else {
      setEquation(equation + action);
    }
  };
  return (
    <div className="calc-body">
      <div className="calc-screen">
        <div className="calc-operation"></div>
        <div className="calc-typed">{equation}</div>
      </div>
      <div className="calc-button-row">
        <Button
          value={'AC'}
          styleName={'ac'}
          onBtnClick={() => handleInput('ac')}
        />
        <Button
          value={'+/−'}
          styleName={'opt'}
          onBtnClick={() => handleInput('+/−')}
        />
        <Button
          value={'%'}
          styleName={'opt'}
          onBtnClick={() => handleInput('%')}
        />
        <Button
          value={'÷'}
          styleName={'opt'}
          onBtnClick={() => handleInput('÷')}
        />
        <Button value={'7'} styleName={''} onBtnClick={() => handleInput(7)} />
        <Button value={'8'} styleName={''} onBtnClick={() => handleInput(8)} />
        <Button value={'9'} styleName={''} onBtnClick={() => handleInput(9)} />
        <Button
          value={'×'}
          styleName={'opt'}
          onBtnClick={() => handleInput('×')}
        />
        <Button value={'4'} styleName={''} onBtnClick={() => handleInput(4)} />
        <Button value={'5'} styleName={''} onBtnClick={() => handleInput(5)} />
        <Button value={'6'} styleName={''} onBtnClick={() => handleInput(6)} />
        <Button
          value={'−'}
          styleName={'opt'}
          onBtnClick={() => handleInput('−')}
        />
        <Button value={'1'} styleName={''} onBtnClick={() => handleInput(1)} />
        <Button value={'2'} styleName={''} onBtnClick={() => handleInput(2)} />
        <Button value={'3'} styleName={''} onBtnClick={() => handleInput(3)} />
        <Button
          value={'+'}
          styleName={'opt'}
          onBtnClick={() => handleInput('+')}
        />
        <Button value={'0'} styleName={''} onBtnClick={() => handleInput(0)} />
        <Button
          value={'.'}
          styleName={''}
          onBtnClick={() => handleInput('.')}
        />
        <Button
          value={'⌫'}
          styleName={''}
          onBtnClick={() => handleInput('Del')}
        />
        <Button
          value={'='}
          styleName={'opt'}
          onBtnClick={() => handleInput('=')}
        />
      </div>
    </div>
  );
}

export default FullCalculator;
