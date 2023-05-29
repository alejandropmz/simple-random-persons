import { Fragment, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { UserCard } from "./assets/components/UserCard";
import { SearchInput } from "./assets/components/SearchInput";
import { Loading } from "./assets/components/Loading";

function App() {
  const [persons, setPersons] = useState();
  const [inputInfo, setInputInfo] = useState(20);

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${inputInfo}`;
    axios.get(url).then((res) => {
      setPersons(res.data.results);
    });
  }, [inputInfo]);

  const noLoad = (e) => {
    e.preventDefault();
    setInputInfo(e.target.search__input.value);
    e.target.search__input.value = "";
  };

  console.log(persons)

  return (
    <div className="app">
      {persons ? (
        <SearchInput inputInfo={inputInfo} noLoad={noLoad} />
      ) : (
        <Loading />
      )}
      {persons?.map((person) => (
        <UserCard key={person?.login.uuid} person={person} />
      ))}
    </div>
  );
}

export default App;
