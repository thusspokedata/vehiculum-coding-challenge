import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Slider } from '../components/ProductDetailPage/Carrousel';
import { ModelPriceBar } from '../components/ModelPriceBar';

export function ProductDetailPage() {
  const params = useParams();
  const id = params.id;

  console.log('pages > ProductDetailPage ---->', id);

  const [cardDetail, setCardDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://vehiculum-coding-challenge.herokuapp.com/api/details/${id}`)
      .then((response) => {
        setCardDetail(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let power = [];
  if (cardDetail.power) {
    power = cardDetail.power;
  }

  return (
    <>
      <>
        {!cardDetail ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <Helmet>
              <title>{cardDetail.model}</title>
            </Helmet>
            {console.log('this is cardDetail ---->', cardDetail.model)}
            <div className="container mx-auto mt-6 mb-44">
              <div className="container">
                <Slider images={cardDetail.images} />
              </div>
              {/* ---------------COMPONENT --------------------- */}
              <div className="grid grid-cols-2 gap-0 mb-6">
                <ModelPriceBar
                  makeId={cardDetail.makeId}
                  MakesAndModel={cardDetail.model}
                  MonthlyRate={cardDetail.grossMonthlyRate}
                />
              </div>
              {/* ---------------------------------------------- */}
              <section>
                <div className="my-6">
                  {' '}
                  <h2 className="font-bold md:text-4xl my-6">Description</h2>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-0 mb-6">
                <div>
                  <h6 className="">Color</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    <div className="flex flex-row ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill={`${cardDetail.color}`}
                        class="bi bi-circle-fill mr-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      {cardDetail.color}
                    </div>
                  </h2>

                  <h6>Registration Date</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    {cardDetail.year}
                  </h2>

                  <h6>Gear</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    {cardDetail.gearType}
                  </h2>
                </div>
                <div>
                  <h6>Amount of seats</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    {cardDetail.seats}
                  </h2>
                  <h6>Fuel Type</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    {cardDetail.fuelType}
                  </h2>
                  <h6>Power</h6>
                  <h2 className="text-gray-900 text-xl font-bold mb-2 ml-6">
                    {power.amount} HP
                  </h2>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
}
