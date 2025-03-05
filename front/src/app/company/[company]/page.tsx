"use client";

import { Footer } from "@/components/footer";
import { NaverMap } from "@/components/naver-map";
import { initMap } from "@/util";
import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Separator,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RenderTagList } from "@/components/tag-list";
import { FaCheckCircle } from "react-icons/fa";
import {
  attrBorderGrey,
  attrBorderGrey2,
  borderGrey,
  mainBlue,
  mainGrey,
  textGrey,
  textGrey2,
} from "@/color";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";

const postionDataList = [
  {
    department: "개발",
    title: "Flutter 개발자",
    isRecommended: true,
  },

  {
    department: "디자인",
    title: "3D 아바타 디자이너",
    isRecommended: true,
  },

  {
    department: "기획자",
    title: "게임 기획자",
    isRecommended: true,
  },
];

export default function CompanyPage() {
  const [isExpanded, setIsExpanded] = useState(false);

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
      <Flex gapX={8} alignItems="flex-start">
        <Box flex={6}>
          <InnerPage />
        </Box>
        <Box flex={3} className="sticky top-[80px] hidden md:block">
          <Box border={attrBorderGrey2} borderRadius={10} p={4}>
            <Flex>
              <Text fontSize={14}>기업 팔로우하면 100포인트 지급!</Text>
              <Text fontSize={13} color={textGrey2} ml={1}>
                (1일 1회)
              </Text>
            </Flex>

            <Text fontSize={13} fontWeight="light">
              관심 기업으로 등록하고 채용 알림도 받아 보세요.
            </Text>
          </Box>

          <Button
            colorPalette="blue"
            w="100%"
            borderRadius={8}
            mt="15px"
            fontSize={16}
            size="lg"
          >
            팔로우하고 채용알림 받기
          </Button>
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

        <Box h="150px">그래프 영역</Box>

        <Center>
          <Button
            size="xs"
            variant="outline"
            borderRadius={5}
            fontWeight="bold"
          >
            자세히 보기
          </Button>
        </Center>
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

          {isThisYear && (
            <IoMdInformationCircle
              color={borderGrey}
              size={16}
              onClick={() => {
                // 데이터 소스 페이지로 이동
              }}
            />
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
        <Box h="150px">그래프 영역</Box>
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
        <Box h="150px">그래프 영역</Box>
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

  const WorkingYearGraph = () => {
    return (
      <Box border={attrBorderGrey2} borderRadius={12} p={5} mt={2}>
        <Flex alignItems="center">
          <Text fontSize={14} color="grey" mr={1}>
            평균 근속연수
          </Text>

          <IoMdInformationCircle
            color={borderGrey}
            size={16}
            onClick={() => {
              // 데이터 소스 페이지로 이동
            }}
          />
        </Flex>

        <Flex mt="2px" mb={3}>
          <Text fontSize={15} fontWeight="semibold" color="grey">
            정보없음
          </Text>
        </Flex>

        <Separator size="xs" />
        <Box h="150px">그래프 영역</Box>
      </Box>
    );
  };

  const InnerPage = () => {
    return (
      <>
        <Flex alignItems="center" gapX={1}>
          <Text fontSize={22} fontWeight="bold">
            디벨로퍼랩
          </Text>
          <FaCheckCircle size={18} color={mainBlue} />
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
            lineClamp={isExpanded ? 1000 : 2}
          >
            우리는 ‘버추얼 엔터테인먼트’라는 대해에서 ‘기술’과 ‘사람’이라는
            함선을 타고 신대륙을 찾는 사람입니다. 우리의 목표는 버추얼
            엔터테인먼트 시장 내의 모든 활동을 관통하고, 관여하는 환경을
            구축하는 것입니다. 우리는 이 목표를 달성하기 위해 현재 ‘아바킷’과
            ‘멜로데이즈’라는 서비스를 개발 및 제공합니다. Services 1.
            아바킷(AvaKit) 버추얼 유튜버가 고가의 모션 캡처 장비 없이 웹캠 한
            대만으로 바로 라이브 스트리밍을 진행할 수 있는 환경을 제공하는
            서비스입니다. 6개월이 채 되기 전에 6,000% 이상의 오가닉 유저 성장을
            기록했습니다. 2. 멜로데이즈(MeloDaze) ‘상상이 현실로 바뀌는 경험을
            창출한다’라는 비전 아래, 버추얼 탤런트를 육성하고 지원하는 버추얼
            엔터테인먼트 에이전시입니다. 멜로데이즈와 함께라면, 당신의 상상은
            현실이 됩니다.
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
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "닫기" : "더보기"}
          </Text>
          <Spacer />
        </Flex>
        {/*  뱃지 리스트 */}
        <Flex gapX={2} mt={4}>
          <Badge colorPalette="blue" color={mainBlue}>
            지금 채용중
          </Badge>

          <Badge colorPalette="blue" color={mainBlue}>
            응답률 매우 높음
          </Badge>

          <Badge colorPalette="blue" color={mainBlue}>
            연봉 업계평균이상
          </Badge>
        </Flex>
        {/* 채용중인 포지션 리스트업 */}
        <Text fontSize={20} fontWeight="semibold" mt="50px" mb={3}>
          채용중인 포지션
        </Text>
        <SimpleGrid columns={2} gap={4}>
          {postionDataList &&
            postionDataList.map((v, index) => {
              return (
                <Box key={index}>
                  {PositionContainer(v.department, v.title, v.isRecommended)}
                </Box>
              );
            })}
        </SimpleGrid>
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
              // 데이터 소스 페이지로 이동
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

            <IoMdInformationCircle
              color={borderGrey}
              size={16}
              onClick={() => {
                // 데이터 소스 페이지로 이동
              }}
            />
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
          <Box h="150px">그래프 영역</Box>
        </Box>
        <Flex mt={12} mb={2} alignItems="center">
          <Text fontWeight="semibold" fontSize={20} mr="2px">
            인원
          </Text>
          <IoMdInformationCircle
            color={borderGrey}
            size={22}
            onClick={() => {
              // 데이터 소스 페이지로 이동
            }}
          />
        </Flex>
        {/* 인원 그래프 */}
        {PopulationGraph()}
        <Box mt={4} />
        {/* 근속연수 그래프 */}
        {WorkingYearGraph()}

        {/* 기업 정보 부분 작업해야함. */}
      </>
    );
  };

  return (
    <Stack direction="column" pl="50px" pr="50px" pt="30px">
      {MiddleViews()}
      <Box h={400}></Box>
      <Footer />
    </Stack>
  );
}
