"use client";

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";
import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  Box,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

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
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
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

  const scrollRefTheme = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResThemeEvents } = useDraggable(scrollRefTheme, {
    applyRubberBandEffect: true,
  });

  const scrollRefRecent = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResRecentEvents } = useDraggable(scrollRefRecent, {
    applyRubberBandEffect: true,
  });

  const scrollRefStation = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResStationEvents } = useDraggable(scrollRefStation, {
    applyRubberBandEffect: true,
  });

  const scrollRefNow = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResNowEvents } = useDraggable(scrollRefNow, {
    applyRubberBandEffect: true,
  });

  const renderPosition = ({
    ref,
    events,
    title,
  }: {
    ref: React.MutableRefObject<HTMLInputElement>;
    events: any;
    title: string;
  }) => {
    return (
      <Flex direction="column">
        <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
          {title}
        </Text>
        <Stack
          direction="row"
          gap={4}
          padding={1}
          className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
          {...events}
          ref={ref}
        >
          {dataList &&
            dataList.map((v, index) => {
              return (
                <Stack direction="column" key={index}>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
                    className="hover:scale-101 ease-in-out rounded-[20px] h-[170px] object-cover min-w-[250px]"
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
    );
  };

  const renderStationPosition = ({ stationList }: { stationList: any }) => {
    if (stationList.length === 0 || !stationList) {
      return <div></div>;
    }

    let gridCount = Math.floor(stationList.length / 6);
    let remain = stationList.length % 6;
    let gridList = [];
    if (remain > 0) ++gridCount;

    console.log(gridCount, remain);
    for (let gridIdx = 0; gridIdx < gridCount; gridIdx++) {
      // 내부 목록을 생성한다.
      let children = [];
      let childCount = 6;
      if (gridIdx === gridCount - 1 && remain > 0) childCount = remain;

      for (let k = 0; k < childCount; k++) {
        children.push(
          <Stack direction="row" key={gridIdx * 6 + k}>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
              className="hover:scale-101 ease-in-out rounded-[10px] object-cover max-h-[90px] w-[120px]"
            />

            <Stack direction="column" alignItems="start">
              <Text fontSize={14} fontWeight="bold">
                {`Software Engineer (Frontend) 2년 이상 주니어`}
              </Text>
              <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
                데브컴퍼니
              </Text>
              <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
                서울 마포구 (경력 2~6년)
              </Text>
            </Stack>
          </Stack>
        );
      }

      // 만든 내부 목록을 토대로 외부 Gridf로 감싼다.
      gridList.push(
        <SimpleGrid
          columns={2}
          gap="20px"
          key={gridIdx}
          minWidth="100%"
          alignContent="baseline"
        >
          {children}
        </SimpleGrid>
      );
    }

    return gridList;
  };

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
      {renderPosition({
        ref: scrollRefPos,
        events: scrollResPosEvents,
        title: "합격 가능성이 높은 포지션",
      })}

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
                <Box
                  key={index}
                  className="hover:scale-101 ease-in-out h-[290px]"
                >
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

        <Box mt={50} />

        {/* 테마로 살펴보는 회사/포지션 */}
        <Flex direction="column">
          <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
            테마로 살펴보는 회사/포지션
          </Text>
          <Stack
            direction="row"
            gap={4}
            padding={1}
            className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
            {...scrollResThemeEvents}
            ref={scrollRefTheme}
          >
            {dataList &&
              dataList.map((v, index) => {
                return (
                  <Stack
                    direction="column"
                    key={index}
                    borderRadius="20px"
                    border="1px solid grey"
                    className="hover:scale-101 ease-in-out"
                  >
                    <img
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        minWidth: "338px",
                        height: "172px",
                        objectFit: "cover",
                      }}
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftag-attractions%2F10537%2F2867e5e48c664eeda77f2840e1a47096.png&w=600&q=100"
                    />

                    <Box
                      height="86px"
                      className="bg-white rounded-b-[20px]"
                      paddingLeft="20px"
                      alignContent="center"
                    >
                      <Text fontSize={18} fontWeight="bold">
                        인재 채용에 진심인 기업
                      </Text>
                      <Text fontSize={12} fontWeight="bold" color="grey">
                        적극 채용 중
                      </Text>
                    </Box>
                  </Stack>
                );
              })}
          </Stack>
        </Flex>

        <Box mt={50} />
        {/* 최근 본 포지션 */}
        {renderPosition({
          ref: scrollRefRecent,
          events: scrollResRecentEvents,
          title: "최근 본 포지션",
        })}
        <Box mt={50} />

        <Flex direction="column">
          <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
            출퇴근 걱정없는 역세권 포지션
          </Text>
          <Stack
            direction="row"
            gap={4}
            padding={1}
            className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
            {...scrollResStationEvents}
            ref={scrollRefStation}
          >
            {renderStationPosition({ stationList: dataList })}
          </Stack>
        </Flex>

        <Box mt={50} />
        {/* 적극 채용 중 포지션 어때요? */}
        {renderPosition({
          ref: scrollRefNow,
          events: scrollResNowEvents,
          title: "적극 채용 중 포지션 어때요?",
        })}

        <Box mt={500} />
      </Flex>
    </>
  );
}
