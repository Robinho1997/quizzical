# quizzical

Quizzical is a Quiz App which uses the Open Trivia Database. (https://opentdb.com/api_config.php)

Functionality:

The main functionality of the project is implemented in the App component, which is exported as the default component. It contains the state variables "started," "questions," "count," "checked," and "correct."

The "started" state variable stores the current state of the quiz, whether it has been started or not. The "questions" state variable is an array that contains five question objects retrieved from the Open Trivia Database API. Each question object has an ID, answers (a mixed list of all possible answers), question, correct (the correct answer), selected (the user's selected answer), and checked (a boolean value indicating whether the user has selected their answer).

The "count" state variable stores the number of component renders and is used to trigger the useEffect hook that retrieves new questions from the API when the user clicks the "play again" button.

The "checked" state variable stores the state, using a boolean, whether the user has selected their answers. The "correct" variable stores the number of correct answers selected by the user.

The component contains several functions that implement the quiz logic. The "shuffleArray" function shuffles the answer array of each question object. The "handleCheck" function checks whether the user has answered all questions and sets the "checked" and "correct" state variables. The "handleClickAnswer" function updates the selected property of the question object when the user selects an answer. The "handlePlayAgain" function resets the "checked" state variable and increments the "count" state variable to retrieve new questions from the API.

App.jsx also includes a useEffect hook that retrieves questions from the API when the count variable changes.

The component renders either the StartPage or Question component, depending on the value of the "started" state variable. The Question component displays each question with its answer options and allows the user to select an answer. After the user has answered all questions, the score and the "play again" or "check answers" button are displayed.

Conclusion:

This project demonstrates the use of React state variables, useEffect hooks, and event handling to create a quiz app that retrieves questions from an external API. It provides an example of how to shuffle arrays and update object properties in React components.
