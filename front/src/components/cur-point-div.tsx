import { attrBorderGrey2, textBlue } from "@/color";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { IoMdRefresh } from "react-icons/io";
import { Tooltip } from "./ui/tooltip";
import { IoInformationCircleOutline } from "react-icons/io5";

export const CurPointDiv = () => {
  return (
    <Box>
      <Flex mt="40px">
        <Text fontSize="16px" color="grey">
          포인트 현황
        </Text>

        <Spacer />

        <Flex
          alignItems="center"
          className="hover:bg-gray-100"
          pl="4px"
          pr="4px"
          borderRadius="4px"
        >
          <Text fontSize="12px" color="grey" fontWeight="semibold">
            새로고침
          </Text>
          <IoMdRefresh size="18px" color="grey" />
        </Flex>
      </Flex>

      <Box border={attrBorderGrey2} borderRadius="12px" mt="12px">
        <Flex ml="20px" mr="20px" mt="16px" mb="16px">
          <Text fontSize="18px" fontWeight="semibold">
            디벨로퍼님의 사용 가능 포인트
          </Text>

          <Spacer />

          <Text fontSize="18px" fontWeight="semibold" color={textBlue}>
            + 7,000P
          </Text>
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        {/* 이번달 적립 포인트, 30일 이내 소멸 예정 포인트  */}
        <Box ml="20px" mr="20px" mt="20px" mb="20px">
          <Flex alignItems="center">
            <Text fontSize="14px" mr="2px">
              이번 달 적립 포인트
            </Text>

            <Tooltip
              showArrow
              positioning={{ placement: "top" }}
              content="3월 1일부터 3월 31일까지의 포인트 현황입니다."
              openDelay={100}
              closeDelay={100}
            >
              <IoInformationCircleOutline color="black" size="18px" />
            </Tooltip>

            <Spacer />

            <Text fontSize="16px" fontWeight="semibold">
              + 7,000P
            </Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="14px" mr="2px">
              30일 내 소멸 예정 포인트
            </Text>

            <Spacer />

            <Text fontSize="16px" fontWeight="semibold">
              - 0P
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
