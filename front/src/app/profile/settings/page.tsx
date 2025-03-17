"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Dialog,
  useDialog,
  Tabs,
  Input,
  Button,
} from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2, textBlue } from "@/color";
import { FaArrowRight, FaRegBuilding } from "react-icons/fa";
import { CloseButton } from "@/components/ui/close-button";
import { IoMdClose, IoMdInformationCircleOutline } from "react-icons/io";
import { InputGroup } from "@/components/ui/input-group";
import { CiSearch } from "react-icons/ci";
import { SwitchDiv } from "@/components/switch-div";
import { useSearchParams } from "next/navigation";
import { MdEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { successToast } from "@/util";
import Link from "next/link";

export default function ProfileSettingsPage() {
  const searchParams = useSearchParams();
  const [pageType, setPageType] = useState("network");

  // 추천 네트워크 설정 페이지
  const [departmentText, setDepartmentText] = useState("");
  const [groupText, setGroupText] = useState<string | undefined>();
  const [isVisibleAccount, setIsVisibleAccount] = useState(false);

  // 사용자 정보
  const [nameText, setNameText] = useState("디벨로퍼");
  const [numberText, setNumberText] = useState("01012341234");

  // 다이얼로그
  const networkDialog = useDialog();
  const nameDialog = useDialog();
  const numberDialog = useDialog();
  const passwordDialog = useDialog();
  const exitingDialog = useDialog();

  useEffect(() => {
    let type = searchParams.get("type") || "network";
    setPageType(type);
  }, [searchParams]);

  const NetworkDialog = () => {
    const [pageType, setPageType] = useState<string | undefined>("company");
    const dataList = [
      "디벨로퍼랩 1",
      "디벨로퍼랩 2",
      "디벨로퍼랩 3",
      "디벨로퍼랩 4",
      "디벨로퍼랩 5",
      "디벨로퍼랩 6",
      "디벨로퍼랩 7",
    ];

    return (
      <Dialog.RootProvider
        value={networkDialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content h="550px">
            <Flex
              position="relative"
              alignItems="center"
              p="12px"
              borderBottom={attrBorderGrey2}
            >
              <Spacer />
              <Text textAlign="center" fontSize="15px" fontWeight="semibold">
                직장 또는 학교 연결
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Flex>

            {/* Tab 영역 */}
            <Tabs.Root
              pt="10px"
              variant="line"
              justify="center"
              size="sm"
              value={pageType}
              onValueChange={(e) => {
                setPageType(e.value);
              }}
            >
              <Tabs.List>
                <Tabs.Trigger
                  value="company"
                  fontSize="15px"
                  textAlign="center"
                  pb="12px"
                >
                  직장
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="school"
                  fontSize="15px"
                  textAlign="center"
                  pb="12px"
                >
                  학교
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            <InputGroup
              pt="6px"
              pb="6px"
              borderBottom={attrBorderGrey}
              startOffset="0px"
              colorPalette="blue"
              startElement={<CiSearch size={20} color="black" />}
            >
              <Input
                className="inputWithoutBorder"
                placeholder="검색"
                fontSize="15px"
              />
            </InputGroup>

            <Box h="100%" overflow="auto">
              {dataList.map((v, index) => {
                return (
                  <Box
                    p="20px"
                    borderBottom={attrBorderGrey}
                    key={index}
                    cursor="pointer"
                    onClick={() => {
                      setGroupText(v);
                      networkDialog.setOpen(false);
                    }}
                  >
                    <Text fontSize="16px">{v}</Text>
                  </Box>
                );
              })}
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const NameDialog = () => {
    const [text, setText] = useState(nameText);

    useEffect(() => {
      setText(nameText);
    }, [nameText]);

    return (
      <Dialog.RootProvider
        value={nameDialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="8px">
            <Flex position="relative" alignItems="center" p="12px">
              <Spacer />
              <Text textAlign="center" fontSize="17px" fontWeight="bold">
                이름
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="md" />
              </Dialog.CloseTrigger>
            </Flex>

            <Box ml="12px" mr="12px" mt="30px">
              <Input
                value={text}
                onChange={(e) => {
                  setText(e.currentTarget.value);
                }}
                placeholder="이름을 입력해주세요."
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
              />
            </Box>

            <Flex mr="12px" mt="30px" mb="8px">
              <Spacer />
              <Button
                variant="outline"
                size="lg"
                borderRadius="8px"
                w="90px"
                color={textBlue}
                onClick={() => {
                  nameDialog.setOpen(false);
                }}
              >
                취소
              </Button>

              <Button
                ml="8px"
                colorPalette="blue"
                size="lg"
                w="90px"
                borderRadius="8px"
                color="white"
                onClick={() => {
                  setNameText(text);
                  successToast("이름이 변경되었습니다.");
                  nameDialog.setOpen(false);
                }}
              >
                저장
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const NumberDialog = () => {
    const [dlgNumberText, setDlgNumberText] = useState("");
    const [dlgAuthNumberText, setDlgAuthNumberText] = useState("");
    const [isSentNumber, setIsSentNumber] = useState(false);
    const [isAuthFinished, setIsAuthFinished] = useState(false);

    useEffect(() => {
      setDlgNumberText("");
      setDlgAuthNumberText("");
    }, []);

    return (
      <Dialog.RootProvider
        value={numberDialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="8px">
            <Flex position="relative" alignItems="center" p="12px">
              <Spacer />
              <Text textAlign="center" fontSize="17px" fontWeight="bold">
                휴대폰 번호 변경
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="md" />
              </Dialog.CloseTrigger>
            </Flex>

            {/* 전화번호 입력 부분 */}
            <Flex ml="12px" mr="12px" mt="30px">
              <Input
                value={dlgNumberText}
                onChange={(e) => {
                  setDlgNumberText(e.currentTarget.value);
                }}
                maxLength={11}
                placeholder="(예시) 01012341234"
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
                disabled={isSentNumber}
              />

              <Button
                ml="8px"
                colorPalette="blue"
                size="lg"
                borderRadius="8px"
                variant="subtle"
                w="110px"
                disabled={dlgNumberText.length !== 11 || isSentNumber}
                onClick={() => {
                  setIsSentNumber(true);
                }}
              >
                인증번호 받기
              </Button>
            </Flex>

            {isSentNumber && (
              <Text ml="12px" mt="4px" color="green" fontSize="13px">
                전송완료
              </Text>
            )}

            {/* 인증번호 입력 부분 */}
            <Flex ml="12px" mr="12px" mt="8px">
              <Input
                value={dlgAuthNumberText}
                onChange={(e) => {
                  setDlgAuthNumberText(e.currentTarget.value);
                }}
                maxLength={6}
                placeholder="인증번호를 입력해주세요"
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
                disabled={!isSentNumber || isAuthFinished}
              />

              <Button
                ml="8px"
                colorPalette="blue"
                variant="subtle"
                size="lg"
                borderRadius="8px"
                w="110px"
                disabled={
                  !isSentNumber ||
                  isAuthFinished ||
                  dlgAuthNumberText.length !== 6
                }
                onClick={() => {
                  // 인증번호 확인
                  setIsAuthFinished(true);
                }}
              >
                인증번호 확인
              </Button>
            </Flex>

            {isAuthFinished && (
              <Text ml="12px" mt="4px" color="green" fontSize="12px">
                인증완료
              </Text>
            )}

            <Flex mr="12px" mt="30px" mb="8px">
              <Spacer />
              <Button
                variant="outline"
                size="lg"
                borderRadius="8px"
                w="90px"
                color={textBlue}
                onClick={() => {
                  numberDialog.setOpen(false);
                }}
              >
                취소
              </Button>

              <Button
                ml="8px"
                colorPalette="blue"
                size="lg"
                w="90px"
                borderRadius="8px"
                color="white"
                disabled={!isAuthFinished}
                onClick={() => {
                  setNumberText(dlgNumberText);
                  successToast("휴대폰 번호가 변경되었습니다.");
                  numberDialog.setOpen(false);
                }}
              >
                저장
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const PasswordDialog = () => {
    const [curPasswordText, setCurPasswordText] = useState("");
    const [newPasswordText, setNewPasswordText] = useState("");
    const [newPasswordConfirmText, setNewPasswordConfirmText] = useState("");
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
      setCurPasswordText("");
      setNewPasswordText("");
      setNewPasswordConfirmText("");
    }, []);

    useEffect(() => {
      if (curPasswordText.length > 0 && curPasswordText === newPasswordText) {
        setErrorText("새 비밀번호가 기존 비밀번호와 동일합니다.");
      } else if (
        newPasswordText.length > 0 &&
        newPasswordConfirmText.length > 0 &&
        newPasswordText !== newPasswordConfirmText
      ) {
        setErrorText("새 비밀번호가 다릅니다.");
      } else {
        setErrorText("");
      }
    }, [curPasswordText, newPasswordText, newPasswordConfirmText]);

    return (
      <Dialog.RootProvider
        value={passwordDialog}
        size="sm"
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="8px">
            <Flex position="relative" alignItems="center" p="12px">
              <Spacer />
              <Text textAlign="center" fontSize="17px" fontWeight="bold">
                비밀번호 변경
              </Text>
              <Spacer />
              <Dialog.CloseTrigger asChild position="absolute" right="0px">
                <CloseButton size="md" />
              </Dialog.CloseTrigger>
            </Flex>

            {/* 현재 비밀번호 */}
            <Box ml="12px" mr="12px" mt="30px">
              <Text fontSize="14px" color="grey" mb="8px">
                현재 비밀번호
              </Text>

              <Input
                value={curPasswordText}
                onChange={(e) => {
                  setCurPasswordText(e.currentTarget.value);
                }}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
              />
            </Box>

            {/* 새 비밀번호 */}
            <Box ml="12px" mr="12px" mt="30px">
              <Text fontSize="14px" color="grey" mb="8px">
                새 비밀번호
              </Text>

              <Input
                value={newPasswordText}
                onChange={(e) => {
                  setNewPasswordText(e.currentTarget.value);
                }}
                type="password"
                placeholder="새 비밀번호를 입력해주세요."
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
              />

              <Input
                mt="8px"
                value={newPasswordConfirmText}
                onChange={(e) => {
                  setNewPasswordConfirmText(e.currentTarget.value);
                }}
                type="password"
                placeholder="새 비밀번호를 다시 한번 입력해주세요."
                colorPalette="blue"
                borderRadius="8px"
                fontSize="16px"
                h="45px"
              />
            </Box>

            {errorText.length > 0 && (
              <Text ml="12px" mt="4px" color="red.600" fontSize="12px">
                {errorText}
              </Text>
            )}

            {/* 버튼 */}
            <Flex mr="12px" mt="30px" mb="8px">
              <Spacer />
              <Button
                variant="outline"
                size="lg"
                borderRadius="8px"
                w="90px"
                color={textBlue}
                onClick={() => {
                  passwordDialog.setOpen(false);
                }}
              >
                취소
              </Button>

              <Button
                ml="8px"
                colorPalette="blue"
                size="lg"
                w="90px"
                borderRadius="8px"
                color="white"
                disabled={
                  curPasswordText.length === 0 ||
                  newPasswordText.length === 0 ||
                  newPasswordConfirmText.length === 0 ||
                  newPasswordText !== newPasswordConfirmText ||
                  curPasswordText === newPasswordText
                }
                onClick={() => {
                  successToast("비밀번호가 변경되었습니다.");
                  passwordDialog.setOpen(false);
                }}
              >
                저장
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const NetworkPage = () => {
    return (
      <Box border={attrBorderGrey} minW="760px" padding="30px" mt="100px">
        <Text fontSize="17px" fontWeight="bold">
          네트워크
        </Text>

        <Flex alignItems="center" w="100%">
          <Spacer />
          <Image src="/feedback.png" w="90px" mb="12px" mt="20px" />
          <Spacer />
        </Flex>

        <Text fontSize="16px" color="grey" textAlign="center">
          네트워크를 연결해서 지인들을 찾고, 추천을 주고 받아보세요.
        </Text>

        <Flex alignItems="center" mt="36px">
          <FaRegBuilding
            size="16px"
            cursor="pointer"
            onClick={() => {
              networkDialog.setOpen(true);
            }}
          />
          <Text
            fontSize="16px"
            ml="16px"
            flex={1}
            cursor="pointer"
            _hover={{ color: textBlue }}
            onClick={() => {
              networkDialog.setOpen(true);
            }}
          >
            {groupText !== undefined ? groupText : "직장 또는 학교"}
          </Text>

          {groupText && (
            <IoMdClose
              size="20px"
              color="grey"
              cursor="pointer"
              onClick={(e) => {
                setGroupText(undefined);
              }}
            />
          )}
          {!groupText && <FaArrowRight size="14px" color="grey" />}
        </Flex>

        <Box borderTop={attrBorderGrey} mt="12px" />

        <Flex alignItems="center" mt="24px" cursor="pointer">
          <input
            placeholder="직무 / 전공"
            value={departmentText}
            onChange={(e) => {
              setDepartmentText(e.currentTarget.value);
            }}
            style={{
              fontSize: "16px",
              outlineStyle: "none",
              width: "100%",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          />
        </Flex>

        <Box borderTop={attrBorderGrey} mt="12px" />
        <Box borderTop={attrBorderGrey} ml="-30px" mr="-30px" mt="70px" />

        <Text fontSize="17px" fontWeight="bold" mt="30px">
          비공개 계정
        </Text>

        <Flex>
          <Text fontSize="16px" color="grey" mt="8px">
            비공개 상태인 경우 지인들에게 회원님의 프로필이 보이지 않습니다.
          </Text>

          <Spacer />

          {SwitchDiv(isVisibleAccount)}
        </Flex>
      </Box>
    );
  };

  const ExitingDialog = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const processData = {
      // 지원 현황
      apply: 4,
      document: 0,
      passed: 1,
      failure: 8,

      // 받은 제안
      interest: 0,
      viewed: 1,
      suggest: 1,
    };

    const ColumnTextView = (title: string, count: any) => {
      return (
        <Box fontSize="15px" textAlign="center" f flex={1}>
          <Text>{count}</Text>
          <Text mt="12px">{title}</Text>
        </Box>
      );
    };

    return (
      <Dialog.RootProvider
        size="full"
        motionPreset="slide-in-left"
        value={exitingDialog}
      >
        <Dialog.Positioner>
          <Dialog.Content alignItems="center">
            <Box maxW="700px" w="100%" p="30px">
              {/* 닫기 버튼 */}
              <Flex>
                <Spacer />
                <Dialog.ActionTrigger asChild>
                  <Box className="hover:bg-gray-100 rounded-2xl" p="4px">
                    <IoMdClose size="32px" color="grey" />
                  </Box>
                </Dialog.ActionTrigger>
              </Flex>

              {/* 탈퇴 시 주의사항 */}
              <Text fontSize="24px" fontWeight="bold">
                회원 탈퇴 시 주의사항
              </Text>

              <Text fontSize="16px" mt="30px">
                1. '디벨로퍼' 계정의{" "}
                <b>모든 정보가 영구적으로 삭제되며, 복구가 불가능합니다.</b>
              </Text>

              <Text fontSize="16px" mt="12px">
                2. '디벨로퍼' 계정의{" "}
                <b>모든 지원과 면접 제안이 자동으로 취소됩니다.</b>
              </Text>

              <Text fontSize="16px" mt="12px">
                3. '디벨로퍼' 계정에{" "}
                <b>등록한 데이터의 정보 백업은 탈퇴 이전에 진행</b>해 주세요.
              </Text>

              <Box borderTop={attrBorderGrey} mt="40px" mb="40px" />

              {/* 탈퇴하려는 계정  */}
              <Text fontWeight="bold" fontSize="17px">
                탈퇴하려는 계정
              </Text>

              <Flex bg="#f8f8f8" p="10px" alignItems="center" mt="20px">
                <Image src="/google.png" w="32px" h="32px" />
                <Text fontSize="16px" ml="8px">
                  developer@gmail.com
                </Text>
              </Flex>

              {/* 삭제되는 정보 */}
              <Text fontWeight="bold" fontSize="17px" mt="30px">
                삭제되는 정보
              </Text>

              <Flex mt="20px" alignItems="center">
                <Image
                  src="/developer_icon.png"
                  w="40px"
                  h="40px"
                  border={attrBorderGrey}
                  borderRadius="8px"
                />

                <Text fontSize="15px" fontWeight="bold" ml="10px">
                  developer
                </Text>

                <Box ml="70px">
                  <Text>· 활동 데이터</Text>
                  <Text>· 미지급된 채용 보상금 및 포인트 데이터</Text>
                </Box>
              </Flex>

              <Box borderTop={attrBorderGrey} mt="40px" mb="40px" />

              {/* 지원 현황  */}
              {/* <Text fontWeight="bold" fontSize="17px" mt="30px">
                지원 현황
              </Text>

              <Flex
                bg="#f8f8f8"
                w="100%"
                h="80px"
                pl="30px"
                pr="30px"
                mt="20px"
                alignItems="center"
                borderRadius="8px"
              >
                {ColumnTextView("지원 현황", processData.apply)}
                {ColumnTextView("서류 통과", processData.document)}
                {ColumnTextView("최종 합격", processData.passed)}
                {ColumnTextView("불합격", processData.failure)}
              </Flex> */}

              {/* 받은 제안  */}
              {/* <Text fontWeight="bold" fontSize="17px" mt="30px">
                받은 제안
              </Text>

              <Flex
                bg="#f8f8f8"
                w="100%"
                h="80px"
                pl="30px"
                pr="30px"
                mt="20px"
                alignItems="center"
                borderRadius="8px"
              >
                {ColumnTextView("관심 있음", processData.interest)}
                {ColumnTextView("열람", processData.viewed)}
                {ColumnTextView("면접 제안", processData.suggest)}
              </Flex> */}

              {/* 탈퇴 전 메시지 */}
              <Box
                bg="#f8f8f8"
                w="100%"
                mt="30px"
                p="16px"
                alignItems="center"
                borderRadius="8px"
              >
                <Flex alignItems="center">
                  <IoMdInformationCircleOutline size="24px" color="grey" />
                  <Text fontSize="18px" fontWeight="semibold" ml="8px">
                    탈퇴 전 다시 한번 확인해 주세요.
                  </Text>
                </Flex>

                <Text fontSize="14px" mt="20px">
                  · 회원 탈퇴 시{" "}
                  <b>
                    진행 중인 지원 사항 (지원 내역, 서류/면접 통과 내역) 과 받은
                    면접 제안은 자동 취소되며 합격 보상금 지급 대상에서도 제외
                  </b>
                  됩니다.
                </Text>

                <Text fontSize="14px" mt="20px">
                  · 회원 탈퇴 시 위 내용에 동의한 것으로 간주됩니다.
                </Text>

                <Link
                  href="/my/activity"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Box
                    mt="20px"
                    border="1px solid #0166ff"
                    color="#0166ff"
                    h="50px"
                    borderRadius="8px"
                    fontWeight="bold"
                    fontSize="15px"
                    textAlign="center"
                    alignContent="center"
                  >
                    지원 활동 확인하기
                  </Box>
                </Link>
              </Box>

              <Box borderTop={attrBorderGrey} mt="40px" mb="40px" />

              {/* 체크 박스 2개 */}
              <Flex alignItems="center">
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={(e) => {
                    setIsChecked1(e.target.checked);
                  }}
                />
                <Text
                  color="grey"
                  fontSize="15px"
                  ml="12px"
                  onClick={() => {
                    setIsChecked1(!isChecked1);
                  }}
                  cursor="pointer"
                >
                  회원 탈퇴 이후 미결된 금액을 받을 수 없음을 이해했으며
                  동의합니다.
                </Text>
              </Flex>

              <Flex mt="16px">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={(e) => {
                    setIsChecked2(e.target.checked);
                  }}
                />
                <Text
                  color="grey"
                  fontSize="15px"
                  ml="12px"
                  onClick={() => {
                    setIsChecked2(!isChecked2);
                  }}
                  cursor="pointer"
                >
                  회원 탈퇴를 진행하여 '디벨로퍼' 계정에 귀속된 모든 정보를
                  삭제하는 데 동의합니다.
                </Text>
              </Flex>

              <Button
                w="100%"
                colorPalette="blue"
                size="lg"
                borderRadius="8px"
                mt="30px"
                disabled={!isChecked1 || !isChecked2}
              >
                회원 탈퇴
              </Button>

              <Text
                mt="20px"
                textAlign="center"
                cursor="pointer"
                fontSize="15px"
                color="grey"
                onClick={() => {
                  exitingDialog.setOpen(false);
                }}
              >
                회원 탈퇴 취소
              </Text>
            </Box>

            <Box mt={100} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const NotificationPage = () => {
    const emailCnt = 3;
    const messageCnt = 2;
    const notificationList = [
      {
        type: "email",
        title: "추천 포지션 알림",
        desc: "AI가 추천하는 맞춤 포지션 소식을 받을 수 있습니다.",
        isEnabled: true,
      },
      {
        type: "email",
        title: "팔로우 회사 포지션 알림",
        desc: "관심회사로 등록한 기업의 새로운 포지션 소식을 받을 수 있습니다.",
        isEnabled: true,
      },
      {
        type: "email",
        title: "혜택/이벤트 알림",
        desc: "유익한 커리어 소식과 다양한 교육/컨퍼런스 등의 소식을 받을 수 있습니다.",
        isEnabled: false,
      },
      {
        type: "message",
        title: "추천 포지션 알림",
        desc: "AI가 추천하는 맞춤 포지션 소식을 받을 수 있습니다.",
        isEnabled: false,
      },
      {
        type: "message",
        title: "혜택/이벤트 알림",
        desc: "채용 소식과 교육/컨퍼런스, 커리어 콘텐츠, 이벤트 등 맞춤 정보를 받을 수 있습니다.",
        isEnabled: false,
      },
    ];

    const ItemRow = (v: any, index: number, count: number) => {
      return (
        <Box key={index}>
          <Flex>
            <Box>
              <Text fontSize="17px" fontWeight="semibold">
                {v.title}
              </Text>

              <Text fontSize="15px" color="grey" mt="12px">
                {v.desc}
              </Text>
            </Box>

            <Spacer />

            {SwitchDiv(v.isEnabled)}
          </Flex>

          {index < count - 1 && (
            <Box
              borderTop={attrBorderGrey}
              ml="-30px"
              mr="-30px"
              mt="30px"
              mb="30px"
            />
          )}
        </Box>
      );
    };

    return (
      <Box minW="760px" padding="30px">
        <Text fontSize="24px" fontWeight="bold">
          이메일
        </Text>

        <Box border={attrBorderGrey} p="30px" mt="16px" bg="white">
          {notificationList
            .filter((v) => v.type === "email")
            .map((v, index) => {
              return ItemRow(v, index, emailCnt);
            })}
        </Box>

        <Text fontSize="24px" fontWeight="bold" mt="30px">
          문자메시지
        </Text>

        <Box border={attrBorderGrey} p="30px" mt="16px" bg="white">
          {notificationList
            .filter((v) => v.type === "message")
            .map((v, index) => {
              return ItemRow(v, index, messageCnt);
            })}
        </Box>

        <Text fontSize="14px" color="grey" mt="24px">
          앱 푸시 항목은 [디벨로퍼랩] 앱 내 알림 설정에서 변경 가능합니다.
        </Text>
      </Box>
    );
  };

  const AccountPage = () => {
    return (
      <Box minW="700px" padding="30px" position="relative">
        {/* 프로필 이미지 */}
        <Flex>
          <Spacer />
          <Image src="/google.png" w="75px" h="75px" />
          <Spacer />
        </Flex>

        <Box
          bg="blue.600"
          borderRadius="50%"
          p="5px"
          w="30px"
          h="30px"
          cursor="pointer"
          position="relative"
          left="52%"
          top="-25px"
        >
          <MdEdit size="20px" color="white" />
        </Box>

        <Text fontSize="24px" fontWeight="bold" textAlign="center" mt="-10px">
          {nameText}님, 환영해요.
        </Text>

        {/* 계정 관리 영역 */}
        <Box border={attrBorderGrey} borderRadius="12px" p="20px" mt="40px">
          <Text fontSize="22px" fontWeight="bold">
            계정 관리
          </Text>

          <Text fontSize="16px" color="grey" mt="8px">
            서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.
          </Text>

          <Flex mt="28px">
            <Text fontSize="16px" fontWeight="semibold" w="150px">
              이메일
            </Text>

            <Text fontSize="16px">developer@gmail.com</Text>
          </Flex>

          <Box borderTop={attrBorderGrey} mt="12px" mb="12px" />

          <Flex
            cursor="pointer"
            onClick={() => {
              nameDialog.setOpen(true);
            }}
          >
            <Text fontSize="16px" fontWeight="semibold" w="150px">
              이름
            </Text>

            <Text fontSize="16px">{nameText}</Text>

            <Spacer />
            <MdOutlineKeyboardArrowRight size="22px" color="grey" />
          </Flex>

          <Box borderTop={attrBorderGrey} mt="12px" mb="12px" />

          <Flex
            cursor="pointer"
            onClick={() => {
              numberDialog.setOpen(true);
            }}
          >
            <Text fontSize="16px" fontWeight="semibold" w="150px">
              휴대폰 번호
            </Text>

            <Text fontSize="16px">
              {`+82 ${numberText.slice(0, 3)}-${numberText.slice(
                3,
                6
              )}-${numberText.slice(6, 10)}`}
            </Text>

            <Spacer />
            <MdOutlineKeyboardArrowRight size="22px" color="grey" />
          </Flex>
        </Box>

        {/* 개인 정보 보호 */}
        <Box border={attrBorderGrey} borderRadius="12px" p="20px" mt="40px">
          <Text fontSize="22px" fontWeight="bold">
            개인 정보 보호
          </Text>

          <Text fontSize="16px" color="grey" mt="8px">
            내 계정을 안전하게 보호하기 위한 정보를 관리할 수 있습니다.
          </Text>

          <Flex
            mt="28px"
            cursor="pointer"
            onClick={() => {
              passwordDialog.setOpen(true);
            }}
          >
            <Text fontSize="16px" fontWeight="semibold" w="150px">
              비밀번호 변경
            </Text>

            <Spacer />
            <MdOutlineKeyboardArrowRight size="22px" color="grey" />
          </Flex>

          <Box borderTop={attrBorderGrey} mt="12px" mb="12px" />

          <Flex
            cursor="pointer"
            onClick={() => {
              exitingDialog.setOpen(true);
            }}
          >
            <Text fontSize="16px" fontWeight="semibold" w="150px">
              회원 탈퇴
            </Text>

            <Spacer />
            <MdOutlineKeyboardArrowRight size="22px" color="grey" />
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      {pageType === "network" && <NetworkPage />}
      {pageType === "notification" && <NotificationPage />}
      {pageType === "account" && <AccountPage />}

      <NetworkDialog />
      <NameDialog />
      <NumberDialog />
      <PasswordDialog />
      <ExitingDialog />
    </Box>
  );
}
