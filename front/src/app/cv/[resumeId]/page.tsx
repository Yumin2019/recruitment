"use client";

import { attrBorderGrey, textBlue } from "@/color";
import { RenderTechstacks } from "@/components/tag-list";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { JSX, useCallback, useEffect, useState } from "react";
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

type Performance = {
  id: number;
  title: string;
  date: string;
  desc: string;
};

type CareerData = {
  date: string;
  isWorking: false;
  company: string;
  department: string;
  performanceList: Performance[];
};

let performanceId = 100;

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

  const [careerDataList, setCareerDataList] = useState<CareerData[]>([
    {
      // 작업중...... id로 찾아서 일괄 수정.....
      date: "2023",
      isWorking: false,
      company: "company",
      department: "department",
      performanceList: [
        {
          id: 0,
          title: "title",
          date: "date",
          desc: "desc",
        },
      ],
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

  const CareerView = (v: CareerData, index: number) => {
    const [dateText, setDateText] = useState(v.date);
    const [isWorking, setIsWorking] = useState<boolean>(v.isWorking);
    const [companyText, setCompanyText] = useState(v.company);
    const [departmentText, setDepartmentText] = useState(v.department);
    const [performanceList, setPerformanceList] = useState(v.performanceList);

    const PerformanceView = (v: any) => {
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
                let editIndex = performanceList.findIndex((e) => e.id === v.id);
                performanceList[editIndex].title = e.currentTarget.value;
                setPerformanceList([...performanceList]);
              }}
            />

            <Spacer />
            <IoClose
              color="grey"
              size="20px"
              cursor="pointer"
              onClick={() => {
                let deleteIdx = performanceList.findIndex((e) => e.id === v.id);
                if (deleteIdx !== -1) {
                  performanceList.splice(deleteIdx, 1);
                  setPerformanceList([...performanceList]);
                }
              }}
            />
          </Flex>

          <Box ml="54px" mt="8px">
            <input
              placeholder="YYYY.MM - YYYY.MM"
              className="inputWithoutBorder"
              style={{ fontSize: "14px", width: "100%" }}
              // value={perDateText}
              // onChange={(e) => {
              //   setPerDateText(e.currentTarget.value);
              // }}
            />
            <input
              placeholder="상세 업무 내역과 성과를 기입해주세요."
              className="inputWithoutBorder"
              style={{ fontSize: "14px", width: "100%" }}
              // value={descText}
              // onChange={(e) => {
              //   setDescText(descText);
              // }}
            />
          </Box>
        </Box>
      );
    };

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
              value={dateText}
              onChange={(e) => {
                setDateText(e.currentTarget.value);
              }}
            />
          </Flex>

          <Flex mt="16px" ml="4px">
            <input
              type="checkbox"
              checked={isWorking}
              onChange={(e) => {
                setIsWorking(e.target.checked);
              }}
            />
            <Text
              ml="8px"
              fontSize="14px"
              color="grey"
              onClick={() => {
                setIsWorking(!isWorking);
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
            value={companyText}
            onChange={(e) => {
              setCompanyText(e.currentTarget.value);
            }}
          />

          <Box mt="2px">
            <input
              placeholder="부서명/직책"
              className="inputWithoutBorder"
              style={{ fontSize: "16px", width: "100%" }}
              value={departmentText}
              onChange={(e) => {
                setDepartmentText(e.currentTarget.value);
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
              performanceList.push({
                id: performanceId++,
                title: "",
                date: "",
                desc: "",
              });
              setPerformanceList([...performanceList]);
            }}
          >
            + 주요 성과 추가
          </Text>

          {/* 성과 리스트 */}
          {performanceList.map((v: any) => {
            return PerformanceView(v);
          })}
        </Box>

        <Spacer />
        <IoClose color="grey" size="24px" cursor="pointer" />
      </Flex>
    );
  };

  return (
    <Box pl="50px" pr="50px">
      <Box bg="#f8f8f8" w="100%" p="14px">
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
          // careerViewList.push({
          //   idx: careerViewIdx,
          //   element: CareerView(careerViewIdx, deleteItem),
          // });
          // ++careerViewIdx;
          // setCareerViewList([...careerViewList]);
        }}
      >
        <Spacer />
        <FaPlus size="18px" />
        <Text fontSize="15px" ml="4px">
          직접 추가하기
        </Text>
        <Spacer />
      </Flex>

      {/* 커리어 뷰 리스트 */}
      {careerDataList.map((v, index) => {
        return CareerView(v, index);
      })}

      {/* 학력 항목 */}
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
          console.log("추가");
        }}
      >
        + 추가
      </Text>

      {/* 스킬 항목 */}
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

        <Stack>{RenderTechstacks(defaultTechstacks, 7, GreenStackView)}</Stack>
      </Box>

      <Stack mt="16px">
        {RenderTechstacks(selectedTechStacks, 7, StackTagView)}
      </Stack>

      {/* 수상 및 기타 */}
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
          console.log("추가");
        }}
      >
        + 추가
      </Text>

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
          console.log("추가");
        }}
      >
        + 추가
      </Text>

      <Text mt="80px">외국어</Text>
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
          console.log("추가");
        }}
      >
        + 추가
      </Text>

      <Box mt="700px" />
    </Box>
  );
}
