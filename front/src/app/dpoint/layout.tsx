"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { attrBorderGrey2, myPageGrey } from "@/color";
import { usePathname, useRouter } from "next/navigation";

const itemList = [
  {
    title: "포인트 적립",
    value: "mypoint",
  },
  {
    title: "포인트 사용",
    value: "promotions",
  },
  {
    title: "내역",
    value: "history",
  },
];

export default function DPointLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pageType, setPageType] = useState("mypoint");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let type = pathname.split("/")[2];
    setPageType(type);
  }, [pathname]);

  const RowView = (v: any, index: number, isLogout = false) => {
    return (
      <Box
        pl="8px"
        key={index}
        mb="45px"
        cursor="pointer"
        onClick={() => {
          router.push(`/dpoint/${v.value}`);
        }}
      >
        <Text
          fontSize="18px"
          fontWeight="semibold"
          color={v.value === pageType ? "black" : myPageGrey}
        >
          {v.title}
        </Text>
      </Box>
    );
  };

  return (
    <>
      <Flex>
        <Spacer />

        <Flex alignItems="flex-start">
          {/* Left Border */}
          <Box
            borderLeft={attrBorderGrey2}
            h="100%"
            className="hidden lg:block"
          />

          <Box className="hidden lg:block sticky top-[80px]">
            <Box
              w="300px"
              pl="45px"
              pt="45px"
              pr="20px"
              className="hidden lg:block"
            >
              {itemList.map((v, index) => {
                return RowView(v, index);
              })}
            </Box>
          </Box>

          {/* Right Border */}
          <Box
            borderLeft={attrBorderGrey2}
            h="100%"
            className="hidden lg:block"
          />

          <Box maxW="520x" ml="50px" mr="50px">
            {children}
          </Box>
        </Flex>

        <Spacer />
      </Flex>
    </>
  );
}
