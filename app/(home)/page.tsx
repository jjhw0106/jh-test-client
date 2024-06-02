"use client"

import Image from "next/image";
import { API_URL } from "../constants";
import { getMenu, getTest } from "../api/nav";
import { useEffect } from "react";
import Navigation from "@/components/navigation";

export default function Home() {
  // await getTest(); // -> 안찍히는 이유를 모르겠다. next 종료 후 실행시 찍혀야 하지 않나?

  // useEffect 내부에서 비동기 사용을 위해서는 useEffect 내부에서 함수를 정의해야 한다.
  useEffect(() => {
    async function fetchData() {
      const result = await getMenu();
      console.log(result);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <main className="">
        <div className="text-green-600 bg-green-600 flex items-center">
          <p className="text-yellow-500"></p>
        </div>
      </main>
    </div>
  )
}
