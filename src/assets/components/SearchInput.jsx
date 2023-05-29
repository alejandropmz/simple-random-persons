import React from "react";

export const SearchInput = ({ noLoad, inputInfo }) => {
  return (
    <>
      <header className="search__data">
        <form className="search__form" onSubmit={noLoad}>
          <main>
            <h2>There's {inputInfo} persons</h2>
          </main>
          <br />
          <small>How many data your'e looking for? </small>
          <br />
          <input id="search__input" placeholder="Data quantity" type="text" />
          <button className="search__button">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </header>
    </>
  );
};
