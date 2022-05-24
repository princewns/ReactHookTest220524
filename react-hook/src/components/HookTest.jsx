import { useState, useEffect, useMemo, useCallback } from "react"

const Hooktest = () => {
  const [date, setDate] = useState(new Date());
  const [inputNum, setInputnum] = useState(0);
  const [number, setNumber] = useState([1,5]);

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  const onChange = useCallback((e) => {
    setInputnum(e.target.value);
  },[]);
  const addNum = useCallback(() => {
    setNumber([...number, parseInt(inputNum)]);
    setInputnum(0);
  },[inputNum, number]);

  const allSum = (list) => {
    return list.reduce((a,b) => (a+b));
  };
  const avr = useMemo(() => allSum(number)/number.length,[number]);

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
      <input type='text' onChange={onChange} value={inputNum} />
      <button onClick={addNum}>추가</button>
      <h3>평균값 : {avr}</h3>
      <ul>
        {number.map((n,i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  )
};

export default Hooktest;