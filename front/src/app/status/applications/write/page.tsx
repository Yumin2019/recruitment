"use client";

import { applicationData } from "@/app/global-data";
import { attrBorderGrey, textBlue } from "@/color";
import { ApplicationTableItem } from "@/components/application-table-item";
import { InputGroup } from "@/components/ui/input-group";
import { successToast } from "@/util";
import {
  Flex,
  Input,
  Text,
  Spacer,
  Box,
  Dialog,
  useDialog,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

export default function WritePage() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const alertDialog = useDialog();

  const AlertDialog = () => {
    return (
      <Dialog.RootProvider
        value={alertDialog}
        size="xs"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="16px">
            <Box p="12px" textAlign="center">
              <Text fontSize="20px" fontWeight="semibold">
                항목 1개를 완전히 삭제하시겠어요?
              </Text>

              <Text fontSize="16px" mt="20px">
                영구적으로 삭제되며 복구할 수 없습니다.
              </Text>
            </Box>

            <Button
              mt="30px"
              colorPalette="blue"
              size="lg"
              borderRadius="8px"
              color="white"
              ml="8px"
              mr="8px"
              onClick={() => {
                successToast("항목이 삭제되었습니다.");
                alertDialog.setOpen(false);
              }}
            >
              네, 삭제하기
            </Button>

            <Button
              mt="12px"
              variant="outline"
              size="lg"
              borderRadius="8px"
              color={textBlue}
              borderColor={textBlue}
              ml="8px"
              mr="8px"
              onClick={() => {
                alertDialog.setOpen(false);
              }}
            >
              아니오
            </Button>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  return (
    <>
      <Flex mt="40px" h="32px" w="550px">
        <InputGroup
          border={attrBorderGrey}
          bg="white"
          borderRadius="16px"
          startOffset="0px"
          colorPalette="blue"
          w="170px"
          startElement={<CiSearch size="18px" color="black" />}
        >
          <Input
            className="inputWithoutBorder"
            placeholder="검색"
            fontSize="14px"
          />
        </InputGroup>

        <Spacer />

        <Flex
          cursor="pointer"
          alignItems="center"
          border={attrBorderGrey}
          borderRadius="8px"
          pl="12px"
          pr="12px"
          onClick={() => {
            alertDialog.setOpen(true);
          }}
        >
          <FaRegTrashAlt size="14px" />
          <Text fontSize="14px" ml="4px">
            삭제 (3)
          </Text>
        </Flex>
      </Flex>

      <Flex
        mt="30px"
        textAlign="center"
        alignItems="center"
        paddingBottom="8px"
        borderBottom={attrBorderGrey}
      >
        <Box ml="12px">
          <input
            type="checkbox"
            checked={isCheckedAll}
            onChange={(e) => {
              setIsCheckedAll(e.target.checked);
            }}
          />
        </Box>

        <Box w="160px">
          <Text fontSize="14px">지원 회사</Text>
        </Box>

        <Box w="120px">
          <Text fontSize="14px">지원 포지션</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">작성시간</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">진행상태</Text>
        </Box>

        <Box w="80px">
          <Text fontSize="14px">추천 현황</Text>
        </Box>
      </Flex>
      <Box bg="white">
        {(applicationData as any)["write"].map((v: any, index: number) => {
          return ApplicationTableItem(v, index, isCheckedAll, () => {
            // router.push 페이지 이동
          });
        })}
      </Box>

      <AlertDialog />
    </>
  );
}
