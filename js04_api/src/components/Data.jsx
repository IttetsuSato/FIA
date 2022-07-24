// rafce を入力後 tabキーを押す
import React from "react";

// 1.useStateとuseEffectをimportします🤗
import { useState, useEffect } from "react";
import Item from "./Item";
import View from "./View";

const Data = () => {
  // 2.useStateを準備します🤗
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);

  // 3.useEffectを用いて、pokemonAPIのデータを取得します🤗（欲しいデータに精査して）
  useEffect(() => {
    // 3-1. fetchDataというおまじないを作成する
    const fetchData = async () => {
      // APIのデータを取得する
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      // console.log(response, "response");

      // jsonにしてjsで操作できるように変換する
      const data = await response.json();
      // console.log(data, "data"); //jsonに変換されたデータ

      //resultsって？コンソールログでチェックします🤗
      const pokemonList = data.results;
      // console.log(pokemonList, "pokemonList");

      // useStateを使ってpokemonListの精査したデータを保持します🤗
      setPokemon(pokemonList);
    };
    // 3-2 fetchDataを実行します
    fetchData();
  }, []);

  // handleClickの処理を記述🤗
  const handleClick = async (num) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`).then(
      (res) => res.json()
    );
    // useStateの２つ目 = data, setData 組み合わせのものを使う🤗

    setData(response);
  };


  return (
    <div className="flex">
      {/* 記述 */}
      <div className="viewBox">
        {pokemon.map((item, index) => (
          <View key={index} pokemonItem={index} handleClick={handleClick} />
        ))}
      </div>
      {/* 記述 */}
      {/* id={data.id} */}
      {/* useState dataのことを指しています🤗 */}
      <Item
        id={data.id}
        height={data.height}
        pokemonName={data.name}
        weight={data.weight}
        front={data.sprites && data.sprites.front_default}
        back={data.sprites && data.sprites.back_default}
        shiny={data.sprites && data.sprites.front_shiny}
        shinyBack={data.sprites && data.sprites.back_shiny}
      />
    </div>
  );
};

export default Data;
