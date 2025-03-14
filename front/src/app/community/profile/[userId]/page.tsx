"use client";

import { useState } from "react";
import { Box, Flex, Spacer, Text, Image, Tabs } from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";
import { copyCipboard, successToast } from "@/util";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const careerList = [
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
];

const schoolList = [
  {
    name: "한세사이버보안고등학교",
    desc: "해킹보안과",
    date: "2018.01 - 2021.01 · 3년",
    src: "/developer_logo.png",
  },
];

const peopleList = ["/google.png", "/apple.png", "/facebook.png"];

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);

  const RowView = (v: any) => {
    return (
      <Flex alignItems="center" mt="8px">
        <Image
          src={v.src}
          w="50px"
          h="50px"
          border={attrBorderGrey}
          borderRadius="8px"
        />

        <Box ml="10px" w="100%">
          <Text fontSize="16px" fontWeight="bold">
            {v.name}
          </Text>

          <Flex color="grey" fontSize="13px" mt="2px">
            <Text>{v.desc}</Text>
            <Spacer />
            <Text>{v.date}</Text>
          </Flex>
        </Box>
      </Flex>
    );
  };

  const ProfileTab = () => {
    return (
      <>
        <Flex>
          <Box flex={7} p="30px">
            <Box
              border={attrBorderGrey}
              p="20px"
              borderRadius="12px"
              bg="#fdfbfc"
            >
              <Text fontSize="16px" fontWeight="bold">
                소개
              </Text>

              <Text fontSize="15px" className="text-black/80" mt="8px">
                올라운더 개발자를 꿈꾸는 디벨로퍼라고 합니다. 창업에 특화된
                개발자로 성장하려고 합니다. CTO급의 개발자가 되기위해
                공부합니다. 올라운더 개발자를 꿈꾸는 디벨로퍼라고 합니다. 창업에
                특화된 개발자로 성장하려고 합니다. CTO급의 개발자가 되기위해
                공부합니다.
              </Text>
            </Box>

            <Box
              border={attrBorderGrey}
              p="20px"
              mt="20px"
              borderRadius="12px"
              bg="#fdfbfc"
            >
              <Text fontSize="16px" fontWeight="bold">
                경력
              </Text>

              {careerList.map((v, index) => {
                return (
                  <Box key={index}>
                    {RowView(v)}

                    {index < careerList.length - 1 && (
                      <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box
              border={attrBorderGrey}
              p="20px"
              mt="20px"
              borderRadius="12px"
              bg="#fdfbfc"
            >
              <Text fontSize="16px" fontWeight="bold">
                학력
              </Text>

              {schoolList.map((v, index) => {
                return (
                  <Box key={index}>
                    {RowView(v)}

                    {index < schoolList.length - 1 && (
                      <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
                    )}
                  </Box>
                );
              })}
            </Box>

            <Flex
              border={attrBorderGrey}
              alignItems="center"
              p="20px"
              mt="20px"
              borderRadius="12px"
              bg="#fdfbfc"
            >
              <Box>
                <Text fontSize="16px" fontWeight="bold">
                  추천
                </Text>

                <Flex alignItems="center" mt="8px" position="relative">
                  {peopleList.map((v, index) => {
                    return (
                      <Image
                        key={index}
                        src={v}
                        w="40px"
                        h="40px"
                        bg="white"
                        border={attrBorderGrey}
                        borderRadius="50%"
                        position="absolute"
                        top="0px"
                        left={5 * index}
                        zIndex={peopleList.length - index}
                      />
                    );
                  })}
                </Flex>

                <Flex mt="50px" alignItems="center">
                  <FaStar color="#ff9300" size="18px" />
                  <Text fontSize="16px" mt="3px" ml="2px">
                    구글님 외 2명이 회원님을 추천했어요.
                  </Text>
                </Flex>
              </Box>

              <Spacer />

              <Box
                pl="18px"
                pr="18px"
                h="40px"
                alignContent="center"
                right="0px"
                className="bg-white hover:bg-gray-100"
                border={attrBorderGrey}
                borderRadius={8}
              >
                추천하기
              </Box>
            </Flex>
          </Box>

          <Box flex={3}>flex2</Box>
        </Flex>
      </>
    );
  };

  const PostTab = () => {
    return <>포스트 페이지</>;
  };

  return (
    <Box bg="rgba(213, 206, 255, 0.65)">
      <Flex alignItems="center">
        <Image src="/google.png" w="100px" h="100px" />

        <Box ml="20px">
          <Text fontSize={40} fontWeight="bold">
            디벨로퍼
          </Text>

          <Flex alignItems="center" mt="4px">
            <Image
              src="/developer_logo.png"
              w="25px"
              h="25px"
              borderRadius={8}
              border={attrBorderGrey2}
            />
            <Text fontSize={16} ml="6px">
              주식회사 디벨로퍼랩 · Flutter 개발자
            </Text>
          </Flex>

          <Flex alignItems="center" mt="12px">
            <Text color="grey" mr={1}>
              팔로워
            </Text>
            <Text>· 51</Text>
            <Text color="grey" ml={2}>
              팔로잉
            </Text>
            <Text ml={2}>0</Text>
          </Flex>
        </Box>

        <Spacer />

        <Box
          pl="40px"
          pr="40px"
          pt="10px"
          pb="10px"
          mr="8px"
          borderRadius={8}
          className="bg-[#edeaf5] hover:bg-gray-300"
          bg={isFollowing ? "#0066ff" : undefined}
          color={isFollowing ? "white" : "black"}
          fontWeight="semibold"
          fontSize={16}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        >
          {isFollowing ? "팔로잉" : "팔로우"}
        </Box>

        <Box
          className="hover:bg-gray-100"
          p="10px"
          borderRadius="10px"
          border={attrBorderGrey}
          onClick={() => {
            copyCipboard("test", () => {
              successToast("링크가 복사되었습니다.");
            });
          }}
        >
          <IoShareOutline size="22px" />
        </Box>
      </Flex>

      <Tabs.Root defaultValue="profile" variant="line" mt="30px">
        <Tabs.List>
          <Tabs.Trigger value="profile" fontSize="18px" fontWeight="bold">
            프로필
          </Tabs.Trigger>
          <Tabs.Trigger value="post" fontSize="18px" fontWeight="bold">
            게시글
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="profile">
          <ProfileTab />
        </Tabs.Content>
        <Tabs.Content value="post">
          <PostTab />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
