import { attrBorderGrey } from "@/color";
import { Flex, Image, Text, Box, Spacer } from "@chakra-ui/react";

export const ProfileInfoRow = (v: any) => {
  return (
    <Flex alignItems="center" mt="8px">
      <Image
        src={v.src}
        w="50px"
        h="50px"
        border={attrBorderGrey}
        borderRadius="8px"
      />

      <Box ml="10px" w="100%">
        <Text fontSize="16px" fontWeight="bold">
          {v.name}
        </Text>

        <Flex color="grey" fontSize="13px" mt="2px">
          <Text>{v.desc}</Text>
          <Spacer />
          <Text>{v.date}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
