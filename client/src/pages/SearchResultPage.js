import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { SearchResultComponent } from '../components/SearchResultComponent/SearchResultComponent';

export function SearchResultPage() {
  const [galleryCards, setGalleryCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://vehiculum-coding-challenge.herokuapp.com/api/search-results',
      )
      .then((response) => {
        setGalleryCards(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Vehiculum</title>
      </Helmet>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SearchResultComponent gallery={galleryCards} />
        </div>
      </div>
    </>
  );
}
