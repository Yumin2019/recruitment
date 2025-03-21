"use client";

import { attrBorderGrey, textBlue } from "@/color";
import { RenderTechstacks } from "@/components/tag-list";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ResumeEditPage() {
  const [titleText, setTitleText] = useState("개발자 김유민입니다.");
  const [isStackOpened, setIsStackOpened] = useState(false);
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
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
    "Spring Framework",
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

  const GreenStackView = (v: string, index: number) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Flex
        key={index}
        bg="#e5f4ed"
        borderRadius="20px"
        pl="16px"
        pr="16px"
        pt="8px"
        pb="8px"
        fontSize="14px"
        alignItems="center"
        border={
          isSelected ? "1px solid #1fba9c" : "1px solid rgba(0, 0, 0, 0.0)"
        }
        cursor="pointer"
        onClick={() => {
          let value = !isSelected;
          let arr: string[] = [...selectedTechStacks];
          if (value) {
            arr.push(v);
          } else {
            arr.splice(index, 1);
          }

          setSelectedTechStacks(arr as any);
          setIsSelected(value);
        }}
      >
        <Text mr="8px">{v}</Text>
        {isSelected && <FaCheck color="#1fba9c" size="14px" />}
        {!isSelected && <FaPlus size="16px" color="#bbc4c0" />}
      </Flex>
    );
  };

  const StackTagView = (v: string, index: number) => {
    return (
      <Flex
        key={index}
        bg="#f3f5f8"
        borderRadius="20px"
        pl="16px"
        pr="16px"
        pt="8px"
        pb="8px"
        fontSize="14px"
        alignItems="center"
        cursor="pointer"
      >
        <Text mr="8px">{v}</Text>
        <IoClose
          color="grey"
          size="18px"
          onClick={() => {
            // 삭제 처리
          }}
        />
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
        />
      </Box>

      <Box mt="30px">
        <input
          placeholder="이름(필수)"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
        />

        <Box mt="8px" />

        <input
          placeholder="이메일(필수)"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
        />

        <Box mt="8px" />

        <input
          placeholder="연락처(필수) ex) 010-0000-0000"
          className="inputWithoutBorder"
          style={{ fontSize: "16px", width: "100%" }}
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
      >
        <Spacer />
        <FaPlus size="18px" />
        <Text fontSize="15px" ml="4px">
          직접 추가하기
        </Text>
        <Spacer />
      </Flex>

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

      <Box bg="#f5fcf8" p="12px">
        <Flex>
          <Text fontSize="12px">
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

        <Stack>{RenderTechstacks(defaultTechstacks, 5, GreenStackView)}</Stack>
        <Stack>{RenderTechstacks(defaultTechstacks, 5, StackTagView)}</Stack>
      </Box>

      <Box mt="400px" />
    </Box>
  );
}
