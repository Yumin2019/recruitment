"use client";

import { Box, Text } from "@chakra-ui/react";
import { postDataList } from "@/app/global-data";
import { PostView } from "@/components/post-view";

export default function MyPostPage() {
  return (
    <>
      <Box p="40px">
        <Text fontSize="18px" fontWeight="semibold">
          게시글
        </Text>
        {postDataList.map((v, index) => {
          return PostView(v, index, true, false);
        })}
        <Box mt={50}></Box>
      </Box>
    </>
  );
}
