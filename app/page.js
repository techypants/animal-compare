"use client";
import Card from "./components/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [animal1, setAnimal1] = useState({});
  const [animal2, setAnimal2] = useState({});
  const [name1, setName1] = useState("tiger");
  const [name2, setName2] = useState("buffalo");

  const apiUrl1 = `https://api.api-ninjas.com/v1/animals?name=${name1}`;
  const apiUrl2 = `https://api.api-ninjas.com/v1/animals?name=${name2}`;

  useEffect(() => {
    async function Fruits() {
      const res1 = await fetch(apiUrl1, {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJA,
        },
      });
      const res2 = await fetch(apiUrl2, {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJA,
        },
      });
      const data1 = await res1.json();
      const data2 = await res2.json();

      setAnimal1(data1[0]);
      setAnimal2(data2[0]);

      // console.log(data);
    }
    Fruits();
  }, [animal1]);

  return (
    <div className="bg-white text-black flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-[32px]">Animal Compare</h1>
      <div>
        <input
          onChange={(e) => {
            setName1(e.target.value);
          }}
          placeholder="animal 1"
          className="border-black border-2 rounded-lg p-2"
        ></input>
        <input
          onChange={(e) => {
            setName2(e.target.value);
          }}
          placeholder="animal 2"
          className="border-black border-2 rounded-lg p-2"
        ></input>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 font-semibold mt-2">
          <p>Name</p>
          <p>Habitat</p>
          <p>Diet</p>
          <p>Slogan</p>
          <p>Color</p>
          <p>Life-span</p>
          <p>Location</p>
        </div>
        <Card animal={animal1} />
        <Card animal={animal2} />
      </div>
      {/* <pre>{JSON.stringify(animal1, null, 2)}</pre> */}
    </div>
  );
}
