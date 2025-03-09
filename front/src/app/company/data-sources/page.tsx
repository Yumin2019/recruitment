"use client";

import {
  Badge,
  Box,
  Flex,
  Spacer,
  Table,
  Text,
  Accordion,
} from "@chakra-ui/react";
import { attrBorderGrey2, mainBlue } from "@/color";
import { IoIosArrowUp } from "react-icons/io";

const faqDataList = [
  {
    question: "기업 정보는 어디에서 어떻게 수집되나요?",
    answer:
      "국민연금공단, 근로복지공단, 금융감독원(FSS), 공정거래위원회(FTC)에서 제공되는 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 연혁 정보는 어떻게 수집되나요?",
    answer:
      "금융감독원 “공시정보” 및 근로복지공단 “근로복지공단_고용/산재보험 현황정보” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 총 인원 정보는 어떻게 수집되나요?",
    answer:
      "근로복지공단 “근로복지공단_고용/산재보험 현황정보” 및 국민연금공단 “국민연금공단_국민연금 가입 사업장 내역” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 평균연봉 정보는 어떻게 수집되나요?",
    answer:
      "금융감독원 “공시정보” 및 국민연금공단 “국민연금공단_국민연금 가입 사업장 내역” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 입,퇴사자 정보는 어떻게 수집되나요?",
    answer:
      "국민연금공단 “국민연금공단_국민연금 가입 사업장 내역” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 매출 정보는 어떻게 수집되나요?",
    answer: "금융감독원 “공시정보” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 사업장 수 정보는 어떻게 수집되나요?",
    answer:
      "근로복지공단 “근로복지공단_고용/산재보험 현황정보” 공공데이터를 사용합니다.",
  },
  {
    question: "기업의 업태, 업종 정보는 어떻게 수집되나요?",
    answer:
      "근로복지공단 “근로복지공단_고용/산재보험 현황정보” 및 국민연금공단 “국민연금공단_국민연금 가입 사업장 내역” 공공데이터를 사용합니다.",
  },
  {
    question: "통신판매관리번호는 어떻게 수집되나요?",
    answer:
      "공정거래위원회(FTC) “공정거래위원회_통신판매사업자 등록상세” 공공데이터를 사용합니다.",
  },
  {
    question: "기업 정보의 업데이트는 언제 이루어지나요?",
    answer:
      "각 기관에서 정의한 데이터 업데이트 주기에 따라 업데이트가 진행되고 있습니다. 따라서 최소 1주에서 최대 2개월까지 업데이트 주기가 상이합니다.",
  },
];

const fixFaqDataList = [
  {
    question: "기업 정보를 무슨 근거로 수집하여 노출하고 있는 건가요.",
    answer: `“공공데이터의 제공 및 이용활성화에 관한 법률”
“전자상거래 등에서의 소비자보호에 관한 법률” ”제12조4항”
“자본시장과 금융투자업에 관한 법률” 하에 ”증권의 발행 및 공시 등에 관한 규정”
에 따라 공개된 정보를 수집, 가공하여 서비스하고 있습니다.`,
  },
  {
    question: "우리회사 기업 정보를 수정 혹은 삭제해주세요.",
    answer:
      "수정 혹은 삭제를 희망할 경우 출처에 표기된 기관에 요청하시기 바랍니다.",
  },
  {
    question: "삭제 요청 후에도 검색포털(구글,네이버) 계속 노출되고 있어요.",
    answer:
      "검색포털의 경우 삭제 요청 후 일정기간 후에 삭제되고 있습니다. 자세한 삭제 시점은 검색포털에 문의부탁드립니다.",
  },
  {
    question: "노출된 정보가 다릅니다. 잘못된 정보를 노출하고 있는건 아닌가요?",
    answer:
      "제공되고 있는 정보는 실시간성을 보장하지 않습니다. 기관에서 제공하고 있는 업데이트 주기에 따라 최신화되고 있어 기업기준의 최신정보는 즉시 반영될 수 없는점 양해부탁드립니다.",
  },
];

const dataResList = [
  {
    company: "국민연금공단",
    name: "국민연금공단_국민연금 가입 사업장 내역",
    department: "빅데이터부",
    number: "063-713-6520",
  },
  {
    company: "근로복지공단",
    name: "근로복지공단_고용/산재보험 현황정보",
    department: "노동복지빅데이터센터",
    number: "02-2670-0455",
  },
  {
    company: "금융감독원(FSS)",
    name: "전자공시시스템",
    department: "전자공시 HELP Desk",
    number: "1332",
  },
  {
    company: "공정거래위원회(FTC)	",
    name: "공정거래위원회_통신판매사업자 등록상세",
    department: "정보화담당관실",
    number: "044-200-4816",
  },
];

export default function DataSourcePage() {
  const FaqRow = (v: any, index: number) => {
    return (
      <Accordion.Root collapsible variant="plain">
        <Accordion.Item key={index} value={index.toString()}>
          <Accordion.ItemTrigger>
            <Flex key={index} alignItems="center" mb={1} w="100%">
              <Badge
                colorPalette="blue"
                color={mainBlue}
                size="xs"
                height="6px"
              >
                추천
              </Badge>

              <Text fontSize={15} fontWeight="semibold" ml="6px">
                {v.question}
              </Text>

              <Spacer />
              <IoIosArrowUp size={18} color="#c7c8c9" />
            </Flex>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Text fontSize={14} ml="30px" mt={2} mb={2}>
              {v.answer}
            </Text>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  };

  return (
    <Box pl={30} pr={30} pt={30}>
      <Text fontSize={26} fontWeight="bold">
        정보 출처 표기
      </Text>

      <Text fontSize={20} mt="40px">
        공공데이터 출처 FAQ
      </Text>

      <Box
        border={attrBorderGrey2}
        borderRadius={15}
        pl={4}
        pt={2}
        pb={2}
        pr={4}
        mt={4}
      >
        {faqDataList.map((v, index) => {
          return FaqRow(v, index);
        })}
      </Box>

      <Text fontSize={20} mt="40px" mb={3}>
        공공데이터 출처 목록
      </Text>

      <Table.Root
        size="sm"
        stickyHeader
        showColumnBorder
        border={attrBorderGrey2}
      >
        <Table.Header>
          <Table.Row bg="#f4f4f4">
            <Table.ColumnHeader color="grey" fontSize={13}>
              기관명
            </Table.ColumnHeader>
            <Table.ColumnHeader color="grey" fontSize={13}>
              공공데이터명
            </Table.ColumnHeader>
            <Table.ColumnHeader color="grey" fontSize={13}>
              관리부서명
            </Table.ColumnHeader>
            <Table.ColumnHeader color="grey" fontSize={13}>
              기관연락처
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataResList.map((v, index) => (
            <Table.Row key={index}>
              <Table.Cell fontSize={13}>{v.company}</Table.Cell>
              <Table.Cell fontSize={13}>{v.name}</Table.Cell>
              <Table.Cell fontSize={13}>{v.department}</Table.Cell>
              <Table.Cell fontSize={13}>{v.number}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Text fontSize={20} mt="40px">
        정보 수정에 관한 FAQ
      </Text>

      <Box
        border={attrBorderGrey2}
        borderRadius={15}
        pl={4}
        pt={2}
        pb={2}
        pr={4}
        mt={4}
      >
        {fixFaqDataList.map((v, index) => {
          return FaqRow(v, index);
        })}
      </Box>

      <Box mt={200} />
    </Box>
  );
}
