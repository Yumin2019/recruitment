import { textBlue } from "@/color";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { PiCoins } from "react-icons/pi";

export const PointPolicyDialog = (dialog: any) => {
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
        <Dialog.Content p="8px" maxH="450px">
          <Flex position="relative" alignItems="center" p="12px">
            <Spacer />
            <Dialog.CloseTrigger asChild position="absolute" right="0px">
              <CloseButton size="md" />
            </Dialog.CloseTrigger>
          </Flex>

          {/* 포인트 정책 */}
          <Box overflow="auto" p="16px">
            <Flex alignItems="center">
              <Box bg="#ffe7e9" borderRadius="12px" w="50px" h="50px" p="8px">
                <PiCoins color="#fd4242" size="35px" />
              </Box>

              <Text ml="12px" fontSize="16px" fontWeight="semibold">
                포인트 정책
              </Text>
            </Flex>

            <Text fontSize="14px" fontWeight="bold" mt="12px">
              디벨로퍼 포인트란?
            </Text>
            <Text fontSize="14px" whiteSpace="pre-line">
              {`- 디벨로퍼 내 활동을 통해 적립할 수 있는 포인트입니다.
- 적립한 포인트는 제휴처 쿠폰 등 혜택과 교환하여 사용할 수 있습니다.`}
            </Text>

            <Text fontSize="14px" fontWeight="bold" mt="20px">
              포인트 적립
            </Text>
            <Text fontSize="14px" whiteSpace="pre-line">
              {`- 포인트 미션 수행 후 [적립] 버튼을 눌러 포인트를 적립할 수 있습니다.
- 일별 미션은 매일 자정, 월별 미션은 매월 1일 자정 초기화됩니다.
- 포인트 적립은 초기화 시점 이전에만 적립할 수 있으며 아래 기준을 따릅니다.
1) 1일 마다 적립 가능한 미션: 매일 00시 초기화
2) 1주일 마다 적립 가능한 미션: 매주 월요일 00시 초기화
3) 1개월 마다 적립 가능한 미션: 매월 1일 00시 초기화
4) 1년 마다 적립 가능한 미션: 매년 1월 1일 00시 초기화
5) 최초 1회만 적립 가능한 미션: 적립 가능 기간에 제한 없음
- 부적절한 방법으로 포인트를 적립했다고 판단될 경우 적립 포인트를 회수하거나 포인트 사용에 제한이 생길 수 있습니다. 미션 수행 직후 미션 취소, 미션 반복 수행 등이 부적절한 미션 수행에 해당됩니다.
- 포인트 적립 미션과 적립 포인트는 당사 사정에 따라 사전 고지 없이 변경되거나 종료될 수 있습니다.`}
            </Text>

            <Text fontSize="14px" fontWeight="bold" mt="20px">
              포인트 소멸
            </Text>
            <Text fontSize="14px" whiteSpace="pre-line">
              {`- 포인트의 유효기간은 적립일로부터 180일입니다.
- 포인트 적립 이벤트에 따라 유효기간이 180일과 상이하게 지급될 수 있습니다.
- 포인트가 유효기간 만료로 소멸되기 30일 이전에 카카오 알림톡 또는 문자 메시지를 통해 소멸 예정 사실을 안내합니다.
- 포인트 [내역] 메뉴에서 적립된 포인트별 유효기간을 확인할 수 있습니다.
- 디벨로퍼 회원 탈퇴 시 보유한 포인트는 즉시 소멸되며, 동일 휴대폰 번호로 재가입한 경우에도 소멸된 포인트는 복구되지 않습니다.`}
            </Text>

            <Text fontSize="14px" fontWeight="bold" mt="40px">
              문의: cs@developerlab.com
            </Text>
          </Box>

          <Button
            variant="ghost"
            size="lg"
            borderRadius="8px"
            color={textBlue}
            onClick={() => {
              dialog.setOpen(false);
            }}
          >
            확인
          </Button>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.RootProvider>
  );
};
