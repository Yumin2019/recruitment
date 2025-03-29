"use client";

import { attrBorderGrey, textBlue } from "@/color";
import { RenderTechstacks } from "@/components/tag-list";
import { getRandomInt } from "@/util";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const defaultTechstacks = [
  "Git",
  "JavaScript",
  "Python",
  "MySQL",
  "Java",
  "Linux",
  "Github",
  "AWS",
  "Docker",
  "HTML",
  "SQL",
  "TypeScript",
  "C++",
  "React",
  "Node.js",
  "C#",
  "JPA",
  "Spring Boot",
  "C / C++",
];

export default function ResumeEditPage() {
  // 정보 읿력 관련
  const [titleText, setTitleText] = useState("");
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [introText, setIntroText] = useState("");

  // 기술스택 관련
  const [isStackOpened, setIsStackOpened] = useState(false);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);

  // 커리어 리스트
  const [careerList, setCareerList] = useState([
    {
      id: 0,
      date: "",
      isWorking: false,
      company: "",
      department: "",
      performanceList: [],
    },
  ]);

  // 학력 데이터
  const [schoolList, setSchoolList] = useState([
    {
      id: 0,
      date: "",
      isDoing: false,
      title: "",
      department: "",
      desc: "",
    },
  ]);

  // 수상 및 기타
  const [rewardList, setRewardList] = useState([
    {
      id: 0,
      date: "",
      title: "",
      desc: "",
    },
  ]);

  // 외국어 데이터
  const [languageList, setLanguageList] = useState([
    {
      id: 0,
      language: "영어",
      level: "유창함",
    },
  ]);

  // 링크 데이터
  const [linkList, setLinkList] = useState([
    {
      id: 0,
      url: "",
      desc: "",
    },
  ]);

  const GreenStackView = (v: string, index: number) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
      let idx = selectedTechStacks.findIndex((s) => s === v);
      setIsSelected(idx !== -1);
    }, [selectedTechStacks]);

    return (
      <Flex
        key={v}
        bg="#e5f4ed"
        borderRadius="20px"
        pl="16px"
        pr="16px"
        pt="8px"
        pb="8px"
        fontSize="14px"
        alignItems="center"
        hidden={isStackOpened ? false : index >= 7}
        border={
          isSelected ? "1px solid #1fba9c" : "1px solid rgba(0, 0, 0, 0.0)"
        }
        cursor="pointer"
        onClick={() => {
          let value = !isSelected;
          if (value) {
            selectedTechStacks.push(v as any);
          } else {
            let deleteIdx = selectedTechStacks.findIndex((s) => s === v);
            selectedTechStacks.splice(deleteIdx, 1);
          }

          setSelectedTechStacks([...selectedTechStacks]);
          setIsSelected(value);
        }}
      >
        <Text mr="8px">{v}</Text>
        {isSelected && <FaCheck color="#1fba9c" size="14px" />}
        {!isSelected && <FaPlus size="16px" color="#bbc4c0" />}
      </Flex>
    );
  };

  const StackTagView = (v: string) => {
    return (
      <Flex
        key={v}
        bg="#f3f5f8"
        borderRadius="20px"
        pl="16px"
        pr="16px"
        pt="8px"
        pb="8px"
        fontSize="14px"
        alignItems="center"
      >
        <Text mr="8px">{v}</Text>
        <IoClose
          cursor="pointer"
          color="grey"
          size="18px"
          onClick={() => {
            let deleteIdx = selectedTechStacks.findIndex((s) => s === v);
            selectedTechStacks.splice(deleteIdx, 1);

            setSelectedTechStacks([...selectedTechStacks]);
          }}
        />
      </Flex>
    );
  };

  const RewardView = () => {
    return (
      <>
        <Text mt="80px">수상 및 기타</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.
• 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!`}
          </Text>
        </Box>

        <Text
          mt="30px"
          mb="30px"
          fontSize="18px"
          color={textBlue}
          cursor="pointer"
          onClick={() => {
            let newElement = {
              id: getRandomInt(0, 1000),
              date: "",
              title: "",
              desc: "",
            };
            setRewardList([...rewardList, newElement]);
          }}
        >
          + 추가
        </Text>

        {rewardList.map((v, index) => {
          return (
            <Flex
              borderTop={attrBorderGrey}
              p="20px"
              key={index}
              alignItems="start"
            >
              <input
                placeholder="YYYY. MM"
                className="inputWithoutBorder"
                style={{ fontSize: "14px", width: "400px" }}
                value={v.date}
                onChange={(e) => {
                  let editIndex = rewardList.findIndex((e) => e.id === v.id);
                  rewardList[editIndex].date = e.currentTarget.value;
                  setRewardList([...rewardList]);
                }}
              />

              <Box>
                <input
                  placeholder="활동명"
                  className="inputWithoutBorder"
                  style={{ fontSize: "18px", width: "400px" }}
                  value={v.title}
                  onChange={(e) => {
                    let editIndex = rewardList.findIndex((e) => e.id === v.id);
                    rewardList[editIndex].title = e.currentTarget.value;
                    setRewardList([...rewardList]);
                  }}
                />

                <input
                  placeholder="세부사항"
                  className="inputWithoutBorder"
                  style={{ fontSize: "14px", width: "400px" }}
                  value={v.desc}
                  onChange={(e) => {
                    let editIndex = rewardList.findIndex((e) => e.id === v.id);
                    rewardList[editIndex].desc = e.currentTarget.value;
                    setRewardList([...rewardList]);
                  }}
                />
              </Box>

              <IoClose
                cursor="pointer"
                color="grey"
                size="30px"
                onClick={() => {
                  let deleteIdx = rewardList.findIndex((s) => s === v);
                  rewardList.splice(deleteIdx, 1);
                  setRewardList([...rewardList]);
                }}
              />
            </Flex>
          );
        })}
      </>
    );
  };

  const LinkView = () => {
    return (
      <>
        <Text mt="80px">링크</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요.`}
          </Text>
        </Box>

        <Text
          mt="30px"
          mb="30px"
          fontSize="18px"
          color={textBlue}
          cursor="pointer"
          onClick={() => {
            let newElement = {
              id: getRandomInt(0, 1000),
              url: "",
              desc: "",
            };
            setLinkList([...linkList, newElement]);
          }}
        >
          + 추가
        </Text>

        {linkList.map((v, index) => {
          return (
            <Box borderTop={attrBorderGrey} p="20px" key={index}>
              <Flex mb="16px">
                <input
                  placeholder="url"
                  className="inputWithoutBorder"
                  style={{ fontSize: "16px", width: "400px" }}
                  value={v.url}
                  onChange={(e) => {
                    let editIndex = linkList.findIndex((e) => e.id === v.id);
                    linkList[editIndex].url = e.currentTarget.value;
                    setLinkList([...linkList]);
                  }}
                />

                <Spacer />

                <IoClose
                  cursor="pointer"
                  color="grey"
                  size="18px"
                  onClick={() => {
                    let deleteIdx = linkList.findIndex((s) => s === v);
                    linkList.splice(deleteIdx, 1);
                    setLinkList([...linkList]);
                  }}
                />
              </Flex>

              <input
                placeholder="링크 설명"
                className="inputWithoutBorder"
                style={{ fontSize: "14px", width: "100%", color: "grey" }}
                value={v.desc}
                onChange={(e) => {
                  let editIndex = linkList.findIndex((e) => e.id === v.id);
                  linkList[editIndex].desc = e.currentTarget.value;
                  setLinkList([...linkList]);
                }}
              />
            </Box>
          );
        })}
      </>
    );
  };

  const LanguageView = () => {
    return (
      <>
        <Text mt="80px">외국어</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 외국어 자격증을 보유한 경우 작성해주세요. 
• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요.`}
          </Text>
        </Box>

        <Text
          mt="30px"
          mb="30px"
          fontSize="18px"
          color={textBlue}
          cursor="pointer"
          onClick={() => {
            let newElement = {
              id: getRandomInt(0, 1000),
              language: "",
              level: "",
            };
            setLanguageList([...languageList, newElement]);
          }}
        >
          + 추가
        </Text>

        {languageList.map((v, index) => {
          return (
            <Box borderTop={attrBorderGrey} p="20px" key={index}>
              <Flex mb="4px">
                <input
                  placeholder="언어"
                  className="inputWithoutBorder"
                  style={{ fontSize: "18px", width: "400px" }}
                  value={v.language}
                  onChange={(e) => {
                    let editIndex = languageList.findIndex(
                      (e) => e.id === v.id
                    );
                    languageList[editIndex].language = e.currentTarget.value;
                    setLanguageList([...languageList]);
                  }}
                />

                <Spacer />

                <IoClose
                  cursor="pointer"
                  color="grey"
                  size="18px"
                  onClick={() => {
                    let deleteIdx = languageList.findIndex((s) => s === v);
                    languageList.splice(deleteIdx, 1);
                    setLanguageList([...languageList]);
                  }}
                />
              </Flex>

              <input
                placeholder="구사 수준"
                className="inputWithoutBorder"
                style={{ fontSize: "15px", width: "100%", color: "grey" }}
                value={v.level}
                onChange={(e) => {
                  let editIndex = languageList.findIndex((e) => e.id === v.id);
                  languageList[editIndex].level = e.currentTarget.value;
                  setLanguageList([...languageList]);
                }}
              />
            </Box>
          );
        })}
      </>
    );
  };

  const SchoolView = () => {
    return (
      <>
        <Text mt="80px">학력</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 최신순으로 작성해주세요.`}
          </Text>
        </Box>

        <Text
          mt="30px"
          mb="30px"
          fontSize="18px"
          color={textBlue}
          cursor="pointer"
          onClick={() => {
            let newElement = {
              id: getRandomInt(0, 1000),
              date: "",
              isDoing: false,
              title: "",
              department: "",
              desc: "",
            };
            setSchoolList([...schoolList, newElement]);
          }}
        >
          + 추가
        </Text>

        {schoolList.map((v, index) => {
          return (
            <Flex
              borderTop={attrBorderGrey}
              p="20px"
              key={index}
              alignItems="start"
            >
              <Box>
                <input
                  placeholder="YYYY. MM - YYYY. MM"
                  className="inputWithoutBorder"
                  style={{ fontSize: "14px", width: "400px" }}
                  value={v.date}
                  onChange={(e) => {
                    let editIndex = schoolList.findIndex((e) => e.id === v.id);
                    schoolList[editIndex].date = e.currentTarget.value;
                    setSchoolList([...schoolList]);
                  }}
                />

                <Flex mt="16px" ml="4px">
                  <input
                    type="checkbox"
                    checked={v.isDoing}
                    onChange={(e) => {
                      let editIndex = schoolList.findIndex(
                        (e) => e.id === v.id
                      );

                      schoolList[editIndex].isDoing = e.currentTarget.checked;
                      setSchoolList([...schoolList]);
                    }}
                  />
                  <Text
                    ml="8px"
                    fontSize="14px"
                    color="grey"
                    onClick={() => {
                      let editIndex = schoolList.findIndex(
                        (e) => e.id === v.id
                      );
                      schoolList[editIndex].isDoing =
                        !schoolList[editIndex].isDoing;
                      setSchoolList([...schoolList]);
                    }}
                  >
                    현재 재직중
                  </Text>
                </Flex>
              </Box>

              <Box>
                <input
                  placeholder="활동명"
                  className="inputWithoutBorder"
                  style={{ fontSize: "18px", width: "400px" }}
                  value={v.title}
                  onChange={(e) => {
                    let editIndex = schoolList.findIndex((e) => e.id === v.id);
                    schoolList[editIndex].title = e.currentTarget.value;
                    setSchoolList([...schoolList]);
                  }}
                />

                <input
                  placeholder="전공 및 학위 (ex: 경영학과 학사)"
                  className="inputWithoutBorder"
                  style={{ fontSize: "15px", width: "400px" }}
                  value={v.department}
                  onChange={(e) => {
                    let editIndex = schoolList.findIndex((e) => e.id === v.id);
                    schoolList[editIndex].department = e.currentTarget.value;
                    setSchoolList([...schoolList]);
                  }}
                />

                <input
                  placeholder="이수과목 또는 연구내용"
                  className="inputWithoutBorder"
                  style={{ fontSize: "13px", width: "400px" }}
                  value={v.desc}
                  onChange={(e) => {
                    let editIndex = schoolList.findIndex((e) => e.id === v.id);
                    schoolList[editIndex].desc = e.currentTarget.value;
                    setSchoolList([...schoolList]);
                  }}
                />
              </Box>

              <IoClose
                cursor="pointer"
                color="grey"
                size="30px"
                onClick={() => {
                  let deleteIdx = schoolList.findIndex((s) => s === v);
                  schoolList.splice(deleteIdx, 1);
                  setSchoolList([...schoolList]);
                }}
              />
            </Flex>
          );
        })}
      </>
    );
  };

  const TechView = () => {
    return (
      <>
        <Text mt="80px">스킬</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.
• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.`}
          </Text>
        </Box>
        <Box bg="#f5fcf8" p="12px" mt="20px">
          <Flex>
            <Text fontSize="12px" mb="15px">
              같은 직무의 서류 합격 이력서에서 많이 사용된 스킬입니다. 스킬을
              추가해보세요!
            </Text>
            <Spacer />
            <Text
              fontSize="14px"
              cursor="pointer"
              onClick={() => {
                setIsStackOpened(!isStackOpened);
              }}
            >
              {isStackOpened ? "닫기" : "더보기"}
            </Text>
          </Flex>

          <Stack>
            {RenderTechstacks(defaultTechstacks, 7, GreenStackView)}
          </Stack>
        </Box>
        <Stack mt="16px">
          {RenderTechstacks(selectedTechStacks, 7, StackTagView)}
        </Stack>
      </>
    );
  };

  const CareerView = () => {
    const PerformanceView = (v: any, parentId: number) => {
      return (
        <Box className="hover:bg-white" p="24px" key={v.id}>
          <Flex alignItems="center">
            <IoIosMenu size="22px" color="grey" />
            <Box mr="8px" ml="8px">
              <GoDotFill />
            </Box>
            <input
              placeholder="주요 성과"
              className="inputWithoutBorder"
              style={{ fontSize: "16px", width: "100%" }}
              value={v.title}
              onChange={(e) => {
                let parentIndex = careerList.findIndex(
                  (e) => e.id === parentId
                );
                let editIndex = careerList[
                  parentIndex
                ].performanceList.findIndex((e: any) => e.id === v.id);
                (
                  careerList[parentIndex].performanceList[editIndex] as any
                ).title = e.currentTarget.value;
                setCareerList([...careerList]);
              }}
            />

            <Spacer />
            <IoClose
              color="grey"
              size="20px"
              cursor="pointer"
              onClick={() => {
                let parentIndex = careerList.findIndex(
                  (e) => e.id === parentId
                );
                let deleteIdx = careerList[
                  parentIndex
                ].performanceList.findIndex((e: any) => e.id === v.id);
                careerList[parentIndex].performanceList.splice(deleteIdx, 1);
                setCareerList([...careerList]);
              }}
            />
          </Flex>

          <Box ml="54px" mt="8px">
            <input
              placeholder="YYYY.MM - YYYY.MM"
              className="inputWithoutBorder"
              style={{ fontSize: "14px", width: "100%" }}
              value={v.date}
              onChange={(e) => {
                let parentIndex = careerList.findIndex(
                  (e) => e.id === parentId
                );
                let editIndex = careerList[
                  parentIndex
                ].performanceList.findIndex((e: any) => e.id === v.id);
                (
                  careerList[parentIndex].performanceList[editIndex] as any
                ).date = e.currentTarget.value;
                setCareerList([...careerList]);
              }}
            />
            <input
              placeholder="상세 업무 내역과 성과를 기입해주세요."
              className="inputWithoutBorder"
              style={{ fontSize: "14px", width: "100%" }}
              value={v.desc}
              onChange={(e) => {
                let parentIndex = careerList.findIndex(
                  (e) => e.id === parentId
                );
                let editIndex = careerList[
                  parentIndex
                ].performanceList.findIndex((e: any) => e.id === v.id);
                (
                  careerList[parentIndex].performanceList[editIndex] as any
                ).desc = e.currentTarget.value;
                setCareerList([...careerList]);
              }}
            />
          </Box>
        </Box>
      );
    };

    return (
      <>
        <Text mt="80px">경력</Text>
        <Box borderTop={attrBorderGrey} mt="8px" />
        <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
          <Text whiteSpace="pre-line" fontSize="12px" color="grey">
            {`• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. 
• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요. 
• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. 
• 업무 성과는 되도록 구체적인 숫자 혹은 %로 표현해주세요!
• 커리어 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요.`}
          </Text>
        </Box>

        <Flex
          alignItems="center"
          border={attrBorderGrey}
          p="8px"
          w="140px"
          borderRadius="8px"
          className="hover:bg-gray-50"
          cursor="pointer"
          mt="20px"
          onClick={() => {
            let newElement = {
              id: getRandomInt(0, 1000),
              date: "",
              isWorking: false,
              company: "",
              department: "",
              performanceList: [],
            };
            setCareerList([...careerList, newElement]);
          }}
        >
          <Spacer />
          <FaPlus size="18px" />
          <Text fontSize="15px" ml="4px">
            직접 추가하기
          </Text>
          <Spacer />
        </Flex>

        {careerList.map((v, index) => {
          return (
            <Flex
              key={index}
              borderBottom={attrBorderGrey}
              mt="24px"
              className="hover:bg-gray-50"
              p="24px"
            >
              <Box>
                <Flex>
                  <Box mr="4px">
                    <IoIosMenu size="22px" color="grey" />
                  </Box>
                  <input
                    placeholder="YYYY.MM - YYYY.MM"
                    className="inputWithoutBorder"
                    style={{ fontSize: "14px", width: "140px" }}
                    value={v.date}
                    onChange={(e) => {
                      let editIndex = careerList.findIndex(
                        (e) => e.id === v.id
                      );
                      careerList[editIndex].date = e.currentTarget.value;
                      setCareerList([...careerList]);
                    }}
                  />
                </Flex>

                <Flex mt="16px" ml="4px">
                  <input
                    type="checkbox"
                    checked={v.isWorking}
                    onChange={(e) => {
                      let editIndex = careerList.findIndex(
                        (e) => e.id === v.id
                      );
                      careerList[editIndex].isWorking = e.currentTarget.checked;
                      setCareerList([...careerList]);
                    }}
                  />
                  <Text
                    ml="8px"
                    fontSize="14px"
                    color="grey"
                    onClick={() => {
                      let editIndex = careerList.findIndex(
                        (e) => e.id === v.id
                      );
                      careerList[editIndex].isWorking =
                        !careerList[editIndex].isWorking;
                      setCareerList([...careerList]);
                    }}
                  >
                    현재 재직중
                  </Text>
                </Flex>
              </Box>

              <Box ml="80px" w="100%">
                <input
                  placeholder="회사명"
                  className="inputWithoutBorder"
                  style={{ fontSize: "20px", width: "100%" }}
                  value={v.company}
                  onChange={(e) => {
                    let editIndex = careerList.findIndex((e) => e.id === v.id);
                    careerList[editIndex].company = e.currentTarget.value;
                    setCareerList([...careerList]);
                  }}
                />

                <Box mt="2px">
                  <input
                    placeholder="부서명/직책"
                    className="inputWithoutBorder"
                    style={{ fontSize: "16px", width: "100%" }}
                    value={v.department}
                    onChange={(e) => {
                      let editIndex = careerList.findIndex(
                        (e) => e.id === v.id
                      );
                      careerList[editIndex].department = e.currentTarget.value;
                      setCareerList([...careerList]);
                    }}
                  />
                </Box>

                <Text
                  mt="20px"
                  mb="20px"
                  fontSize="16px"
                  color={textBlue}
                  cursor="pointer"
                  onClick={() => {
                    let editIndex = careerList.findIndex((e) => e.id === v.id);
                    careerList[editIndex].performanceList = [
                      ...careerList[editIndex].performanceList,
                      {
                        id: getRandomInt(0, 1000),
                        title: "",
                        date: "",
                        desc: "",
                      },
                    ] as any;

                    setCareerList([...careerList]);
                  }}
                >
                  + 주요 성과 추가
                </Text>

                {/* 성과 리스트 */}
                {v.performanceList.map((e: any) => {
                  return PerformanceView(e, v.id);
                })}
              </Box>

              <Spacer />
              <IoClose
                color="grey"
                size="24px"
                cursor="pointer"
                onClick={() => {
                  let deleteIdx = careerList.findIndex((e) => e.id === v.id);
                  careerList.splice(deleteIdx, 1);
                  setCareerList([...careerList]);
                }}
              />
            </Flex>
          );
        })}
      </>
    );
  };

  return (
    <Stack pl="50px" pr="50px" pt="20px" position="relative">
      <Box bg="#f8f8f8" w="100%" p="20px">
        <Flex alignItems="center">
          <Text color="#8958fb" fontSize="14px" fontWeight="bold" mr="4px">
            기본 이력서
          </Text>
          <FaCheckCircle size="12px" color="#8958fb" />

          <Text
            color="#1fba9c"
            fontSize="14px"
            fontWeight="bold"
            ml="8px"
            mr="4px"
          >
            경력인증
          </Text>
          <FaCheckCircle size="12px" color="#1fba9c" />

          <Text fontSize="14px" color="black/80" ml="12px">
            커리어 조회를 통해 인증된 이력서는 채용담당자로부터 면접 제안받을
            확률이 높아집니다.
          </Text>
        </Flex>
      </Box>
      <Box mt="30px">
        <input
          placeholder="이력서 제목(필수)"
          className="inputWithoutBorder"
          style={{ fontSize: "36px", width: "100%" }}
          value={titleText}
          onChange={(e) => {
            setTitleText(e.currentTarget.value);
          }}
        />
      </Box>
      <Box mt="30px">
        <input
          placeholder="이름(필수)"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
          value={nameText}
          onChange={(e) => {
            setNameText(e.currentTarget.value);
          }}
        />

        <Box mt="8px" />

        <input
          placeholder="이메일(필수)"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
          value={emailText}
          onChange={(e) => {
            setEmailText(e.currentTarget.value);
          }}
        />

        <Box mt="8px" />

        <input
          placeholder="연락처(필수) ex) 010-0000-0000"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
          value={phoneText}
          onChange={(e) => {
            setPhoneText(e.currentTarget.value);
          }}
        />
      </Box>
      <Text mt="80px">간단 소개글</Text>
      <Box borderTop={attrBorderGrey} mt="8px" />
      <Box bg="#f3f9fe" pl="12px" pr="12px" pt="8px" pb="8px" mt="8px">
        <Text whiteSpace="pre-line" fontSize="12px" color="grey">
          {`• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요. 
          • 3~5줄로 요약하여 작성하는 것을 추천합니다!`}
        </Text>
      </Box>
      <Box mt="28px">
        <input
          placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
          value={introText}
          onChange={(e) => {
            setIntroText(e.currentTarget.value);
          }}
        />
      </Box>
      {CareerView()}
      {SchoolView()}
      {TechView()}
      {RewardView()}
      {LanguageView()}
      {LinkView()}
      <Box mt="150px" />

      {/* 하단 뷰 */}
      <Flex
        borderTop={attrBorderGrey}
        position="fixed"
        bottom="0px"
        w="100%"
        p="12px"
        bg="white"
        ml="-50px"
        mr="-50px"
      >
        <Box flex={1} />
        <Box
          w="180px"
          borderRadius="12px"
          p="10px"
          fontSize="16px"
          color="white"
          textAlign="center"
          className="bg-[#0166ff] hover:bg-[#005ae2]"
          cursor="pointer"
        >
          작성 완료
        </Box>
      </Flex>
    </Stack>
  );
}
