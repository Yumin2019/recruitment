"use client";

import {
  Text,
  Image,
  Flex,
  Box,
  NativeSelect,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";
import { graphData, recruitmentMenuList, salaryData } from "../global-data";
import { useRef, useState } from "react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";
import { copyCipboard, successToast, toDollarString } from "@/util";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  IoInformationCircleOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { Tooltip } from "@/components/ui/tooltip";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Footer } from "@/components/footer";
import { GoArrowUp } from "react-icons/go";
import { useRouter } from "next/navigation";

const yearList = ["신입", "1~2", "3~4", "5~6", "7~8", "9~10", "10년 이상"];

export default function DiscoveryPage() {
  const router = useRouter();
  const companyViewRef = useRef<HTMLElement | null>(null);
  const [skillType, setSkillType] = useState<"hired" | "popular">("hired");
  const [firstType, setFirstType] = useState("dev");
  const [salaryIdx, setSalaryIdx] = useState("0");
  const [secondType, setSecondType] = useState<string | undefined>(
    "소프트웨어 엔지니어"
  );

  // 그래프 관련 정보
  const [isGraphHover, setIsGraphHover] = useState(false);
  const [graphRange, setGraphRange] = useState({
    min: 2163,
    max: 12000,
  });

  const [salaryRange, setSalaryRange] = useState({
    min: 2163,
    max: 6600,
    avgForSixMonths: 3769,
  });

  const getRatioFromMinSalary = (salary: number) => {
    return Math.floor(
      ((salary - graphRange.min) / (graphRange.max - graphRange.min)) * 100
    );
  };

  const getRatioWidth = () => {
    return (
      getRatioFromMinSalary(salaryRange.max) -
      getRatioFromMinSalary(salaryRange.min)
    );
  };

  const HeaderImage = () => {
    return (
      <Box
        bg="#3566ff"
        h="300px"
        alignContent="center"
        textAlign="center"
        position="relative"
      >
        <Text
          fontSize="34px"
          fontWeight="bold"
          color="white"
          whiteSpace="pre-line"
        >
          {`실제 합격자 정보를 바탕으로 한
       최신 채용 데이터를 확인해 보세요!`}
        </Text>

        <Text fontSize="16px" color="white" whiteSpace="pre-line" mt="30px">
          {` 직무/연차별 연봉 정보부터 업계에서 찾는 인기 스킬까지 
      디벨로퍼 합격자 정보로 구성된 다양한 채용 데이터를 볼 수 있어요.`}
        </Text>

        <Box overflow="hidden" position="absolute" left="8px" top="16px">
          <Image src="/graph_1.png" h="256px" />
        </Box>

        <Box overflow="hidden" position="absolute" right="8px" top="16px">
          <Image src="/graph_2.png" h="256px" />
        </Box>
      </Box>
    );
  };

  const DropdownMenu = () => {
    return (
      <Flex mt="36px">
        {/* 1차 분류 */}
        <Box>
          <Text fontSize="14px" color="#909093">
            직군
          </Text>

          <NativeSelect.Root size="lg" variant="outline" mt="8px" w="230px">
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
                직군을 선택하세요.
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
        </Box>

        {/* 2차 분류 */}
        <Box ml="20px">
          <Text fontSize="14px" color="#909093">
            직무
          </Text>

          <NativeSelect.Root size="lg" variant="outline" mt="8px" w="230px">
            <NativeSelect.Field
              outline="none"
              onChange={(e) => {
                let value = e.currentTarget.value;
                console.log(value);
                setSecondType(value);
              }}
            >
              <option value="job" disabled>
                직무를 선택하세요.
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
        </Box>

        {/* 경력 연수 */}
        <Box ml="20px">
          <Text fontSize="14px" color="#909093">
            경력 연수
          </Text>

          <NativeSelect.Root size="lg" variant="outline" mt="8px" w="230px">
            <NativeSelect.Field
              outline="none"
              onChange={(e) => {
                let value = e.currentTarget.value;
                setSalaryIdx(value);
              }}
            >
              <option value="job" disabled>
                경력 연수를 선택하세요.
              </option>

              {yearList.map((v, index) => {
                return (
                  <option value={index} key={index}>
                    {v}
                  </option>
                );
              })}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Box>

        <Box
          mt="30px"
          ml="16px"
          className="bg-[#0166ff] hover:bg-[#0062f6]"
          cursor="pointer"
          color="white"
          w="185px"
          textAlign="center"
          alignContent="center"
          borderRadius="8px"
          onClick={() => {
            let data = (salaryData as any)[firstType][Number(salaryIdx)];
            setSalaryRange(data);
            setGraphRange((graphData as any)[firstType]);
          }}
        >
          적용하기
        </Box>
      </Flex>
    );
  };

  const GraphView = () => {
    return (
      <>
        {/* 합격자 평균 연봉 문구, 경력 연수 문구 */}
        <Flex mt="40px">
          <Box flex={1} />
          <Box textAlign="center">
            <Text fontSize="14px" color="grey" fontWeight="semibold">
              6개월간 합격자 평균 연봉
            </Text>

            <Text fontSize="26px" fontWeight="bold" mt="2px">
              {toDollarString(salaryRange.avgForSixMonths)}만 원
            </Text>
          </Box>

          <Box borderRight={attrBorderGrey} ml="50px" mr="50px" />

          <Box textAlign="start">
            <Text fontSize="14px" color="grey" fontWeight="semibold">
              5~6 경력 연수
            </Text>

            <Flex alignItems="baseline" mt="2px">
              <Text fontSize="17px" fontWeight="bold" mr="4px">
                최소
              </Text>

              <Text fontSize="26px" fontWeight="bold" mr="4px">
                {toDollarString(salaryRange.min)}만 원 ~
              </Text>

              <Text fontSize="17px" fontWeight="bold" mr="4px">
                최대
              </Text>

              <Text fontSize="26px" fontWeight="bold">
                {toDollarString(salaryRange.max)}만 원
              </Text>
            </Flex>
          </Box>
          <Box flex={1} />
        </Flex>

        {/* 그래프 부분 */}
        <Box
          w="100%"
          bg="#f4f6ff"
          pl="40px"
          pr="40px"
          pt="70px"
          pb="30px"
          mt="20px"
          borderRadius="16px"
        >
          <Box position="relative">
            {/* 파란 그래프 수치 영역 */}
            <Flex
              top="-34px"
              position="absolute"
              left={`${getRatioFromMinSalary(salaryRange.min)}%`}
              w={`${getRatioWidth()}%`}
            >
              <Text
                fontSize="13px"
                color="#0166ff"
                fontWeight="bold"
                marginTop="15px"
                opacity={isGraphHover ? 1.0 : 0.0}
              >
                {toDollarString(salaryRange.min)}만
              </Text>

              <Spacer />
              <Box>
                <Text fontSize="13px" color="#0166ff" fontWeight="bold">
                  {toDollarString(salaryRange.avgForSixMonths)}만
                </Text>

                <Box ml="14px">
                  <IoMdArrowDropdown size="14px" />
                </Box>
              </Box>
              <Spacer />

              <Text
                fontSize="13px"
                color="#0166ff"
                fontWeight="bold"
                textAlign="right"
                marginTop="15px"
                opacity={isGraphHover ? 1.0 : 0.0}
              >
                {toDollarString(salaryRange.max)}만
              </Text>
            </Flex>

            {/* 파란 그래프  */}
            <Box
              left={`${getRatioFromMinSalary(salaryRange.min)}%`}
              w={`${getRatioWidth()}%`}
              h="12px"
              bg="#0166ff"
              position="absolute"
              onMouseEnter={() => {
                setIsGraphHover(true);
              }}
              onMouseLeave={() => {
                setIsGraphHover(false);
              }}
            />
          </Box>

          {/* 회색 배경 */}
          <Box w="100%" h="12px" bg="#dfe0ea" borderRadius="2px" />

          <Flex mt="8px">
            <Text fontSize="13px" color="grey">
              최저 {toDollarString(graphRange.min)}만
            </Text>
            <Box flex={1} />
            <Text fontSize="13px" color="grey">
              최고 {toDollarString(graphRange.max)}만
            </Text>
          </Flex>

          <Flex mt="20px">
            <Box flex={1} />
            <Flex alignItems="center" mr="24px">
              <Box w="12px" h="12px" bg="#dfe0ea" mr="8px" />
              <Text fontSize="13px" color="grey">
                전체 연수/연봉
              </Text>
            </Flex>

            <Flex alignItems="center">
              <Box w="12px" h="12px" bg="#0166ff" mr="8px" />
              <Text fontSize="13px" color="grey">
                연수 범위
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Text fontSize="13px" color="grey" mt="28px">
          개발 직군 - 안드로이드 개발자 직무 - 3~4 경력 연차의 6개월간 합격자
          평균 연봉은 4,964만 원이며 최소 4,000만 원에서 최대 7,000만 원을
          나타냈습니다. 안드로이드 개발자 직무의 전체 연봉은 최저 2,880만 원이고
          최고 12,500만 원 입니다.
        </Text>

        <Flex alignItems="center" mt="8px">
          <Spacer />
          <Tooltip
            showArrow
            positioning={{ placement: "bottom" }}
            content="디벨로퍼를 통한 6개월 이내 선택된 직군/직무/경력연차의 합격자 평균입니다"
            openDelay={100}
            closeDelay={100}
          >
            <IoInformationCircleOutline size="14px" color="grey" />
          </Tooltip>

          <Text ml="2px" fontSize="13px" color="grey">
            2025-01-13 기준
          </Text>
        </Flex>
      </>
    );
  };

  const SkillGraphView = () => {
    const hiredPeopleSkills = [
      { skill: "Javascript", percent: 100 },
      { skill: "Git", percent: 100 },
      { skill: "Swift", percent: 100 },
      { skill: "Kotlin", percent: 80 },
      { skill: "Dart", percent: 80 },
      { skill: "Java", percent: 50 },
      { skill: "iOS", percent: 50 },
      { skill: "Android", percent: 50 },
      { skill: "Objective C", percent: 30 },
      { skill: "React Native", percent: 30 },
    ];

    const SamePositionSkills = [
      { skill: "Kotlin", percent: 100 },
      { skill: "Android", percent: 100 },
      { skill: "Swift", percent: 100 },
      { skill: "MVVM", percent: 100 },
      { skill: "React Native", percent: 100 },
      { skill: "Cordova", percent: 100 },
      { skill: "Django", percent: 100 },
      { skill: "Git", percent: 100 },
      { skill: "Flutter", percent: 100 },
      { skill: "Rx", percent: 100 },
    ];

    return (
      <>
        {/* 실제 합격자 연봉, 회사별 연봉 랭킹 */}
        <Flex>
          <Box
            cursor="pointer"
            w="140px"
            h="40px"
            fontSize="15px"
            fontWeight="bold"
            color={skillType === "hired" ? "#0062f6" : "grey"}
            border={
              skillType === "hired" ? "1px solid #0062f6" : "1px solid #d3d7d6"
            }
            className="hover:bg-gray-100"
            textAlign="center"
            alignContent="center"
            borderRadius="8px"
            onClick={() => {
              setSkillType("hired");
            }}
          >
            최근 합격자의 스킬
          </Box>

          <Box
            cursor="pointer"
            w="140px"
            h="40px"
            ml="20px"
            fontSize="15px"
            fontWeight="bold"
            color={skillType === "popular" ? "#0062f6" : "grey"}
            border={
              skillType === "popular"
                ? "1px solid #0062f6"
                : "1px solid #d3d7d6"
            }
            className="hover:bg-gray-100"
            textAlign="center"
            alignContent="center"
            borderRadius="8px"
            onClick={() => {
              setSkillType("popular");
            }}
          >
            같은 직무자들의 스킬
          </Box>
        </Flex>

        <Box mb="30px" />

        {(skillType === "hired" ? hiredPeopleSkills : SamePositionSkills).map(
          (v, index) => {
            return (
              <Box w="100%" borderRadius="16px" p="8px" key={index}>
                <Text fontSize="17px" color="black/80">
                  {v.skill}
                </Text>
                <Flex>
                  <Flex position="relative" mt="4px" w="98%">
                    <Box
                      w={`${v.percent}%`}
                      h="12px"
                      bg="#0166ff"
                      position="absolute"
                    />
                    <Box w="100%" h="12px" bg="#f3f3f4" borderRadius="2px" />
                  </Flex>
                  <Text
                    fontSize="13px"
                    color="grey"
                    ml="12px"
                    fontWeight="semibold"
                  >
                    {v.percent}%
                  </Text>
                </Flex>
              </Box>
            );
          }
        )}

        <Flex alignItems="center" mt="8px">
          <Spacer />
          <Tooltip
            showArrow
            positioning={{ placement: "bottom" }}
            content="디벨로퍼에 등록된 7일 이내 지원 한 같은 직무 지원자들이 해당 스킬을 선택한 비율입니다."
            openDelay={100}
            closeDelay={100}
          >
            <IoInformationCircleOutline size="14px" color="grey" />
          </Tooltip>

          <Text ml="2px" fontSize="13px" color="grey">
            2025-01-13 기준
          </Text>
        </Flex>
      </>
    );
  };

  const CareerInsightArea = () => {
    const careerInsights = [
      {
        imgSrc:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F5246%2F69677740.jpg&w=1200&q=90",
        title:
          "개발 기술을 넘어 문제의 분질을 찾는 사람으로 | 윤서준 SEED 개발자",
        date: "상시",
        isDoing: true,
      },
      {
        imgSrc:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F5259%2F2ce3ff3c.jpg&w=1200&q=90",
        title:
          "연차가 아닌 실력으로 쌓는 개발자 커리어를 위해 | 기술 VS 소통 전략으로 ",
        date: "상시",
        isDoing: true,
      },
      {
        imgSrc:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F5261%2F80afa149.jpg&w=1200&q=90",
        title: "개발자의 이직 전략: 회사 선택부터 이력서까지",
        date: "상시",
        isDoing: true,
      },
      {
        imgSrc:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F5272%2F90c6dcfa.jpg&w=1200&q=90",
        title:
          "AI도 대신할 수 없는 개발 기술의 근간 | 원티드랩 김성광 테크 리드",
        date: "상시",
        isDoing: true,
      },
    ];

    const CareerInsightView = (v: any, index: number) => {
      return (
        <Box
          key={index}
          w="248px"
          className="transition hover:translate-y-[-6px] text-gray-500 hover:text-black"
          cursor="pointer"
        >
          <Image borderRadius="4px" w="248px" h="175px" src={v.imgSrc} />

          <Flex>
            <Box
              border="1px solid #ffcfa0"
              borderRadius="6px"
              fontSize="12px"
              color="#fe9201"
              pl="6px"
              pr="6px"
              pt="2px"
              pb="2px"
              mt="12px"
              mb="6px"
            >
              아티클
            </Box>
          </Flex>

          <Text
            fontSize="18px"
            fontWeight="semibold"
            lineClamp={2}
            color="black"
          >
            {v.title}
          </Text>

          <Text fontSize="12px" mt="6px">
            {v.date}
          </Text>

          <Text fontSize="13px" mt="6px" fontWeight="bold">
            {v.isDoing ? "진행 중" : "종료"}
          </Text>
        </Box>
      );
    };

    return (
      <>
        <Text
          textAlign="center"
          fontSize="17px"
          fontWeight="bold"
          mt="30px"
          mb="30px"
        >
          커리어 인사이트
        </Text>

        <Flex>
          <Spacer />
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap="24px">
            {careerInsights.map((v, index) => {
              return CareerInsightView(v, index);
            })}
          </SimpleGrid>
          <Spacer />
        </Flex>

        <Flex mt="40px">
          <Spacer />
          <Flex
            alignItems="center"
            border={attrBorderGrey}
            className="hover:bg-gray-100"
            pl="20px"
            pr="10px"
            pt="6px"
            pb="6px"
            borderRadius="8px"
            cursor="pointer"
            onClick={() => {}}
          >
            <Text fontSize="15px" color="black">
              더 많은 컨텐츠 보기
            </Text>
            <MdOutlineKeyboardArrowRight size="22px" />
          </Flex>
          <Spacer />
        </Flex>
      </>
    );
  };

  const CompanyView = () => {
    const [companyType, setCompanyType] = useState<
      "application" | "reply_duration" | "actively_hire" | "hired"
    >("application");

    const companyData = {
      application: [
        {
          imgSrc: "https://static.wanted.co.kr/images/wdes/0_5.2b945c4f.png",
          company: "페이타랩(패스오더)",
          isIncreasing: true,
        },
        {
          imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.9c8e6646.png",
          company: "정리습관",
          isIncreasing: true,
        },
        {
          imgSrc: "https://static.wanted.co.kr/images/wdes/0_5.c25ba1fc.png",
          company: "테이블링",
          isIncreasing: true,
        },
        {
          imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.8e5ab318.png",
          company: "브레이브모바일(숨고)",
          isIncreasing: false,
        },
        {
          imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.4af714e3.jpg",
          company: "퍼플페퍼",
          isIncreasing: true,
        },
      ],
      reply_duration: [
        {
          imgSrc: "/apple.png",
          company: "애플",
          isIncreasing: true,
        },
        {
          imgSrc: "/microsoft.png",
          company: "마이크로소프트",
          isIncreasing: false,
        },
        {
          imgSrc: "/facebook.png",
          company: "메타",
          isIncreasing: false,
        },
        {
          imgSrc: "/google.png",
          company: "구글",
          isIncreasing: true,
        },
        {
          imgSrc: "/instagram.png",
          company: "인스타그램",
          isIncreasing: true,
        },
      ],
      actively_hire: [
        {
          imgSrc: "/google.png",
          company: "구글",
          isIncreasing: false,
        },
        {
          imgSrc: "/instagram.png",
          company: "인스타그램",
          isIncreasing: true,
        },

        {
          imgSrc: "/facebook.png",
          company: "메타",
          isIncreasing: false,
        },
        {
          imgSrc: "/apple.png",
          company: "애플",
          isIncreasing: true,
        },
        {
          imgSrc: "/microsoft.png",
          company: "마이크로소프트",
          isIncreasing: true,
        },
      ],
      hired: [
        {
          imgSrc: "/facebook.png",
          company: "메타",
          isIncreasing: true,
        },
        {
          imgSrc: "/google.png",
          company: "구글",
          isIncreasing: false,
        },
        {
          imgSrc: "/instagram.png",
          company: "인스타그램",
          isIncreasing: true,
        },
        {
          imgSrc: "/apple.png",
          company: "애플",
          isIncreasing: false,
        },
        {
          imgSrc: "/microsoft.png",
          company: "마이크로소프트",
          isIncreasing: false,
        },
      ],
    };

    const CompanyButton = (text: string, type: string) => {
      return (
        <Box
          cursor="pointer"
          h="40px"
          pl="12px"
          pr="12px"
          fontSize="15px"
          fontWeight="bold"
          color={companyType === type ? "#0062f6" : "grey"}
          border={
            companyType === type ? "1px solid #0062f6" : "1px solid #d3d7d6"
          }
          className="hover:bg-gray-100"
          textAlign="center"
          alignContent="center"
          borderRadius="8px"
          onClick={() => {
            setCompanyType(type as any);
          }}
        >
          {text}
        </Box>
      );
    };

    return (
      <>
        <Flex gapX="16px">
          {CompanyButton("지원이 증가하는 회사", "application")}
          {CompanyButton("서류 응답이 빠른 회사", "reply_duration")}
          {CompanyButton("적극 채용 중인 회사", "actively_hire")}
          {CompanyButton("최근 합격자가 많은 회사", "hired")}
        </Flex>

        <Box
          bg="#f6f6f6"
          borderRadius="20px"
          p="20px"
          mt="40px"
          ref={companyViewRef}
        >
          {companyData[companyType].map((v, index) => {
            return (
              <Box key={index}>
                <Flex alignItems="center" p="20px">
                  <Text fontSize="16px" mr="30px">
                    {index + 1}
                  </Text>
                  <Image src={v.imgSrc} w="50px" h="50px" />
                  <Text fontSize="15px" fontWeight="semibold" ml="20px">
                    {v.company}
                  </Text>

                  <Spacer />
                  <Text fontSize="13px" color="grey">
                    {v.isIncreasing ? "순위 상승" : "순위 하락"}
                  </Text>

                  {v.isIncreasing ? (
                    <MdArrowDropUp color="#fd4242" size="24px" />
                  ) : (
                    <MdArrowDropDown color="#00afff" size="24px" />
                  )}
                </Flex>

                <Box
                  ml="20px"
                  mr="20px"
                  borderBottom={
                    index < companyData[companyType].length - 1
                      ? attrBorderGrey
                      : undefined
                  }
                />
              </Box>
            );
          })}
        </Box>

        <Flex alignItems="center" mt="16px">
          <Spacer />
          <Tooltip
            showArrow
            positioning={{ placement: "bottom" }}
            content="디벨로퍼 실제 데이터를 기반으로 정리된 정보입니다."
            openDelay={100}
            closeDelay={100}
          >
            <IoInformationCircleOutline size="14px" color="grey" />
          </Tooltip>

          <Text ml="2px" fontSize="13px" color="grey">
            2025-01-13 기준
          </Text>
        </Flex>

        <Box borderTop={attrBorderGrey2} mt="40px" mb="70px" />

        <Text textAlign="center" fontSize="16px" fontWeight="semibold">
          나와 같은 직군/직무의 사람들에게 데이터를 공유해 보세요.
        </Text>

        <Flex mt="36px">
          <Spacer />
          <Flex
            alignItems="center"
            border={attrBorderGrey}
            className="hover:bg-gray-100"
            pl="16px"
            pr="16px"
            pt="6px"
            pb="6px"
            borderRadius="8px"
            cursor="pointer"
            onClick={() => {
              copyCipboard(window.location.href, () => {
                successToast("링크가 복사되었습니다.");
              });
            }}
          >
            <IoShareSocialOutline size="18px" />
            <Text fontSize="15px" color="black" ml="4px">
              공유하기
            </Text>
          </Flex>
          <Spacer />
        </Flex>

        <Box borderTop={attrBorderGrey2} mt="50px" mb="40px" />

        <Text fontSize="16px" color="grey">
          데이터 출처 안내
        </Text>

        <Text fontSize="14px" color="grey" whiteSpace="pre-line" mt="18px">
          {`타사에서 제공하는 일반적인 연봉 정보는 주로 기업의 공시자료, 국민연금 등 공공기관의 공개자료를 참고하여 추정치를 제공하는 정보입니다. 
          이와는 별개로, 해당 정보는 6개월 이내 디벨로퍼를 통해 합격한, 실제 합격자 데이터를 기반으로 제공하고 있습니다. 
          이 데이터는 개인 정보가 제거된 형태로 활용되며, 원티드랩이 저작권 및 데이터베이스 권한을 소유하고 있습니다. 
          해당 정보를 이용하여 상업적인 목적으로 타인에게 서비스를 제공하거나 이득을 얻는 행위는 디벨로퍼랩의 동의없이 금지합니다.`}
        </Text>

        <Flex bottom="40px" alignItems="end" position="sticky" h="0px">
          <Spacer />

          <Box
            bg="white"
            shadow="2xl"
            w="45px"
            h="100px"
            borderRadius="25px"
            p="10px"
          >
            <Box
              pt="8px"
              pb="8px"
              cursor="pointer"
              onClick={() => {
                copyCipboard(window.location.href, () => {
                  successToast("링크가 복사되었습니다.");
                });
              }}
            >
              <IoShareSocialOutline size="24px" />
            </Box>
            <Box borderTop={attrBorderGrey} />
            <Box
              pt="8px"
              pb="8px"
              cursor="pointer"
              onClick={() => {
                console.log("top");
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <GoArrowUp size="24px" />
            </Box>
          </Box>
        </Flex>
      </>
    );
  };

  return (
    <Box alignItems="flex-start">
      {/* 상단 헤더 영역 */}
      {HeaderImage()}

      <Box p="20px">
        {/* 상단 탭바 */}
        <Flex borderBottom={attrBorderGrey} mt="60px">
          <Text
            fontSize="18px"
            fontWeight="semibold"
            color="#0566ff"
            borderBottom="2px solid #0566ff"
            cursor="pointer"
          >
            연봉 및 스킬 데이터
          </Text>

          <Text
            fontSize="18px"
            fontWeight="semibold"
            color="grey"
            ml="32px"
            pb="8px"
            cursor="pointer"
            borderBottom="2px solid #ffffff"
            _hover={{
              borderBottom: "2px solid #0566ff",
              color: "#0566ff",
            }}
            onClick={() => {
              companyViewRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            회사 랭킹 데이터
          </Text>
        </Flex>

        {/* 드롭다운 메뉴 */}
        {DropdownMenu()}

        <Box
          borderTop={attrBorderGrey2}
          ml="-20px"
          mr="-20px"
          mt="40px"
          mb="40px"
        />

        {/* 실제 합격자 연봉, 회사별 연봉 랭킹 */}
        <Flex>
          <Box
            cursor="pointer"
            w="140px"
            h="40px"
            fontSize="15px"
            fontWeight="bold"
            color="#0062f6"
            border="1px solid #0062f6"
            className="hover:bg-gray-100"
            textAlign="center"
            alignContent="center"
            borderRadius="8px"
          >
            실제 합격자 연봉
          </Box>

          <Box
            cursor="pointer"
            w="140px"
            h="40px"
            ml="20px"
            fontSize="15px"
            fontWeight="bold"
            color="grey"
            border="1px solid #d3d7d6"
            className="hover:bg-gray-100"
            textAlign="center"
            alignContent="center"
            borderRadius="8px"
          >
            회사별 연봉 랭킹
          </Box>
        </Flex>

        {GraphView()}

        <Box borderTop={attrBorderGrey} mt="30px" mb="30px" />

        {SkillGraphView()}
        {CareerInsightArea()}

        <Box borderTop={attrBorderGrey} mt="50px" mb="50px" />

        {CompanyView()}

        <Box h={320} />
        <Footer />
      </Box>
    </Box>
  );
}
