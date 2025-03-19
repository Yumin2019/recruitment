"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  useDialog,
  Image,
  Button,
} from "@chakra-ui/react";
import { attrBorderGrey2, textBlue } from "@/color";
import { IoInformationCircleOutline, IoShareOutline } from "react-icons/io5";
import { PiCoins } from "react-icons/pi";
import { CurPointDiv } from "@/components/cur-point-div";
import { FaBook } from "react-icons/fa";
import { PointPolicyDialog } from "@/components/point-policy-dialog";
import { PointGuideDialog } from "@/components/point-guide-dialog";
import { Tooltip } from "@/components/ui/tooltip";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function MyPointPage() {
  const pointPolicyDialog = useDialog();
  const pointGuideDialog = useDialog();

  const PointMissionList = [
    {
      title: "기업 팔로우",
      desc: "일 1회 적립",
      value: 100,
      isFinished: false,
      imageSrc: "/building.png",
    },
    {
      title: "포지션 북마크",
      desc: "일 1회 적립",
      value: 100,
      isFinished: false,
      imageSrc: "/position-bookmark.png",
    },

    {
      title: "포지션 지원",
      desc: "월 3회 적립",
      value: 1000,
      isFinished: false,
      imageSrc: "/job-application.png",
    },

    {
      title: "포지션 알림 동의",
      desc: "월 1회 적립",
      value: 500,
      isFinished: false,
      imageSrc: "/notification.png",
    },
    {
      title: "이벤트 알림 동의",
      desc: "월 1회 적립",
      value: 500,
      isFinished: false,
      imageSrc: "/event.png",
    },
    {
      title: "소셜 좋아요 누르기",
      desc: "일 1회 적립",
      value: 100,
      isFinished: false,
      imageSrc: "/heart.png",
    },

    {
      title: "출석체크",
      desc: "일 1회 적립",
      value: 100,
      isFinished: false,
      imageSrc: "/attendance.png",
    },

    {
      title: "첫 이력서 작성",
      desc: "최초 1회 적립",
      value: 3000,
      isFinished: false,
      imageSrc: "/resume.png",
    },

    {
      title: "회원가입",
      desc: "최초 1회 적립",
      value: 1000,
      isFinished: true,
      imageSrc: "/registration.png",
    },
    {
      title: "프로필 설정",
      desc: "최초 1회 적립",
      value: 2000,
      isFinished: true,
      imageSrc: "/profile.png",
    },

    {
      title: "구직 상태 유지",
      desc: "월 1회 적립",
      value: 500,
      isFinished: true,
      imageSrc: "/seeing.png",
    },
  ];

  const PointMissionView = (v: any, index: number) => {
    return (
      <Flex
        alignItems="center"
        pl="20px"
        pr="20px"
        pt="12px"
        pb="12px"
        key={index}
        borderBottom={
          index < PointMissionList.length - 1 ? attrBorderGrey2 : undefined
        }
        opacity={v.isFinished ? 0.25 : undefined}
      >
        <Image src={v.imageSrc} w="40px" h="40px" />

        <Box ml="24px">
          <Text fontSize="16px" fontWeight="bold">
            {v.title}
          </Text>

          <Text fontSize="14px" fontWeight="semibold" color={textBlue}>
            {v.desc} {v.isFinished ? "" : "가능"}
          </Text>
        </Box>

        <Spacer />

        <Text fontSize="16px" fontWeight="bold" mr="12px">
          {v.value}P
        </Text>

        <Button
          variant="outline"
          size="sm"
          borderRadius="8px"
          h="32px"
          w="50px"
          bg={v.isFinished ? "#d5d7dc" : undefined}
          pointerEvents={v.isFinished ? "none" : undefined}
        >
          {v.isFinished ? "완료" : "시작"}
        </Button>
      </Flex>
    );
  };

  return (
    <Box w="520px" pb="50px">
      {/* 사용 가능 포인트  */}
      <CurPointDiv />

      {/* 포인트 미션 */}
      <Flex alignItems="center" mt="40px">
        <Text color="grey" fontSize="16px" mr="4px">
          포인트 미션
        </Text>

        <Tooltip
          showArrow
          positioning={{ placement: "top" }}
          content="매일 자정, 미션이 새로 열립니다."
          openDelay={100}
          closeDelay={100}
        >
          <IoInformationCircleOutline color="grey" size="18px" />
        </Tooltip>
      </Flex>

      <Box border={attrBorderGrey2} borderRadius="8px" mt="12px">
        {PointMissionList.map((v, index) => {
          return PointMissionView(v, index);
        })}
      </Box>

      {/* 포인트 안내사항 */}
      <Text color="grey" mt="60px">
        포인트 안내사항
      </Text>

      <Box mt="12px" border={attrBorderGrey2} borderRadius="8px">
        {/* 포인트 미션 가이드 항목 */}
        <Flex
          pt="12px"
          pl="24px"
          pr="24px"
          pb="16px"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            pointGuideDialog.setOpen(true);
          }}
        >
          <Box bg="#29bf40" borderRadius="6px" w="28px" h="28px" p="6px">
            <FaBook color="white" size="16px" />
          </Box>

          <Text ml="12px" fontSize="15px">
            포인트 미션 가이드
          </Text>

          <Spacer />

          <IoShareOutline size="18px" color="grey" />
        </Flex>

        <Box borderTop={attrBorderGrey2} />

        {/* 포인트 정책 항목 */}
        <Flex
          pt="12px"
          pl="24px"
          pr="24px"
          pb="16px"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            pointPolicyDialog.setOpen(true);
          }}
        >
          <Box bg="#fd4242" borderRadius="6px" w="28px" h="28px" p="4px">
            <PiCoins color="white" size="20px" />
          </Box>

          <Text ml="12px" fontSize="15px">
            포인트 정책
          </Text>

          <Spacer />

          <IoShareOutline size="18px" color="grey" />
        </Flex>
      </Box>

      <Box
        mt="12px"
        bg="#f9fafa"
        p="20px"
        position="relative"
        border={attrBorderGrey2}
        borderRadius="8px"
      >
        <Text fontSize="16px" fontWeight="semibold">
          커리어를 쌓으면 포인트가 쌓여요.
        </Text>

        <Flex alignItems="center" mt="2px">
          <Text
            fontSize="14px"
            color={textBlue}
            fontWeight="semibold"
            cursor="pointer"
            onClick={() => {}}
          >
            디벨로퍼 포인트 알아보기
          </Text>
          <MdOutlineKeyboardArrowRight color={textBlue} size="22px" />
        </Flex>

        <Box
          h="90px"
          overflow="hidden"
          position="absolute"
          right="40px"
          top="0px"
        >
          <Image src="/savings.png" h="110px" mt="-15px" />
        </Box>
      </Box>

      {PointPolicyDialog(pointPolicyDialog)}
      {PointGuideDialog(pointGuideDialog)}
    </Box>
  );
}
