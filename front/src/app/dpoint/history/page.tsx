"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Tabs,
  Text,
  Image,
  Button,
  useDialog,
} from "@chakra-ui/react";
import { attrBorderGrey2 } from "@/color";
import { IoShareOutline } from "react-icons/io5";
import { PiCoins } from "react-icons/pi";
import { CurPointDiv } from "@/components/cur-point-div";
import { PointPolicyDialog } from "@/components/point-policy-dialog";

export default function PointHistoryPage() {
  const [tabType, setTabType] = useState<"all" | "plus" | "use" | "removed">(
    "all"
  );

  const showItem = 8;
  const [showStack, setShowStack] = useState(1);
  const pointPolicyDialog = useDialog();

  const PointList = [
    {
      type: "plus",
      title: "소셜 좋아요 누르기",
      value: 100,
      createdAt: "20.03.18",
      expDate: "25.09.14",
    },
    {
      type: "plus",
      title: "출석체크",
      value: 100,
      createdAt: "20.03.18",
      expDate: "25.09.14",
    },
    {
      type: "plus",
      title: "회원가입",
      value: 1000,
      createdAt: "20.03.18",
      expDate: "25.09.14",
    },
    {
      type: "plus",
      title: "프로필 설정",
      value: 1000,
      createdAt: "20.03.18",
      expDate: "25.09.14",
    },
    {
      type: "plus",
      title: "프로필 설정",
      value: 1000,
      createdAt: "20.03.18",
      expDate: "25.09.14",
    },
  ];

  const PointView = (v: any, index: number) => {
    let postFixText = "적립";
    if (v.type === "use") {
      postFixText = "사용";
    } else if (v.type === "removed") {
      postFixText = "소멸";
    }

    return (
      <Flex
        key={index}
        alignItems="center"
        pt="16px"
        pb="16px"
        borderBottom={attrBorderGrey2}
      >
        <Image
          src="/developer_icon.png"
          w="45px"
          h="45px"
          border={attrBorderGrey2}
          borderRadius="5px"
        />

        <Box ml="16px">
          <Text fontSize="14px" fontWeight="semibold">
            {v.title}
          </Text>

          <Text fontSize="13px" color="grey">
            {v.createdAt} - {v.expDate}
          </Text>
        </Box>

        <Spacer />

        <Text fontSize="15px" fontWeight="bold" mb="20px" mr="20px">
          {v.value}P {postFixText}
        </Text>
      </Flex>
    );
  };

  return (
    <Box w="520px">
      {/* 사용 가능 포인트  */}
      <CurPointDiv />

      <Tabs.Root
        value={tabType}
        onValueChange={(e) => {
          setTabType(e.value as any);
        }}
        mt="50px"
      >
        <Tabs.List>
          <Tabs.Trigger
            value="all"
            fontSize="16px"
            fontWeight="bold"
            color={tabType === "all" ? "black" : "#c9cacb"}
          >
            전체
          </Tabs.Trigger>
          <Tabs.Trigger
            value="plus"
            fontSize="16px"
            fontWeight="bold"
            color={tabType === "plus" ? "black" : "#c9cacb"}
          >
            적립
          </Tabs.Trigger>
          <Tabs.Trigger
            value="use"
            fontSize="16px"
            fontWeight="bold"
            color={tabType === "use" ? "black" : "#c9cacb"}
          >
            사용
          </Tabs.Trigger>
          <Tabs.Trigger
            value="removed"
            fontSize="16px"
            fontWeight="bold"
            color={tabType === "removed" ? "black" : "#c9cacb"}
          >
            소멸
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      {PointList.map((v, index) => {
        if (index < showItem * showStack) {
          return PointView(v, index);
        }
        return <Box key={index} />;
      })}

      {showItem * showStack < PointList.length && (
        <Flex>
          <Spacer />
          <Button
            mt="30px"
            size="xs"
            variant="outline"
            borderRadius="8px"
            h="30px"
            fontSize="13px"
            onClick={() => {
              setShowStack(showStack + 1);
            }}
          >
            이전 내역 더보기
          </Button>
          <Spacer />
        </Flex>
      )}

      <Text color="grey" mt="60px">
        포인트 안내사항
      </Text>

      <Box
        mt="12px"
        border={attrBorderGrey2}
        pl="24px"
        pr="24px"
        pt="12px"
        pb="12px"
        borderRadius="8px"
        cursor="pointer"
        onClick={() => {
          pointPolicyDialog.setOpen(true);
        }}
      >
        <Flex alignItems="center">
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

      {PointPolicyDialog(pointPolicyDialog)}
    </Box>
  );
}
