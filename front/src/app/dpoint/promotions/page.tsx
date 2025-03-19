"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Tabs,
  Text,
  Image,
  useDialog,
  Button,
} from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2, textBlue } from "@/color";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toDollarString } from "@/util";
import { PointPolicyDialog } from "@/components/point-policy-dialog";
import { IoShareOutline } from "react-icons/io5";
import { PiCoins } from "react-icons/pi";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/EmblaCarousel";

const storeData = {
  self: [
    {
      title: "구글개발 적립금 5,000원 지급",
      type: "self",
      imgSrc: "/google.png",
      point: 5000,
    },
    {
      title: "구글개발 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "self",
      point: 5000,
    },
    {
      title: "구글개발 적립금 5,000원 지급",
      type: "self",
      imgSrc: "/google.png",
      point: 5000,
    },
    {
      title: "구글개발 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "self",
      point: 5000,
    },
  ],

  life: [
    {
      title: "구글생활 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "life",
      point: 5000,
    },
    {
      title: "구글생활 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "life",
      point: 5000,
    },
  ],

  shopping: [
    {
      title: "구글몰 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "shopping",
      point: 5000,
    },
    {
      title: "구글몰 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "shopping",
      point: 5000,
    },
  ],

  leisure: [
    {
      title: "구글레져 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "leisure",
      point: 5000,
    },
    {
      title: "구글레져 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "leisure",
      point: 5000,
    },
  ],

  fb: [
    {
      title: "구글레져 적립금 5,000원 지급",
      imgSrc: "/google.png",
      type: "fb",
      point: 5000,
    },
  ],
};

const slideDataList = [
  {
    title: "인프런",
    desc: "강의 10% 할인",
    imgSrc:
      "https://static.wanted.co.kr/wpoint/WWW/promotion/87/banner.jpg%EC%9D%98%20%EC%82%AC%EB%B3%B8",
    logoSrc:
      "https://static.wanted.co.kr/wpoint/WWW/partner/38/logo.jpg%EC%9D%98%20%EC%82%AC%EB%B3%B8",
  },

  {
    title: "민병철유폰",
    desc: "강의 10% 할인",
    imgSrc: "https://static.wanted.co.kr/wpoint/WWW/promotion/22/banner.png",
    logoSrc: "https://static.wanted.co.kr/wpoint/WWW/partner/19/logo.png",
  },

  {
    title: "스탠드오일",
    desc: "구독료 30% 할인",
    imgSrc: "https://static.wanted.co.kr/wpoint/WWW/promotion/13/banner.jpg",
    logoSrc: "https://static.wanted.co.kr/wpoint/WWW/partner/11/logo.jpg",
  },

  {
    title: "청소연구소",
    desc: "구독료 30% 할인",
    imgSrc: "https://static.wanted.co.kr/wpoint/WWW/promotion/6/banner.jpg",
    logoSrc: "https://static.wanted.co.kr/wpoint/WWW/partner/4/logo.jpg",
  },

  {
    title: "괌플레이",
    desc: "액티비티 10% 할인",
    imgSrc: "https://static.wanted.co.kr/wpoint/WWW/promotion/79/banner.jpg",
    logoSrc: "https://static.wanted.co.kr/wpoint/WWW/partner/36/logo.jpg",
  },
];

const StoreItemView = (v: any, index: number) => {
  return (
    <Flex
      cursor="pointer"
      key={index}
      alignItems="center"
      pl="20px"
      pr="12px"
      pt="20px"
      pb="20px"
      className="hover:bg-gray-50"
      borderTop={index > 0 ? attrBorderGrey2 : undefined}
    >
      <Image
        src={v.imgSrc}
        w="40px"
        h="40px"
        borderRadius="8px"
        border={attrBorderGrey}
        p="4px"
      />

      <Box ml="10px">
        <Text fontSize="16px" fontWeight="semibold">
          {v.title}
        </Text>
        <Text fontSize="13px" color={textBlue}>
          {toDollarString(v.point)}P 필요
        </Text>
      </Box>

      <Spacer />
      <MdOutlineKeyboardArrowRight color="#c7c8c9" size="28px" />
    </Flex>
  );
};

type TabType = "all" | "self" | "life" | "shopping" | "leisure" | "fb";

export default function PointPromotionPage() {
  // embla
  const emblaOptions: EmblaOptionsType = { loop: true, align: "start" };
  const slideCount = 5;
  const slides = Array.from(Array(slideCount).keys());

  const [tabType, setTabType] = useState<TabType>("all");
  const pointPolicyDialog = useDialog();

  const [showAllSelf, setShowAllSelf] = useState(false);
  const [showAllLife, setShowAllLife] = useState(false);
  const [showAllShopping, setShowAllShopping] = useState(false);
  const [showAllLeisure, setShowAllLeisure] = useState(false);
  const [showAllFb, setShowAllFb] = useState(false);

  const AllPage = () => {
    const ItemListView = (
      title: string,
      listType: string,
      showAll: boolean,
      setShowAll: Dispatch<SetStateAction<boolean>>
    ) => {
      return (
        <Box key={listType}>
          <Text
            fontSize="14px"
            color="#8d8d90"
            fontWeight="bold"
            mt="40px"
            ml="20px"
            mb="8px"
          >
            {title}
          </Text>

          {(storeData as any)[listType].map((v: any, index: number) => {
            if (showAll || index < 3) {
              return StoreItemView(v, index);
            }
            return <Box key={index} />;
          })}

          {!showAll && (storeData as any)[listType].length > 3 && (
            <Flex pl="20px" pr="20px">
              <Button
                variant="outline"
                w="100%"
                borderRadius="8px"
                fontWeight="bold"
                fontSize="15px"
                onClick={() => {
                  setShowAll(true);
                }}
              >
                더보기
              </Button>
            </Flex>
          )}
        </Box>
      );
    };

    return (
      <>
        {ItemListView("자기계발", "self", showAllSelf, setShowAllSelf)}
        {ItemListView("생활", "life", showAllLife, setShowAllLife)}
        {ItemListView("쇼핑", "shopping", showAllShopping, setShowAllShopping)}
        {ItemListView("여가", "leisure", showAllLeisure, setShowAllLeisure)}
        {ItemListView("F&B", "fb", showAllFb, setShowAllFb)}
      </>
    );
  };

  return (
    <>
      <Text fontSize="20px" fontWeight="semibold" mt="40px">
        일상 속에서
      </Text>
      <Text fontSize="20px" fontWeight="semibold" mb="16px">
        디벨로퍼 포인트를 사용해 보세요
      </Text>

      <EmblaCarousel dataList={slideDataList} options={emblaOptions} />

      <Text fontSize="16px" color="grey" mt="40px">
        포인트 사용처
      </Text>

      <Box
        border={attrBorderGrey2}
        borderRadius="12px"
        pt="12px"
        mt="12px"
        w="520px"
      >
        {/* 탭뷰 */}
        <Tabs.Root
          value={tabType}
          onValueChange={(e) => {
            setTabType(e.value as any);
          }}
          mb="24px"
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
              value="self"
              fontSize="16px"
              fontWeight="bold"
              color={tabType === "self" ? "black" : "#c9cacb"}
            >
              자기계발
            </Tabs.Trigger>
            <Tabs.Trigger
              value="life"
              fontSize="16px"
              fontWeight="bold"
              color={tabType === "life" ? "black" : "#c9cacb"}
            >
              생활
            </Tabs.Trigger>
            <Tabs.Trigger
              value="shopping"
              fontSize="16px"
              fontWeight="bold"
              color={tabType === "shopping" ? "black" : "#c9cacb"}
            >
              쇼핑
            </Tabs.Trigger>
            <Tabs.Trigger
              value="leisure"
              fontSize="16px"
              fontWeight="bold"
              color={tabType === "leisure" ? "black" : "#c9cacb"}
            >
              여가
            </Tabs.Trigger>
            <Tabs.Trigger
              value="fb"
              fontSize="16px"
              fontWeight="bold"
              color={tabType === "fb" ? "black" : "#c9cacb"}
            >
              F&B
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        {tabType === "all" && <AllPage />}
        {tabType !== "all" &&
          (storeData as any)[tabType].map((v: any, index: number) => {
            return StoreItemView(v, index);
          })}
      </Box>

      {/* 포인트 안내사항 */}
      <Text color="grey" mt="60px">
        포인트 안내사항
      </Text>

      <Box mt="12px" border={attrBorderGrey2} borderRadius="8px">
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
        mb="50px"
        position="relative"
        border={attrBorderGrey2}
        borderRadius="8px"
      >
        <Text fontSize="16px" fontWeight="semibold">
          포인트 제휴를 원하시면 아래 메일로 연락주세요.
        </Text>

        <Text fontSize="14px" color="grey" fontWeight="semibold">
          t-mktg@developerlab.com
        </Text>

        <Box
          h="90px"
          overflow="hidden"
          position="absolute"
          right="40px"
          top="0px"
        >
          <Image src="/partnership.png" h="80px" mt="4px" />
        </Box>
      </Box>

      {PointPolicyDialog(pointPolicyDialog)}
    </>
  );
}
