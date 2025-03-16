"use client";

import { Box, Flex, Spacer, Text, SimpleGrid } from "@chakra-ui/react";
import { attrBorderGrey2, mainBlue } from "@/color";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoBookmark, IoDocumentTextOutline } from "react-icons/io5";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaBan, FaHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiHandbagBold } from "react-icons/pi";

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

        <Box borderTop={attrBorderGrey2} mt="16px" />

        {/* 구직 관련 상태 설정  */}
        <Flex alignItems="center" pt="12px" pb="12px">
          <Box
            bg="#6641f3"
            borderRadius="8px"
            p="6px"
            mr="8px"
            w="30px"
            h="30px"
          >
            <PiHandbagBold size="18px" color="white" />
          </Box>
          <Text fontSize="15px" fontWeight="semibold">
            구직 상태 설정
          </Text>

          <Spacer />

          <Text fontSize="14px" color="grey" mr="8px">
            관심 있음
          </Text>
          <IoIosArrowForward size="18px" color="grey" />
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        <Flex alignItems="center" pt="12px" pb="12px">
          <Box
            bg="#ff4242"
            borderRadius="8px"
            p="7px"
            mr="8px"
            w="30px"
            h="30px"
          >
            <FaBan size="17px" color="white" />
          </Box>
          <Text fontSize="15px" fontWeight="semibold">
            프로필 열람 제외기업 설정
          </Text>
          <Spacer />
          <IoIosArrowForward size="18px" color="grey" />
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        <Flex alignItems="center" pt="12px">
          <Box
            bg="#00aeff"
            p="4px"
            borderRadius="8px"
            mr="8px"
            w="30px"
            h="30px"
          >
            <RiMoneyDollarCircleLine size="22px" color="white" />
          </Box>
          <Text fontSize="15px" fontWeight="semibold">
            현재 연봉 입력하기
          </Text>
          <Spacer />
          <IoIosArrowForward size="18px" color="grey" />
        </Flex>
      </Box>
    );
  };

  const ResumeView = () => {
    return (
      <Box
        mt="8px"
        border={attrBorderGrey2}
        borderRadius="8px"
        pl="20px"
        pr="20px"
      >
        <Flex alignItems="center" pt="16px" pb="16px">
          <Box
            bg="#0066ff"
            borderRadius="8px"
            p="6px"
            mr="8px"
            w="30px"
            h="30px"
          >
            <IoDocumentTextOutline size="18px" color="white" />
          </Box>

          <Box>
            <Flex>
              <Text fontSize="15px" fontWeight="semibold" mr="4px">
                이력서 완성률
              </Text>
              <Text fontSize="15px" color="#0066ff" fontWeight="semibold">
                100%
              </Text>
            </Flex>

            <Text fontSize="12px" color="grey">
              이력서를 업데이트하면 다음 연봉이 높아집니다.
            </Text>
          </Box>

          <Spacer />

          <Box
            className="bg-[#0066ff] hover:bg-[#0057e6]"
            color="white"
            fontSize="14px"
            fontWeight="bold"
            borderRadius="8px"
            pt="10px"
            pb="10px"
            pl="16px"
            pr="16px"
          >
            합격률 높은 포지션 찾기
          </Box>
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        <Flex alignItems="center" pt="16px" pb="16px">
          <Text fontSize="14px">Flutter 개발자 디벨로퍼입니다. 1</Text>

          <Spacer />

          <IoIosArrowForward size="18px" color="grey" />
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        <Flex alignItems="center" pt="16px" pb="16px">
          <Text fontSize="14px">Flutter 개발자 디벨로퍼입니다. 2</Text>

          <Spacer />

          <IoIosArrowForward size="18px" color="grey" />
        </Flex>
      </Box>
    );
  };

  const MyPointView = () => {
    return (
      <Box
        mt="8px"
        border={attrBorderGrey2}
        borderRadius="8px"
        pl="20px"
        pr="20px"
      >
        <Flex alignItems="center" pt="16px" pb="16px">
          <Box
            bg="#0066ff"
            borderRadius="8px"
            p="6px"
            mr="8px"
            w="30px"
            h="30px"
          >
            <IoDocumentTextOutline size="18px" color="white" />
          </Box>

          <Text fontSize="15px" fontWeight="semibold" mr="4px">
            6,000P
          </Text>

          <Spacer />

          <IoIosArrowForward size="18px" color="grey" />
        </Flex>
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

        <Text fontSize="18px" fontWeight="semibold" mt="48px">
          기본 이력서
        </Text>
        <ResumeView />

        <Text fontSize="18px" fontWeight="semibold" mt="48px">
          마이 포인트
        </Text>
        <MyPointView />

        <Box mt={50}></Box>
      </Box>
    </>
  );
}
