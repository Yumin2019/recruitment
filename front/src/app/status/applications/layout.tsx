"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { attrBorderGrey, textBlue } from "@/color";
import { useRouter, useSearchParams } from "next/navigation";

const itemList = [
  {
    title: "추천보상금 대상자",
    value: "recommendations",
  },
  {
    title: "작성중",
    value: "write",
  },
  {
    title: "지원한 포지션",
    value: "applied",
  },
];

export default function ApplicationsLayout({
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
    document.body.style = "background: #f8f8f8;";

    return () => {
      document.body.style = "background: white;";
    };
  }, [searchParams]);

  const RowView = (v: any, index: number, isLogout = false) => {
    return (
      <Box
        className="hover:bg-gray-100"
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
          지원 현황
        </Text>

        <Text fontSize="14px" color="grey" mb="16px">
          추천한 후보자
        </Text>

        {RowView(itemList[0], 0)}

        <Box borderTop={attrBorderGrey} />

        <Text fontSize="14px" color="grey" mb="16px" mt="20px">
          지원
        </Text>

        {RowView(itemList[1], 1)}
        {RowView(itemList[2], 2)}
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
