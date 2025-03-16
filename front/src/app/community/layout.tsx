"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";
import { GoPlus } from "react-icons/go";
import { profileData } from "../global-data";
import { usePathname } from "next/navigation";

const coffeeChatList = [
  {
    imgSrc: "/google.png",
    name: "디벨로퍼",
    career: "개발 3년차 · 디벨로퍼랩",
    desc: "올라운더 개발자를 목표로 공부하고 있습니다. CTO급의 개발자가 되기위해 공부합니다.",
  },
  {
    imgSrc: "/google.png",
    name: "디벨로퍼",
    career: "개발 3년차 · 디벨로퍼랩",
    desc: "올라운더 개발자를 목표로 공부하고 있습니다. CTO급의 개발자가 되기위해 공부합니다.",
  },
  {
    imgSrc: "/google.png",
    name: "디벨로퍼",
    career: "개발 3년차 · 디벨로퍼랩",
    desc: "올라운더 개발자를 목표로 공부하고 있습니다. CTO급의 개발자가 되기위해 공부합니다.",
  },
];

export default function CommunityRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isProfilePage = pathname.includes("/community/profile");
  const [isExpanded, setIsExpanded] = useState(false);

  const TeamProfile = (v: any, index: number) => {
    return (
      <Flex alignItems="center" mb="20px" key={index}>
        <Image src={v.imageSrc} w="35px" h="35px" borderRadius="50%" />
        <Box ml="12px">
          <Text fontSize={16} fontWeight="bold">
            {v.title}
          </Text>
          <Text fontSize={13} color="grey">
            팀 프로필
          </Text>
        </Box>

        <Spacer />

        <Button size="xs" variant="outline" fontWeight="bold" borderRadius={6}>
          {v.isFollowing ? "팔로잉" : "팔로우"}
        </Button>
      </Flex>
    );
  };

  const LeftView = () => {
    return (
      <Box p="20px" w="340px">
        {/* 프로필, 글 작성 버튼 */}
        <Flex alignItems="center" mb="20px">
          <Image src="/google.png" w="35px" h="35px" />
          <Box ml="12px">
            <Text fontSize={16} fontWeight="bold">
              디벨로퍼
            </Text>
            <Text fontSize={13} color="grey">
              개발
            </Text>
          </Box>

          <Spacer />

          <Button
            size="xs"
            variant="outline"
            fontWeight="bold"
            borderRadius={6}
          >
            글 작성
          </Button>
        </Flex>

        <Box borderBottom={attrBorderGrey} mb="20px" />

        {/* 나의 팀  */}
        <Text color="grey" fontSize={14}>
          나의 팀
        </Text>

        <Flex alignItems="center" mt="20px" mb="20px">
          <Box
            border={attrBorderGrey}
            borderRadius="50%"
            p="5px"
            className="hover:bg-gray-100"
          >
            <GoPlus size={26} />
          </Box>
          <Text fontSize={14} ml="12px">
            팀 생성
          </Text>
        </Flex>

        <Box borderBottom={attrBorderGrey} mb="20px" />

        <Text color="grey" fontSize={14} mb="20px">
          추천 프로필
        </Text>

        {profileData.map((v, index) => {
          if (index < 3 || isExpanded) {
            return TeamProfile(v, index);
          }
          return <Box key={index}></Box>;
        })}

        <Flex>
          <Spacer />
          <Text
            fontSize={14}
            color="grey"
            mb="20px"
            className="hover:bg-gray-100"
            p="2px"
            borderRadius="1px"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "접기" : "더보기"}
          </Text>
        </Flex>

        <Box borderBottom={attrBorderGrey} mb="20px" />
      </Box>
    );
  };

  const CoffeeChatItemView = (v: any) => {
    return (
      <Box>
        <Flex alignItems="center">
          <Image src={v.imgSrc} w="32px" h="32px" />
          <Box ml="8px">
            <Text fontSize="15px" fontWeight="semibold">
              {v.name}
            </Text>
            <Text fontSize="13px" color="grey">
              {v.career}
            </Text>
          </Box>

          <Spacer />

          <Box
            border={attrBorderGrey2}
            fontSize="13px"
            pl="12px"
            pr="12px"
            pt="4px"
            pb="4px"
            borderRadius="8px"
            className="bg-white hover:bg-gray-100"
          >
            커피챗
          </Box>
        </Flex>

        <Text fontSize="13px" mt="8px">
          {v.desc}
        </Text>
      </Box>
    );
  };

  const CoffeeChatView = () => {
    return (
      <Box w="340px" h="430px" bg="#f7f7f8" borderRadius="16px" p="20px">
        <Flex alignItems="center" mb="12px">
          <Text fontSize="20px" fontWeight="semibold">
            커피챗
          </Text>

          <Badge
            colorPalette="purple"
            size="xs"
            h="18px"
            color="#cb5cfe"
            fontSize="10px"
            ml="4px"
          >
            NEW
          </Badge>
        </Flex>

        {coffeeChatList.map((v, index) => {
          return (
            <Box
              key={index}
              borderBottom={
                index < coffeeChatList.length - 1 ? attrBorderGrey : undefined
              }
              pt={index > 0 ? "16px" : undefined}
              pb={index < coffeeChatList.length - 1 ? "16px" : undefined}
              cursor="pointer"
            >
              {CoffeeChatItemView(v)}
            </Box>
          );
        })}

        <Flex>
          <Spacer />

          <Text
            fontSize="14px"
            color="grey"
            _hover={{ color: "black" }}
            cursor="pointer"
          >
            멘토 더보기
          </Text>
        </Flex>
      </Box>
    );
  };

  return (
    <>
      <Flex>
        <Spacer />

        <Flex alignItems="flex-start">
          {/* Left Border */}
          {!isProfilePage && (
            <Box
              borderLeft={attrBorderGrey2}
              h="100%"
              className="hidden lg:block"
            />
          )}

          {!isProfilePage && (
            <Box className="hidden lg:block sticky top-[80px]">
              <LeftView />
            </Box>
          )}

          {/* Right Border */}
          {!isProfilePage && (
            <Box
              borderLeft={attrBorderGrey2}
              h="100%"
              className="hidden lg:block"
            />
          )}

          <Box maxW="700px" ml="50px" mr="50px">
            {children}
          </Box>

          {/* 우측 커피챗 뷰 */}
          {!isProfilePage && (
            <Box className="hidden 2xl:block sticky top-[80px]">
              <CoffeeChatView />
            </Box>
          )}
        </Flex>

        <Spacer />
      </Flex>
    </>
  );
}
