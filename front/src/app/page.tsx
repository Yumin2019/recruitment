"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const dataList = [
  {
    image: "/developer_logo.png",
    title: "React Native Developer",
    content:
      "React Native Developer with experience in mobile application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "Node.js Developer",
    content: "Node.js Developer with experience in backend development.",
  },
  {
    image: "/developer_logo.png",
    title: "Python Developer",
    content:
      "Python Developer with experience in data analysis and machine learning.",
  },
  {
    image: "/developer_logo.png",
    title: "Java Developer",
    content: "Java Developer with experience in backend development.",
  },
];

export default function Home() {
  // horizontal scrollbar
  const ref = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div>
      {/* 상단 탭바 */}
      <div className="flex bg-amber-600 absolute top-0 left-0 right-0 h-[56px] items-center p-[5px]">
        <img src="/developer_logo_horizon.png" className="h-full" />
        <div className="flex-1" />
        <div className="flex" style={{ fontSize: 32, gap: 5 }}>
          <CiSearch className="hover:bg-stone-50/50 rounded-full" />
          <IoIosNotificationsOutline className="hover:bg-stone-50/50 rounded-full" />
          <IoIosMenu className="hover:bg-stone-50/50 rounded-full" />
        </div>
      </div>

      <div className="mt-[56px]" />

      {/* 공고 이미지 가로 리스트 */}
      <div className="flex-col">
        <p className="text-sms text-xl font-medium text-black mb-[5px]">
          합격 가능성이 높은 포지션
        </p>
        <div
          className="flex max-w space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
          {...events}
          ref={ref}
        >
          {dataList &&
            dataList.map((v, index) => {
              return (
                // CSS는 정말 지랄 맞네... ;;
                <img
                  src={
                    // v.image
                    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
                  }
                  className="h-[150px]  hover:scale-101 ease-in-out duration-300 rounded-md border-1 border-black/30"
                />
                // <div className="bg-amber-800">

                //   ㄹㅇㄹㅁㅇㄴ
                // </div>
                // <div className="flex-col cursor-pointer" key={index}>

                //   // Developer
                //
              );
            })}
        </div>
      </div>

      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >  
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
      </footer> */}
    </div>
  );
}
