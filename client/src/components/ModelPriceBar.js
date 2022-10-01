import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ModelPriceBar({ makeId, MakesAndModel, MonthlyRate }) {
  const [makesId, setMakesId] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3001/api/makes')
      .then((response) => {
        setMakesId(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log('this is makesID');
  let justTheModel = [];
  if (MakesAndModel) {
    for (let word of MakesAndModel.split(' ')) {
      if (
        makesId.find((x) => x.id === +makeId)?.name.toLowerCase() !==
        word.toLowerCase()
      ) {
        justTheModel.push(word);
      }
    }
  }

  let monthlyRate = '';
  if (MonthlyRate) {
    monthlyRate = MonthlyRate.amount;
  }

  return (
    <>
      {!makesId ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div>
            <h5 className="text-gray-900 text-base font-bold md:font-light ">
              {makesId.find((x) => x.id === +makeId)?.name}
            </h5>
            <h5 className="text-gray-900 text-2xl font-bold mb-2">
              {justTheModel.join(' ') ? justTheModel.join(' ') : <br />}
            </h5>
          </div>
          <div>
            <h5 className="text-gray-900 text-base text-right font-bold md:font-light ">
              Monthly Rate
            </h5>

            <h5 className="text-gray-900 text-2xl text-right font-bold mb-2">
              €{' '}
              {`${monthlyRate.toString().slice(0, -3)},${monthlyRate
                .toString()
                .slice(-3)}`}
            </h5>
          </div>
        </>
      )}
    </>
  );
}
