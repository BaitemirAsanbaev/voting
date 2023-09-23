import React, { useState } from "react";
import styles from "./RegistrationForm.module.scss"; // Import your CSS Module
import axios from "axios";
import { api } from "../../api";
function RegistrationForm() {
  // Define state variables for the registration form
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [document_id, setDocumentId] = useState("");
  const [date_of_expiry, setDateOfExpiry] = useState("");
  const [place_of_birth, setPlaceOfBirth] = useState("");
  const [authority, setAuthority] = useState("");
  const [date_of_issue, setDateOfIssue] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [personal_number, setPersonalNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [side, setSide] = useState("front");
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   first_name,
    //   middle_name,
    //   last_name,
    //   gender,
    //   citizenship,
    //   date_of_birth,
    //   document_id,
    //   date_of_expiry,
    //   place_of_birth,
    //   authority,
    //   date_of_issue,
    //   ethnicity,
    //   personal_number,
    //   email,
    //   phone_number: phone,
    //   password,
    // });
    try {
      axios.post(api + "register/", {
        first_name,
        middle_name,
        last_name,
        gender,
        citizenship,
        date_of_birth,
        document_id,
        date_of_expiry,
        place_of_birth,
        authority,
        date_of_issue,
        ethnicity,
        personal_number,
        email,
        phone_number: phone,
        password,
      }).then((res)=>{
        localStorage.setItem('access', res.data.access_token);
        localStorage.setItem('refresh', res.data.refresh_token);
      }).catch((error) => {
        if (error.response) {
          console.error("Server responded with:", error.response.data);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles["registration-form"]}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>

        <div className={styles[side === "front" ? "front-side" : "hide"]}>
          <div className={styles["photo"]}></div>
          <div className={styles["front-info"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="middle_name">Middle Name:</label>
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                value={middle_name}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="citizenship">Citizenship:</label>
              <input
                type="text"
                id="citizenship"
                name="citizenship"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                required
              />
            </div>

            <div className={styles["bottom-info"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="date_of_birth">Date of Birth:</label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={date_of_birth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="document_id">Document ID:</label>
                <input
                  type="text"
                  id="document_id"
                  name="document_id"
                  value={document_id}
                  onChange={(e) => setDocumentId(e.target.value)}
                  required
                />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="date_of_expiry">Date of Expiry:</label>
                <input
                  type="date"
                  id="date_of_expiry"
                  name="date_of_expiry"
                  value={date_of_expiry}
                  onChange={(e) => setDateOfExpiry(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles[side === "back" ? "back-side" : "hide"]}>
          <div>
            <div className={styles["form-group"]}>
              <label htmlFor="place_of_birth">Place of Birth:</label>
              <input
                type="text"
                id="place_of_birth"
                name="place_of_birth"
                value={place_of_birth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="authority">Authority:</label>
              <input
                type="text"
                id="authority"
                name="authority"
                value={authority}
                onChange={(e) => setAuthority(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="date_of_issue">Date of Issue:</label>
              <input
                type="date"
                id="date_of_issue"
                name="date_of_issue"
                value={date_of_issue}
                onChange={(e) => setDateOfIssue(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="ethnicity">Ethnicity:</label>
              <input
                type="text"
                id="ethnicity"
                name="ethnicity"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className={styles["form-group"]}>
              <label htmlFor="personal_number">Personal Number:</label>
              <input
                type="text"
                id="personal_number"
                name="personal_number"
                value={personal_number}
                onChange={(e) => setPersonalNumber(e.target.value)}
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="document_id">Document ID:</label>
              <input
                type="text"
                id="document_id"
                name="document_id"
                value={document_id}
                onChange={(e) => setDocumentId(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div
          className={styles["turn"]}
          onClick={() => setSide(side === "back" ? "front" : "back")}
        >
          Turn around
        </div>
        <div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className={styles["submit-button"]}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
