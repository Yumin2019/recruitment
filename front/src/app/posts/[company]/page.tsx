import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
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

        <Text ml="20px" fontSize={14} color="rgb(80, 80, 80)">
          서울 강남구
        </Text>

        <Text ml="20px" fontSize={14} color="rgb(80, 80, 80)">
          경력 3~10년
        </Text>
        <Spacer />

        <Flex gap={2} alignItems="center">
          <CiBookmark size="25px" color="grey" className="hover:bg-gray-100" />
          <BsBuildingAdd
            size="22px"
            color="grey"
            className="hover:bg-gray-100"
          />
          <MdOutlineIosShare
            size="25px"
            color="grey"
            className="hover:bg-gray-100"
          />
        </Flex>
      </Flex>

      <Heading size="3xl" fontWeight="bold" mb={2}>
        [디벨로퍼랩] Flutter 개발자
      </Heading>
      <Separator />
      <Flex alignItems="center" mt={2} mb={2}>
        <PiChatTeardropDotsFill size="24px" color="skyblue" />
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
      <ButtonGroup size="sm" variant="outline">
        {content.techstack &&
          content.techstack.map((v, index) => {
            return (
              <Button rounded="lg" key={index}>
                {v}
              </Button>
            );
          })}
      </ButtonGroup>

      <Text fontWeight="bold" fontSize={20} mt={8}>
        태그
      </Text>

      {/* 8개씩 태그를 나눠서 그룹핑하는 작업이 필요함(저번에 스크롤 채용 공고 나눴던 것 참고할 것) */}
      <ButtonGroup size="sm" variant="outline">
        {content.tag &&
          content.tag.map((v, index) => {
            return (
              <Button rounded="lg" key={index}>
                {v}
              </Button>
            );
          })}
      </ButtonGroup>

      <Text fontWeight="bold" fontSize={20} mt={8}>
        마감일
      </Text>

      <Text fontSize={16}>상시채용</Text>

      <Text fontWeight="bold" fontSize={20} mt={8}>
        근무지역
      </Text>
    </Stack>
  );
}
