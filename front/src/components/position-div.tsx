import { mainBlue } from "@/color";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

export const PositionDiv = (index: number, marked: boolean) => {
  const [isMarked, setIsMarked] = useState(marked);

  //   useEffect(() => {
  //     setIsMarked(marked);
  //   }, [marked]);

  return (
    <Stack direction="column" key={index}>
      <Box className="hover:scale-101 h-[114px] md:h-[170px]">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
          className="ease-in-out rounded-[20px] h-[114px] md:h-[170px] object-cover w-[152px] md:w-[250px]"
        />
        <Flex
          className="bg-linear-to-t from-opacity-100 to-black/40 rounded-t-[20px] w-[152px] md:w-[250px] relative top-[-110px] md:top-[-183px]"
          alignItems="center"
          p="12px"
        >
          <Text fontSize={{ base: 12, md: 14 }} color="white">
            합격보상금 100만원
          </Text>

          <Spacer />

          {!isMarked && (
            <CiBookmark
              size="22px"
              color="white"
              onClick={() => {
                let value = !isMarked;
                setIsMarked(value);
              }}
            />
          )}

          {isMarked && (
            <IoBookmark
              size="22px"
              color={mainBlue}
              onClick={() => {
                let value = !isMarked;
                setIsMarked(value);
              }}
            />
          )}
        </Flex>
      </Box>

      <Text fontSize={14} fontWeight="bold" mt={{ base: 0, md: 4 }}>
        안드로이드 개발자 채용
      </Text>
      <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
        데브컴퍼니
      </Text>
      <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
        경력 2년 이상
      </Text>
    </Stack>
  );
};
