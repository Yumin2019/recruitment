"use client";

import { Box, Flex, Spacer, Text, SimpleGrid } from "@chakra-ui/react";
import { attrBorderGrey2, mainBlue } from "@/color";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaBan, FaHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";

export default function MyActivityPage() {
  const InterestView = () => {
    return (
      <SimpleGrid columns={3} mt="8px" gapX="8px">
        <Box border={attrBorderGrey2} p="16px" maxW="200px" borderRadius="8px">
          <Flex>
            <Text fontSize="16px">북마크</Text>

            <Spacer />

            <IoBookmark size="22px" color={mainBlue} />
          </Flex>

          <Text fontSize="20px" fontWeight="semibold">
            16
          </Text>
        </Box>

        <Box border={attrBorderGrey2} p="16px" w="200px" borderRadius="8px">
          <Flex>
            <Text fontSize="16px">관심회사</Text>

            <Spacer />

            <BsBuildingFillAdd size="22px" color="#6641f3" />
          </Flex>

          <Text fontSize="20px" fontWeight="semibold">
            2
          </Text>
        </Box>

        <Box border={attrBorderGrey2} p="16px" w="200px" borderRadius="8px">
          <Flex>
            <Text fontSize="16px">관심태그</Text>

            <Spacer />

            <FaHeart size="22px" color="red" />
          </Flex>

          <Text fontSize="20px" fontWeight="semibold">
            5
          </Text>
        </Box>
      </SimpleGrid>
    );
  };

  const ProcessView = () => {
    return (
      <Flex mt="8px" border={attrBorderGrey2} borderRadius="8px" p="20px">
        <Box
          textAlign="center"
          flex={1}
          onClick={() => {
            console.log("지원 완료");
          }}
        >
          <Text fontSize="15px">지원 완료</Text>
          <Text fontSize="20px" fontWeight="bold">
            4
          </Text>
        </Box>

        <Box borderRight={attrBorderGrey2} />

        <Box
          textAlign="center"
          flex={1}
          onClick={() => {
            console.log("서류 통과");
          }}
        >
          <Text fontSize="15px">서류 통과</Text>
          <Text fontSize="20px" fontWeight="bold">
            2
          </Text>
        </Box>

        <Box borderRight={attrBorderGrey2} />

        <Box
          textAlign="center"
          flex={1}
          onClick={() => {
            console.log("최종 합격");
          }}
        >
          <Text fontSize="15px">최종 합격</Text>
          <Text fontSize="20px" fontWeight="bold">
            1
          </Text>
        </Box>

        <Box borderRight={attrBorderGrey2} />

        <Box
          textAlign="center"
          flex={1}
          onClick={() => {
            console.log("불합격");
          }}
        >
          <Text fontSize="15px">불합격</Text>
          <Text fontSize="20px" fontWeight="bold">
            12
          </Text>
        </Box>
      </Flex>
    );
  };

  const OfferView = () => {
    return (
      <Box mt="8px" border={attrBorderGrey2} borderRadius="8px" p="20px">
        <Flex>
          <Box
            textAlign="center"
            flex={1}
            onClick={() => {
              console.log("면접 제안");
            }}
          >
            <Text fontSize="15px">면접 제안</Text>
            <Text fontSize="20px" fontWeight="bold">
              1
            </Text>
          </Box>

          <Box borderRight={attrBorderGrey2} />

          <Box
            textAlign="center"
            flex={1}
            onClick={() => {
              console.log("관심 있음");
            }}
          >
            <Text fontSize="15px">관심 있음</Text>
            <Text fontSize="20px" fontWeight="bold">
              0
            </Text>
          </Box>

          <Box borderRight={attrBorderGrey2} />

          <Box
            textAlign="center"
            flex={1}
            onClick={() => {
              console.log("열람");
            }}
          >
            <Text fontSize="15px">열람</Text>
            <Text fontSize="20px" fontWeight="bold">
              1
            </Text>
          </Box>
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        {/* 구직 관련 상태 설정  */}
        <Flex alignItems="center" pt="12px" pb="12px">
          <Text fontSize="15px">구직 상태 설정</Text>

          <Spacer />
          <Text fontSize="15px" color="grey">
            관심 있음
          </Text>

          <IoIosArrowForward size="18px" color="grey" />
        </Flex>
        {/* 작업중 */}

        <Box bg="green">
          <RiMoneyDollarCircleLine size={40} color="white" />
          <FaBan />
          <PiBagFill />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box p="40px">
        <Text fontSize="18px" fontWeight="semibold">
          내 관심사
        </Text>
        <InterestView />

        <Text fontSize="18px" fontWeight="semibold" mt="48px">
          지원 현황
        </Text>
        <ProcessView />

        <Text fontSize="18px" fontWeight="semibold" mt="48px">
          받은 제안 및 설정
        </Text>
        <OfferView />
      </Box>
    </>
  );
}
