"use client";

import { CiBookmark, CiInstagram } from "react-icons/ci";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  Box,
  Flex,
  Image,
  Separator,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaApple, FaFacebook, FaYoutube } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { IoBookmark, IoLogoGooglePlaystore } from "react-icons/io5";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { mainBlue } from "@/color";

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

const options = [
  "강남역",
  "선릉역",
  "삼성역",
  "성수역",
  "잠실역",
  "논현역",
  "선정릉역",
  "공덕역",
  "홍대입구역",
  "판교역",
];
const defaultOption = options[0];

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

  // 공고 포지션 렌더링에 사용되는 함수(스크롤 처리)
  const RenderPosition = ({
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
              return PositionDiv(index, false);
            })}
        </Stack>
      </Flex>
    );
  };

  const PositionDiv = (index: number, marked: boolean) => {
    const [isMarked, setIsMarked] = useState(marked);

    useEffect(() => {
      setIsMarked(marked);
    }, [marked]);

    return (
      <Stack direction="column" key={index}>
        <Box className="hover:scale-101 h-[114px] md:h-[170px]">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
            className="ease-in-out rounded-[20px] h-[114px] md:h-[170px] object-cover min-w-[152px] md:min-w-[250px]"
          />
          <Flex
            className="bg-linear-to-t from-opacity-100 to-black/40 rounded-t-[20px] min-w-[152px] md:min-w-[250px] relative top-[-110px] md:top-[-183px]"
            p="12px"
          >
            <Text fontSize={{ base: 12, md: 14 }} color="white">
              합격보상금 100만원
            </Text>

            <Spacer />

            {!isMarked && (
              <CiBookmark
                size="25px"
                color="white"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}

            {isMarked && (
              <IoBookmark
                size="25px"
                color={mainBlue}
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}
          </Flex>
        </Box>

        <Text fontSize={14} fontWeight="bold" mt={{ base: 0, md: 4 }}>
          안드로이드 개발자 채용
        </Text>
        <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
          데브컴퍼니
        </Text>
        <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
          경력 2년 이상
        </Text>
      </Stack>
    );
  };

  const RenderStationPosition = ({ stationList }: { stationList: any }) => {
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
      {/* 상단 이미지 버튼들 */}
      <Flex gap={12} mb={8} mt={20} justify="center">
        <Stack
          direction="column"
          alignItems="center"
          width="100px"
          height="100px"
          padding={2}
          className="hover:rounded-[15px] hover:bg-gray-100"
        >
          <Image src="/post.png" w="60px" />
          <Text fontSize={14} color="grey">
            채용공고
          </Text>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          width="100px"
          height="100px"
          padding={2}
          className="hover:rounded-[15px] hover:bg-gray-100"
        >
          <Image src="/document.png" w="60px" />
          <Text fontSize={14} color="grey">
            이력서 관리
          </Text>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          width="100px"
          height="100px"
          padding={2}
          className="hover:rounded-[15px] hover:bg-gray-100"
        >
          <Image src="/bookmark.png" w="60px" />
          <Text fontSize={14} color="grey">
            북마크
          </Text>
        </Stack>

        <Box className="hidden sm:block">
          <Stack
            direction="column"
            alignItems="center"
            width="100px"
            height="100px"
            padding={2}
            className="hover:rounded-[15px] hover:bg-gray-100"
          >
            <Image src="/career-path.png" w="60px" />
            <Text fontSize={14} color="grey">
              지원 현황
            </Text>
          </Stack>
        </Box>

        <Box className="hidden md:block">
          <Stack
            direction="column"
            alignItems="center"
            width="100px"
            height="100px"
            padding={2}
            className="hover:rounded-[15px] hover:bg-gray-100"
          >
            <Image src="/growth.png" w="60px" />
            <Text fontSize={14} color="grey">
              직군별 연봉
            </Text>
          </Stack>
        </Box>
      </Flex>

      {/* 합격 가능성이 높은 포지션 */}
      <Box ml="20px" mr="20px">
        {RenderPosition({
          ref: scrollRefPos,
          events: scrollResPosEvents,
          title: "합격 가능성이 높은 포지션",
        })}
      </Box>

      {/* 지금 주목할 소식 */}
      <Flex direction="column" mt={50} ml="20px" mr="20px">
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
                  className="hover:scale-101 ease-in-out h-[211px] md:h-[290px]"
                >
                  <img
                    className="rounded-[20px] min-w-[318px] md:min-w-[436px] h-[211px] md:h-[290px] object-cover "
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2645%2F9f7c3db0.thumb_1006_280.png&w=900&q=100"
                  />

                  <Box className="min-w-[318px] md:min-w-[436px] h-[211px] md:h-[290px] bottom-[211px] md:bottom-[290px] relative bg-linear-to-b from-opacity-100 to-black rounded-[20px]">
                    <Box ml={4} position="absolute" bottom="24px">
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
                  <Box
                    key={index}
                    className="hover:scale-101 ease-in-out h-[163px] md:h-[253px]"
                  >
                    <img
                      className="min-w-[218px] md:min-w-[338px] h-[163px] md:h-[253px] object-cover rounded-[20px]"
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftag-attractions%2F10537%2F2867e5e48c664eeda77f2840e1a47096.png&w=600&q=100"
                    />

                    <Box className="min-w-[218px] md:min-w-[338px] h-[74px] md:h-[86px] bottom-[74px] md:bottom-[86px] bg-white rounded-b-[20px] relative">
                      <Box pl={4} pt={2}>
                        <Text fontSize={18} fontWeight="bold">
                          인재 채용에 진심인 기업
                        </Text>
                        <Text fontSize={12} fontWeight="bold" color="grey">
                          적극 채용 중
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Stack>
        </Flex>
        <Box mt={50} />
        {/* 최근 본 포지션 */}
        {RenderPosition({
          ref: scrollRefRecent,
          events: scrollResRecentEvents,
          title: "최근 본 포지션",
        })}
        <Box mt={50} />
        <Flex direction="column">
          <Flex>
            <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
              출퇴근 걱정없는 역세권 포지션
            </Text>
            <Box w="145px" ml={4}>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </Box>
          </Flex>

          <Stack
            direction="row"
            gap={4}
            padding={1}
            className="space-x-3 overflow-x-scroll scrollbar-hide p-5 bg-amber-400"
            {...scrollResStationEvents}
            ref={scrollRefStation}
          >
            {RenderStationPosition({ stationList: dataList })}
          </Stack>
        </Flex>
        <Box mt={50} />
        {/* 적극 채용 중 포지션 어때요? */}
        {RenderPosition({
          ref: scrollRefNow,
          events: scrollResNowEvents,
          title: "적극 채용 중 포지션 어때요?",
        })}

        <Box mt={450} />

        {/* 푸터 영역 */}
        <Box
          bg="white"
          h={300}
          bottom={0}
          left={0}
          right={0}
          position="absolute"
        >
          <Separator />
          <Flex
            className="flex-col md:flex-row items-start md:items-center"
            p="30px"
          >
            <img src="/developer_logo_horizon.png" className="w-[150px]" />

            <Spacer />

            <Flex gap={5} mt={{ base: 0, sm: 2 }}>
              <Text fontSize={16} fontWeight="bold">
                기업소개
              </Text>
              <Text fontSize={16} fontWeight="bold">
                광고문의
              </Text>
              <Text fontSize={16} fontWeight="bold">
                고객센터
              </Text>
              <Text fontSize={16} fontWeight="bold">
                이용약관
              </Text>
              <Text fontSize={16} fontWeight="bold">
                블로그
              </Text>
              <Text fontSize={16} fontWeight="bold">
                개인정보 처리방침
              </Text>
            </Flex>
          </Flex>

          <Stack direction="column" mt="0px" pl="30px" pr="30px">
            <Text fontSize={14} color="grey">
              (주)디벨로퍼랩 | 대표이사 디벨로퍼
            </Text>
            <Text fontSize={14} color="grey">
              서울특별시 마포구 아현동 | 전화번호: 010-6464-2211
            </Text>
            <Text fontSize={14} color="grey">
              사업자등록번호: 111-11-11111 | 통신판매번호: 1111-서울-1111 |
              유료직업소개사업등록번호: (국내) 제1111-111111-11-1-11111호
            </Text>

            <Flex gap={4}>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                채용서비스 문의
              </Text>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                디벨로퍼스페이스 문의
              </Text>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                디벨로퍼긱스 문의
              </Text>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                프리온보딩 문의
              </Text>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                취업지원시스템 문의
              </Text>
              <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
                IR 문의
              </Text>
            </Flex>
          </Stack>

          <Separator mt="20px" />

          <Flex pl="30px" pt="20px" alignItems="center">
            <Text fontSize={14} fontWeight="bold" color="grey">
              © 2025 Developer Lab, Inc.
            </Text>
            <Spacer />

            <Flex gap="10px" pr="30px">
              <CiInstagram size="22px" />
              <FaFacebook size="22px" />
              <RxGithubLogo size="22px" />
              <FaYoutube size="22px" />
              <FaApple size="22px" />
              <IoLogoGooglePlaystore size="22px" />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
