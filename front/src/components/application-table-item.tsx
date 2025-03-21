import { attrBorderGrey } from "@/color";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ApplicationTableItem = (
  v: any,
  index: number,
  isCheckedValue?: boolean,
  onClick?: () => void
) => {
  const [isChecked, setIsChecked] = useState(isCheckedValue || false);

  useEffect(() => {
    setIsChecked(isCheckedValue || false);
  }, [isCheckedValue]);

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
      onClick={onClick}
    >
      {isCheckedValue !== undefined && (
        <Box ml="12px">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          />
        </Box>
      )}

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
