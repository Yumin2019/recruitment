"use client";

import { attrBorderGrey, mainBlue, mainGrey } from "@/color";
import { Footer } from "@/components/footer";
import {
  Text,
  Image,
  Flex,
  Box,
  NativeSelect,
  Spacer,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { recruitmentMenuList } from "../global-data";
import { useState } from "react";
import { toDollarString } from "@/util";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

const LogoData = [
  "/apple.png",
  "/google.png",
  "/microsoft.png",
  "/facebook.png",
  "/instagram.png",
  "/whatsapp.png",
  "/netflix.png",
  "/youtube.png",
  "/tiktok.png",
  "/twitter.png",
  "/linkedin.png",
  "/wordpress.png",
  "/discord.png",
  "/zoom.png",
];

const graphXLabels = [
  "신입",
  "1년",
  "2년",
  "3년",
  "4년",
  "5년",
  "6년",
  "7년",
  "8년",
  "9년",
  "10년",
];

const jobDataList = [
  {
    title: "구글",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10065%2Fll7kvtsqfthyugmo__1080_790.jpg&w=700&q=100",
    logoSrc: "/google.png",
    jobCount: 5,
  },
  {
    title: "애플",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10065%2Fll7kvtsqfthyugmo__1080_790.jpg&w=700&q=100",
    logoSrc: "/apple.png",
    jobCount: 10,
  },
  {
    title: "마이크로소프트",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10065%2Fll7kvtsqfthyugmo__1080_790.jpg&w=700&q=100",
    logoSrc: "/microsoft.png",
    jobCount: 24,
  },
  {
    title: "링크드인",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10065%2Fll7kvtsqfthyugmo__1080_790.jpg&w=700&q=100",
    logoSrc: "/linkedin.png",
    jobCount: 8,
  },
  {
    title: "메타",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10065%2Fll7kvtsqfthyugmo__1080_790.jpg&w=700&q=100",
    logoSrc: "/facebook.png",
    jobCount: 5,
  },
];

const PosiionDataList = [
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
  {
    title: "서비스개발본부 디자인팀 디자이너",
    company: "디니어",
    region: "서울, 한국",
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100",
  },
];

export default function SalaryPage() {
  const [firstType, setFirstType] = useState("dev");
  const [secondType, setSecondType] = useState<string | undefined>(
    "소프트웨어 엔지니어"
  );
  const [yearTypeIdx, setYearTypeIdx] = useState(0);
  const [inputText, setInputText] = useState("0");

  const FloatingColumnGraph = () => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: true,
          intersect: false,
          backgroundColor: "black",
          titleColor: "white",
          titleFont: { size: 12, weight: "bold" },
          caretPadding: 10,
          caretSize: 0,
          displayColors: false,
          xAlign: "center",
          yAlign: "top",
          callbacks: {
            label: (context: any) => {
              return `${context.formattedValue} 만원`;
            },
          },
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          border: { display: false },
          grid: {
            display: false,
          },
          ticks: {
            color: "black",
            maxRotation: 0,
            minRotation: 0,
            font: {
              size: 12,
            },
          },
        },
        y: {
          position: "left",
          ticks: {
            color: "black",
            font: {
              size: 12,
            },
          },
          min: 0,
          max: 8000,
        },
      },
    };

    const data = {
      labels: graphXLabels,
      datasets: [
        {
          data: recruitmentMenuList[firstType].salaryList,
          backgroundColor: function (context: any) {
            if (yearTypeIdx === context.dataIndex) {
              return "#9ce4ca";
            }
            return "#20aa6d";
          },
          borderRadius: 3,
          barPercentage: 0.2,
          categoryPercentage: 1.0,
        },
      ],
    };

    return <Bar data={data} options={options as any} />;
  };

  const LogoView = (src: string, index: number) => {
    return (
      <Image
        bg="white"
        key={index}
        src={src}
        w="48px"
        h="48px"
        border={attrBorderGrey}
        p="4px"
      />
    );
  };

  const CardView = (v: any, index: number) => {
    return (
      <Box
        key={index}
        border={attrBorderGrey}
        w="196px"
        height="271px"
        bg="white"
        className="hover:text-[#258bf8] overflow-hidden group"
      >
        <Image
          src={v.imageSrc}
          className="transition-transform duration-300 transform group-hover:scale-105"
        />
        <Box position="relative" top="-25px" left="16px">
          {LogoView(v.logoSrc, index)}
          <Text fontSize={16} fontWeight="semibold" mt="12px">
            {v.title}
          </Text>
          <Text color={mainGrey} fontSize={14}>
            {v.jobCount}개 포지션
          </Text>
        </Box>
      </Box>
    );
  };

  const ColumnView = (v: any, index: number) => {
    const [isMarked, setIsMarked] = useState(false);

    return (
      <Box key={index} position="relative">
        <Image
          borderRadius={4}
          className="w-[440px] h-[187px] lg:w-[240px]"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F14458%2Fqhrorhun13bsyqka__1080_790.jpg&w=700&q=100"
        />

        <Box position="absolute" top="8px" right="8px">
          {!isMarked && (
            <CiBookmark
              size="22px"
              color="white"
              onClick={() => {
                let value = !isMarked;
                setIsMarked(value);
              }}
            />
          )}

          {isMarked && (
            <IoBookmark
              size="22px"
              color={mainBlue}
              onClick={() => {
                let value = !isMarked;
                setIsMarked(value);
              }}
            />
          )}
        </Box>

        <Text fontSize={18} fontWeight="semibold" mt="12px">
          {v.title}
        </Text>
        <Text fontSize={14} fontWeight="semibold" mt="4px">
          {v.company}
        </Text>
        <Text fontSize={14} mt="4px" color="grey">
          {v.region}
        </Text>
        <Text fontSize={14} mt="6px">
          합격 보상금 100만원
        </Text>
      </Box>
    );
  };

  const GraphViewsWhenSM = () => {
    return (
      <>
        {/* 예상 연봉 */}
        <Box className="block lg:hidden absolute top-[390px] left-[20px]">
          <Text color="white" fontSize={14}>
            {yearTypeIdx === 0 ? "신입 " : `경력 ${yearTypeIdx}년 `}
            {`${secondType} 예상 연봉`}
          </Text>

          <Flex>
            <Text color="white" fontSize={28} fontWeight="bold">
              {toDollarString(
                recruitmentMenuList[firstType].salaryList[yearTypeIdx]
              )}
            </Text>

            <Text color="white" fontSize={14} mt="16px" ml={2}>
              만원
            </Text>
          </Flex>

          {inputText.length > 0 && inputText !== "0" && (
            <Text color="white" fontSize={15} mt="8px">
              {getPercentString()}
            </Text>
          )}
        </Box>

        {/* 그래프 상단에 분류 부분 */}
        <Box className="block lg:hidden absolute top-[20px] left-[20px]">
          <Flex>
            <Box
              borderRadius={4}
              p={2}
              bg="white"
              color="#25bd7a"
              fontWeight="semibold"
              textAlign="center"
              mb="12px"
              mr={3}
            >
              {recruitmentMenuList[firstType].title}
            </Box>

            {secondType && (
              <Box
                borderRadius={4}
                p={2}
                bg="white"
                color="#25bd7a"
                fontWeight="semibold"
                textAlign="center"
                mb="12px"
              >
                {secondType}
              </Box>
            )}
          </Flex>
        </Box>
      </>
    );
  };

  const PositionButton = () => {
    return (
      <Flex
        alignItems="center"
        mt="70px"
        border={attrBorderGrey}
        pt="8px"
        pb="8px"
        pl="16px"
        pr="16px"
        borderRadius="8px"
        className="hover:bg-gray-200/50"
      >
        <Spacer />
        <Text fontSize={14} fontWeight="semibold" mr="4px">
          포지션 전체보기
        </Text>
        <MdOutlineKeyboardArrowRight size="22px" />
        <Spacer />
      </Flex>
    );
  };

  const getPercentString = () => {
    let salary = recruitmentMenuList[firstType].salaryList[yearTypeIdx];
    let percent = Number(inputText) / salary - 1.0;
    return `* 예상 연봉 대비 ${Math.abs(percent * 100).toFixed(0)}% ${
      percent > 0 ? "높음" : "낮음"
    }`;
  };

  return (
    <Stack direction="column" bg="#f8f8f8" position="relative">
      {/* 그래프 영역 */}
      <Flex
        bg="#25bd7a"
        w="100%"
        className="h-[530px] lg:h-[470px] items-start lg:items-center"
      >
        <Spacer />
        <Box
          className="w-[95%] lg:w-[784px] h-[300px] lg:h-[392px]"
          mt={{ base: "75px", lg: "0px" }}
        >
          <FloatingColumnGraph />
        </Box>

        {/* 우측 뷰 영역 */}
        <Box h="392px" ml="20px" w="180px" className="hidden lg:block">
          {/* 1차 분류 */}
          <Flex>
            <Box
              borderRadius={4}
              p={2}
              bg="white"
              color="#25bd7a"
              fontWeight="semibold"
              textAlign="center"
              mb="12px"
            >
              {recruitmentMenuList[firstType].title}
            </Box>
          </Flex>

          {/* 2차 분류 */}
          {secondType && (
            <Flex>
              <Box
                borderRadius={4}
                p={2}
                bg="white"
                color="#25bd7a"
                fontWeight="semibold"
                textAlign="center"
                mb="12px"
              >
                {secondType}
              </Box>
            </Flex>
          )}

          {/* 예상 연봉 */}
          <Text color="white" fontSize={16}>
            {yearTypeIdx === 0 ? "신입 " : `경력 ${yearTypeIdx}년 `}
            {`${secondType} 예상 연봉`}
          </Text>

          <Flex>
            <Text color="white" fontSize={40} fontWeight="bold">
              {toDollarString(
                recruitmentMenuList[firstType].salaryList[yearTypeIdx]
              )}
            </Text>

            <Text color="white" fontSize={14} mt="32px" ml={2}>
              만원
            </Text>
          </Flex>

          {inputText.length > 0 && inputText !== "0" && (
            <Text color="white" fontSize={16} mt="8px">
              {getPercentString()}
            </Text>
          )}
        </Box>

        <Spacer />
      </Flex>

      <GraphViewsWhenSM />

      {/* 그래프 드롭다운 메뉴(1차 분류, 2차 분류, 경력 연수, 인풋) */}
      <Box position="relative" top="-30px" alignSelf="center">
        <Flex
          bg="white"
          border={attrBorderGrey}
          mr="30px"
          ml="30px"
          boxShadow="sm"
        >
          <NativeSelect.Root size="md" variant="plain">
            <NativeSelect.Field
              outline="none"
              onChange={(e) => {
                let value = e.currentTarget.value;
                setFirstType(value);

                // 1차 그룹을 바꾸는 경우에, 2차 그룹 처음값으로 설정한다.
                let secondValue = recruitmentMenuList[value].list[0];
                setSecondType(secondValue);
                console.log(value, secondValue);
              }}
            >
              <option value="job" disabled>
                직군
              </option>

              {Object.entries(recruitmentMenuList).map((v: any, index) => {
                if (index === 0) return null;

                return (
                  <option value={v[0]} key={index}>
                    {v[1].title}
                  </option>
                );
              })}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <Box borderRight={attrBorderGrey} />

          <NativeSelect.Root size="md" variant="plain">
            <NativeSelect.Field
              outline="none"
              value={secondType}
              onChange={(e) => {
                let value = e.currentTarget.value;
                console.log(value);
                setSecondType(value);
              }}
            >
              <option value="job" disabled>
                직군
              </option>

              {recruitmentMenuList[firstType].list.map(
                (v: string, index: number) => {
                  return (
                    <option value={v} key={index}>
                      {v}
                    </option>
                  );
                }
              )}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <Box borderRight={attrBorderGrey} />

          <NativeSelect.Root size="md" variant="plain" outlineWidth={0}>
            <NativeSelect.Field
              outline="none"
              value={yearTypeIdx}
              onChange={(e) => {
                let value = e.currentTarget.value;
                setYearTypeIdx(Number(value));
                console.log(value);
              }}
            >
              <option value="year" disabled>
                경력
              </option>

              {graphXLabels.map((v: string, index) => {
                return (
                  <option value={index} key={index}>
                    {v}
                  </option>
                );
              })}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <Box borderRight={attrBorderGrey} />

          <Box alignContent="center" pl="20px" pr="20px">
            <input
              className="outline-0"
              type="number"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </Box>

          <Box w="200px" alignSelf="center">
            <Text fontSize={15} color="#bcbcbc">
              만원
            </Text>
          </Box>
        </Flex>

        <Text fontSize={14} color="#bfbfbf" mt={4} ml="30px">
          * 이 데이터는 채용 정보에 포함된 직무 별 요구 경력(최저, 최대)과
          연봉(최저, 최대)을 바탕으로 추정한 예상 연봉 데이터 입니다.
        </Text>
      </Box>

      <Box alignSelf="center">
        <Box className="hidden lg:block">
          <Box p="50px" bg="white">
            <Text fontSize={36} fontWeight="bold" color="#258bf8">
              이제 밤새워 채용사이트 보지 마세요.
            </Text>

            <Text fontSize={14} mt={2}>
              간단 프로필을 등록하면, 기업의 채용담당자가 직접 면접을
              제안합니다.
            </Text>

            <Flex gapX={2} mt={8}>
              {LogoData.map((v: string, index: number) => {
                return LogoView(v, index);
              })}

              <Box
                w="48px"
                h="48px"
                border={attrBorderGrey}
                bg="#f8f8fa"
                p="4px"
                color="grey"
                fontSize="11px"
                fontWeight="bold"
                alignContent="center"
              >
                +10214
              </Box>
            </Flex>

            <Box
              mt={8}
              bg={mainBlue}
              color="white"
              fontSize={16}
              fontWeight="bold"
              textAlign="center"
              p="12px"
              borderRadius="24px"
            >
              시작하기
            </Box>
          </Box>
        </Box>

        {/* 채용 공고 리스트 */}
        <Box className="hidden lg:block">
          <Text fontSize={22} fontWeight="semibold" mt="40px">
            적극 채용 중인 회사
          </Text>

          <Flex gapX="16px" mt="12px">
            {jobDataList.map((v, index) => {
              return CardView(v, index);
            })}
          </Flex>
        </Box>

        <Text
          fontSize={22}
          fontWeight="semibold"
          mt={{ base: "0px", lg: "60px" }}
        >
          연봉 업그레이드 포지션
        </Text>

        <SimpleGrid
          columns={{ base: 2, lg: 4 }}
          gapX="20px"
          gapY="32px"
          mt="12px"
        >
          {PosiionDataList.map((v, index) => {
            return ColumnView(v, index);
          })}
        </SimpleGrid>

        <Box className="hidden lg:block">
          <Flex>
            <Spacer />
            <PositionButton />
            <Spacer />
          </Flex>
        </Box>

        {/* 버튼 화면 작을 때 */}
        <Box className="block lg:hidden">
          <PositionButton />
        </Box>
      </Box>

      <Box h={380} />
      <Footer />
    </Stack>
  );
}
