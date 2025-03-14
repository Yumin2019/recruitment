import { attrBorderGrey2 } from "@/color";
import { copyCipboard, getCountOfLines, successToast } from "@/util";
import {
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  Button,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { IoChatbubbleOutline, IoShareOutline } from "react-icons/io5";

export const PostView = (v: any, index: number, isPostPage = false) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isPostExpanded, setIsPostExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const lineCounts = useMemo(() => getCountOfLines(v.text), []);

  return (
    <Box key={index} pt="16px">
      <Flex alignItems="center">
        <Image w="45px" h="45px" borderRadius="50%" src={v.imageSrc} />
        <Box ml="8px">
          <Text fontSize={18} fontWeight="bold">
            {v.name}
          </Text>
          <Text fontSize={14} color="#858588">
            {`${v.category} ・ ${v.date}`}
          </Text>
        </Box>
        <Spacer />
        {!isFollowing && (
          <Button
            size="xs"
            variant="outline"
            fontWeight="bold"
            borderRadius={6}
            mr="8px"
            onClick={() => {
              setIsFollowing(true);
            }}
          >
            팔로우
          </Button>
        )}

        {!isPostPage && (
          <MenuRoot>
            <MenuTrigger asChild>
              <Box className="hover:bg-gray-100" p="4px" borderRadius="50%">
                <HiDotsVertical size={20} />
              </Box>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="reportPost"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                게시글 신고하기
              </MenuItem>
              <MenuItem
                value="reportUser"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                사용자 신고하기
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        )}
      </Flex>

      <Text
        fontSize={14}
        whiteSpace="pre-line"
        lineClamp={isPostExpanded ? 1000 : 5}
        mt="16px"
      >
        {v.text}
      </Text>

      {!isPostExpanded && lineCounts > 5 && (
        <Text
          fontSize={15}
          color="grey"
          fontWeight="bold"
          className="hover:bg-gray-100"
          w="60px"
          onClick={() => {
            setIsPostExpanded(true);
          }}
        >
          ...더 보기
        </Text>
      )}

      <Flex mt="8px" alignItems="center" ml="-8px">
        {isLiked && (
          <Box
            className="hover:bg-gray-100"
            p="8px"
            borderRadius="50%"
            onClick={() => {
              setIsLiked(false);
            }}
          >
            <GoHeartFill size="20px" color="red" />
          </Box>
        )}

        {!isLiked && (
          <Box
            className="hover:bg-gray-100"
            p="8px"
            borderRadius="50%"
            onClick={() => {
              setIsLiked(true);
            }}
          >
            <GoHeart size="20px" color="grey" />
          </Box>
        )}

        <Box className="hover:bg-gray-100" p="8px" borderRadius="50%">
          <IoChatbubbleOutline size="20px" color="grey" />
        </Box>

        <Box
          className="hover:bg-gray-100"
          p="8px"
          borderRadius="50%"
          onClick={() => {
            copyCipboard("test", () => {
              successToast("링크가 복사되었습니다.");
            });
          }}
        >
          <IoShareOutline size="20px" color="grey" />
        </Box>

        <Spacer />

        <Flex alignItems="center" position="relative">
          <Image
            w="16px"
            h="16px"
            mr="4px"
            borderRadius="50%"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90"
          />
          <Image
            position="absolute"
            left="10px"
            w="16px"
            h="16px"
            mr="4px"
            borderRadius="50%"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FgR95b65iUW2Gr56bb4RbVr%2Fde7c9222cc84edd03a3085cfcdb4ac5f3a1e558c8c0ae2f8afd2fa0b608c98f8&w=60&q=90"
          />

          <Text
            fontSize={13}
            color="grey"
            _hover={{ color: "black" }}
            ml="11px"
          >
            좋아요 {v.likeCount}
          </Text>
          <Text fontSize={13} color="grey" ml="8px" mr="8px">
            ・
          </Text>
          <Text fontSize={13} color="grey" _hover={{ color: "black" }}>
            댓글 {v.commentCount}
          </Text>
        </Flex>
      </Flex>
      <Box borderBottom={attrBorderGrey2} mt="12px" />
    </Box>
  );
};
