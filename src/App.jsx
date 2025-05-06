import { useMemo, useRef, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();

  const isUsernameValid = useMemo(() => {
    const charsValid = [...userName].every(
      (char) =>
        letters.includes(char.toLocaleLowerCase()) || numvers.includes(char)
    );
    return charsValid && userName.trim().length >= 6;
  }, [userName]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Errore: compilare tutti i campi correttamente");
      return;
    }
    console.log(`Submit effettutato: `, {
      fullName,
      userName,
      password,
      specialization,
      experienceYears,
      description,
    });
  };
  return (
    <div className="opera-signup-container">
      <h1 className="opera-title">WEB DEVELOPER SIGNUP</h1>
      <form onSubmit={handleSubmit} className="opera-form">
        <label className="opera-group">
          <p>Nome e Cognome</p>
          <input type="text" ref={fullNameRef} className="opera-input" />
        </label>
        <label className="opera-group">
          <p>UserName</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="opera-input"
          />
        </label>
        <label className="opera-group">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="opera-input"
          />
          {password.trim() && (
            <p
              className={`opera-feedback ${
                isPasswordValid ? "valid" : "invalid"
              }`}
            >
              {isPasswordValid
                ? "Password valida"
                : "Deve avere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo"}
            </p>
          )}
        </label>
        <label className="opera-group">
          <p>Specializzazione</p>
          <select ref={specializationRef} className="opera-input">
            <option value="">Seleziona</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label className="opera-group">
          <p>Anni di esperienza</p>
          <input
            type="number"
            ref={experienceYearsRef}
            className="opera-input"
          />
        </label>
        <label className="opera-group">
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="opera-textarea"
          />
          {description.trim() && (
            <p
              className={`opera-feedback ${
                isDescriptionValid ? "valid" : "invalid"
              }`}
            >
              {isDescriptionValid
                ? "Descrizione valida"
                : `Deve avere tra i 100 e i 1000 caratteri (${
                    description.trim().length
                  })`}
            </p>
          )}
        </label>
        <button type="submit" className="opera-button">
          Registrati
        </button>
      </form>
    </div>
  );
}

export default App;
