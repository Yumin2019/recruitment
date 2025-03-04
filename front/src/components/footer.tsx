import { Box, Flex, Separator, Spacer, Stack, Text } from "@chakra-ui/react";
import { CiInstagram } from "react-icons/ci";
import { FaApple, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <Box bg="white" h={300} bottom={0} left={0} right={0} position="absolute">
      <Separator />
      <Flex
        className="flex-col md:flex-row items-start md:items-center"
        p="30px"
      >
        <img src="/developer_logo_horizon.png" className="w-[150px]" />

        <Spacer />

        <Flex gap={5} mt={{ base: 0, sm: 2 }}>
          <Text fontSize={16} fontWeight="bold">
            기업소개
          </Text>
          <Text fontSize={16} fontWeight="bold">
            광고문의
          </Text>
          <Text fontSize={16} fontWeight="bold">
            고객센터
          </Text>
          <Text fontSize={16} fontWeight="bold">
            이용약관
          </Text>
          <Text fontSize={16} fontWeight="bold">
            블로그
          </Text>
          <Text fontSize={16} fontWeight="bold">
            개인정보 처리방침
          </Text>
        </Flex>
      </Flex>

      <Stack direction="column" mt="0px" pl="30px" pr="30px">
        <Text fontSize={14} color="grey">
          (주)디벨로퍼랩 | 대표이사 디벨로퍼
        </Text>
        <Text fontSize={14} color="grey">
          서울특별시 마포구 아현동 | 전화번호: 010-6464-2211
        </Text>
        <Text fontSize={14} color="grey">
          사업자등록번호: 111-11-11111 | 통신판매번호: 1111-서울-1111 |
          유료직업소개사업등록번호: (국내) 제1111-111111-11-1-11111호
        </Text>

        <Flex gap={4}>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            채용서비스 문의
          </Text>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            디벨로퍼스페이스 문의
          </Text>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            디벨로퍼긱스 문의
          </Text>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            프리온보딩 문의
          </Text>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            취업지원시스템 문의
          </Text>
          <Text fontSize={14} color="gray" fontWeight="bold" mt="20px">
            IR 문의
          </Text>
        </Flex>
      </Stack>

      <Separator mt="20px" />

      <Flex pl="30px" pt="20px" alignItems="center">
        <Text fontSize={14} fontWeight="bold" color="grey">
          © 2025 Developer Lab, Inc.
        </Text>
        <Spacer />

        <Flex gap="10px" pr="30px">
          <CiInstagram size="22px" />
          <FaFacebook size="22px" />
          <RxGithubLogo size="22px" />
          <FaYoutube size="22px" />
          <FaApple size="22px" />
          <IoLogoGooglePlaystore size="22px" />
        </Flex>
      </Flex>
    </Box>
  );
};
