"use client";

import { attrBorderGrey } from "@/color";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

export default function CareerReportPage() {
  useEffect(() => {
    document.body.style = "background: #f8f8f8;";

    return () => {
      document.body.style = "background: white;";
    };
  }, []);

  const careerData = [
    {
      color: "#ffd954",
      company: "(주)디벨로퍼랩",
      startDate: "2021년 05월 31일",
      endDate: "2023년 07월 15일",
      duration: "2년 3개월",
    },
    {
      color: "#1fba9c",
      company: "(주)구글",
      startDate: "2021년 05월 31일",
      endDate: "2023년 07월 15일",
      duration: "1년",
    },
  ];

  const CareerHistory = (v: any, index: number) => {
    return (
      <Flex alignItems="center" mt="8px" key={index}>
        <Box w="12px" h="12px" bg={v.color} borderRadius="50%" mr="8px" />
        <Text fontSize="15px" fontWeight="bold" w="150px">
          {v.company}
        </Text>

        <Flex w="300px" color="#595959" fontSize="15px">
          <Text>{v.startDate}</Text>
          <Text ml="20px" mr="20px">
            ~
          </Text>
          <Text>{v.endDate}</Text>
        </Flex>

        <Text fontSize="15px" color="black" ml="8px">
          {v.duration}
        </Text>
      </Flex>
    );
  };

  return (
    <>
      <Box pt="40px" />
      <Box
        fontSize="14px"
        border="1px solid #c5d0ff"
        pt="16px"
        pb="16px"
        borderRadius="8px"
        bg="white"
      >
        <Flex pl="20px" pr="20px">
          <Text>연동한 경력이 이력서에 자동 입력되었어요.</Text>
          <Box flex={1} />

          <Flex alignItems="center" cursor="pointer">
            <Text ml="20px" color="#0166ff" fontWeight="semibold">
              이력서 확인하러 가기
            </Text>
            <Box mb="4px" ml="2px">
              <GoArrowRight color="#0166ff" size="16px" />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* 커리어 그래프 */}
      <Box
        bg="white"
        w="100%"
        mt="16px"
        pt="50px"
        pb="50px"
        pl="100px"
        pr="100px"
      >
        <Text fontSize="22px" textAlign="center">
          구글님은 <b>3년 3개월</b>의 값진 경험을 쌓아왔어요!
        </Text>

        <Flex mt="40px">
          <Box bg="#ffd954" w="70%" h="60px" borderLeftRadius="8px" />
          <Box bg="#1fba9c" w="30%" h="60px" borderRightRadius="8px" />
        </Flex>
        <Flex>
          <Text fontSize="11px" fontWeight="bold" mt="6px">
            2021.05
          </Text>
          <Box flex={1} />
          <Text fontSize="11px" fontWeight="bold" mt="6px">
            2021.05
          </Text>
        </Flex>

        <Box mt="60px">
          {careerData.map((v, index) => {
            return CareerHistory(v, index);
          })}
        </Box>
      </Box>

      {/* 가장 오래 근무한 직장 */}
      <Box
        bg="white"
        w="100%"
        mt="16px"
        pt="50px"
        pb="50px"
        pl="100px"
        pr="100px"
      >
        <Text fontSize="22px" textAlign="center">
          그 중 <b>(주)디벨로퍼랩</b>에서 가장 오래 일하셨네요!
        </Text>
        <Text fontSize="22px" textAlign="center">
          여기에서만 <b>2년 3개월</b> 근무했어요.
        </Text>

        <Flex mt="40px">
          <Box bg="#3366ff" w="70%" h="60px" borderLeftRadius="8px" />
          <Box bg="#f2f4f7" w="30%" h="60px" borderRightRadius="8px" />
        </Flex>
        <Flex>
          <Text fontSize="11px" fontWeight="bold" mt="6px">
            2021.05
          </Text>
          <Box flex={1} />
          <Text fontSize="11px" fontWeight="bold" mt="6px">
            2021.05
          </Text>
        </Flex>

        <Flex>
          <Box
            ml="200px"
            fontSize="15px"
            fontWeight="semibold"
            border="1px solid #c5d0ff"
            pl="16px"
            pr="16px"
            pt="8px"
            pb="8px"
            borderRadius="12px"
          >
            <Text color="#3366ff">(주)디벨로퍼랩</Text>
            <Text>2년 3개월 근무</Text>
          </Box>
        </Flex>

        <Box mt="60px" />
      </Box>

      <Box
        bg="white"
        w="100%"
        mt="16px"
        pt="50px"
        pb="50px"
        pl="100px"
        pr="100px"
      >
        <Text fontSize="22px" textAlign="center">
          <b>3년차 소프트웨어 엔지니어</b>이신 구글님은
        </Text>
        <Text fontSize="22px" textAlign="center">
          <b>2</b>개의 기업에서 근무했고, 한 기업에서 평균 <b>1.6</b>년
          근속했어요!
        </Text>

        <Text fontSize="17px" color="grey" textAlign="center" mt="8px">
          동일 커리어 평균과 비교해 보세요.
        </Text>

        <Image
          src="/programmer.png"
          w="150px"
          h="150px"
          margin="auto"
          mt="50px"
          mb="50px"
        />

        <Box borderTop={attrBorderGrey} />

        <Flex mt="8px" textAlign="center">
          <Text fontSize="15px" fontWeight="bold" flex={1}>
            현재까지 근무한 회사 수
          </Text>

          <Text fontSize="15px" fontWeight="bold" flex={1}>
            한 회사 당 평균 근속 기간
          </Text>
        </Flex>

        <Box mt="60px" />
      </Box>
    </>
  );
}
