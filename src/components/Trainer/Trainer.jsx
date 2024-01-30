// Trainer.jsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Trainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [duration] = useState(location.state.duration * 60); // Convert duration to seconds
  const [minRange] = useState(location.state.minRange);
  const [maxRange] = useState(location.state.maxRange);
  const [operators] = useState(location.state.operators);
  const [userAnswer, setUserAnswer] = useState('');
  const [problemsAnswered, setProblemsAnswered] = useState(0);
  const [problemsSkipped, setProblemsSkipped] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const generateProblem = () => {
      const operator = operators[Math.floor(Math.random() * operators.length)];
      const operand1 = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
      const operand2 = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);

      let result;
      switch (operator) {
        case 'addition':
          result = operand1 + operand2;
          break;
        case 'subtraction':
          result = operand1 - operand2;
          break;
        case 'multiplication':
          result = operand1 * operand2;
          break;
        case 'division':
          result = operand1 / operand2;
          break;
        default:
          break;
      }

      return {
        operand1,
        operand2,
        operator,
        result,
      };
    };

    const generateProblems = () => {
      const totalProblems = 100; // Adjust the number as needed
      const generatedProblems = [];
      for (let i = 0; i < totalProblems; i++) {
        generatedProblems.push(generateProblem());
      }
      return generatedProblems;
    };

    setProblems(generateProblems());
  }, [minRange, maxRange, operators]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prev) => prev - 1);
      } else {
        showScore();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSkip = () => {
    setProblemsSkipped((prev) => prev + 1);
    setUserAnswer('');
  };

  const handleSubmit = () => {
    const currentProblem = problems[problemsAnswered];
    if (parseInt(userAnswer, 10) === currentProblem.result) {
      setProblemsAnswered((prev) => prev + 1);
      setUserAnswer('');
    }
  };

  const showScore = () => {
    alert(`Score: ${problemsAnswered} problems answered, ${problemsSkipped} problems skipped`);
    navigate('/');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Mental Math Trainer - Trainer Page</h2>
      <div>
        <p>
          Problem: {problemsAnswered < problems.length ? (
            `${problems[problemsAnswered].operand1} ${problems[problemsAnswered].operator} ${problems[problemsAnswered].operand2} =`
          ) : (
            'No more problems'
          )}
        </p>
        {problemsAnswered < problems.length && (
          <>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleSkip}>Skip</button>
          </>
        )}
      </div>
      <div>
        <p>Total Problems Answered: {problemsAnswered}</p>
        <p>Total Problems Skipped: {problemsSkipped}</p>
      </div>
      <div>
        <p>Time Remaining: {Math.floor(timeRemaining / 60)} minutes {timeRemaining % 60} seconds</p>
      </div>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default Trainer;