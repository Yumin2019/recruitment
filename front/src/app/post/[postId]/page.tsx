"use client";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionRoot,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Separator,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsBuildingAdd } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { Prose } from "@/components/ui/prose";
import { useEffect, useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  attrBorderGrey,
  containerGrey,
  mainBlue,
  mainGrey,
  textGrey,
} from "@/color";
import { copyCipboard, initMap, successToast } from "@/util";
import { AccordionItemTrigger } from "@/components/ui/accordion";
import {
  IoIosArrowForward,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FcDocument, FcOk } from "react-icons/fc";
import { NaverMap } from "@/components/naver-map";
import { RenderTagList } from "@/components/tag-list";
import { IoBookmark } from "react-icons/io5";
import { Footer } from "@/components/footer";

const content = {
  position: `<p style="color: black; font-size: 15px;">
    우리와 함께 미래를 만들어갈 Flutter 개발자를 찾습니다<br>
    디지털트윈과 AI 기술을 활용한 스마트 솔루션을 개발하며, 현실과 가상을 연결하는 혁신적인 프로젝트를 진행하고 있습니다.<br>
    우리는 단순히 앱을 만드는 것이 아니라, 데이터와 기술을 활용해 더 똑똑한 세상을 구축하는 것을 목표로 합니다.<br>
    만약 당신이<br>
    • Flutter를 활용한 멋진 앱을 만들고 싶고,<br>
    • 최적의 UI/UX를 고민하며 사용자 경험을 극대화하는 것에 흥미를 느끼고,<br>
    • 디지털트윈, IoT, AI 기반 솔루션이 미래를 어떻게 바꿀지 궁금하다면?<br><br>

    지금 바로 우리와 함께하세요!
  </p>
`,
  work: `<p style="color: black;">우리가 하는 일<br>
• 디지털트윈과 IoT 기반의 솔루션 개발 (산업 자동화, IoT 디바이스 연동)<br>
• Flutter를 활용한 서비스형 크로스플랫폼 앱 개발 (Android, iOS)<br>
• 데이터 시각화 및 사용자 친화적 UI 구현<br>
• 클라우드, AI, IoT 기술과의 연계</p>`,
  requirement: `<p style="color: black;">
이런 분을 찾고 있어요!<br>
• 학력 : 학사 이상<br>
• 경력 : Flutter 개발 경험 3년 이상 또는 그에 준하는 역량 보유<br>
• Dart에 능숙하고, 상태 관리(Riverpod, Bloc 등)에 대한 이해<br>
• REST API 및 WebSocket을 활용한 데이터 연동 경험<br>
• UI/UX에 대한 감각과 애니메이션 및 인터랙션 구현 경험<br>
• 클린 아키텍처 및 디자인 패턴에 대한 이해<br>
• 테스트 코드 작성 및 활용 경험<br>
</p>`,
  preferential: `<p style="color: black;">우대사항 내용</p>`,
  benefit: `<p style="color: black;">혜택 및 복지 내용</p>`,
  process: `<p style="color: black;">채용 전형</p>`,

  techstack: [
    "Git",
    "GitHub",
    "Android",
    "iOS",
    "Linux",
    "MySQL",
    "React",
    "C / C++",
    "HTML",
    "JavaScript",
    "Kotlin",
    "PHP",
    "Python",
    "SQL",
    "Swift",
    "AWS",
    "C++",
    "Docker",
    "Spring Framework",
    "JPA",
  ],
  tag: [
    "유망산업",
    "건강검진지원",
    "자기계발지원",
    "출산휴가",
    "육아휴직",
    "커피·스낵바",
    "설립10년이상",
    "AI 선도 기업",
    "50명이하",
    "연봉상위11~20%",
    "누적투자100억이상",
  ],
};

const dataList = [
  {
    image: "/developer_logo.png",
    title: "React Native Developer",
    content:
      "React Native Developer with experience in mobile application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
  {
    image: "/developer_logo.png",
    title: "React Developer",
    content: "React Developer with experience in web application development.",
  },
];

export default function PostPage() {
  const [isMarked, setIsMarked] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const ShareButtonWithDialog = (children: any) => {
    const [isCopied, setIsCopied] = useState(false);
    const [copyText, setCopyText] = useState("http://localhost:3000");

    return (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onOpenChange={(v) => {
          setIsCopied(false);
        }}
      >
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>공유하기</DialogTitle>
          </DialogHeader>
          <DialogBody textAlign="center">
            <Text>이 포지션과 어울리는 사람을 알고 있다면, 공유해주세요!</Text>
            <Text>
              공유 후 추천까지 완료하면, 지원자 최종합격시 보상금을
              지급해드립니다.
            </Text>
            <Separator mt={5} />

            <Text textAlign="start" mt={4}>
              링크 공유
            </Text>
            <Flex alignItems="center" mt={2}>
              <Box
                flex={1}
                border={attrBorderGrey}
                textAlign="start"
                borderRadius={4}
                pt={2}
                pb={2}
                pl={4}
                pr={4}
              >
                {copyText}
              </Box>

              <Button
                size="sm"
                colorPalette="blue"
                w="80px"
                ml="8px"
                onClick={() => {
                  if (!isCopied) {
                    copyCipboard(copyText, () => {
                      setIsCopied(!isCopied);
                    });
                  }
                }}
              >
                복사
              </Button>
            </Flex>
            {isCopied && (
              <Text fontSize={14} color={mainBlue} textAlign="start" mt={2}>
                복사하였습니다.
              </Text>
            )}
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    );
  };

  const ResumeInfoButtonWithDialog = (children: any) => {
    return (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onOpenChange={(v) => {}}
        size="sm"
      >
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle fontSize={20}>
              <Text>내 이력서의 경험과 역량이</Text>
              <Text>이 포지션과는 좀 다른 것 같아요.</Text>
            </DialogTitle>
          </DialogHeader>
          <DialogBody textAlign="center">
            <Text fontSize={15} textAlign="start">
              이력서를 보완하면 합격 점수를 높일 수 있어요.
            </Text>

            <Flex alignItems="center" gapX={3} mt={6}>
              <Box bg={containerGrey} borderRadius={8} p="8px">
                <FcDocument size={30} />
              </Box>

              <Box textAlign="start">
                <Text fontSize={16} fontWeight="bold">
                  이력과 강점을 구체적으로 설명해 주세요.
                </Text>

                <Text fontSize={14} color="grey" mt={1}>
                  직무와 연차가 적합해도 강점이 드러나지 않으면 서류에서 탈락할
                  수 있어요.
                </Text>
              </Box>
            </Flex>

            <Flex alignItems="center" gapX={3} mt={5}>
              <Box bg={containerGrey} borderRadius={8} p="8px">
                <FcOk size={30} />
              </Box>

              <Box textAlign="start">
                <Text fontSize={16} fontWeight="bold">
                  포지션에 맞는 이력서인지 확인해 보세요
                </Text>

                <Text fontSize={14} color="grey" mt={1}>
                  담당 업무를 수행할 수 있는 프로젝트 경험과 성과가 잘
                  드러나도록 작성해 보세요.
                </Text>
              </Box>
            </Flex>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    );
  };

  const RewardInfoButtonWithDialog = (children: any) => {
    return (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onOpenChange={(v) => {}}
        size="sm"
      >
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle fontSize={20} textAlign="center">
              합격보상 안내
            </DialogTitle>
          </DialogHeader>
          <DialogBody textAlign="center">
            <Center>
              <Image src="/friends.png" w="128px" />
            </Center>

            <Text fontSize={15} mt={6}>
              지원자가 받을 수 있는 보상
            </Text>
            <Text fontSize={16} color={mainBlue} fontWeight="bold" mt={1}>
              현금 50만원 + 50만P
            </Text>

            <Text fontSize={15} mt={5}>
              추천인이 받을 수 있는 보상
            </Text>
            <Text fontSize={16} color={mainBlue} fontWeight="bold" mt={1}>
              현금 50만원 + 50만P
            </Text>

            <Text fontSize={13} color={textGrey} mt={4}>
              *추천인이 없는 경우에도 지원자에게 합격보상이 제공됩니다.
            </Text>

            <DialogActionTrigger asChild>
              <Button
                colorPalette="blue"
                size="lg"
                borderRadius={10}
                w="100%"
                mt={6}
              >
                확인
              </Button>
            </DialogActionTrigger>

            <Button variant="ghost" size="sm" mt={4}>
              <Text fontSize={14} color={textGrey}>
                포인트 더 알아보기
              </Text>
              <IoIosArrowForward color={textGrey} />
            </Button>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    );
  };

  const MiddleViewWhenSM = () => {
    return (
      <Box className="block md:hidden">
        <Box bg={containerGrey} borderRadius={20} p={4} mt={4}>
          <Flex alignItems="center">
            <Image src="/document.png" h={10} />

            <Text fontSize={16} fontWeight="bold" ml={1}>
              이력서를 보완하고 합격 점수를 높이세요.
            </Text>
            <Spacer />

            {ResumeInfoButtonWithDialog(
              <IconButton
                aria-label="ArrowRight"
                rounded="full"
                size="md"
                variant="ghost"
                zIndex={5}
              >
                <IoIosInformationCircleOutline color="grey" />
              </IconButton>
            )}
          </Flex>

          <Button
            variant="outline"
            borderRadius={12}
            alignItems="center"
            w="100%"
            size="lg"
            mt={4}
          >
            <Text color={mainBlue} fontWeight="bold">
              이력서 보완하기
            </Text>
          </Button>
        </Box>

        <Box bg={containerGrey} borderRadius={20} p={4} mt={4}>
          <Flex alignItems="center">
            <Text fontSize={14} fontWeight="bold">
              합격보상
            </Text>
            <Box ml={4}>
              <Text fontSize={14}>지원자, 추천인</Text>
              <Text fontSize={14}>각 현금 50만원 + 50만P</Text>
            </Box>
            <Spacer />

            {RewardInfoButtonWithDialog(
              <IconButton
                aria-label="ArrowRight"
                rounded="full"
                size="md"
                variant="ghost"
                zIndex={5}
              >
                <IoIosInformationCircleOutline color="grey" />
              </IconButton>
            )}
          </Flex>
        </Box>
      </Box>
    );
  };

  const InnerPage = () => {
    return (
      <Stack direction="column">
        <Flex mt="30px">
          <Text fontSize={16} fontWeight="bold" textDecor="underline">
            디벨로퍼랩
          </Text>

          <Text ml="20px" fontSize={14} color={textGrey}>
            서울 강남구
          </Text>

          <Text ml="20px" fontSize={14} color={textGrey}>
            경력 3~10년
          </Text>
          <Spacer />

          <Flex gap={2} alignItems="center">
            {!isMarked && (
              <CiBookmark
                size="25px"
                color="grey"
                className="hover:bg-gray-100"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                  successToast("북마크에 저장되었습니다.");
                }}
              />
            )}

            {isMarked && (
              <IoBookmark
                size="25px"
                color={mainBlue}
                className="hover:bg-gray-100"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}
            <BsBuildingAdd
              size="22px"
              color={isCompany ? mainBlue : mainGrey}
              className="hover:bg-gray-100"
              onClick={() => {
                let value = !isCompany;
                setIsCompany(value);
                if (value) {
                  successToast("팔로우 완료. 채용알림을 받게 됩니다.");
                }
              }}
            />

            {ShareButtonWithDialog(
              <MdOutlineIosShare
                size="25px"
                color="grey"
                className="hover:bg-gray-100"
              />
            )}
          </Flex>
        </Flex>

        <Heading size="3xl" fontWeight="bold" mb={2}>
          [디벨로퍼랩] Flutter 개발자
        </Heading>
        <Separator />
        <Flex alignItems="center" mt={2} mb={2}>
          <PiChatTeardropDotsFill size="24px" color="skyBlue" />
          <Text fontSize={15} fontWeight="bold" ml={2}>
            응답률
          </Text>
          <Text fontSize={14} ml={8}>
            매우 높음
          </Text>
        </Flex>
        <Separator />

        {/* 크기가 작을 때 처리하는 UI */}
        <MiddleViewWhenSM />

        {/* 회사에서 서술한 내용 */}
        <Text fontWeight="bold" fontSize={22} mt={8}>
          포지션 상세
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.position }} />

        <Text fontWeight="bold" fontSize={20}>
          주요업무
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.work }} />

        <Text fontWeight="bold" fontSize={20}>
          자격요건
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.requirement }} />

        <Text fontWeight="bold" fontSize={20}>
          우대사항
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.preferential }} />

        <Text fontWeight="bold" fontSize={20}>
          혜택 및 복지
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.benefit }} />

        <Text fontWeight="bold" fontSize={20}>
          채용 전형
        </Text>
        <Prose dangerouslySetInnerHTML={{ __html: content.process }} />

        <Text fontWeight="bold" fontSize={20} mt={8}>
          기술 스택 & 툴
        </Text>
        {RenderTagList(content.techstack, 8)}

        <Text fontWeight="bold" fontSize={20} mt={8}>
          태그
        </Text>
        {RenderTagList(content.tag, 6)}

        <Text fontWeight="bold" fontSize={20} mt={8}>
          마감일
        </Text>

        <Text fontSize={16}>상시채용</Text>

        <Text fontWeight="bold" fontSize={20} mt={8}>
          근무지역
        </Text>

        {/* Naver 지도 */}
        {NaverMap(
          "서울 마포구 땡땡100길 28, 땡땡빌딩 5층",
          "https://naver.com"
        )}

        <Box bg={containerGrey} p="20px" borderRadius="12px" mt="32px">
          <Flex gap={2}>
            <Image
              src="/developer_logo.png"
              w="46px"
              h="46px"
              border={attrBorderGrey}
              borderRadius="10px"
              onClick={() => {
                // 회사 페이지
              }}
            />
            <Stack
              direction="column"
              gap={0}
              alignSelf="center"
              onClick={() => {
                // 회사 페이지
              }}
            >
              <Text fontSize={14} fontWeight="bold">
                디밸로퍼랩
              </Text>
              <Text fontSize={12} color={textGrey}>
                IT, 컨텐츠
              </Text>
            </Stack>
            <Spacer />
            <Text
              color={mainBlue}
              fontWeight="bold"
              fontSize={14}
              alignSelf="center"
              className="hover:bg-blue-100 rounded-[5px]"
            >
              팔로우
            </Text>
          </Flex>
        </Box>

        <AccordionRoot
          collapsible
          size="sm"
          variant="plain"
          bg={containerGrey}
          p="10px"
          borderRadius="12px"
        >
          <AccordionItem value="value">
            <AccordionItemTrigger>
              <Text fontSize={14}>
                본 채용정보는 디밸로퍼랩의 동의없이 무단전재, 재배포, 재가공할
                수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
              </Text>
            </AccordionItemTrigger>
            <AccordionItemContent>
              <Separator />
              <Text fontSize={14} mt={4}>
                {`본 채용 정보는 '${"Company"}'에서 제공한 자료를 바탕으로
          디밸로퍼랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여 완성한
          디벨로퍼랩의 저작자산이자 영업자산입니다. 본 정보 및
          데이터베이스의 일부 내지는 전부에 대하여 디밸로퍼랩의 동의 없이
          무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된
          채용기업의 정보는 구직자의 구직활동 이외의 용도로 사용될 수
          없습니다. 디밸로퍼랩은 '${"Company"}'에서 게재한 자료에 대한 오류나 그 밖에 디벨로퍼랩이 가공하지 않은
          정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가
          이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다.`}
              </Text>
              <Text
                mb={2}
                mt="1px"
                fontSize={14}
                fontWeight="bold"
                color="grey"
              >{`<저작권자 (주)디벨로퍼랩. 무단전재-재배포금지>`}</Text>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </Stack>
    );
  };

  useEffect(() => {
    initMap(37.3595704, 127.105399);
  }, []);

  const PositionDiv = (index: number, marked: boolean) => {
    const [isMarked, setIsMarked] = useState(marked);
    //   useEffect(() => {
    //     setIsMarked(marked);
    //   }, [marked]);

    return (
      <Stack direction="column" key={index} className="w-[260px] md:w-[214px]">
        <Box className="hover:scale-101 h-[170px] md:h-[114px]">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38576%2Fasqwioroxlcs4syg__1080_790.png&w=700&q=100"
            className="ease-in-out rounded-[20px] h-[170px] md:h-[114px] object-cover"
          />
          <Flex
            className="bg-linear-to-t from-opacity-100 to-black/40 rounded-t-[20px] relative top-[-190px] md:top-[-157px]"
            alignItems="center"
            p="12px"
          >
            <Text fontSize={14} color="white">
              합격보상금 100만원
            </Text>

            <Spacer />

            {!isMarked && (
              <CiBookmark
                size="22px"
                color="white"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}

            {isMarked && (
              <IoBookmark
                size="22px"
                color={mainBlue}
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}
          </Flex>
        </Box>

        <Text fontSize={14} fontWeight="bold" mt={{ base: 4, md: 11 }}>
          안드로이드 개발자 채용
        </Text>
        <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
          데브컴퍼니
        </Text>
        <Text mt={-2} fontSize={12} fontWeight="bold" color="grey">
          경력 2년 이상
        </Text>
      </Stack>
    );
  };

  const BottomViewWhenSM = () => {
    return (
      <Box className="w-[100%] bottom-0 fixed block md:hidden">
        {/* 흰색 그라데이션 부분 */}
        <Box className="h-[30px] bg-linear-to-b from-opacity-100 to-white" />

        {/* 북마크, 지원하기 버튼 Row */}
        <Flex className="bg-white" pb={4} pl={4} pr={4}>
          <IconButton size="lg" colorPalette="blue" borderRadius={8} mr={2}>
            {!isMarked && (
              <CiBookmark
                size="22px"
                color="white"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                  successToast("북마크에 저장되었습니다.");
                }}
              />
            )}

            {isMarked && (
              <IoBookmark
                size="22px"
                color="white"
                onClick={() => {
                  let value = !isMarked;
                  setIsMarked(value);
                }}
              />
            )}
          </IconButton>
          <Button
            flex={1}
            colorPalette="blue"
            borderRadius={8}
            fontSize={16}
            size="lg"
          >
            지원하기
          </Button>
        </Flex>
      </Box>
    );
  };

  const MiddleViews = () => {
    return (
      <Flex gapX={8} alignItems="flex-start">
        <Box flex={6}>
          {/* 내부 페이지(채용 공고) */}
          <InnerPage />
        </Box>
        <Box flex={3} className="sticky top-[40px] hidden md:block">
          <Button
            colorPalette="blue"
            w="100%"
            borderRadius={8}
            mt="30px"
            fontSize={16}
            size="lg"
          >
            지원하기
          </Button>

          <Box bg={containerGrey} borderRadius={20} p={4} mt={4}>
            <Flex alignItems="center">
              <Image src="/document.png" h={10} />

              <Text fontSize={16} fontWeight="bold" ml={1}>
                이력서를 보완하고 합격 점수를 높이세요.
              </Text>
              <Spacer />

              {ResumeInfoButtonWithDialog(
                <IconButton
                  aria-label="ArrowRight"
                  rounded="full"
                  size="md"
                  variant="ghost"
                  zIndex={5}
                >
                  <IoIosInformationCircleOutline color="grey" />
                </IconButton>
              )}
            </Flex>

            <Button
              variant="outline"
              borderRadius={12}
              alignItems="center"
              w="100%"
              size="lg"
              p={6}
              mt={4}
            >
              <Text color={mainBlue} fontWeight="bold">
                이력서 보완하기
              </Text>
            </Button>
          </Box>

          <Box bg={containerGrey} borderRadius={20} p={4} mt={4}>
            <Flex alignItems="center">
              <Text fontSize={14} fontWeight="bold">
                합격보상
              </Text>
              <Box ml={4}>
                <Text fontSize={14}>지원자, 추천인</Text>
                <Text fontSize={14}>각 현금 50만원 + 50만P</Text>
              </Box>
              <Spacer />

              {RewardInfoButtonWithDialog(
                <IconButton
                  aria-label="ArrowRight"
                  rounded="full"
                  size="md"
                  variant="ghost"
                  zIndex={5}
                >
                  <IoIosInformationCircleOutline color="grey" />
                </IconButton>
              )}
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <>
      <Stack direction="column" pl="50px" pr="50px" pt="30px">
        {/* 회사 사진첩  */}
        <Stack direction="row" alignItems="center">
          <IconButton
            aria-label="ArrowLeft"
            rounded="full"
            size="md"
            variant="surface"
            colorPalette="white"
            zIndex={5}
            className="relative left-[12px]"
          >
            <FaArrowLeft />
          </IconButton>

          <Image
            className="rounded-l-2xl object-cover min-w-[50%] max-h-[350px] relative left-[-48px]"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15185%2F95pf43uoskc9pdir__1080_790.jpg&w=700&q=100"
          />
          <Image
            className="rounded-r-2xl object-cover min-w-[50%] max-h-[350px] relative left-[-48px]"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15185%2F95pf43uoskc9pdir__1080_790.jpg&w=700&q=100"
          />

          <IconButton
            aria-label="ArrowRight"
            rounded="full"
            size="md"
            variant="surface"
            colorPalette="white"
            zIndex={5}
            className="relative left-[-108px]"
          >
            <FaArrowRight />
          </IconButton>
        </Stack>

        <MiddleViews />

        <Text fontWeight="bold" fontSize={20} mt="60px">
          땡땡이님을 위한 추천 포지션
        </Text>

        {/* 채용공고 리스트업 */}
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} gapY={5}>
          {dataList.map((v, index) => {
            return PositionDiv(index, false);
          })}
        </SimpleGrid>

        <Box mt={400}></Box>
        <Footer />
      </Stack>

      {/* 사이즈가 작을 때 보이는 하단 지원하기 버튼 */}
      <BottomViewWhenSM />
    </>
  );
}
