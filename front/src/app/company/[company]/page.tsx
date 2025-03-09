"use client";

import { Footer } from "@/components/footer";
import { NaverMap } from "@/components/naver-map";
import { getRandomInt, initMap, successToast, toDollarString } from "@/util";
import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Separator,
  SimpleGrid,
  Spacer,
  Stack,
  Table,
  Tabs,
  Text,
  Image,
  Dialog,
} from "@chakra-ui/react";
import { RenderTagList } from "@/components/tag-list";
import {
  attrBorderGrey2,
  borderGrey,
  graphGrey,
  mainBlue,
  mainGrey,
  textGrey,
  textGrey2,
} from "@/color";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Chart, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { useRouter } from "next/navigation";
ChartJS.register(...registerables, ChartDataLabels, annotationPlugin);

const tableData = [
  { name: "표준산업분류", value: "게임 소프트웨어 개발 및 공급업" },
  { name: "연혁", value: "3년 (2022년 설립)" },
  { name: "NTS분류", value: "-" },
  { name: "매출액", value: "-" },
  { name: "기업유형", value: "주식회사" },
  { name: "평균연봉", value: "5,000만원" },
  { name: "대표자명", value: "김유민" },
  { name: "홈페이지", value: "-" },
  { name: "고용보험 사업장 수", value: "1개" },
  { name: "고용보험 가입 사원수", value: "3명" },
  { name: "통신판매관리번호", value: "2022-서울강남-2222" },
  { name: "국민연금 가입 사원수", value: "9명" },
  { name: "퇴사/입사 (1년)", value: "0명 / 2명" },
];

const postionDataList: any[] = [
  {
    department: "개발",
    title: "Flutter 개발자",
    isRecommended: true,
  },
  {
    department: "개발",
    title: "백엔드 개발 팀장",
    isRecommended: true,
  },
  {
    department: "디자인",
    title: "3D 아바타 디자이너",
    isRecommended: false,
  },
  {
    department: "기획자",
    title: "게임 기획자",
    isRecommended: false,
  },
  {
    department: "인사",
    title: "인사관리자",
    isRecommended: false,
  },
];

const LineGraph = () => {
  // 10달에 해당하는 라벨을 생성한다. format: 2025-01
  const labels: string[] = [];
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 11);

  for (let n = 0; n < 10; n++) {
    let year = startDate.toLocaleString("en-US", { year: "numeric" });
    let month = startDate.toLocaleString("en-US", { month: "2-digit" });
    labels.push(`${year}.${month}`);
    startDate.setMonth(startDate.getMonth() + 1);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
      // https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-callback
      tooltip: {
        enabled: true,
        intersect: false,
        backgroundColor: "black",
        titleColor: "white",
        titleFont: { size: 12, weight: "bold" },
        bodyColor: "white",
        bodyFont: { size: 12 },
        caretPadding: 10,
        caretSize: 0,
        displayColors: false,
        xAlign: "center",
        yAlign: "top",
        callbacks: {
          title: (context: any) => {
            return `${context[0].formattedValue}만원`;
          },
          label: (context: any) => {
            return context.label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
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
          callback: function (value: any, index: any, ticks: any) {
            if (index % 3 == 0) {
              return `${labels[index]}`;
            }
            return "";
          },
        },
      },
      y: {
        display: false,
        min: 0,
        max: 1000,
      },
    },
  };

  function getGradient(ctx: any, chartArea: any) {
    let gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0.01, "rgba(92, 132, 255, 0.01)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

    return gradient;
  }

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => getRandomInt(200, 350)),
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          // This case happens on initial chart load
          if (!chartArea) return;
          return getGradient(ctx, chartArea);
        },
        fill: true,
        borderColor: "#5c84ff",
        pointRadius: 3.5,
        pointBorderColor: "#5c84ff",
        pointBackgroundColor: "#5c84ff",
        pointHoverBackgroundColor: "#5c84ff",
        pointHoverBorderColor: "#5c84ff",
      },
    ],
  };

  return <Line data={data} options={options as any} />;
};

const ColumnGraph = (min: number, max: number, isSalary: boolean) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#000000",
        anchor: "end",
        align: "top",
        offset: 0,
        formatter: (value: any) => {
          return isSalary ? toDollarString(value) : `${value}년`;
        },
        font: {
          weight: "bold",
          size: 13,
        },
      },
      tooltip: {
        enabled: false,
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
      },
      y: {
        display: false,
        min: 0,
        max: isSalary ? 10000 : 15,
      },
    },
  };

  const labels = ["디벨로퍼랩", "업계 평균", "전체 평균"];
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => getRandomInt(min, max)),
        backgroundColor: ["#5c84ff", graphGrey, graphGrey],
        borderRadius: 3,
        barPercentage: isSalary ? 0.44 : 0.15,
        categoryPercentage: 1.0,
      },
    ],
  };

  return <Bar data={data} options={options as any} />;
};

export default function CompanyPage() {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isPosExpanded, setIsPosExpanded] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    initMap(37.3595704, 127.105399);
  }, []);

  const PositionContainer = (
    department: string,
    title: string,
    isRecommended: boolean
  ) => {
    const [isMarked, setIsMarked] = useState(false);

    return (
      <Box border={attrBorderGrey2} borderRadius={8} p={5}>
        <Flex alignItems="center">
          <Box>
            <Flex alignItems="center" gapX={1}>
              <Text fontSize={14} color={mainBlue}>
                {department}
              </Text>
              {isRecommended && (
                <Badge colorPalette="blue" color={mainBlue} size="xs">
                  추천
                </Badge>
              )}
            </Flex>

            <Text fontSize={14} fontWeight="semibold" mt="2px" mb="2px">
              {title}
            </Text>
            <Flex mt="2px">
              <Text fontSize={14} color="grey">
                서울 마포구
              </Text>

              <Text ml="12px" fontSize={14} color="grey">
                경력 2-5년
              </Text>

              <Text ml="12px" fontSize={14} color="grey">
                상시
              </Text>
            </Flex>
          </Box>

          <Spacer />

          {!isMarked && (
            <CiBookmark
              size="22px"
              color="grey"
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
        </Flex>
      </Box>
    );
  };

  const MiddleViews = () => {
    return (
      <Flex gapX={8} alignItems="flex-start" mt="60px">
        <Box flex={6}>
          <InnerPage />
        </Box>
        <Box flex={3} className="sticky top-[80px] hidden lg:block">
          <Box border={attrBorderGrey2} borderRadius={10} p={4}>
            <Flex>
              <Text fontSize={14}>기업 팔로우하면 100포인트 지급!</Text>
              <Text fontSize={13} color={textGrey2} ml={1}>
                (1일 1회)
              </Text>
            </Flex>

            <Text fontSize={13} fontWeight="light">
              {isFollowing
                ? "새로운 포지션이 등록되면 알림을 보내드려요."
                : "관심 기업으로 등록하고 채용 알림도 받아 보세요."}
            </Text>
          </Box>

          <FollowingButton />
        </Box>
      </Flex>
    );
  };

  const ExpSalaryGraph = (isFresh: boolean) => {
    return (
      <Box border={attrBorderGrey2} borderRadius={12} p={5}>
        <Text fontSize={14} color="grey" mr={1}>
          {isFresh ? "신입 예상연봉" : "경력 예상연봉"}
        </Text>

        <Box h="150px" mb={6} ml={2} mr={2} mt={6}>
          {FloatingColumnGraph(isFresh)}
        </Box>

        {SalaryPlusButtonWithDialog(
          <Center>
            <Button
              size="xs"
              variant="outline"
              borderRadius={5}
              fontWeight="bold"
            >
              자세히 보기
            </Button>
          </Center>,
          isFresh
        )}
      </Box>
    );
  };

  const AvgSalaryGraph = (isThisYear: boolean) => {
    const [isKookmin, setIsKookmin] = useState(true);

    return (
      <Box border={attrBorderGrey2} borderRadius={12} p={5}>
        <Flex alignItems="center">
          <Text fontSize={14} color="grey" mr={1}>
            {isThisYear ? "올해 입사자 평균연봉" : "평균연봉"}
          </Text>

          {isThisYear &&
            InfoDialog(
              <IoMdInformationCircle color={borderGrey} size={16} />,
              <Text fontSize={16}>
                당해년도에 입사한 신입/경력직을 모두 포함한 평균연봉입니다.
                국민연금은 추정값을 제공하며, 금감원에 대해서는 해당 정보를
                제공하지 않습니다.
              </Text>,
              "올해 입사자 평균연봉"
            )}
        </Flex>

        <Flex mt="2px" mb={3}>
          <Text fontSize={15} fontWeight="semibold">
            5,032만원
          </Text>
          <Spacer />
          <Text color={mainBlue} fontSize={15}>
            상위 4%
          </Text>
        </Flex>
        <Separator size="xs" />

        <Box h="150px" mb={4} ml={8} mr={8}>
          {ColumnGraph(2000, 4000, true)}
        </Box>

        <Separator size="xs" />
        <Flex mt={4} alignItems="center">
          <Text fontSize={14} color="grey">
            출처
          </Text>

          <Spacer />

          {!isThisYear && (
            <Text
              fontSize={13}
              className="hover:bg-gray-100 hover:text-gray-800 text-gray-500 text-center"
              p="4px"
              borderRadius={4}
              w={50}
              backgroundColor={!isKookmin ? "#f3f4f6" : undefined}
              color={!isKookmin ? "#1e2939" : undefined}
              onClick={() => {
                setIsKookmin(false);
              }}
            >
              금감원
            </Text>
          )}

          <Text
            ml={1}
            fontSize={13}
            className="hover:bg-gray-100 hover:text-gray-800 text-gray-500 text-center"
            p="4px"
            borderRadius={4}
            backgroundColor={isKookmin ? "#f3f4f6" : undefined}
            color={isKookmin ? "#1e2939" : undefined}
            onClick={() => {
              setIsKookmin(true);
            }}
          >
            국민연금
          </Text>
        </Flex>
      </Box>
    );
  };

  const PopulationGraph = () => {
    const [isKookmin, setIsKookmin] = useState(true);

    return (
      <Box border={attrBorderGrey2} borderRadius={12} p={5} mt={2}>
        <Text fontSize={14} color="grey" mr={1}>
          인원
        </Text>

        <Flex mt="2px" mb={3}>
          <Text fontSize={15} fontWeight="semibold">
            25명
          </Text>
          <Spacer />
          <Text color={mainBlue} fontSize={15}>
            상위 50%
          </Text>
        </Flex>

        <Separator size="xs" />
        <Box h="240px" mb="55px" ml={8} mr={8}>
          <Flex mt={4} mb={3}>
            <Flex fontSize={12} alignItems="center">
              <Box w="9px" h="9px" bg="#3385ff" borderRadius={2} mr={1} />총
              인원
            </Flex>

            <Spacer />
            <Flex fontSize={12} alignItems="center" mr={3}>
              <Box w="9px" h="9px" bg="#69a5ff" borderRadius={2} mr={1} />
              입사
            </Flex>
            <Flex fontSize={12} alignItems="center">
              <Box w="9px" h="9px" bg="#c9defe" borderRadius={2} mr={1} />
              퇴사
            </Flex>
          </Flex>

          <LineColumnGraph />
        </Box>
        <Separator size="xs" />

        <Flex mt={4} alignItems="center">
          <Text fontSize={14} color="grey">
            출처
          </Text>

          <Spacer />

          <Text
            fontSize={13}
            className="hover:bg-gray-100 hover:text-gray-800 text-gray-500 text-center"
            p="4px"
            borderRadius={4}
            w={50}
            backgroundColor={!isKookmin ? "#f3f4f6" : undefined}
            color={!isKookmin ? "#1e2939" : undefined}
            onClick={() => {
              setIsKookmin(false);
            }}
          >
            금감원
          </Text>

          <Text
            ml={1}
            fontSize={13}
            className="hover:bg-gray-100 hover:text-gray-800 text-gray-500 text-center"
            p="4px"
            borderRadius={4}
            backgroundColor={isKookmin ? "#f3f4f6" : undefined}
            color={isKookmin ? "#1e2939" : undefined}
            onClick={() => {
              setIsKookmin(true);
            }}
          >
            국민연금
          </Text>
        </Flex>
      </Box>
    );
  };

  const SalaryPlusButtonWithDialog = (children: any, isFresh: boolean) => {
    const salaryList = [
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
      { year: 2020, salary: 5000 },
    ];

    return (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onOpenChange={(v) => {}}
        size="xs"
      >
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle textAlign="center">
              {isFresh ? "신입 예상연봉" : "경력 예상연봉"}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Tabs.Root
              defaultValue="classA"
              variant="enclosed"
              fitted
              size="sm"
            >
              <Tabs.List>
                <Tabs.Trigger value="classA">
                  {isFresh ? "고졸" : "2~4년"}
                </Tabs.Trigger>
                <Tabs.Trigger value="classB">
                  {isFresh ? "초대졸" : "5~7년"}
                </Tabs.Trigger>
                <Tabs.Trigger value="classC">
                  {isFresh ? "대졸" : "8~10년"}
                </Tabs.Trigger>
                <Tabs.Trigger value="classD">
                  {isFresh ? "대학원졸" : "10년 초과"}
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            <Flex border={attrBorderGrey2} borderRadius={8} p={4} mt={4} mb={4}>
              <Box textAlign="center" flex={1}>
                <Text fontSize={12} color={textGrey}>
                  예상연봉
                </Text>
                <Text fontSize={16} fontWeight="bold" color="#848487">
                  정보없음
                </Text>
              </Box>
              <Box borderLeft={attrBorderGrey2} />
              <Box textAlign="center" flex={1}>
                <Text fontSize={12} color={textGrey}>
                  머신러닝 추정
                </Text>
                <Text fontSize={16} fontWeight="bold" color="#848487">
                  정보없음
                </Text>
              </Box>
            </Flex>

            <Text fontSize={13} mb={2}>
              제보 내역
            </Text>
            <Table.ScrollArea rounded="md" height="270px">
              <Table.Root size="sm" stickyHeader>
                <Table.Header>
                  <Table.Row bg="#f4f4f4">
                    <Table.ColumnHeader color="grey" fontSize={13}>
                      기준연도
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="grey" fontSize={13}>
                      제보연봉
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {salaryList.map((v, index) => (
                    <Table.Row key={index}>
                      <Table.Cell fontSize={13}>{v.year}</Table.Cell>
                      <Table.Cell fontSize={13}>
                        {toDollarString(v.salary)}만원
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>

            <Button
              variant="outline"
              size="sm"
              color={mainBlue}
              w="100%"
              mt={2}
            >
              연봉 제보하기
            </Button>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    );
  };

  const InfoDialog = (button: any, children: any, title: string) => {
    return (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onOpenChange={(v) => {}}
        size="xs"
      >
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle textAlign="left" fontSize={20}>
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            {children}

            <Dialog.ActionTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                w="100%"
                borderRadius={10}
                mt="30px"
              >
                확인
              </Button>
            </Dialog.ActionTrigger>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    );
  };

  const FloatingColumnGraph = (isFresh: boolean) => {
    function middleValue(ctx: any, index: number) {
      let dataset = ctx.chart.data.datasets[0];
      let avg = (dataset.data[index][0] + dataset.data[index][1]) / 2;
      return avg.toFixed(0);
    }

    function getAnnotation(index: number) {
      return {
        borderColor: "#0066ff",
        borderWidth: 3,
        xMax: index + 0.25,
        xMin: index - 0.25,
        yMax: (ctx: any) => middleValue(ctx, index),
        yMin: (ctx: any) => middleValue(ctx, index),
      };
    }

    let ann1 = getAnnotation(0);
    let ann2 = getAnnotation(1);
    let ann3 = getAnnotation(2);
    let ann4 = getAnnotation(3);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        annotation: {
          annotations: {
            ann1,
            ann2,
            ann3,
            ann4,
          },
        },
        datalabels: {
          anchor: "end",
          align: "top",
          offset: 0,
          formatter: (value: any) => {
            let min = (value[0] + value[1]) / 2;
            return `± ${toDollarString(min.toFixed(0))}`;
          },
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#0066ff",
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
              let min = context[0].raw[0];
              let max = context[0].raw[1];
              let avg = (min + max) / 2;
              return `최대연봉 ${toDollarString(
                max
              )}만원\n최소연봉 ${toDollarString(
                min
              )}만원\n평균연봉 ${toDollarString(avg)}만원`;
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
            padding: -2,
            maxRotation: 0,
            minRotation: 0,
            font: {
              size: 11,
            },
          },
        },
        y: {
          position: "left",
          grid: {
            color: "#f4f4f5",
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: "grey",
            callback: function (value: any, index: any, ticks: any) {
              let data = value / 1000;
              if (data < 10) return `${data}천`;
              return `1억`;
            },
          },
          min: 2000,
          max: 10000,
        },
      },
    };

    const labels = isFresh
      ? ["고졸", "초대졸", "대졸", "대학원졸"]
      : ["2-4년", "5-7년", "8-10년", "10년 초과"];

    const data = {
      labels,
      datasets: [
        {
          data: labels.map(() => [
            getRandomInt(2000, 4500),
            getRandomInt(5000, 9000),
          ]),
          backgroundColor: graphGrey,
          borderRadius: 3,
          barPercentage: 0.5,
          categoryPercentage: 1.0,
        },
      ],
    };

    return <Bar data={data} options={options as any} />;
  };

  const LineColumnGraph = () => {
    // 10달에 해당하는 라벨을 생성한다. format: 2025-01
    const dateLabels: string[] = [];
    let startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 11);

    for (let n = 0; n < 10; n++) {
      let year = startDate.toLocaleString("en-US", { year: "numeric" });
      let month = startDate.toLocaleString("en-US", { month: "2-digit" });
      dateLabels.push(`${year}.${month}`);
      startDate.setMonth(startDate.getMonth() + 1);
    }

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
          mode: "index",
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
              return `총 인원 ${context[0].formattedValue}명\n입사 ${context[1].formattedValue}명\n퇴사 ${context[2].formattedValue}명\n${context[0].label}`;
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
            padding: -3,
            maxRotation: 0,
            minRotation: 0,
            callback: function (value: any, index: any, ticks: any) {
              if (index % 3 == 0) {
                return `${dateLabels[index]}`;
              }
              return "";
            },
          },
        },
        y: {
          position: "left",
          grid: {
            color: "#f4f4f5",
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "grey",
          },
          min: 0,
          max: 40,
        },
        // 그래프 우측 Y Axis, https://www.youtube.com/watch?v=8iydwK3-3zA 참고
        population: {
          position: "right",
          grid: {
            color: "#f4f4f5",
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "grey",
          },
          min: 0,
          max: 40,
        },
      },
    };

    const data = {
      labels: dateLabels,
      datasets: [
        {
          type: "line",
          data: dateLabels.map(() => getRandomInt(20, 25)),
          backgroundColor: "#3385ff",
          borderColor: "#3385ff",
          pointRadius: 3.5,
          pointBorderColor: "#3385ff",
          pointBackgroundColor: "#3385ff",
          pointHoverBackgroundColor: "#3385ff",
          pointHoverBorderColor: "#3385ff",
          yAxisID: "y",
        },
        {
          type: "bar",
          data: dateLabels.map(() => getRandomInt(0, 10)),
          backgroundColor: "#69a5ff",
          borderColor: "#69a5ff",
          pointRadius: 3.5,
          pointBorderColor: "#69a5ff",
          pointBackgroundColor: "#69a5ff",
          pointHoverBackgroundColor: "#69a5ff",
          pointHoverBorderColor: "#69a5ff",
          borderRadius: 2,
          barPercentage: 0.68,
          yAxisID: "population",
        },
        {
          type: "bar",
          data: dateLabels.map(() => getRandomInt(0, 10)),
          backgroundColor: "#c9defe",
          borderColor: "#c9defe",
          pointRadius: 3.5,
          pointBorderColor: "#c9defe",
          pointBackgroundColor: "#c9defe",
          pointHoverBackgroundColor: "#c9defe",
          pointHoverBorderColor: "#c9defe",
          borderRadius: 2,
          barPercentage: 0.68,
          yAxisID: "population",
        },
      ],
    };

    return <Chart data={data as any} options={options as any} type={"line"} />;
  };

  const WorkingYearGraph = () => {
    return (
      <Box border={attrBorderGrey2} borderRadius={12} p={5} mt={2}>
        <Flex alignItems="center">
          <Text fontSize={14} color="grey" mr={1}>
            평균 근속연수
          </Text>

          {InfoDialog(
            <IoMdInformationCircle color={borderGrey} size={16} />,
            <Text fontSize={16} whiteSpace="pre-line">
              {`업계평균: 근속 연수 데이터가 있는 동일 업종 기업의 평균입니다.

                전체평균: 근속 연수 데이터가 있는 전체 기업의 평균입니다.

                *업종에 따라 업계 평균이 보이지 않을 수 있습니다.
                *금감원의 2021년도 데이터를 기준으로 합니다.`}
            </Text>,
            "평균 근속연수"
          )}
        </Flex>

        <Flex mt="2px" mb={3}>
          <Text fontSize={15} fontWeight="semibold" color="grey">
            정보없음
          </Text>
        </Flex>

        <Separator size="xs" />
        <Box h="150px" mb={2} ml={8} mr={8}>
          {ColumnGraph(0, 10, false)}
        </Box>
      </Box>
    );
  };

  const InnerPage = () => {
    return (
      <>
        <Flex alignItems="center" gapX="4px">
          <Text fontSize={22} fontWeight="bold">
            디벨로퍼랩
          </Text>

          <Box mb="1px">
            <HiMiniCheckBadge size={24} color={mainBlue} />
          </Box>
        </Flex>
        <Flex mt="2px">
          <Text fontSize={14} color={textGrey}>
            IT, 컨텐츠
          </Text>

          <Text ml="20px" fontSize={14} color={textGrey}>
            서울 강남구
          </Text>

          <Text ml="20px" fontSize={14} color={textGrey}>
            4년차 (2022)
          </Text>
        </Flex>
        <Flex maxW="100%">
          <Text
            fontSize={15}
            color={textGrey}
            mt={4}
            lineClamp={isDescExpanded ? 1000 : 2}
            whiteSpace="pre-line"
          >
            {`우리는 ‘버추얼 엔터테인먼트’라는 대해에서 ‘기술’과 ‘사람’이라는 함선을 타고 신대륙을 찾는 사람입니다. 우리의 목표는 버추얼 엔터테인먼트 시장 내의 모든 활동을 관통하고, 관여하는 환경을 구축하는 것입니다. 
            
            우리는 이 목표를 달성하기 위해 현재 ‘아바킷’과 ‘멜로데이즈’라는 서비스를 개발 및 제공합니다. 

            Services 
            1. 아바킷(AvaKit) 버추얼 유튜버가 고가의 모션 캡처 장비 없이 웹캠 한 대만으로 바로 라이브 스트리밍을 진행할 수 있는 환경을 제공하는 서비스입니다. 6개월이 채 되기 전에 6,000% 이상의 오가닉 유저 성장을
            기록했습니다. 
            
            2. 멜로데이즈(MeloDaze) ‘상상이 현실로 바뀌는 경험을 창출한다’라는 비전 아래, 버추얼 탤런트를 육성하고 지원하는 버추얼 엔터테인먼트 에이전시입니다. 
            
            멜로데이즈와 함께라면, 당신의 상상은 현실이 됩니다.`}
          </Text>
        </Flex>
        {/* 닫기/더보기 버튼 */}
        <Flex>
          <Text
            color={textGrey2}
            fontSize={14}
            className="hover:bg-gray-100"
            p="2px"
            mt={1}
            borderRadius={4}
            onClick={() => {
              setIsDescExpanded(!isDescExpanded);
            }}
          >
            {isDescExpanded ? "닫기" : "더보기"}
          </Text>
          <Spacer />
        </Flex>
        {/*  뱃지 리스트 */}
        <Flex gapX={2} mt={4}>
          {postionDataList && postionDataList.length > 0 && (
            <Badge colorPalette="blue" color={mainBlue}>
              지금 채용중
            </Badge>
          )}

          <Badge colorPalette="blue" color={mainBlue}>
            응답률 매우 높음
          </Badge>

          <Badge colorPalette="blue" color={mainBlue}>
            연봉 업계평균이상
          </Badge>
        </Flex>

        {/* 채용중인 포지션 리스트업 */}
        {postionDataList && postionDataList.length > 0 && (
          <Box>
            <Text fontSize={20} fontWeight="semibold" mt="50px" mb={3}>
              채용중인 포지션
            </Text>
            <SimpleGrid columns={2} gap={4}>
              {postionDataList.map((v, index) => {
                if (index < 4 || isPosExpanded) {
                  return (
                    <Box key={index}>
                      {PositionContainer(
                        v.department,
                        v.title,
                        v.isRecommended
                      )}
                    </Box>
                  );
                }

                return <Box key={index} />;
              })}
            </SimpleGrid>
            {postionDataList.length > 4 && !isPosExpanded && (
              <Box
                border={attrBorderGrey2}
                fontSize={16}
                textAlign="center"
                p={2}
                mt={4}
                borderRadius={12}
                className="hover:bg-gray-100"
                onClick={() => {
                  setIsPosExpanded(true);
                }}
              >
                {postionDataList.length - 4}개 포지션 더보기
              </Box>
            )}
          </Box>
        )}

        {/* 회사 태그 리스트  */}
        <Text fontWeight="semibold" fontSize={20} mt={12} mb={2}>
          태그
        </Text>
        <Stack
          direction="column"
          border={attrBorderGrey2}
          borderRadius={4}
          p={8}
        >
          {RenderTagList(
            [
              "유망산업",
              "건강검진지원",
              "자기계발지원",
              "출산휴가",
              "육아휴직",
              "커피·스낵바",
              "설립10년이상",
              "AI 선도 기업",
              "50명이하",
              "연봉상위11~20%",
              "누적투자100억이상",
            ],
            6
          )}
        </Stack>
        {/* 네이버 맵 */}
        <Text fontWeight="semibold" fontSize={20} mt={12} mb={2}>
          위치
        </Text>
        {NaverMap(
          "서울 마포구 땡땡100길 28, 땡땡빌딩 5층",
          "https://naver.com"
        )}
        {/* 연봉 그래프 */}
        <Flex mt={12} mb={2} alignItems="center">
          <Text fontWeight="semibold" fontSize={20} mr="2px">
            연봉
          </Text>

          <IoMdInformationCircle
            color={borderGrey}
            size={22}
            onClick={() => {
              router.push("/company/data-sources");
            }}
          />
        </Flex>

        <SimpleGrid columns={2} gap={4}>
          {/* 평균 연봉 그래프 */}
          {AvgSalaryGraph(false)}
          {AvgSalaryGraph(true)}

          {/* 예상 연봉 그래프 */}
          {ExpSalaryGraph(true)}
          {ExpSalaryGraph(false)}
        </SimpleGrid>

        {/* 월평균 급여 그래프 */}
        <Box border={attrBorderGrey2} borderRadius={12} p={5} mt={12}>
          <Flex alignItems="center">
            <Text fontSize={14} color="grey" mr={1}>
              월평균 급여
            </Text>

            {InfoDialog(
              <IoMdInformationCircle color={borderGrey} size={16} />,
              <Text fontSize={16} whiteSpace="pre-line">
                {`매년 7월은 국민연금 정산월입니다. 본 자료는 국민연금 보험료 납부액을 기반으로 산출하므로 정산 월의 전 월과 평균 급여 차이가 크게 날 수 있습니다. 
                
                국민연금 보험료는 기준소득월액에 따라 차등산정됩니다. 본 기업의 기준소득월액이 상한액을 초과하거나 하한액을 미달한다면 추정에 오차가 발생할 수 있습니다. (2024년 상한액 617만 원, 하한액 39만 원)`}
              </Text>,
              "월평균 급여"
            )}
          </Flex>

          <Flex mt="2px" mb={3}>
            <Text fontSize={15} fontWeight="semibold">
              502만원
            </Text>
            <Spacer />
            <Text color={mainBlue} fontSize={15}>
              상위 4%
            </Text>
          </Flex>
          <Separator size="xs" />

          <Box h="150px" mb={4} ml={4} mr={4}>
            <LineGraph />
          </Box>
        </Box>
        <Flex mt={12} mb={2} alignItems="center">
          <Text fontWeight="semibold" fontSize={20} mr="2px">
            인원
          </Text>
          <IoMdInformationCircle
            color={borderGrey}
            size={22}
            onClick={() => {
              router.push("/company/data-sources");
            }}
          />
        </Flex>

        {/* 인원 그래프 */}
        {PopulationGraph()}
        <Box mt={4} />
        {/* 근속연수 그래프 */}
        {WorkingYearGraph()}

        {/* 기업 정보 */}
        <Text fontWeight="semibold" fontSize={20} mt={12} mb={4}>
          기업 정보
        </Text>
        <Box border={attrBorderGrey2} p="14px" borderRadius={20}>
          {tableData.map((v, index) => {
            return (
              <Box key={index}>
                <Flex p="12px">
                  <Text fontSize={14}>{v.name}</Text>
                  <Spacer />
                  <Text color={mainGrey} fontSize={14}>
                    {v.value}
                  </Text>
                </Flex>
                {index < tableData.length - 1 && (
                  <Box borderBottom={attrBorderGrey2} />
                )}
              </Box>
            );
          })}
        </Box>
      </>
    );
  };

  const FollowingButton = () => {
    return (
      <Box
        w="100%"
        mt="15px"
        textAlign="center"
        p={2}
        borderRadius={8}
        fontSize={16}
        backgroundColor={isFollowing ? "#f4f4f5" : mainBlue}
        _hover={{
          backgroundColor: `${isFollowing ? "#ebedf3" : "#215ad9"}`,
        }}
        color={isFollowing ? "black" : "white"}
        onClick={() => {
          let value = !isFollowing;
          setIsFollowing(value);
          if (value) {
            successToast("팔로우 완료. 채용알림을 받게 됩니다.");
          }
        }}
      >
        {isFollowing ? "팔로잉" : "팔로우하고 채용알림 받기"}
      </Box>
    );
  };

  const BottomViewWhenSM = () => {
    return (
      <Box className="w-[100%] bottom-0 fixed block lg:hidden">
        {/* 흰색 그라데이션 부분 */}
        <Box className="h-[30px] bg-linear-to-b from-opacity-100 to-white" />

        {/* 북마크, 지원하기 버튼 Row */}
        <Flex className="bg-white" pb={4} pl={4} pr={4}>
          <FollowingButton />
        </Flex>
      </Box>
    );
  };

  return (
    <>
      <Stack
        direction="column"
        pl="50px"
        pr="50px"
        pt="30px"
        position="relative"
      >
        <Image
          borderRadius={20}
          h="330px"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33980%2F2ggy2aocclkjyy3y__1080_790.jpg&w=700&q=100"
        />
        <Image
          position="absolute"
          top="313px"
          left="70px"
          src="/developer_logo.png"
          borderRadius="25%"
          w="94px"
          h="94px"
          border={attrBorderGrey2}
        />
        {MiddleViews()}
        <Box h={350} />
        <Footer />
      </Stack>

      {/* 뷰가 작아졌을 때 처리 */}
      <BottomViewWhenSM />
    </>
  );
}
