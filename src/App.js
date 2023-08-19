import { User } from "./User";
import { useState } from "react";
import "./App.css";

import data from "./data";

function App() {
  const [userData, setUserData] = useState(data);
  const length = userData.length;
  return (
    <section className="container">
      <article className="container-center">
        <h2 className="header">{`${length} birthdays today`}</h2>
        <ul className="peoples">
          {userData.map((user) => {
            return <User key={user?.id} {...user} />;
          })}
        </ul>
        <button onClick={() => setUserData([])} className="btn">
          clear all
        </button>
      </article>
    </section>
  );
}

export default App;
