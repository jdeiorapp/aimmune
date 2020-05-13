import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import $ from "jquery"

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      terms: false,
      who: "",
      audience: "",
      age: "",
      validName: false,
      validEmail: false,
    }
    this.emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    this.formSubmitted = false
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.formIsValid = this.formIsValid.bind(this)
    this.getQueryParams = this.getQueryParams.bind(this)
    this.getCookie = this.getCookie.bind(this)
    this.deleteCookies = this.deleteCookies.bind(this)
    this.postData = this.postData.bind(this)
  }

  componentDidMount() {
    this.getQueryParams()
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
      this.validateForm()
    }
  }

  toggleCheck() {
    this.setState({ terms: !this.state.terms })
  }

  validateForm() {
    this.state.name !== ""
      ? this.setState({ validName: true })
      : this.setState({ validName: false })
    this.emailRegex.test(this.state.email)
      ? this.setState({ validEmail: true })
      : this.setState({ validEmail: false })
  }

  formIsValid() {
    if (
      this.state.name !== "" &&
      this.emailRegex.test(this.state.email) &&
      this.state.terms
    ) {
      return true
    } else {
      return false
    }
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.formSubmitted = true
    this.validateForm()
    if (this.formIsValid()) {
      // this.postData()
      // this.deleteCookies()
      navigate("/thankyou")
    }
  }

  postData() {
    var data = {
      full_name: this.state.name,
      email: this.state.email,
      role: this.state.who === "other" ? this.state.audience : this.state.who,
      patient_age_range: this.state.age,
      patient_certification: this.state.terms ? "yes" : "no",
      utm_source: this.getCookie("utm_source"),
      utm_medium: this.getCookie("utm_medium"),
      utm_campaign: this.getCookie("utm_campaign"),
      utm_content: this.getCookie("utm_content"),
      utm_term: this.getCookie("utm_term"),
    }

    $.ajax({
      type: "POST",
      url: "https://io.palforzia.com/api/contact/patient",
      data: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      success: function(data) {
        console.log("Success!")
        console.log("The result is: ")
        console.dir(data)
      },
      error: e => console.log(e),
    })
  }

  getQueryParams() {
    let params = window.location.search.substring(1).split("&")
    for (let i = 0; i < params.length; i++) {
      document.cookie = params[i]
    }
  }

  getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  deleteCookies() {
    document.cookie = "utm_source="
    document.cookie = "utm_medium="
    document.cookie = "utm_campaign="
    document.cookie = "utm_content="
    document.cookie = "utm_term="
  }

  render() {
    return (
      <Row className="form-component">
        <Col>
          <form>
            <Row>
              <Col className="input-field" lg={{ span: 8, offset: 2 }} xs={12}>
                <input
                  type="text"
                  id="name"
                  required={true}
                  value={this.state.name}
                  onChange={this.update("name")}
                  className={
                    this.state.validName || !this.formSubmitted ? "" : "invalid"
                  }
                />
                <label htmlFor="name">
                  <strong>Full Name*</strong>
                </label>
                <p
                  className={
                    this.state.validName || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your full name.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={{ span: 8, offset: 2 }} xs={12}>
                <input
                  type="text"
                  id="eaddress"
                  required={true}
                  value={this.state.email}
                  onChange={this.update("email")}
                  className={
                    this.state.validEmail || !this.formSubmitted
                      ? ""
                      : "invalid"
                  }
                />
                <label htmlFor="eaddress">
                  <strong>Email Address*</strong>
                </label>
                <p
                  className={
                    this.state.validEmail || !this.formSubmitted
                      ? "hidden"
                      : "invalid"
                  }
                >
                  Please enter your email address.
                </p>
              </Col>
            </Row>

            <Row>
              <Col
                lg={{ span: 2, offset: 2 }}
                xs={12}
                className="d-flex align-items-center field-text"
              >
                <p>I am a...</p>
              </Col>

              <Col lg={6} xs={12}>
                <Row>
                  <Col className="radio">
                    <input
                      id="caregiver"
                      type="radio"
                      name="who"
                      value="caregiver"
                      onClick={this.update("who")}
                    />
                    <label
                      htmlFor="caregiver"
                      className="text-center first-label"
                      style={
                        this.state.who !== "other"
                          ? { borderRight: "none" }
                          : { borderRight: "none", borderBottomLeftRadius: 0 }
                      }
                    >
                      <strong>Caregiver</strong>
                    </label>
                  </Col>
                  <Col className="radio">
                    <input
                      id="other"
                      type="radio"
                      name="who"
                      value="other"
                      onClick={this.update("who")}
                    />
                    <label
                      htmlFor="other"
                      className="text-center last-label"
                      style={
                        this.state.who === "other"
                          ? { borderBottomRightRadius: 0 }
                          : {}
                      }
                    >
                      <strong>Other</strong>
                    </label>
                  </Col>
                </Row>
                {this.state.who === "other" ? (
                  <input
                    type="text"
                    id="audience"
                    required={true}
                    value={this.state.audience}
                    onChange={this.update("audience")}
                    style={{
                      borderTop: "none",
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  />
                ) : (
                  ""
                )}
              </Col>
            </Row>

            <Row>
              <Col
                lg={{ span: 2, offset: 2 }}
                xs={12}
                className="d-flex align-items-center"
              >
                <p>The patient's age is...</p>
              </Col>

              <Col lg={6} xs={12}>
                <Row>
                  <Col className="radio">
                    <input
                      id="4to11"
                      type="radio"
                      name="age"
                      value="4to11"
                      onClick={this.update("age")}
                    />
                    <label
                      htmlFor="4to11"
                      className="text-center first-label"
                      style={{ borderRight: "none" }}
                    >
                      <strong>4-11</strong>
                    </label>
                  </Col>
                  <Col className="radio">
                    <input
                      id="12to17"
                      type="radio"
                      name="age"
                      value="12to17"
                      onClick={this.update("age")}
                    />
                    <label htmlFor="12to17" className="text-center last-label">
                      <strong>12-17</strong>
                    </label>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col className="text-right" lg={{ span: 8, offset: 2 }} xs={12}>
                <p className="required-field">*required field</p>
              </Col>
            </Row>

            <Row className="terms">
              {/* <Col lg={{ span: 1, offset: 2 }} xs={2} className="checkbox-wrapper">
                <label className="checkbox">
                  <input type="checkbox" value={this.state.terms} />
                  <span
                    id="sign-up-now-checkbox"
                    className={
                      this.state.terms || !this.formSubmitted
                        ? "checkmark"
                        : "checkmark invalid"
                    }
                    onClick={() => this.toggleCheck()}
                  />
                </label>
              </Col> */}
              <Col
                lg={{ span: 5, offset: 2 }}
                xs={12}
                className="checkbox-wrapper"
              >
                <div>
                  <label className="checkbox">
                    <input type="checkbox" value={this.state.terms} />
                    <span
                      id="sign-up-now-checkbox"
                      className={
                        this.state.terms || !this.formSubmitted
                          ? "checkmark"
                          : "checkmark invalid"
                      }
                      onClick={() => this.toggleCheck()}
                    />
                  </label>
                </div>
                <div className="terms-text">
                  By clicking Sign Up Now, I certify that I am 13 years of age
                  or older and agree to the{" "}
                  <a
                    href="https://www.aimmune.com/terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms and conditions
                  </a>
                  . I understand and agree that the information that I provide
                  will be used in accordance with the Aimmune{" "}
                  <a
                    href="https://www.aimmune.com/privacy-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy policy
                  </a>{" "}
                  including to provide me with updates on PALFORZIA treatment.
                </div>
              </Col>
              <Col lg={3}>
                <input
                  type="submit"
                  value="Sign Up Now"
                  className="signup-btn"
                  onClick={this.handleFormSubmit}
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    )
  }
}
