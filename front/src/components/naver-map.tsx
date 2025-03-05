import { attrBorderGrey } from "@/color";
import { Box, Text } from "@chakra-ui/react";

export const NaverMap = (text: string, url: string) => {
  return (
    <Box border={attrBorderGrey} borderRadius="20px">
      <Box
        id="map"
        className="min-w-[218px] md:min-w-[338px] h-[110px] md:h-[203px] rounded-t-[20px]"
        onClick={() => {
          // 링크 수정 필요
          window.open(url, "naverMap", "popup");
          // https://map.naver.com/p?title=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C92%EA%B8%B8%2028&lng=127.0509342&lat=37.5057526&zoom=17&type=0&c=17.00,0,0,0,dh
        }}
      />
      <Box
        className="w-[218px] md:w-[338px] h-[50px] md:h-[50px] bg-white rounded-b-[20px] content-center"
        pl={4}
      >
        <Text fontSize={16}>{text}</Text>
      </Box>
    </Box>
  );
};
