"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { attrBorderGrey, textBlue } from "@/color";
import { FiUpload } from "react-icons/fi";
import { Tooltip } from "@/components/ui/tooltip";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Footer } from "@/components/footer";

const FileData = [
  {
    title: "모바일 앱 개발자 김유민입니다.",
    isMain: true,
    isCertified: true,
    date: "25.03.20",
  },
  {
    title: "포트폴리오.pdf",
    isMain: false,
    isCertified: false,
    date: "25.03.20",
  },
  {
    title: "12312321.pdf",
    isMain: false,
    isCertified: false,
    date: "25.03.20",
  },
];

export default function CVPage() {
  const DefaultFileView = (isResume: boolean) => {
    return (
      <Box
        border={attrBorderGrey}
        borderRadius="20px"
        w="300px"
        h="220px"
        className="bg-[#fbfbfb] hover:bg-gray-100 cursor-pointer"
        alignContent="center"
        textAlign="center"
        position="relative"
      >
        <Flex>
          <Spacer />
          {!isResume && <FiUpload size="20px" color="grey" />}
          {isResume && <FaPlus size="20px" color="grey" />}
          <Spacer />
        </Flex>
        <Text fontSize="16px" color="grey" mt="10px">
          {isResume ? "새 이력서 작성" : "파일 업로드"}
        </Text>

        <Text
          fontSize="13px"
          textAlign="bottom"
          position="absolute"
          left={0}
          right={0}
          bottom="24px"
          color="grey/60"
        >
          {isResume
            ? "디벨로퍼 이력서로 서류 합격률 2배 UP!"
            : "디벨로퍼 이력서로도 자동 변환해드려요 (pdf, docx)"}
        </Text>
      </Box>
    );
  };

  const FileView = (v: any, index: number) => {
    return (
      <Box
        borderRadius="20px"
        w="300px"
        h="220px"
        p="20px"
        key={index}
        cursor="pointer"
        position="relative"
        border={v.isMain ? "1px solid #dae7ff" : "1px solid rgb(228, 228, 231)"}
        _hover={{ border: "1px solid #a2b7ff" }}
        bg={v.isMain ? "#fbfcff" : "white"}
      >
        <Text fontSize="19px" color="black" fontWeight="semibold">
          {v.title}
        </Text>

        <Flex mt="4px">
          {v.isMain && (
            <Tooltip
              showArrow
              positioning={{ placement: "bottom" }}
              content="기본 이력서는 면접 제안을 받을 수 있습니다. 구직 여부 설정에 따라 개인정보를 제외하고 채용 담당자에게 공개되니 안심하세요"
              openDelay={100}
              closeDelay={100}
            >
              <Box
                fontSize="12px"
                color={textBlue}
                bg="#ecf2ff"
                pt="2px"
                pb="2px"
                pl="6px"
                pr="6px"
                borderRadius="4px"
              >
                기본 이력서
              </Box>
            </Tooltip>
          )}

          {v.isCertified && (
            <Tooltip
              showArrow
              positioning={{ placement: "bottom" }}
              content="25.02.01에 경력이 인증되었습니다. 기본 이력서로 설정 시 채용담당자에게 인증뱃지가 노출되어 ‘면접 제안’을 받을 확률이 높아집니다!"
              openDelay={100}
              closeDelay={100}
            >
              <Box
                ml="6px"
                fontSize="12px"
                color="#15bfdf"
                bg="#e7f7fd"
                pt="2px"
                pb="2px"
                pl="6px"
                pr="6px"
                borderRadius="4px"
              >
                경력 인증
              </Box>
            </Tooltip>
          )}
        </Flex>

        <Flex position="absolute" bottom="20px" left="20px" right="20px">
          <Text fontSize="14px" bottom="24px" color="grey">
            업로드 완료 {v.date}
          </Text>

          <Spacer />

          <Box className="hover:bg-gray-100">
            <BsThreeDotsVertical size="20px" color="grey" />
          </Box>
        </Flex>
      </Box>
    );
  };

  return (
    <Box pt="50px">
      {/* 헤더 영역  */}
      <Box
        bg="#ebefff"
        alignContent="center"
        ml="12px"
        mr="12px"
        p="24px"
        borderRadius="16px"
      >
        <Box ml="20px">
          <Text fontSize="18px" fontWeight="semibold" color="#4073db">
            합격률 2배 이력서는 무엇이 다를까?
          </Text>
          <Text fontSize="14px" color="#86a4e9">
            새로워진 디벨로퍼 이력서와 이력서·포트폴리오 샘플을 확인하세요!
          </Text>
        </Box>

        <Box
          h="120px"
          overflow="hidden"
          position="absolute"
          right="100px"
          top="26px"
        >
          <Image src="/resume_letter.png" h="180px" />
        </Box>
      </Box>

      <Box mt="60px" pb="200px">
        <Text fontSize="22px" fontWeight="semibold" ml="20px">
          내 이력서 리스트
        </Text>

        <SimpleGrid
          mb="150px"
          columns={{ base: 2, lg: 3, xl: 4 }}
          gapX="20px"
          gapY="20px"
          mt="16px"
          ml="20px"
          mr="20px"
        >
          {DefaultFileView(true)}
          {DefaultFileView(false)}

          {FileData.map((v, index) => {
            return FileView(v, index);
          })}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
}
