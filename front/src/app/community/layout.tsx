"use client";

import { useState } from "react";
import { Box, Button, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { attrBorderGrey } from "@/color";
import { GoPlus } from "react-icons/go";
import { profileData } from "../global-data";
import { usePathname } from "next/navigation";

export default function CommunityRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

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
      <Box border={attrBorderGrey} p="20px" w="340px">
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

  return (
    <>
      <Flex>
        {!pathname.includes("/community/profile") && (
          <Box flex={3} className="hidden lg:block">
            <LeftView />
          </Box>
        )}

        <Box flex={7}>{children}</Box>
      </Flex>
    </>
  );
}
