"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Dialog,
  Portal,
  useDialog,
} from "@chakra-ui/react";
import { attrBorderGrey } from "@/color";
import { GoPlus } from "react-icons/go";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PostView } from "@/components/post-view";
import { postDataList } from "../global-data";

const postTypeList = [
  {
    title: "전체",
    value: "all",
  },
  {
    title: "직장 생활",
    value: "jobLife",
  },
  {
    title: "일상",
    value: "daily",
  },
  {
    title: "커리어",
    value: "career",
  },
  {
    title: "소통",
    value: "communication",
  },
  {
    title: "마케팅, 광고",
    value: "marketing",
  },
  {
    title: "휴식 및 취미",
    value: "rest",
  },
];

export default function CommunityPage() {
  const [postType, setPostType] = useState("all");
  const [isPostDlgOpen, setIsPostDlgOpen] = useState(false);
  const alertDialog = useDialog();
  const [text, setText] = useState("");

  const TypeTag = (v: any, index: number) => {
    return (
      <Box
        key={index}
        fontSize={12}
        bg={v.value === postType ? "black" : "white"}
        color={v.value === postType ? "white" : "black"}
        border={attrBorderGrey}
        pl="8px"
        pr="8px"
        pt="6px"
        pb="6px"
        borderRadius={8}
        onClick={() => {
          setPostType(v.value);
        }}
      >
        {v.title}
      </Box>
    );
  };

  const AlertDialog = () => {
    return (
      <Dialog.RootProvider value={alertDialog} placement="center">
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>글 작성 중단</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text fontSize={16}>글 작성을 중단하시겠습니까?</Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">취소</Button>
                </Dialog.ActionTrigger>
                <Button
                  colorPalette="red"
                  onClick={() => {
                    setIsPostDlgOpen(false);
                  }}
                >
                  나가기
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>
    );
  };

  const PostDialog = (button: any) => {
    return (
      <Dialog.Root
        placement="center"
        motionPreset="slide-in-bottom"
        size="md"
        open={isPostDlgOpen}
        onOpenChange={(e) => setIsPostDlgOpen(e.open)}
        closeOnInteractOutside={false}
        onInteractOutside={(e) => {
          // 중단 다이얼로그 보여주기
          alertDialog.setOpen(true);
        }}
      >
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle textAlign="left">글 작성하기</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Image src="/google.png" w="35px" h="35px" />

            <Flex
              mt="20px"
              mb="20px"
              alignItems="center"
              onClick={() => {
                console.log("click");
              }}
            >
              <Box
                border="2px dashed rgb(228, 228, 231)"
                borderRadius={4}
                p={1}
              >
                <GoPlus size={28} />
              </Box>
              <Text fontSize={16} ml="8px">
                이미지 추가
              </Text>
            </Flex>

            <textarea
              style={{
                height: "300px",
                width: "100%",
                border: attrBorderGrey,
                borderRadius: "8px",
                fontSize: "16px",
              }}
              value={text}
              onChange={(e) => {
                setText(e.currentTarget.value);
              }}
            />

            <Dialog.ActionTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                w="100%"
                borderRadius={10}
                mt="30px"
                disabled={text.length === 0}
              >
                게시
              </Button>
            </Dialog.ActionTrigger>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </Dialog.Root>
    );
  };

  return (
    <Box p="24px">
      {/* 태그 리스트 */}
      <Flex gapX="8px">
        {postTypeList.map((v, index) => {
          return TypeTag(v, index);
        })}
      </Flex>

      {/* Input Area */}
      <Flex alignItems="center" mt="30px">
        <Image src="/google.png" w="35px" h="35px" />
        {PostDialog(
          <Text
            color="#c7c8c9"
            fontSize={16}
            ml="12px"
            onClick={() => {
              setIsPostDlgOpen(true);
            }}
          >
            나누고 싶은 생각을 공유해 보세요!
          </Text>
        )}
      </Flex>

      <AlertDialog />

      {/* 포스트 리스트 */}
      <Box borderBottom={attrBorderGrey} mt="20px" />
      {postDataList.map((v, index) => {
        return PostView(v, index);
      })}

      {/* 무한 스크롤 부분 작업 예정 */}

      <Box mt={1000}></Box>
    </Box>
  );
}
