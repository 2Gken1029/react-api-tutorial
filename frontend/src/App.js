import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState([]);

  const url = "http://localhost:8000/api/students";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setValue(res.data);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <div className="App">
      {value.map((student) => {
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <p>・{student.course}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
