import React from 'react';
import { Helmet } from 'react-helmet';
import { ModelPriceBar } from '../ModelPriceBar';

export function SearchResultComponent(props) {
  const { gallery } = props;

  return (
    <>
      <Helmet>
        <title>Vehiculum</title>
      </Helmet>

      {gallery.map((cardDetail) => (
        <div className="flex justify-center m-6" key={cardDetail.id}>
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a
              href={`/card/${cardDetail.id}`}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={`https://vehiculum-coding-challenge.herokuapp.com/images/${cardDetail?.id}/l/angled_front_left.png`}
                alt=""
              />
              {/* bg-slate-50 */}
              <div className="p-6 ">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-0">
                  <ModelPriceBar
                    makeId={cardDetail.makeId}
                    MakesAndModel={cardDetail.model}
                    MonthlyRate={cardDetail.grossMonthlyRate}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
