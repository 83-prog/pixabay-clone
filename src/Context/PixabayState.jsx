import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

export const PixabayState = (props) => {
  const [pixaImg, setpixaImg] = useState([]);
  const [InputSearch, setInputSearch] = useState('london');

  const Api_key = "51957154-5dd36a828ac40eba7f19db6b7";

  useEffect(() => {
    //  Api call here
    async function factData() {
      let responsise = await fetch(
        `https://pixabay.com/api/?key=${Api_key}&q=${InputSearch}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await responsise.json();
      setpixaImg(data.hits);
    }

    factData();
  }, [InputSearch]);

  // button logic
  async function fatchButton(cat) {
    let responsise = await fetch(
      `https://pixabay.com/api/?key=${Api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await responsise.json();
    setpixaImg(data.hits);
  }

  return (
    <>
      <PixabayContext.Provider value={{ pixaImg, fatchButton, setInputSearch }}>
        {props.children}
      </PixabayContext.Provider>
    </>
  );
};
