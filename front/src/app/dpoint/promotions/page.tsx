"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useDraggable } from "react-use-draggable-scroll";
import { PositionDiv } from "@/components/position-div";
import useEmblaCarousel from "embla-carousel-react";

export default function PointPromotionPage() {
  const scrollRefPos = useRef<HTMLDivElement>(
    undefined
  ) as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollResPosEvents } = useDraggable(scrollRefPos, {
    applyRubberBandEffect: true,
  });

  const dataList = [
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
    {
      image: "/developer_logo.png",
      title: "React Native Developer",
      content:
        "React Native Developer with experience in mobile application development.",
    },
  ];
  const RenderPosition = ({
    ref,
    events,
    title,
  }: {
    ref: React.MutableRefObject<HTMLInputElement>;
    events: any;
    title: string;
  }) => {
    return (
      <Flex direction="column">
        <Text fontWeight="bold" textStyle="lg" mb={2} mt={2}>
          {title}
        </Text>
      </Flex>
    );
  };

  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <Text fontSize="20px" fontWeight="semibold">
        일상 속에서
      </Text>
      <Text fontSize="20px" fontWeight="semibold">
        디벨로퍼 포언트를 사용해 보세요.
      </Text>
      {/* 합격 가능성이 높은 포지션 */}
    </>
  );
}
