import React, { useState } from "react"
import Layout from "../components/Layout"
import { Container, Col, Row } from "react-bootstrap"
import { navigate } from "@reach/router"
import QuizHeader from "./quiz/quizHeader"

import ProgressBar from "../assets/images/progressBar.png"
import Plus from "../assets/images/quiz_plus.svg"
import Minus from "../assets/images/quiz_minus.svg"

var questionsList = [
  {},
  { question: "How old is your child?", progress: "7%" },
  {
    question:
      "Has your child been diagnosed with a peanut allergy by an allergist?",
    progress: "22%",
  },
  {
    question: "Does your child have uncontrolled asthma?",
    progress: "38%",
  },
  {
    question:
      "Does your child have a history of eosinophilic esophagitis (EoE)?",
    progress: "53%",
  },
  {
    question:
      "Are you or your child willing and able to administer injectable epinephrine?",
    progress: "69%",
  },
  {
    question:
      "Do you think you might NOT be able to come to appointments every 2 weeks for the next 6 months?",
    progress: "85%",
  },
  {
    question:
      "Do you think you might NOT be able to give your child the prescribed dose of PALFORZIA every day?",
    progress: "100%",
  },
]

export default () => {
  const [age, setAge] = useState(0)
  const [questionNum, setQuestionNum] = useState(1)

  let question =
    typeof document !== "undefined" ? document.getElementById("question") : null

  let noButton = (
    <button
      id="no"
      onClick={() => {
        handleNext()
      }}
    >
      no
    </button>
  )

  switch (questionNum) {
    case 2:
      noButton = (
        <button onClick={() => navigate("/quiz/unsuccessful")}>no</button>
      )
      break
    case 5:
      noButton = (
        <button onClick={() => navigate("/quiz/unsuccessful")}>no</button>
      )
      break
    case 7:
      noButton = <button onClick={() => navigate("/quiz/successful")}>no</button>
      break

    default:
      break
  }

  function handleBack() {
    setQuestionNum(questionNum - 1)
    question.className = ""
    void question.offsetWidth

    if (questionNum - 1 === 1) {
      question.className = "q-one fade-right"
    } else {
      question.className = "fade-right"
    }
  }

  function handleNext() {
    setQuestionNum(questionNum + 1)
    question.className = ""
    void question.offsetWidth

    question.className = "fade-left"
  }

  return (
    <Layout currentPage="quiz">
      <QuizHeader />
      <section className="quiz">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} className="text-center">
              <div className="progress-bar">
                <div
                  className="background"
                  style={{ width: questionsList[questionNum].progress }}
                >
                  <img src={ProgressBar} width="217" />
                </div>
              </div>
              <p className="q-one" id="question">
                {questionsList[questionNum].question}
              </p>
            </Col>
          </Row>
          {questionNum === 1 ? (
            <Row>
              <Col className="text-center">
                <img
                  src={Minus}
                  onClick={() => {
                    if (age > 0) {
                      setAge(age - 1)
                    }
                  }}
                />
                <input
                  type="text"
                  id="age"
                  required={true}
                  value={age}
                  onChange={e => setAge(e.currentTarget.value)}
                  className="text-center"
                />
                <img src={Plus} onClick={() => setAge(age + 1)} />
              </Col>
            </Row>
          ) : (
            ""
          )}
          {questionNum === 1 ? (
            <Row>
              <Col className="text-center">
                <button
                  id="no"
                  onClick={() =>
                    age > 3 && age < 18
                      ? handleNext()
                      : navigate("/quiz/unsuccessful")
                  }
                >
                  Next
                </button>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col className="text-center">
                <span
                  id="back"
                  onClick={() => {
                    handleBack()
                  }}
                >
                  Back
                </span>
                {questionNum === 2 || questionNum === 5 ? (
                  <button
                    onClick={() => {
                      handleNext()
                    }}
                  >
                    yes
                  </button>
                ) : (
                  <button onClick={() => navigate("/quiz/unsuccessful")}>
                    yes
                  </button>
                )}
                {noButton}
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  )
}
