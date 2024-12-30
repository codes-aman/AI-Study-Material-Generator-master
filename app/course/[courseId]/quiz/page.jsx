"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import StepProgress from "../components/StepProgress";
import QuizCardItem from "./_components/QuizCardItem";

function Quiz() {
  const { courseId } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState();
  useEffect(() => {
    GetQuiz();
  }, []);

  const GetQuiz = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "Quiz",
    });
    setQuiz(result?.data?.content?.questions);
    setQuizData(result.data);
    setCorrectAnswer(result?.data?.content?.questions[0]?.answer);

    console.log("Quiz", result.data);
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    if (userAnswer === currentQuestion.answer) {
      setIsCorrectAnswer(true);
      setCorrectAnswer(currentQuestion.answer);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  useEffect(() => {
    setCorrectAnswer(quiz[stepCount]?.answer);
    setIsCorrectAnswer(null);
  }, [stepCount]);

  return (
    <div>
      <h2 className="font-bold text-3xl mb-8">Quiz</h2>
      <StepProgress
        data={quiz}
        stepCount={stepCount}
        setStepCount={(value) => setStepCount(value)}
      />

      <div>
        <QuizCardItem
          className="mt-10 mb-5"
          quiz={quiz[stepCount]}
          userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
        />
      </div>
      {isCorrectAnswer === false && (
        <div className="border p-3 border-red-700 bg-red-200 rounded-lg mt-16">
          <h2 className="font-bold text-lg text-red-600">Incorrect</h2>
          <p className="text-red-600">Correct answer is {correctAnswer}</p>
        </div>
      )}
      {isCorrectAnswer === true && (
        <div className="border p-3 border-green-700 bg-green-200 rounded-lg">
          <h2 className="font-bold text-lg text-green-600">Correct</h2>
          <p className="text-green-600">Your answer is correct</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
