import React, { useState } from 'react';
import "./quiz.css"

const questions = [
  {
    id: 1,
    question: 'Apa Kepanjangan dari HTML',
    options: ['How To Make Lumpia', 'Hyper Text Markup Langguage', 'Hyper Text Markup Login', 'Harddrive Hyper Text Man Langguage'],
    correctAnswer: 'Hyper Text Markup Langguage'
  },
  {
    id: 2,
    question: 'Hasil Dari 3/4 x 5/6',
    options: ['6/9', '5/8', '6.55', '7/8'],
    correctAnswer: '5/8'
  },
  {
    id: 3,
    question: 'The teacher ______ us a new lesson every day',
    options: ['Teaches', 'Teacher', 'Drinking', 'Teaching'],
    correctAnswer: 'Teaches'
  },
  {
    id: 4,
    question: 'Mary and Tom ______ best friends since childhood',
    options: ['Has Bean', 'Still', 'Are', 'Has Been'],
    correctAnswer: 'Has Been'
  },
  {
    id: 5,
    question: 'Jika A lebih besar dari B dan B lebih besar dari C, maka hubungan A dan C adalah',
    options: ['A sama dengan C', 'A lebih besar dari C', 'A lebih kecil dari C', 'Tidak ditentukan'],
    correctAnswer: 'A lebih besar dari C'
  },
  {
    id: 6,
    question: 'Bahasa Pemrograman untuk logic Website',
    options: ['JavaScript', 'Python', 'JawaScript', 'HTML'],
    correctAnswer: 'JavaScript'
  },
  {
    id: 7,
    question: 'Tentukan angka berikutnya dalam pola berikut: 2, 4, 8, 16,',
    options: ['18', '20', '69', '32'],
    correctAnswer: '32'
  },
  {
    id: 8,
    question: 'Text Editor untuk Coding',
    options: ['Visual Novel Studio', 'RPGMaker', 'Whatssapp', 'Visual Studio Code'],
    correctAnswer: 'Visual Studio Code'
  },
  {
    id: 9,
    question: 'The birds ______ singing beautifully this .',
    options: ['Was', 'Are', 'As', 'Waas'],
    correctAnswer: 'Was'
  },
  {
    id: 10,
    question: 'Pilih dibawah ini yang termasuk Game Engine',
    options: ['Word,Powerpoint', 'Unity, Unreal', 'Adobe Ilustrator, Paint', 'After Effect, Premier Pro'],
    correctAnswer: 'Unity, Unreal'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [warning, setWarning] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setAnswers((prevAnswers) => ({...prevAnswers, [currentQuestion]: answer }));
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setWarning(true);
    } else {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
      setWarning(false);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
    setSelectedAnswer(null);
    setWarning(false);
  };

  return (
    <div className='quiz'>
        <h2>Simple QUIZ</h2>
      {currentQuestion < questions.length? (
        <div className='answer'>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  onChange={() => handleAnswer(option)}
                  className='input-answer'
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
          {warning && <p style={{ color: 'red' }}>Please select an option!</p>}
          <button onClick={handleSubmit}>
            Next
          </button>
        </div>
      ) : (
        <div className='done'>
          <h2>Quiz complete!</h2>
          <p>You scored {score} out of 10.</p>
          <button onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;