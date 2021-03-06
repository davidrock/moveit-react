import { useEffect, useState } from 'react';

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [isActive, setIsActive] = useState(false);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
    console.log(isActive);
  }, [isActive, time]);

  return (
    <div>
      <div className="flex items-center font-semibold text-gray-800 font-rajdhani">
        <div className="flex items-center flex-1 text-center bg-white rounded-md shadow text-9xl justify-evenly">
          <span className="flex-1 border-r">{minuteLeft}</span>
          <span className="flex-1 ">{minuteRight}</span>
        </div>
        <span className="mx-2 text-8xl">:</span>
        <div className="flex items-center flex-1 text-center bg-white rounded-md shadow text-9xl justify-evenly">
          <span className="flex-1 border-r">{secondLeft} </span>
          <span className="flex-1 ">{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          type="button"
          onClick={resetCountdown}
          disabled
          className="flex items-center justify-center w-full h-20 mt-8 text-xl font-semibold text-gray-500 transition duration-200 bg-gray-200 border-0 rounded-md cursor-default"
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className="flex items-center justify-center w-full h-20 mt-8 text-xl font-semibold text-white transition duration-200 bg-red-400 border-0 rounded-md hover:bg-red-500"
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className="flex items-center justify-center w-full h-20 mt-8 text-xl font-semibold text-white transition duration-200 bg-blue-600 border-0 rounded-md hover:bg-blue-700"
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
