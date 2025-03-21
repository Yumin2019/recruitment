"use client";

import {
  applicationGrey,
  attrBorderGrey,
  attrBorderGreyDashed,
  textBlue,
} from "@/color";
import { InputGroup } from "@/components/ui/input-group";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
  useDialog,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { forwardRef, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip";
import { BsPaperclip } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { applicationData } from "@/app/global-data";
import { ApplicationTableItem } from "@/components/application-table-item";

type PageType = "all" | "applied" | "pass" | "hire" | "reject";

export default function AppliedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pageType, setPageType] = useState<PageType>("all");
  const statusDialog = useDialog();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    let type = searchParams.get("status") || "all";
    setPageType(type as PageType);
  }, [searchParams]);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const DatePickerCustomButton = forwardRef(({ value, onClick }, ref: any) => (
    <Flex
      onClick={onClick}
      ref={ref}
      alignItems="center"
      cursor="pointer"
      className="bg-white hover:bg-gray-100"
      border={attrBorderGrey}
      borderRadius="16px"
      pl="20px"
      pr="20px"
      ml="12px"
      h="32px"
    >
      <Spacer />
      <FaRegCalendarAlt size="14px" />
      <Text fontSize="14px" ml="6px">
        {value || "전체 기간"}
      </Text>
      <Spacer />
    </Flex>
  ));

  const getItemCounts = (type: PageType) => {
    if (type === "all") {
      return (
        applicationData.applied.length +
        applicationData.pass.length +
        applicationData.hire.length +
        applicationData.reject.length
      );
    }

    return applicationData[type].length;
  };

  const HeaderDiv = (text: string, status: PageType) => {
    return (
      <Box
        textAlign="center"
        flex={1}
        cursor="pointer"
        color={status === pageType ? textBlue : "#86939e"}
        _hover={{ color: textBlue }}
        onClick={() => {
          router.push(`/status/applications/applied?status=${status}`);
        }}
      >
        <Text fontSize="40px">{getItemCounts(status)}</Text>
        <Text fontSize="16x">{text}</Text>
      </Box>
    );
  };

  const StatusDialog = (dialog: any) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [fileDataList, setFileDataList] = useState<any>([]);

    const [nameText, setNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [phoneText, setPhoneText] = useState("");

    useEffect(() => {
      setNameText("김유민");
      setEmailText("developer@gmail.com");
      setPhoneText("01012341234");

      setFileDataList([
        {
          title: "모바일 앱 개발자 김유민입니다.pdf",
        },
        {
          title: "포트폴리오.pdf",
        },
      ]);
    }, [dialog.open]);

    const FileView = (v: any, index: number) => {
      return (
        <Flex
          border={isEditMode ? attrBorderGrey : undefined}
          p={isEditMode ? "8px" : undefined}
          alignItems="center"
          borderRadius="4px"
          key={index}
          mt={index > 0 ? "8px" : undefined}
        >
          <Flex alignItems="center" className="hover:bg-gray-100" p="4px">
            <BsPaperclip size="15px" color="grey" />
            <Text fontSize="14px" color="grey" ml="4px">
              {v.title}
            </Text>
          </Flex>

          <Spacer />
          {isEditMode && (
            <IoMdClose
              size="18px"
              color="grey"
              className="hover:bg-gray-100"
              onClick={() => {
                fileDataList.splice(index, 1);
                setFileDataList([...fileDataList]);
              }}
            />
          )}
        </Flex>
      );
    };

    return (
      <Dialog.RootProvider
        value={dialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="12px" maxH="800px">
            <Flex position="relative" alignItems="center" p="12px">
              <Spacer />
              <Text fontSize="16px" fontWeight="bold">
                지원서
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="md" />
              </Dialog.CloseTrigger>
            </Flex>

            {/* 포인트 정책 */}
            <Box overflow="auto" p="16px">
              <Flex alignItems="center">
                <Image
                  src="https://static.wanted.co.kr/images/wdes/0_5.b1efd342.png"
                  w="45px"
                  h="45px"
                  border={attrBorderGrey}
                />
                <Box ml="12px">
                  <Text fontSize="20px">플러터 / 리액트 개발자</Text>
                  <Text mt="4px" color="grey">
                    <b>안전집사 </b>· 영등포구 여의도 wework
                  </Text>
                </Box>
              </Flex>

              <Flex mt="40px" alignItems="center">
                <Text fontSize="13px" color="grey" w="60px">
                  이름
                </Text>

                {isEditMode && (
                  <Input
                    variant="flushed"
                    size="sm"
                    fontSize="16px"
                    h="30px"
                    colorPalette="blue"
                    value={nameText}
                    onChange={(e) => {
                      setNameText(e.currentTarget.value);
                    }}
                  />
                )}
                {!isEditMode && <Text fontSize="16px">{nameText}</Text>}
              </Flex>

              <Flex mt="16px" alignItems="center">
                <Text fontSize="13px" color="grey" w="60px">
                  이메일
                </Text>

                {isEditMode && (
                  <Input
                    variant="flushed"
                    size="sm"
                    fontSize="16px"
                    h="30px"
                    colorPalette="blue"
                    value={emailText}
                    onChange={(e) => {
                      setEmailText(e.currentTarget.value);
                    }}
                  />
                )}
                {!isEditMode && <Text fontSize="16px">{emailText}</Text>}
              </Flex>

              <Flex mt="16px" alignItems="center">
                <Text fontSize="13px" color="grey" w="60px">
                  연락처
                </Text>

                {isEditMode && (
                  <Input
                    variant="flushed"
                    size="sm"
                    fontSize="16px"
                    h="30px"
                    colorPalette="blue"
                    value={phoneText}
                    onChange={(e) => {
                      setPhoneText(e.currentTarget.value);
                    }}
                  />
                )}
                {!isEditMode && (
                  <Text fontSize="17px" ml="6px">
                    +82{phoneText}
                  </Text>
                )}
              </Flex>

              <Flex mt="16px" alignItems="top">
                <Text fontSize="13px" color="grey" w="60px">
                  이력서
                </Text>

                <Box w="100%">
                  {fileDataList.map((v: any, index: number) => {
                    return FileView(v, index);
                  })}

                  {isEditMode && (
                    <Box
                      mt="8px"
                      textAlign="center"
                      w="100%"
                      fontSize="13px"
                      fontWeight="bold"
                      color="grey"
                      border={attrBorderGreyDashed}
                      p="20px"
                    >
                      <Text>마우스로 파일을 끌어오세요</Text>
                      <Text>또는</Text>

                      <Button
                        variant="outline"
                        mt="8px"
                        borderRadius="24px"
                        colorPalette="blue"
                        borderColor={textBlue}
                        color={textBlue}
                        onClick={() => {}}
                        pl="28px"
                        pr="28px"
                      >
                        파일첨부하기
                      </Button>
                    </Box>
                  )}

                  {isEditMode && (
                    <Flex mt="8px">
                      <IoInformationCircleOutline color="grey" size="18px" />
                      <Text ml="6px" color="grey" fontSize="13px">
                        이미 기업에서 지원서를 열람한 경우, 변경된 사항 확인이
                        어려울 수 있습니다.
                      </Text>
                    </Flex>
                  )}
                </Box>
              </Flex>
            </Box>

            <Box borderTop={attrBorderGrey} mt="12px" mb="12px" />

            {/* 편집 모드 버튼 */}
            {isEditMode && (
              <Flex mt="12px" gapX="12px">
                <Button
                  flex={1}
                  variant="outline"
                  size="xl"
                  borderRadius="24px"
                  colorPalette="blue"
                  color={textBlue}
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                >
                  리마인더 전송
                </Button>

                <Button
                  flex={1}
                  size="xl"
                  borderRadius="24px"
                  colorPalette="blue"
                  color="white"
                  onClick={() => {
                    setIsEditMode(false);
                  }}
                >
                  확인
                </Button>
              </Flex>
            )}

            {/* 일단 모드 버튼 */}
            {!isEditMode && (
              <Button
                size="xl"
                borderRadius="24px"
                colorPalette="blue"
                color="white"
                onClick={() => {}}
              >
                리마인더 전송
              </Button>
            )}

            {!isEditMode && (
              <Button
                variant="outline"
                borderColor={textBlue}
                mt="12px"
                size="xl"
                borderRadius="24px"
                colorPalette="blue"
                color={textBlue}
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                수정
              </Button>
            )}

            {!isEditMode && (
              <Button
                variant="outline"
                borderColor={textBlue}
                mt="12px"
                size="xl"
                borderRadius="24px"
                colorPalette="blue"
                color={textBlue}
                onClick={() => {
                  dialog.setOpen(false);
                }}
              >
                지원 취소
              </Button>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  return (
    <>
      {/* 헤더  */}
      <Flex mt="60px">
        {HeaderDiv("전체", "all")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("지원 완료", "applied")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("서류 통과", "pass")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("최종 합격", "hire")}
        <Box borderRight={attrBorderGrey} />
        {HeaderDiv("불합격", "reject")}
      </Flex>

      {/* 검색, 기간 버튼, 취업활동증명서 버튼 */}
      <Flex mt="40px" h="32px">
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

        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={onChange}
          selectsRange
          customInput={<DatePickerCustomButton />}
        >
          <Text
            cursor="pointer"
            onClick={() => {
              setStartDate(null);
              setEndDate(null);
            }}
          >
            초기화
          </Text>
        </DatePicker>

        <Spacer />

        <Flex
          alignItems="center"
          cursor="pointer"
          bg="white"
          _hover={{
            bg: getItemCounts(pageType) > 0 ? "gray.100" : undefined,
          }}
          color={getItemCounts(pageType) > 0 ? "black" : applicationGrey}
          border={attrBorderGrey}
          borderRadius="16px"
          pl="20px"
          pr="20px"
        >
          <Spacer />
          <MdOutlineFileDownload size="16px" />
          <Text fontSize="14px" ml="6px">
            취업활동증명서 다운로드
          </Text>
          <Spacer />
        </Flex>
      </Flex>
      <Flex
        mt="30px"
        textAlign="center"
        alignItems="center"
        paddingBottom="8px"
        borderBottom={attrBorderGrey}
      >
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

        <Flex alignItems="center">
          <Text fontSize="14px">보상금 신청</Text>

          <Tooltip
            showArrow
            positioning={{ placement: "top" }}
            content="최종 인터뷰까지 통과하신 경우, 보상금 '신청' 버튼을 눌러주세요. 3개월 초과근무 시 본 계정 이메일로 계좌정보 요청 메일이 발송될 예정이니 확인 후 신청 해주세요."
            openDelay={100}
            closeDelay={100}
          >
            <Box mb="2px" ml="4px">
              <FaRegCircleQuestion size="12px" color="grey" />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
      <Box bg="white">
        {pageType !== "all" &&
          (applicationData as any)[pageType].map((v: any, index: number) => {
            return ApplicationTableItem(v, index, undefined, () => {
              statusDialog.setOpen(true);
            });
          })}

        {/* 전체에 대한 데이터를 출력한다. */}
        {pageType === "all" &&
          (applicationData as any)["applied"].map((v: any, index: number) => {
            return ApplicationTableItem(v, index, undefined, () => {
              statusDialog.setOpen(true);
            });
          })}
      </Box>

      {StatusDialog(statusDialog)}
    </>
  );
}
