"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  MenuRoot,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Text,
  Image,
  Input,
} from "@chakra-ui/react";
import { postDataList } from "@/app/global-data";
import { PostView } from "@/components/post-view";
import { copyCipboard, successToast } from "@/util";
import { IoShareOutline } from "react-icons/io5";
import { GoArrowLeft, GoHeart, GoHeartFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { attrBorderGrey2 } from "@/color";
import { IoMdClose } from "react-icons/io";

export default function PostPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [answerUser, setAnswerUser] = useState<undefined | string>(undefined);
  const router = useRouter();

  return (
    <Box pl="20px" pr="20px" pt="20px">
      {/* 포스트 페이지 상단 Row */}
      <Flex alignItems="center">
        <Box
          className="hover:bg-gray-100"
          p="8px"
          borderRadius="50%"
          onClick={() => {
            router.push("/community");
          }}
        >
          <GoArrowLeft size="24px" />
        </Box>

        <Spacer />

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
          <IoShareOutline size="24px" />
        </Box>

        <Flex alignItems="center">
          {isLiked && (
            <Box
              className="hover:bg-gray-100"
              p="8px"
              borderRadius="50%"
              onClick={() => {
                setIsLiked(false);
              }}
            >
              <GoHeartFill size="22px" color="red" />
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
              <GoHeart size="22px" />
            </Box>
          )}
        </Flex>

        <MenuRoot>
          <MenuTrigger asChild>
            <Box
              className="hover:bg-gray-100"
              p="8px"
              borderRadius="50%"
              onClick={() => {
                setIsLiked(true);
              }}
            >
              <HiDotsVertical size="22px" />
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
      </Flex>

      {/* 포스트 영역  */}
      {PostView(postDataList[0], 0, true)}

      {/* 댓글 영역 */}
      <Box mt="20px">
        <Flex alignItems="center">
          <Image
            w="36px"
            h="36px"
            borderRadius="50%"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FiwSaAq73ESoTKc7bbCtZBN%2F0e57115583b2316981de8d958652113a3ec091bd3f563c6c3f10a30add7d478d&w=60&q=90"
          />
          <Box ml="4px">
            <Text fontSize={14} fontWeight="bold">
              디벨로퍼랩 에이전트
            </Text>
            <Text fontSize={12} color="#858588">
              {`${"개발"} ・ ${"1시간 전"}`}
            </Text>
          </Box>

          <Spacer />
          <MenuRoot>
            <MenuTrigger asChild>
              <Box
                className="hover:bg-gray-100"
                p="8px"
                borderRadius="50%"
                onClick={() => {
                  setIsLiked(true);
                }}
              >
                <HiDotsVertical size="18px" />
              </Box>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value="reportPost"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                댓글 신고하기
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
        </Flex>

        <Box ml="40px" mt="6px">
          <Text fontSize={13}>
            이 글은 리더십과 조직문화에 대한 깊은 통찰을 제공하는 좋은
            내용이네요! 다양한 사례로 고정관념을 극복하는 방법을 설명해 주셔서
            많은 분들이 유익하게 읽으실 것 같아요. 계속해서 좋은 글 많이 공유해
            주세요! 😊
          </Text>

          <Flex alignItems="center" mt="8px" mr="8px">
            <Text
              fontSize={12}
              color="grey"
              className="hover:bg-gray-100"
              onClick={() => {
                console.log("답글 달기");
                setAnswerUser("디벨로퍼 에이전트");
              }}
            >
              답글 달기
            </Text>
            <Spacer />
            {isLiked && <GoHeartFill size="12px" color="red" />}
            {!isLiked && <GoHeart size="12px" />}
          </Flex>
        </Box>
      </Box>

      {/* 내 생각 남기기 */}
      <Box ml="4px">
        {answerUser && <Box borderTop={attrBorderGrey2} mt="20px" mb="20px" />}
        {answerUser && (
          <Flex alignItems="center">
            <Text fontSize="13px" color="grey">
              <b>{answerUser}</b>님에게 답글 남기는 중
            </Text>
            <Spacer />
            <IoMdClose
              color="grey"
              onClick={() => {
                setAnswerUser(undefined);
              }}
            />
          </Flex>
        )}

        <Box
          w="100%"
          mt="8px"
          borderRadius="8px"
          bg="#f4f4f5"
          pl="10px"
          pt="10px"
          pb="10px"
        >
          <Flex>
            <Image
              w="28px"
              h="28px"
              mr="8px"
              borderRadius="50%"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FiwSaAq73ESoTKc7bbCtZBN%2F0e57115583b2316981de8d958652113a3ec091bd3f563c6c3f10a30add7d478d&w=60&q=90"
            />

            <textarea
              style={{
                fontSize: "13px",
                width: "100%",
                height: "55px",
              }}
              value={commentText}
              placeholder="내 생각 남기기"
              onChange={(e) => {
                setCommentText(e.currentTarget.value);
              }}
            />
          </Flex>

          <Flex mr="16px">
            <Spacer />
            <Text
              fontSize={14}
              fontWeight="bold"
              color="#0066ff"
              className="hover:bg-gray-200"
              pr="8px"
              pl="8px"
              borderRadius="4px"
            >
              게시
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
