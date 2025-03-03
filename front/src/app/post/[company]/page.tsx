"use client";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionRoot,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Separator,
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
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  attrBorderGrey,
  borderGrey,
  containerGrey,
  mainBlue,
  mainGrey,
  textGrey,
} from "@/color";
import { infoToast, successToast } from "@/util";
import { AccordionItemTrigger } from "@/components/ui/accordion";

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
                    navigator.clipboard.writeText(copyText).then((v) => {
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

  const renderTagList = (tagList: any, count: number) => {
    if (tagList.length === 0 || !tagList) {
      return <div></div>;
    }

    let gridCount = Math.floor(tagList.length / count);
    let remain = tagList.length % count;
    let gridList = [];
    if (remain > 0) ++gridCount;

    console.log(gridCount, remain);
    for (let gridIdx = 0; gridIdx < gridCount; gridIdx++) {
      // 내부 목록을 생성한다.
      let children = [];
      let childCount = count;
      if (gridIdx === gridCount - 1 && remain > 0) childCount = remain;

      for (let k = 0; k < childCount; k++) {
        children.push(
          <Button rounded="lg" key={gridIdx * count + k}>
            {tagList[gridIdx * count + k]}
          </Button>
        );
      }

      // 만든 내부 목록을 토대로 외부 Gridf로 감싼다.
      gridList.push(
        <ButtonGroup size="sm" variant="outline" key={gridIdx}>
          {children}
        </ButtonGroup>
      );
    }

    return gridList;
  };

  const initMap = () => {
    let map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399), //지도의 초기 중심 좌표
      zoom: 15, //지도의 초기 줌 레벨
      zoomControl: false, //줌 컨트롤의 표시 여부
    });

    //지도 인터랙션 끄기
    if (map.getOptions("draggable")) {
      map.setOptions({
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true,
      });
    }

    //모든 지도 컨트롤 숨기기
    if (map.getOptions("scaleControl")) {
      map.setOptions({
        scaleControl: false,
        logoControl: true,
        mapDataControl: false,
        zoomControl: false, // 확대바
        mapTypeControl: false, // 일반, 위성
      });
    }

    // 커스텀 마커(이미지)
    let marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map,
      icon: {
        url: "/pin_marker.png",
        size: new naver.maps.Size(48, 48),
      },
    });
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <Stack direction="column" pl="100px" pr="100px" pt="30px">
      {/* 회사 사진첩  */}
      {/* <Flex alignItems="center" h="275px">
        <Flex flex={1}>
          <Image
            className="rounded-l-2xl object-cover max-w-[10%]"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15185%2F95pf43uoskc9pdir__1080_790.jpg&w=700&q=100"
          />
        </Flex>
        <Box ml={2} />
        <Flex flex={1}>
          <Image
            className="rounded-r-2xl object-cover"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15185%2F95pf43uoskc9pdir__1080_790.jpg&w=700&q=100"
          />
        </Flex>
      </Flex> */}

      {/* 사진 이동 버튼  */}
      {/* <Stack direction="row" h={0}>
        <IconButton
          aria-label="ArrowLeft"
          rounded="full"
          size="md"
          variant="surface"
          colorPalette="white"
          className="absolute top-[-157px] left-[8px]"
        >
          <FaArrowLeft />
        </IconButton>
        <Spacer />
        <IconButton
          aria-label="ArrowLeft"
          rounded="full"
          size="md"
          variant="surface"
          colorPalette="white"
          className="absolute top-[-157px] right-[8px]"
        >
          <FaArrowRight />
        </IconButton>
      </Stack> */}

      {/* 회사명, 위치, 제목 */}
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
          <CiBookmark
            size="25px"
            color={isMarked ? mainBlue : mainGrey}
            className="hover:bg-gray-100"
            onClick={() => {
              let value = !isMarked;
              setIsMarked(value);
              if (value) {
                successToast("북마크에 저장되었습니다.");
              }
            }}
          />
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
      {renderTagList(content.techstack, 8)}

      <Text fontWeight="bold" fontSize={20} mt={8}>
        태그
      </Text>
      {renderTagList(content.tag, 6)}

      <Text fontWeight="bold" fontSize={20} mt={8}>
        마감일
      </Text>

      <Text fontSize={16}>상시채용</Text>

      <Text fontWeight="bold" fontSize={20} mt={8}>
        근무지역
      </Text>

      {/* Naver 지도 */}
      <Box border={attrBorderGrey} borderRadius="20px">
        <Box
          id="map"
          className="min-w-[218px] md:min-w-[338px] h-[110px] md:h-[203px] rounded-t-[20px]"
          onClick={() => {
            // 링크 수정 필요
            window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
            // https://map.naver.com/p?title=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C92%EA%B8%B8%2028&lng=127.0509342&lat=37.5057526&zoom=17&type=0&c=17.00,0,0,0,dh
          }}
        />
        <Box
          className="min-w-[218px] md:min-w-[338px] h-[50px] md:h-[50px] bg-white rounded-b-[20px] content-center"
          pl={4}
        >
          <Text fontSize={16}>서울 마포구 땡땡100길 28, 땡땡빌딩 5층</Text>
        </Box>
      </Box>

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
              본 채용정보는 디밸로퍼랩의 동의없이 무단전재, 재배포, 재가공할 수
              없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
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

      <Text fontWeight="bold" fontSize={20} mt="60px">
        땡땡이님을 위한 추천 포지션
      </Text>

      <Box mt={400}></Box>
    </Stack>
  );
}
