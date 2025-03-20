"use client";

import { applicationGrey, attrBorderGrey, textBlue } from "@/color";
import { InputGroup } from "@/components/ui/input-group";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
  useDialog,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip";
import { BsPaperclip } from "react-icons/bs";

const applicationData = {
  applied: [
    {
      company: "안전집사",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "applied",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
    },
  ],
  pass: [
    {
      company: "안전집사 2",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "pass",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
    },
  ],
  hire: [
    {
      company: "안전집사 3",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "hire",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
    },
  ],
  reject: [],
};

type PageType = "all" | "applied" | "pass" | "hire" | "reject";

export default function AppliedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pageType, setPageType] = useState<PageType>("all");
  const statusDialog = useDialog();

  useEffect(() => {
    let type = searchParams.get("status") || "all";
    setPageType(type as PageType);
  }, [searchParams]);

  const getItemCounts = (type: PageType) => {
    if (type === "all") {
      return (
        applicationData.applied.length +
        applicationData.pass.length +
        applicationData.hire.length +
        applicationData.reject.length
      );
    }

    return applicationData[type].length;
  };

  const HeaderDiv = (text: string, status: PageType) => {
    return (
      <Box
        textAlign="center"
        flex={1}
        cursor="pointer"
        color={status === pageType ? textBlue : "#86939e"}
        _hover={{ color: textBlue }}
        onClick={() => {
          router.push(`/status/applications/applied?status=${status}`);
        }}
      >
        <Text fontSize="40px">{getItemCounts(status)}</Text>
        <Text fontSize="16x">{text}</Text>
      </Box>
    );
  };

  const TableItemView = (v: any, index: number) => {
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
        onClick={() => {
          statusDialog.setOpen(true);
        }}
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
          {v.date}
        </Text>
        <Text fontSize="14px" textAlign="center" w="80px">
          {status}
        </Text>
        <Text fontSize="14px" textAlign="center" w="80px">
          {v.recommender ? "추천인 있음" : "추천인 없음"}
        </Text>
      </Flex>
    );
  };

  const StatusDialog = (dialog: any) => {
    return (
      <Dialog.RootProvider
        value={dialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="12px" maxH="700px">
            <Flex position="relative" alignItems="center" p="12px">
              <Spacer />
              <Text fontSize="16px" fontWeight="bold">
                지원서
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="md" />
              </Dialog.CloseTrigger>
            </Flex>

            {/* 포인트 정책 */}
            <Box overflow="auto" p="16px">
              <Flex alignItems="center">
                <Image
                  src="https://static.wanted.co.kr/images/wdes/0_5.b1efd342.png"
                  w="45px"
                  h="45px"
                  border={attrBorderGrey}
                />
                <Box ml="12px">
                  <Text fontSize="20px">플러터 / 리액트 개발자</Text>
                  <Text mt="4px" color="grey">
                    <b>안전집사 </b>· 영등포구 여의도 wework
                  </Text>
                </Box>
              </Flex>

              <Flex mt="40px">
                <Text fontSize="13px" color="grey" w="60px">
                  이름
                </Text>

                <Text fontSize="16px">김유민</Text>
              </Flex>

              <Flex mt="16px">
                <Text fontSize="13px" color="grey" w="60px">
                  이메일
                </Text>

                <Text fontSize="16px">yumingames@gmail.com</Text>
              </Flex>

              <Flex mt="16px">
                <Text fontSize="13px" color="grey" w="60px">
                  연락처
                </Text>

                <Text fontSize="17px" fontWeight="lighter">
                  +8201064642211
                </Text>
              </Flex>

              <Flex mt="16px">
                <Text fontSize="13px" color="grey" w="60px">
                  이력서
                </Text>

                <Box>
                  <Flex
                    alignItems="center"
                    className="hover:bg-gray-100"
                    p="4px"
                  >
                    <BsPaperclip size="15px" color="grey" />

                    <Text fontSize="14px" color="grey" ml="4px">
                      모바일 앱 개발자 김유민입니다.pdf
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box borderTop={attrBorderGrey} mt="12px" mb="12px" />

            <Button
              size="xl"
              borderRadius="24px"
              colorPalette="blue"
              color="white"
              onClick={() => {
                dialog.setOpen(false);
              }}
            >
              리마인더 전송
            </Button>

            <Button
              variant="outline"
              mt="12px"
              size="xl"
              borderRadius="24px"
              colorPalette="blue"
              color={textBlue}
              onClick={() => {
                dialog.setOpen(false);
              }}
            >
              수정
            </Button>

            <Button
              variant="outline"
              mt="12px"
              size="xl"
              borderRadius="24px"
              colorPalette="blue"
              color={textBlue}
              onClick={() => {
                dialog.setOpen(false);
              }}
            >
              지원 취소
            </Button>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  return (
    <>
      {/* 헤더  */}
      <Flex w="550px" mt="60px">
        {HeaderDiv("전체", "all")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("지원 완료", "applied")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("서류 통과", "pass")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("최종 합격", "hire")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("불합격", "reject")}
      </Flex>

      {/* 검색, 기간 버튼, 취업활동증명서 버튼 */}
      <Flex mt="40px" h="32px">
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
            placeholder="검색"
            fontSize="14px"
          />
        </InputGroup>

        <Flex
          alignItems="center"
          cursor="pointer"
          className="bg-white hover:bg-gray-100"
          border={attrBorderGrey}
          borderRadius="16px"
          pl="20px"
          pr="20px"
          ml="12px"
        >
          <Spacer />
          <FaRegCalendarAlt size="14px" />
          <Text fontSize="14px" ml="6px">
            전체 기간
          </Text>
          <Spacer />
        </Flex>

        <Spacer />

        <Flex
          alignItems="center"
          cursor="pointer"
          bg="white"
          _hover={{
            bg: getItemCounts(pageType) > 0 ? "gray.100" : undefined,
          }}
          color={getItemCounts(pageType) > 0 ? "black" : applicationGrey}
          border={attrBorderGrey}
          borderRadius="16px"
          pl="20px"
          pr="20px"
        >
          <Spacer />
          <MdOutlineFileDownload size="16px" />
          <Text fontSize="14px" ml="6px">
            취업활동증명서 다운로드
          </Text>
          <Spacer />
        </Flex>
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
          <Text fontSize="14px">작성시간</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">진행상태</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">추천 현황</Text>
        </Box>

        <Flex alignItems="center">
          <Text fontSize="14px">보상금 신청</Text>

          <Tooltip
            showArrow
            positioning={{ placement: "top" }}
            content="최종 인터뷰까지 통과하신 경우, 보상금 '신청' 버튼을 눌러주세요. 3개월 초과근무 시 본 계정 이메일로 계좌정보 요청 메일이 발송될 예정이니 확인 후 신청 해주세요."
            openDelay={100}
            closeDelay={100}
          >
            <Box mb="2px" ml="4px">
              <FaRegCircleQuestion size="12px" color="grey" />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>

      <Box bg="white">
        {pageType !== "all" &&
          (applicationData as any)[pageType].map((v: any, index: number) => {
            return TableItemView(v, index);
          })}

        {/* 전체에 대한 데이터를 출력한다. */}
        {pageType === "all" &&
          (applicationData as any)["applied"].map((v: any, index: number) => {
            return TableItemView(v, index);
          })}
      </Box>

      {StatusDialog(statusDialog)}
    </>
  );
}
