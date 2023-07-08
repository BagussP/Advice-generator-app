import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const jsonData = await response.json();
      setData(jsonData.slip);
      console.log(typeof data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleClick = () => {
    // Memanggil API lagi saat tombol diklik
    fetchData();
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-Dark-Blue w-screen h-screen">
      <div className="flex flex-col justify-evenly items-center bg-Dark-Grayish-Blue text-Light-Cyan w-2/5 h-1/2 text-center rounded-2xl max-lg:w-3/5 max-md:w-4/5">
        <p className="text-Neo-Green text-sm tracking-[0.3em] font-semibold">
          ADVICE #{data.id}
        </p>
        <h1 className="text-2xl font-semibold w-4/5">"{data.advice}"</h1>
        <Image
          src="./pattern-divider-desktop.svg"
          width={500}
          height={500}
          alt="divider"
        ></Image>
      </div>
      <button className="bg-Neo-Green flex justify-center items-center w-14 h-14 rounded-full -m-7 active:shadow-3xl" onClick={handleClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}
