import React from "react";

export const UserCard = ({ person }) => {
  return (
    <article className="card">
      <img
        style={{
          border:
            person.gender === "male" ? "orange solid 3px" : "pink solid 3px",
        }}
        className="card__img"
        src={person.picture.large}
        alt=""
      />
      <section className="card__section">
        <p>
          <i className="bx bx-phone-call"></i> {person.cell}
        </p>
        <p>
          <i className="bx bx-envelope"></i> {person.email}
        </p>
        <p>
          {person.gender === "male" ? (
            <i className="bx bx-male"></i>
          ) : (
            <i className="bx bx-female"></i>
          )}
          {person.gender}
        </p>
        <p>
          <i className="bx bxs-id-card"></i> {person.name.title}{" "}
          {person.name.first} {person.name.last}
        </p>
        <p>
          <i className="bx bx-universal-access"></i> {person.dob.age}
        </p>
      </section>
    </article>
  );
};
