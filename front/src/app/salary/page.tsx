"use client";

import { attrBorderGrey, mainBlue } from "@/color";
import { Footer } from "@/components/footer";
import { getRandomInt } from "@/util";
import {
  Text,
  Image,
  Flex,
  Box,
  NativeSelect,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { recruitmentMenuList } from "../global-data";
import { useState } from "react";

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

export default function SalaryPage() {
  const [firstType, setFirstType] = useState("dev");
  const [secondType, setSecondType] = useState<string | undefined>();
  const [yearType, setYearType] = useState("신입");

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
          titleFont: { size: 12, weight: "normal" },
          caretPadding: 10,
          caretSize: 0,
          displayColors: false,
          xAlign: "center",
          yAlign: "top",
          callbacks: {
            title: (context: any) => {
              return "만원";
              //   let min = context[0].raw[0];
              //   let max = context[0].raw[1];
              //   let avg = (min + max) / 2;
              //   return `최대연봉 ${toDollarString(
              //     max
              //   )}만원\n최소연봉 ${toDollarString(
              //     min
              //   )}만원\n평균연봉 ${toDollarString(avg)}만원`;
            },
            label: (context: any) => {
              return "";
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
          data: graphXLabels.map(() => getRandomInt(2800, 7500)),
          backgroundColor: "#20aa6d",
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
        key={index}
        src={src}
        w="48px"
        h="48px"
        border={attrBorderGrey}
        p="4px"
      />
    );
  };

  return (
    <Stack direction="column" bg="#f8f8f8">
      {/* 그래프 영역 */}
      <Flex bg="#25bd7a" h="470px" alignItems="center">
        <Spacer />
        <Box w="784px" h="392px">
          <FloatingColumnGraph />
        </Box>

        <Box h="392px" ml="20px" w="180px">
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

          <Text color="white" fontSize={16}>
            신입 디자인 예상 연봉
          </Text>

          <Flex>
            <Text color="white" fontSize={40} fontWeight="bold">
              3,124
            </Text>

            <Text color="white" fontSize={14} mt="32px" ml={2}>
              만원
            </Text>
          </Flex>

          <Text color="white" fontSize={16} mt="8px">
            * 예상 연봉 대비 4% 낮음
          </Text>
        </Box>

        <Spacer />
      </Flex>

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
              value={yearType}
              onChange={(e) => {
                let value = e.currentTarget.value;
                setYearType(value);
                console.log(value);
              }}
            >
              <option value="year" disabled>
                경력
              </option>

              {graphXLabels.map((v: string, index) => {
                return (
                  <option value={v} key={index}>
                    {v}
                  </option>
                );
              })}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <Box borderRight={attrBorderGrey} />

          <Box alignContent="center" pl="20px" pr="20px">
            <input className="outline-0" type="number" />
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

      <Box w="100%" p="50px" bg="white">
        <Text fontSize={36} fontWeight="bold" color="#258bf8">
          이제 밤새워 채용사이트 보지 마세요.
        </Text>

        <Text fontSize={14} mt={2}>
          간단 프로필을 등록하면, 기업의 채용담당자가 직접 면접을 제안합니다.
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

      <Box h={350} />
      <Footer />
    </Stack>
  );
}
