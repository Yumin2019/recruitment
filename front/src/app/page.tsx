"use client";

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Box, Card, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";

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
  const scrollRefPos = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResPosEvents } = useDraggable(scrollRefPos, {
    applyRubberBandEffect: true,
  });

  const scrollRefNews = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResNewsEvents } = useDraggable(scrollRefNews, {
    applyRubberBandEffect: true,
  });

  return (
    <>
      <Box>
        {/* 상단 탭바 */}
        <Flex backgroundColor={"red"} height={59} padding="5px">
          <Image height="100%" src="/developer_logo_horizon.png" />
          <Spacer />
          <Flex alignItems="center" gap={1}>
            <CiSearch size={30} className="hover:bg-stone-50/50 rounded-full" />
            <IoIosNotificationsOutline
              size={30}
              className="hover:bg-stone-50/50 rounded-full"
            />
            <IoIosMenu
              size={30}
              className="hover:bg-stone-50/50 rounded-full"
            />
          </Flex>
        </Flex>
      </Box>

      {/* 합격 가능성이 높은 포지션 */}
      <Flex direction="column">
        <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
          합격 가능성이 높은 포지션
        </Text>
        <Stack
          direction="row"
          gap={4}
          padding={1}
          className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
          {...scrollResPosEvents}
          ref={scrollRefPos}
        >
          {dataList &&
            dataList.map((v, index) => {
              return (
                <Stack direction="column" key={index}>
                  <img
                    style={{ borderRadius: "20px" }}
                    width={250}
                    height={170}
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
                  />

                  <Text fontSize={14} fontWeight="bold">
                    안드로이드 개발자 채용
                  </Text>
                  <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
                    데브컴퍼니
                  </Text>
                </Stack>
              );
            })}
        </Stack>
      </Flex>

      {/* 지금 주목할 소식 */}
      <Flex direction="column" mt={50}>
        <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
          지금 주목할 소식
        </Text>
        <Stack
          direction="row"
          gap={4}
          padding={1}
          className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
          {...scrollResNewsEvents}
          ref={scrollRefNews}
        >
          {dataList &&
            dataList.map((v, index) => {
              return (
                <Box key={index} height={"290px"}>
                  <img
                    style={{
                      borderRadius: "20px",
                      minWidth: "430px",
                    }}
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2645%2F9f7c3db0.thumb_1006_280.png&w=900&q=100"
                  />

                  <Box className="bg-linear-to-b from-opacity-100 to-black w-[430px] h-[145px] relative top-[-145px] rounded-[20px]">
                    <Box ml={4} position="relative" top="70px">
                      <Text fontSize={20} color="white" fontWeight="bold">
                        111퍼센트 개발자 채용
                      </Text>
                      <Text fontSize={12} fontWeight="bold" color="white">
                        재밌는 게임을 만듭니다.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Stack>
      </Flex>
    </>

    /* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
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
      </footer> */
    // </div>
  );
}
