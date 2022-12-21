import React from 'react';
import data from './Petdata.json';

const Pettable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Age(month)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, age, breed }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{breed}</td>
                <td>{age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Pettable;
