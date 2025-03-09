"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const menuList: any = {
  all: {
    value: "all",
    title: "직군 전체",
    list: [],
  },
  dev: {
    value: "dev",
    title: "개발",
    list: [
      "소프트웨어 엔지니어",
      "서버 개발자",
      "프론트엔드 개발자",
      "웹 개발자",
      "자바 개발자",
      "파이썬 개발자",
      "머신러닝 엔지니어",
      "C,C++ 개발자",
      "데이터 엔지니어",
      "DevOps / 시스템 관리자",
      "Node.js 개발자",
      "안드로이드 개발자",
      "임베디드 개발자",
      "시스템,네트워크 관리자",
      "QA,테스트 엔지니어",
      "개발 매니저",
      "보안 엔지니어",
      "iOS 개발자",
      "데이터 사이언티스트",
      "기술지원",
      "하드웨어 엔지니어",
      "프로덕트 매니저",
      "빅데이터 엔지니어",
      "웹 퍼블리셔",
      ".NET 개발자",
      "크로스플랫폼 앱 개발자",
      "PHP 개발자",
      "블록체인 플랫폼 엔지니어",
      "영상,음성 엔지니어",
      "DBA",
      "ERP전문가",
      "그래픽스 엔지니어",
      "CTO,Chief Technology Officer",
      "루비온레일즈 개발자",
      "BI 엔지니어",
      "VR 엔지니어",
      "CIO,Chief Information Officer",
      "RPA 엔지니어",
      "테크니컬 라이터",
    ],
  },
  gamedev: {
    value: "gamedev",
    title: "게임 제작",
    list: [
      "게임 기획자",
      "게임 클라이언트 개발자",
      "게임 그래픽 디자이너",
      "게임 아티스트",
      "게임 서버 개발자",
      "모바일 게임 개발자",
      "유니티 개발자",
      "언리얼 개발자",
      "게임운영자(GM)",
    ],
  },
  design: {
    value: "design",
    title: "디자인",
    list: [
      "UX 디자이너",
      "그래픽 디자이너",
      "UI,GUI 디자이너",
      "웹 디자이너",
      "BI/BX 디자이너",
      "제품 디자이너",
      "모바일 디자이너",
      "광고 디자이너",
      "3D 디자이너",
      "공간 디자이너",
      "패션 디자이너",
      "영상,모션 디자이너",
      "인테리어 디자이너",
      "패키지 디자이너",
      "아트 디렉터",
      "2D 디자이너",
      "산업 디자이너",
      "출판, 편집 디자이너",
      "일러스트레이터",
      "캐릭터 디자이너",
      "전시 디자이너",
      "VMD",
      "패브릭 디자이너",
      "조경 디자이너",
      "가구 디자이너",
      "UX 리서처",
      "콘텐츠 디자이너",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuHover, setIsMenuHover] = useState(false);

  const HoverMenu = () => {
    const [curMenu, setCurMenu] = useState("all");

    return (
      <Box w="100%" h="250px" bg="grey">
        <Flex h="250px">
          <Box bg="white" flex={3} textAlign="center">
            {Object.entries(menuList).map((v: any, index) => {
              return (
                <Text
                  key={index}
                  fontSize={14}
                  mt={3}
                  mb={3}
                  fontWeight={v[0] === "all" ? "bold" : "normal"}
                  color="#323232"
                  _hover={{ fontWeight: "bold", color: "black" }}
                  onMouseEnter={() => {
                    setCurMenu(v[0]);
                  }}
                >
                  {v[1].title}
                </Text>
              );
            })}
          </Box>

          <Box borderLeft={attrBorderGrey} />

          <Box
            bg="white"
            flex={7}
            alignContent={curMenu === "all" ? "center" : "start"}
          >
            {curMenu === "all" ? (
              <Text textAlign="center" color="grey" fontSize={14}>
                직군을 먼저 선택하면 상세 직무를 볼 수 있어요.
              </Text>
            ) : (
              <SimpleGrid
                columns={3}
                maxH="250px"
                overflow="auto"
                pt="24px"
                pb="24px"
                gapY="12px"
              >
                {menuList[curMenu].list.map((v: any, index: number) => {
                  return (
                    <Box key={index} pl={4} h={30} alignItems="top">
                      <Text
                        fontSize={14}
                        _hover={{ fontWeight: "bold", color: "black" }}
                      >
                        {v}
                      </Text>
                    </Box>
                  );
                })}
              </SimpleGrid>
            )}
          </Box>
        </Flex>
      </Box>
    );
  };

  const Header = () => {
    return (
      <Box position="fixed" top={0} zIndex={1024} width="100%">
        <Flex
          backgroundColor="white"
          height="59px"
          alignItems="center"
          pl="20px"
          pr="20px"
          borderBottom={attrBorderGrey2}
        >
          <Image height="35px" src="/developer_logo_horizon.png" />

          <Box className="hidden md:block">
            <Flex gap={8}>
              <Flex
                ml={8}
                alignItems="center"
                className="hover:text-purple-400"
                onMouseEnter={() => {
                  console.log("start");
                  setIsMenuHover(true);
                }}
                onMouseLeave={() => {
                  console.log("end");
                }}
              >
                <RiMenu2Line size={20} />
                <Text fontSize={14} ml="4px" fontWeight="semibold">
                  채용
                </Text>
              </Flex>

              <Text
                className="hover:text-purple-400"
                fontSize={14}
                fontWeight="semibold"
              >
                커리어
              </Text>

              <Text
                className="hover:text-purple-400"
                fontSize={14}
                fontWeight="semibold"
              >
                소셜
              </Text>

              <Text
                className="hover:text-purple-400"
                fontSize={14}
                fontWeight="semibold"
              >
                이력서
              </Text>

              <Text
                className="hover:text-purple-400"
                fontSize={14}
                fontWeight="semibold"
              >
                프리랜서
              </Text>

              <Text
                className="hover:text-purple-400"
                fontSize={14}
                fontWeight="semibold"
              >
                더보기
              </Text>
            </Flex>
          </Box>

          <Spacer />
          <Flex alignItems="center" gap={1}>
            <CiSearch size={30} className="hover:text-purple-400" />
            <IoIosNotificationsOutline
              size={30}
              className="hover:text-purple-400"
            />

            <Box className="hidden lg:block">
              <Avatar.Root
                colorPalette="blue"
                size="sm"
                className="hover:scale-105 ease-in-out"
              >
                <Avatar.Fallback />
                <Avatar.Image src="https://bit.ly/broken-link" />
              </Avatar.Root>
            </Box>

            <Box className="block lg:hidden">
              <IoIosMenu size={30} className="hover:text-purple-400" />
            </Box>

            <Box className="hidden lg:block">
              <Button variant="outline" borderRadius={12} size="sm" ml={4}>
                기업 서비스
              </Button>
            </Box>
          </Flex>
        </Flex>

        {isMenuHover && <HoverMenu />}
      </Box>
    );
  };

  const naverMapSrc = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_ID}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {/* 상단 탭바 */}
          <Box mb="59px">
            <Header />
          </Box>

          {isMenuHover && (
            <Box
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)"
              position="fixed"
              top={0}
              zIndex={1023}
              onMouseEnter={() => {
                setIsMenuHover(false);
              }}
            />
          )}

          <Toaster />
          {children}
        </Provider>

        <script type="text/javascript" src={naverMapSrc} />
      </body>
    </html>
  );
}
