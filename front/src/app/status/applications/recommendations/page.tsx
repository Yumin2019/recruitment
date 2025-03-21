"use client";

import { applicationData } from "@/app/global-data";
import { attrBorderGrey } from "@/color";
import { InputGroup } from "@/components/ui/input-group";
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

export default function RecommendationsPage() {
  const ApplicationTableItem = (
    v: any,
    index: number,
    onClick?: () => void
  ) => {
    let status = "";
    if (v.status === "applied") {
      if (v.isViewed) {
        status = "열람";
      } else {
        status = "접수";
      }
    } else if (v.status === "pass") {
      status = "서류 통과";
    } else if (v.status === "hire") {
      status = "합격";
    } else if (v.status === "reject") {
      status = "불합격";
    }

    return (
      <Flex
        pt="10px"
        pb="10px"
        alignItems="center"
        key={index}
        borderBottom={attrBorderGrey}
        className="hover:bg-gray-50"
        cursor="pointer"
        onClick={onClick}
      >
        <Flex alignItems="center" w="160px" pl="8px">
          <Image src={v.imgSrc} w="25px" h="25px" mr="8px" />
          <Text
            fontSize="14px"
            textAlign="center"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {v.company}
          </Text>
        </Flex>

        <Box w="120px">
          <Text
            fontSize="14px"
            textAlign="center"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {v.title}
          </Text>
        </Box>

        <Text fontSize="14px" textAlign="center" w="80px">
          {v.applyer}
        </Text>
        <Text fontSize="14px" textAlign="center" w="80px">
          {v.date}
        </Text>
        <Text fontSize="14px" textAlign="center" w="80px">
          {status}
        </Text>
      </Flex>
    );
  };

  return (
    <>
      <Flex mt="40px" h="32px" w="550px">
        <InputGroup
          border={attrBorderGrey}
          bg="white"
          borderRadius="16px"
          startOffset="0px"
          colorPalette="blue"
          w="170px"
          startElement={<CiSearch size="18px" color="black" />}
        >
          <Input
            className="inputWithoutBorder"
            placeholder="회사 / 포지션명 검색"
            fontSize="14px"
          />
        </InputGroup>
      </Flex>

      <Flex
        mt="30px"
        textAlign="center"
        alignItems="center"
        paddingBottom="8px"
        borderBottom={attrBorderGrey}
      >
        <Box w="160px">
          <Text fontSize="14px">지원 회사</Text>
        </Box>

        <Box w="120px">
          <Text fontSize="14px">지원 포지션</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">지원자</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">작성시간</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">지원결과</Text>
        </Box>
      </Flex>

      <Box bg="white">
        {(applicationData as any)["write"].map((v: any, index: number) => {
          return ApplicationTableItem(v, index);
        })}
      </Box>
    </>
  );
}
