
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Calculator = () => {
  const { t } = useLanguage();
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate();
      setDisplay(String(result));
      setFirstOperand(result);
      addToHistory(`${firstOperand} ${operator} ${inputValue} = ${result}`);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    if (operator === null || firstOperand === null) return parseFloat(display);
    
    const inputValue = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstOperand + inputValue;
        break;
      case '-':
        result = firstOperand - inputValue;
        break;
      case '*':
        result = firstOperand * inputValue;
        break;
      case '/':
        result = inputValue !== 0 ? firstOperand / inputValue : 0;
        break;
      default:
        return inputValue;
    }

    return Number(result.toFixed(2));
  };

  const handleEquals = () => {
    if (operator === null || firstOperand === null) return;
    
    const inputValue = parseFloat(display);
    const result = calculate();
    setDisplay(String(result));
    addToHistory(`${firstOperand} ${operator} ${inputValue} = ${result}`);
    
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const addToHistory = (calculation: string) => {
    setHistory(prev => [...prev.slice(-4), calculation]);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader className="bg-sa-green text-white rounded-t-lg">
        <CardTitle className="text-center">{t('taxiCalculator')}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="bg-gray-100 p-3 rounded mb-4 text-right">
          <div className="text-2xl font-bold">R {display}</div>
          {history.length > 0 && (
            <div className="text-xs text-gray-600 mt-2 space-y-1">
              {history.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" onClick={clearDisplay} className="col-span-2">C</Button>
          <Button variant="outline" onClick={() => performOperation('/')}>/</Button>
          <Button variant="outline" onClick={() => performOperation('*')}>×</Button>
          
          <Button variant="outline" onClick={() => inputDigit('7')}>7</Button>
          <Button variant="outline" onClick={() => inputDigit('8')}>8</Button>
          <Button variant="outline" onClick={() => inputDigit('9')}>9</Button>
          <Button variant="outline" onClick={() => performOperation('-')}>-</Button>
          
          <Button variant="outline" onClick={() => inputDigit('4')}>4</Button>
          <Button variant="outline" onClick={() => inputDigit('5')}>5</Button>
          <Button variant="outline" onClick={() => inputDigit('6')}>6</Button>
          <Button variant="outline" onClick={() => performOperation('+')}>+</Button>
          
          <Button variant="outline" onClick={() => inputDigit('1')}>1</Button>
          <Button variant="outline" onClick={() => inputDigit('2')}>2</Button>
          <Button variant="outline" onClick={() => inputDigit('3')}>3</Button>
          <Button 
            variant="outline" 
            onClick={handleEquals} 
            className="row-span-2 bg-sa-yellow text-black hover:bg-sa-yellow/90"
          >=</Button>
          
          <Button variant="outline" onClick={() => inputDigit('0')} className="col-span-2">0</Button>
          <Button variant="outline" onClick={inputDecimal}>.</Button>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-3 rounded-b-lg">
        <p className="text-sm text-center w-full text-gray-600">
          {t('calculatorHelper')}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Calculator;
