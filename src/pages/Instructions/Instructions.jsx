import React, { useState } from "react";
import styles from "./Instructions.module.scss";

const questionsData = [
  {
    question: "Какой орган власти формирует законы?",
    options: ["Президент", "Парламент", "Правительство", "Мэр города"],
    correctAnswer: "Парламент",
  },
  {
    question: "Что такое конституция?",
    options: [
      "Основной закон страны",
      "Государственный флаг",
      "Международный договор",
      "Газета",
    ],
    correctAnswer: "Основной закон страны",
  },
  {
    question: "Какое право гарантирует свободу выражения мнения?",
    options: [
      "Право на образование",
      "Право на жилье",
      "Право на работу",
      "Право на свободу слова",
    ],
    correctAnswer: "Право на свободу слова",
  },
  {
    question:
      "Какие из перечисленных документов являются международными правовыми актами?",
    options: [
      "Паспорт",
      "Конституция",
      "Декларация прав человека",
      "Водительское удостоверение",
    ],
    correctAnswer: "Декларация прав человека",
  },
  {
    question: "Что такое судебная система?",
    options: [
      "Система здравоохранения",
      "Система образования",
      "Система органов государственной власти",
      "Система судов",
    ],
    correctAnswer: "Система судов",
  },
  {
    question: "Что означает презумпция невиновности?",
    options: [
      "Подозреваемый всегда виновен",
      "Суд должен доказать невиновность подсудимого",
      "Невиновный до доказательства вины",
      "Президент всегда прав",
    ],
    correctAnswer: "Невиновный до доказательства вины",
  },
  {
    question: "Что такое гражданский брак?",
    options: [
      "Брак, зарегистрированный государством",
      "Брак с церковной церемонией",
      "Брак без регистрации",
      "Брак в другой стране",
    ],
    correctAnswer: "Брак, зарегистрированный государством",
  },
  {
    question: "Какие из перечисленных действий могут быть противозаконными?",
    options: [
      "Самозащита",
      "Соблюдение законов",
      "Кража",
      "Оказание первой помощи",
    ],
    correctAnswer: "Кража",
  },
];

const Instructions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const calculateScore = () => {
    let newScore = score;
    if (selectedOption === questionsData[currentQuestionIndex].correctAnswer) {
      newScore += 1;
    }
    return newScore;
  };

  const renderOptions = () => {
    return questionsData[currentQuestionIndex].options.map((option, index) => (
      <div
        key={index}
        className={`${styles.option} ${
          option === selectedOption ? styles.selectedOption : ""
        }`}
        onClick={() => handleOptionSelect(option)}
      >
        {option}
      </div>
    ));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowResults(true);
    }
    setScore(calculateScore());
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className={styles.container}>
      <section className={styles.pageContainer}>
        <div>
          <h1>Обучение юридическим вопросам</h1>
        </div>
        <div>
          <h2>Введение в юридическую область</h2>
          <p>
            Добро пожаловать на нашу страницу обучения юридическим вопросам.
            Здесь вы найдете полезные материалы и ресурсы, которые помогут вам
            разобраться в юридических аспектах различных сфер.
          </p>
        </div>
        <div>
          <h2>Защита голоса гражданской инициативы</h2>
          <p>
            Гражданская инициатива играет важную роль в современном обществе.
            Она позволяет гражданам выражать свое мнение, инициировать изменения
            и участвовать в принятии важных решений. Однако, для того чтобы
            защитить свой голос и участвовать в гражданской инициативе, важно
            знать свои права и обязанности.
          </p>
          <p>
            Наши курсы и материалы помогут вам узнать больше о защите и
            продвижении голоса гражданской инициативы. Мы предоставляем
            информацию о законах, процедурах и организациях, которые могут
            поддержать ваше участие в гражданской деятельности.
          </p>
        </div>
        <div>
          <h2>Продвижение гражданских инициатив</h2>
          <p>
            Если у вас есть идея или проект, который вы хотели бы представить
            обществу, мы также поможем вам разработать стратегию продвижения
            вашей гражданской инициативы. Мы расскажем о методах сбора подписей,
            общественных кампаниях и взаимодействии с местными органами власти.
          </p>
        </div>
        <div>
          <h2>Практические курсы и семинары</h2>
          <p>
            Для более глубокого понимания юридических аспектов гражданской
            инициативы, мы проводим практические курсы и семинары. Здесь вы
            сможете задать вопросы экспертам, обсудить случаи из практики и
            научиться применять полученные знания на практике.
          </p>
        </div>
        <div>
          <h2>Пройдите тест по юридическим вопросам</h2>
          <p>
            Проверьте свои знания по юридическим аспектам гражданской
            инициативы, пройдя наш тест. Это отличный способ узнать, насколько
            вы хорошо разбираетесь в данной области и готовы ли вы активно
            участвовать в защите прав гражданской инициативы.
          </p>
        </div>
      </section>
      {showResults ? (
        <div className={styles.results}>
          <h2>Результаты теста</h2>
          <p>
            Вы ответили правильно на {score} из {questionsData.length} вопросов.
          </p>
          <button onClick={resetTest}>Пройти тест заново</button>
        </div>
      ) : (
        <div>
          <h2>Вопрос {currentQuestionIndex + 1}</h2>
          <p>{questionsData[currentQuestionIndex].question}</p>
          <div className={styles.options}>{renderOptions()}</div>
          <button className={styles.nextButton} onClick={handleNextQuestion}>
            {currentQuestionIndex < questionsData.length - 1
              ? "Следующий вопрос"
              : "Завершить тест"}
          </button>
        </div>
      )}
    </div>
  );
};
export default Instructions;
