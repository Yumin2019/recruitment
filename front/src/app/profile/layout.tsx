"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { textBlue } from "@/color";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const itemList = [
  {
    title: "추천 네트워크 설정",
    value: "network",
  },
  {
    title: "알림 설정",
    value: "notification",
  },
  {
    title: "계정 관리",
    value: "account",
  },
];

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pageType, setPageType] = useState("network");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    let type = searchParams.get("type") || "network";
    setPageType(type);
  }, [searchParams]);

  const RowView = (v: any, index: number, isLogout = false) => {
    return (
      <Box
        className="hover:bg-gray-100"
        pl="8px"
        key={index}
        mb="16px"
        onClick={() => {
          router.push(`/profile/settings?type=${v.value}`);
        }}
      >
        <Text fontSize="16px" color={v.value === pageType ? textBlue : "black"}>
          {v.title}
        </Text>
      </Box>
    );
  };

  const LeftView = () => {
    return (
      <Box w="300px" pl="45px" pt="45px" pr="20px" className="hidden lg:block">
        <Text fontSize="20px" fontWeight="bold" mb="40px">
          계정 설정
        </Text>
        {itemList.map((v, index) => {
          return RowView(v, index);
        })}
      </Box>
    );
  };

  return (
    <>
      <Flex>
        <Spacer />

        <Flex>
          <Box className="hidden lg:block">
            <LeftView />
          </Box>

          <Box ml="50px" mr="50px">
            {children}
          </Box>
        </Flex>

        <Spacer />
      </Flex>
    </>
  );
}
