import React, {useState} from 'react';
import './calculator.css';

function Calculator() {
    const [result, setResult] = useState('');
    const [prev, setPrev] = useState('');
    const [operation, setOperation] = useState('');
    const calculate = () => {
        if(operation === '%') {
            const a = parseFloat(result)*parseFloat(prev) / 100
            setResult(a.toString())
            return
        }
        if(operation === '^') {
            const a = Math.pow(parseFloat(prev),parseFloat(result))
            setResult(a.toString())
            return
        }
        try {
            setResult(eval(result).toString())
        }
        catch (error) {
            setResult('error')
        }
    }
    const clickButton = (event) => {
        setResult(prevState => prevState + event.target.name);
    }
    const clickReset = () => {
        setResult('')
    }
    const clickBackspace = () => {
        setResult(result.slice(0, -1))
    }
    const clickRootNumber = () => {
        setResult(Math.sqrt(+result).toString());
    }
    const clickOperation = (e) => {
        setPrev(result);
        setOperation(e.target.name)
        setResult('')
    }

    return (
        <div className={'calculator'}>
            <div className={'calculator__body'}>
                <h1>{'Калькулятор'}</h1>
                <input className={'calculator__input'} value={result}/>
                <div>
                    <button className={'calculator__button'} name={'1'} onClick={clickButton}>1</button>
                    <button className={'calculator__button'} name={'2'} onClick={clickButton}>2</button>
                    <button className={'calculator__button'} name={'3'} onClick={clickButton}>3</button>
                    <button className={'calculator__button'} name={'4'} onClick={clickButton}>4</button>
                    <button className={'calculator__button'} name={'5'} onClick={clickButton}>5</button>
                    <button className={'calculator__button'} name={'6'} onClick={clickButton}>6</button>
                    <button className={'calculator__button'} name={'7'} onClick={clickButton}>7</button>
                    <button className={'calculator__button'} name={'8'} onClick={clickButton}>8</button>
                    <button className={'calculator__button'} name={'9'} onClick={clickButton}>9</button>
                    <button className={'calculator__button'} name={'0'} onClick={clickButton}>0</button>
                </div>
                <div>
                    <button className={'calculator__button'} name={'+'} onClick={clickButton}>+</button>
                    <button className={'calculator__button'} name={'-'} onClick={clickButton}>-</button>
                    <button className={'calculator__button'} name={'*'} onClick={clickButton}>&times;</button>
                    <button className={'calculator__button'} name={'/'} onClick={clickButton}>&divide;</button>
                    <button className={'calculator__button'} name={'%'} onClick={clickOperation}>%</button>
                    <button className={'calculator__button'} onClick={clickRootNumber}>&radic;</button>
                    <button className={'calculator__button'} name={'^'} onClick={clickOperation}>{'^'}</button>
                    <button className={'calculator__button'} onClick={calculate}>=</button>
                    <button className={'calculator__button'} onClick={clickReset}>{'C'}</button>
                    <button className={'calculator__button'} onClick={clickBackspace}>&larr;</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;