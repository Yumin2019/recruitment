"use client";

import { Footer } from "@/components/footer";
import { useEffect, useMemo, useState } from "react";
import { Box, Button, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { attrBorderGrey } from "@/color";
import { HiDotsVertical } from "react-icons/hi";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { getCountOfLines } from "@/util";

const postTypeList = [
  {
    title: "전체",
    value: "all",
  },
  {
    title: "직장 생활",
    value: "jobLife",
  },
  {
    title: "일상",
    value: "daily",
  },
  {
    title: "커리어",
    value: "career",
  },
  {
    title: "소통",
    value: "communication",
  },
  {
    title: "마케팅, 광고",
    value: "marketing",
  },
  {
    title: "휴식 및 취미",
    value: "rest",
  },
];

const postDataList = [
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `이전 회사에서 추구하던 핵심 가치 중 하나가 integrity라는 것이었습니다. integrity를 한국어로 직역하면 진실되게 행동한다는 의미입니다. 그리고 integrity 한 사람이 되자는 그 회사의 선언도 한국어 뜻과 맥락이 같습니다. 누가 보지 않더라도, 누가 통제하지 않더라도 자율적으로 행동하자는 것입니다.

누가 보지 않더라도 바르게 행동한다는 것이 인간에게 매우 어려운 과제입니다. 편리하게 살고 싶고, 이기적으로 행동하고 싶은 것이 사람 마음이기 때문입니다. 그래서 사람들 사이에 있을 땐, 친절하고 양보도 잘 합니다. 그러나 혼자 있을 때나 주변에 아는 사람이 거의 없을 때, 이기적인 행동이 자연스럽게 출연합니다.

저도 그렇습니다. 회사에서는 동료들에게 가능한 많이 웃고, 친절하게 행동하며, 물건이나 차례를 양보하려고 노력합니다. 그러나 공동체 밖으로 나오면 행동이 달라집니다. 얼굴에 미소가 옅어지고, 내 차례를 악착같이 챙기려고 노력합니다. 그러다가 누가 조금만 불편하게 만들면 어김없이 눈살을 찌푸립니다.`,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `[데이터 분석 팀프로젝트] 모든 직종에서 필수역량입니다. 
  
  안녕하세요 : > COCOCO 코딩클럽입니다. 반갑습니다 !
  이제 GA4나 SQL은 단순히 개발자나 IT 전문가만 필요한 기술이 아닙니다. 
  
  마케팅, 기획, 운영, 컨설팅 등 다양한 분야에서 강력한 경쟁력을 가질 수 있습니다.`,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `[데이터 분석 팀프로젝트] 모든 직종에서 필수역량입니다. 
  
  안녕하세요 : > COCOCO 코딩클럽입니다. 반갑습니다 !
  이제 GA4나 SQL은 단순히 개발자나 IT 전문가만 필요한 기술이 아닙니다. 
  
  마케팅, 기획, 운영, 컨설팅 등 다양한 분야에서 강력한 경쟁력을 가질 수 있습니다.`,
  },
];

export default function CommunityPage() {
  const [postType, setPostType] = useState("all");

  const TypeTag = (v: any, index: number) => {
    return (
      <Box
        key={index}
        fontSize={12}
        bg={v.value === postType ? "black" : "white"}
        color={v.value === postType ? "white" : "black"}
        border={attrBorderGrey}
        pl="8px"
        pr="8px"
        pt="6px"
        pb="6px"
        borderRadius={8}
        onClick={() => {
          setPostType(v.value);
        }}
      >
        {v.title}
      </Box>
    );
  };

  const PostView = (v: any, index: number) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isPostExpanded, setIsPostExpanded] = useState(false);
    const lineCounts = useMemo(() => getCountOfLines(v.text), []);

    return (
      <Box key={index}>
        <Flex alignItems="center">
          <Image w="45px" h="45px" borderRadius="50%" src={v.imageSrc} />

          <Box ml="8px">
            <Text fontSize={18} fontWeight="bold">
              {v.name}
            </Text>
            <Text fontSize={14} color="#858588">
              {`${v.category} ・ ${v.date}`}
            </Text>
          </Box>

          <Spacer />

          <Button
            size="xs"
            variant="outline"
            fontWeight="bold"
            borderRadius={6}
            mr="8px"
          >
            {isFollowing ? "팔로잉" : "팔로우"}
          </Button>

          <MenuRoot>
            <MenuTrigger asChild>
              <Box className="hover:bg-gray-100" p="4px" borderRadius="50%">
                <HiDotsVertical size={20} />
              </Box>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="reportPost"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                게시글 신고하기
              </MenuItem>
              <MenuItem
                value="reportUser"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                사용자 신고하기
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>

        <Text
          fontSize={14}
          whiteSpace="pre-line"
          lineClamp={isPostExpanded ? 1000 : 5}
        >
          {v.text}
          {}
        </Text>

        {!isPostExpanded && lineCounts > 5 && (
          <Text
            fontSize={15}
            color="grey"
            fontWeight="bold"
            className="hover:bg-gray-100"
            w="60px"
            onClick={() => {
              setIsPostExpanded(true);
            }}
          >
            ...더 보기
          </Text>
        )}
      </Box>
    );
  };

  return (
    <>
      {/* 태그 리스트 */}
      <Flex gapX="8px">
        {postTypeList.map((v, index) => {
          return TypeTag(v, index);
        })}
      </Flex>

      {/* 글쓰기 항목 */}
      <Flex alignItems="center" mt="30px">
        <Image src="/google.png" w="35px" h="35px" />
        <Text color="#c7c8c9" fontSize={16} ml="12px">
          나누고 싶은 생각을 공유해 보세요!
        </Text>
      </Flex>

      <Box borderBottom={attrBorderGrey} mt="20px" />

      {postDataList.map((v, index) => {
        return PostView(v, index);
      })}

      <Box mt={1000}></Box>
    </>
  );
}
