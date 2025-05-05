import { useState } from "react";




function App() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExpereinceYears] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
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
    <div>
      <h1>WEB DEVELOPER SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome e Cognome</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          <p>UserName</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Specializzazione</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Full Stack</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input
            type="number"
            value={experienceYears}
            onChange={(e) => setExpereinceYears(e.target.value)}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default App;
