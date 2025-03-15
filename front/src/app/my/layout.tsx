"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { attrBorderGrey2, myPageGrey } from "@/color";
import { usePathname } from "next/navigation";

const itemList = [
  {
    title: "프로필",
    value: "profile",
  },
  {
    title: "내 활동",
    value: "activity",
  },
  {
    title: "게시글",
    value: "post",
  },
  {
    title: "설정",
    value: "setting",
  },
  {
    title: "로그아웃",
    value: "logout",
  },
];

export default function MyRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pageType, setPageType] = useState("profile");
  const pathname = usePathname();

  useEffect(() => {
    let type = pathname.split("/")[2];
    setPageType(type);
  }, [pathname]);

  const RowView = (v: any, index: number, isLogout = false) => {
    return (
      <Box className="hover:bg-gray-100" pl="8px" key={index} mb="45px">
        <Text
          fontSize="18px"
          fontWeight="semibold"
          color={
            isLogout ? "#cdcecf" : v.value === pageType ? "black" : myPageGrey
          }
        >
          {v.title}
        </Text>
      </Box>
    );
  };

  const LeftView = () => {
    return (
      <Box w="300px" pl="45px" pt="45px" pr="20px">
        {itemList.map((v, index) => {
          if (v.value === "logout") {
            return <Box key={index}></Box>;
          }

          return RowView(v, index);
        })}

        <Box borderBottom={attrBorderGrey2} mb="45px" />

        {RowView(itemList[4], 4, true)}
      </Box>
    );
  };

  return (
    <>
      <Flex>
        {/* 좌측 컨트롤러 */}
        <LeftView />

        <Box borderRight={attrBorderGrey2} />

        {children}
      </Flex>
    </>
  );
}
