"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Tabs,
  Button,
  Dialog,
  useDialog,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";
import { copyCipboard, successToast } from "@/util";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { activityList, postDataList, profileData } from "@/app/global-data";
import { PostView } from "@/components/post-view";

const careerList = [
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
];

const schoolList = [
  {
    name: "한세사이버보안고등학교",
    desc: "해킹보안과",
    date: "2018.01 - 2021.01 · 3년",
    src: "/developer_logo.png",
  },
];

const peopleList = ["/google.png", "/apple.png", "/facebook.png"];

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isExpProfile, setIsExpProfile] = useState(false);
  const [isExpActivity, setIsExpActivity] = useState(false);
  const [pageType, setPageType] = useState("profile");
  const [dlgPageType, setDlgPageType] = useState("follower");
  const followerDialog = useDialog();
  const recommendDialog = useDialog();

  const RowView = (v: any) => {
    return (
      <Flex alignItems="center" mt="8px">
        <Image
          src={v.src}
          w="50px"
          h="50px"
          border={attrBorderGrey}
          borderRadius="8px"
        />

        <Box ml="10px" w="100%">
          <Text fontSize="16px" fontWeight="bold">
            {v.name}
          </Text>

          <Flex color="grey" fontSize="13px" mt="2px">
            <Text>{v.desc}</Text>
            <Spacer />
            <Text>{v.date}</Text>
          </Flex>
        </Box>
      </Flex>
    );
  };

  const TeamProfile = (v: any, index: number) => {
    return (
      <Flex alignItems="center" mb="20px" key={index}>
        <Image src={v.imageSrc} w="40px" h="40px" borderRadius="50%" />
        <Box ml="12px">
          <Text fontSize={14} fontWeight="bold">
            {v.title}
          </Text>
          <Text fontSize={13} color="grey">
            팀 프로필
          </Text>
        </Box>

        <Spacer />

        <Button size="md" variant="outline" fontWeight="bold" borderRadius={6}>
          {v.isFollowing ? "팔로잉" : "팔로우"}
        </Button>
      </Flex>
    );
  };

  const ActivityView = (v: any, index: number) => {
    return (
      <Box mb="20px" key={index}>
        <Flex alignItems="center" key={index}>
          <Image src={v.imageSrc} w="40px" h="40px" borderRadius="50%" />
          <Box ml="12px">
            <Text fontSize={15}>{v.name}</Text>
            <Text fontSize={13} color="grey">
              팔로워 {v.followerCnt} · 멤버 {v.memberCnt}명
            </Text>
          </Box>
        </Flex>

        <Text fontSize={13} className="text-black/80" mt="8px">
          {v.desc}
        </Text>
      </Box>
    );
  };

  const ProfileTab = () => {
    return (
      <Box flex={7} pt="30px">
        <Box border={attrBorderGrey} p="20px" borderRadius="12px" bg="#fdfbfc">
          <Text fontSize="16px" fontWeight="bold">
            소개
          </Text>

          <Text fontSize="15px" className="text-black/80" mt="8px">
            올라운더 개발자를 꿈꾸는 디벨로퍼라고 합니다. 창업에 특화된 개발자로
            성장하려고 합니다. CTO급의 개발자가 되기위해 공부합니다. 올라운더
            개발자를 꿈꾸는 디벨로퍼라고 합니다. 창업에 특화된 개발자로
            성장하려고 합니다. CTO급의 개발자가 되기위해 공부합니다.
          </Text>
        </Box>

        <Box
          border={attrBorderGrey}
          p="20px"
          mt="20px"
          borderRadius="12px"
          bg="#fdfbfc"
        >
          <Text fontSize="16px" fontWeight="bold">
            경력
          </Text>

          {careerList.map((v, index) => {
            return (
              <Box key={index}>
                {RowView(v)}

                {index < careerList.length - 1 && (
                  <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
                )}
              </Box>
            );
          })}
        </Box>

        <Box
          border={attrBorderGrey}
          p="20px"
          mt="20px"
          borderRadius="12px"
          bg="#fdfbfc"
        >
          <Text fontSize="16px" fontWeight="bold">
            학력
          </Text>

          {schoolList.map((v, index) => {
            return (
              <Box key={index}>
                {RowView(v)}

                {index < schoolList.length - 1 && (
                  <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
                )}
              </Box>
            );
          })}
        </Box>

        <Flex
          border={attrBorderGrey}
          alignItems="center"
          p="20px"
          mt="20px"
          borderRadius="12px"
          bg="#fdfbfc"
        >
          <Box>
            <Text fontSize="16px" fontWeight="bold">
              추천
            </Text>

            <Flex alignItems="center" mt="8px" position="relative">
              {peopleList.map((v, index) => {
                return (
                  <Image
                    key={index}
                    src={v}
                    w="40px"
                    h="40px"
                    bg="white"
                    border={attrBorderGrey}
                    borderRadius="50%"
                    position="absolute"
                    top="0px"
                    left={5 * index}
                    zIndex={peopleList.length - index}
                  />
                );
              })}
            </Flex>

            <Flex mt="50px" alignItems="center">
              <FaStar color="#ff9300" size="18px" />
              <Text fontSize="16px" mt="3px" ml="2px">
                구글님 외 2명이 회원님을 추천했어요.
              </Text>
            </Flex>
          </Box>

          <Spacer />

          <Box
            pl="18px"
            pr="18px"
            h="40px"
            alignContent="center"
            right="0px"
            className="bg-white hover:bg-gray-100"
            border={attrBorderGrey}
            borderRadius={8}
            onClick={() => {
              recommendDialog.setOpen(true);
            }}
          >
            추천하기
          </Box>
        </Flex>
      </Box>
    );
  };

  const PostTab = () => {
    return (
      <Box flex={7} pt="30px">
        <Box border={attrBorderGrey} p="20px" borderRadius="12px" bg="#fdfbfc">
          <Text fontSize="16px" fontWeight="bold">
            게시글
          </Text>

          {/* 포스트 리스트 */}
          {postDataList.map((v, index) => {
            return PostView(v, index, true, false);
          })}
        </Box>
      </Box>
    );
  };

  const FollowerDialog = (type: string) => {
    const [pageType, setPageType] = useState(type);

    useEffect(() => {
      setPageType(type);
      console.log(type);
    }, [type]);

    const ProfileData = [
      {
        imageSrc: "/google.png",
        name: "Developer",
        type: "개발",
        isFollowing: false,
      },
      {
        imageSrc: "/google.png",
        name: "Developer2",
        type: "개발",
        isFollowing: true,
      },
      {
        imageSrc: "/google.png",
        name: "Developer3",
        type: "개발",
        isFollowing: true,
      },
      {
        imageSrc: "/google.png",
        name: "Developer4",
        type: "개발",
        isFollowing: false,
      },
      {
        imageSrc: "/google.png",
        name: "Developer",
        type: "개발",
        isFollowing: false,
      },
      {
        imageSrc: "/google.png",
        name: "Developer2",
        type: "개발",
        isFollowing: true,
      },
      {
        imageSrc: "/google.png",
        name: "Developer3",
        type: "개발",
        isFollowing: true,
      },
      {
        imageSrc: "/google.png",
        name: "Developer4",
        type: "개발",
        isFollowing: false,
      },
      {
        imageSrc: "/google.png",
        name: "Developer",
        type: "개발",
        isFollowing: false,
      },
    ];

    const RowView = (v: any, index: number) => {
      return (
        <Flex pt="16px" pb="16px" key={index}>
          <Image src={v.imageSrc} w="40px" h="40px" />
          <Box ml="12px">
            <Text fontSize="16px" fontWeight="bold">
              {v.name}
            </Text>

            <Text fontSize="12px" color="grey">
              {v.type}
            </Text>
          </Box>
          <Spacer />
          <Box
            bg={v.isFollowing ? "#f4f4f5" : "#0066ff"}
            h="30px"
            borderRadius={8}
            color={v.isFollowing ? "black" : "white"}
            alignContent="center"
            pl="12px"
            pr="12px"
          >
            {v.isFollowing ? "팔로잉" : "팔로우"}
          </Box>
        </Flex>
      );
    };

    return (
      <Dialog.RootProvider
        value={followerDialog}
        size="sm"
        scrollBehavior="inside"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body>
              {/* Tab 영역 */}
              <Tabs.Root
                variant="line"
                fitted
                value={pageType}
                onValueChange={(e) => {
                  setPageType(e.value);
                }}
              >
                <Tabs.List>
                  <Tabs.Trigger
                    value="follower"
                    fontSize="16px"
                    fontWeight="bold"
                    flex={1}
                    textAlign="center"
                  >
                    팔로워 80
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="following"
                    fontSize="16px"
                    fontWeight="bold"
                    flex={1}
                    textAlign="center"
                  >
                    팔로잉 39
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>

              <Box h="500px">
                {/* 유저 프로필 */}
                {ProfileData.map((v, index) => {
                  return RowView(v, index);
                })}
              </Box>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const RecommendDialog = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const items = [
      { label: "전/현 직장동료", value: "companion" },
      { label: "학교 동문", value: "friend" },
      { label: "비즈니스 파트너", value: "business" },
    ];

    return (
      <Dialog.RootProvider
        value={recommendDialog}
        placement="center"
        size="md"
        onExitComplete={() => {
          setValue(undefined);
        }}
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title textAlign="center">관계 선택</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <RadioGroup.Root
                colorPalette="blue"
                size="lg"
                value={value}
                onValueChange={(e) => setValue(e.value)}
              >
                <Flex>
                  {items.map((item, index) => {
                    return (
                      <RadioGroup.Item value={item.value} flex={1}>
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    );
                  })}
                </Flex>
              </RadioGroup.Root>
            </Dialog.Body>
            <Dialog.Footer pt={0}>
              <Dialog.ActionTrigger asChild flex={1}>
                <Button variant="outline">취소</Button>
              </Dialog.ActionTrigger>

              <Dialog.ActionTrigger asChild flex={1}>
                <Button
                  variant="outline"
                  flex={1}
                  colorPalette="black"
                  color="#0066ff"
                  disabled={value === undefined}
                >
                  추천 완료
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.RootProvider>
    );
  };

  const MainPage = () => {
    return (
      <>
        <Flex position="relative">
          {/* 좌측 뷰 영역(탭) */}
          {pageType === "profile" && <ProfileTab />}
          {pageType === "post" && <PostTab />}

          {/* 우측 추천 프로필 영역 */}
          <Box flex={3} pt="30px" pl="30px" alignItems="flex-start">
            <Box className="sticky top-[80px]">
              <Box
                bg="#fdfbfc"
                border={attrBorderGrey}
                p="20px"
                borderRadius="12px"
              >
                <Text fontSize="16px" fontWeight="bold" mb="8px">
                  활동 팀
                </Text>

                {activityList.map((v, index) => {
                  if (index < 1 || isExpActivity) {
                    return ActivityView(v, index);
                  }
                  return <Box key={index} />;
                })}

                <Flex mt="-10px">
                  <Spacer />
                  <Text
                    fontSize={14}
                    color="grey"
                    className="hover:bg-gray-100"
                    p="2px"
                    borderRadius="1px"
                    onClick={() => {
                      setIsExpActivity(!isExpActivity);
                    }}
                  >
                    {isExpActivity ? "접기" : "더보기"}
                  </Text>
                </Flex>
              </Box>

              <Box
                mt="24px"
                bg="#fdfbfc"
                border={attrBorderGrey}
                p="20px"
                borderRadius="12px"
              >
                <Text fontSize="16px" fontWeight="bold" mb="8px">
                  추천 프로필
                </Text>
                {profileData.map((v, index) => {
                  if (index < 3 || isExpProfile) {
                    return TeamProfile(v, index);
                  }
                  return <Box key={index} />;
                })}

                <Flex mt="-10px">
                  <Spacer />
                  <Text
                    fontSize={14}
                    color="grey"
                    className="hover:bg-gray-100"
                    p="2px"
                    borderRadius="1px"
                    onClick={() => {
                      setIsExpProfile(!isExpProfile);
                    }}
                  >
                    {isExpProfile ? "접기" : "더보기"}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </>
    );
  };

  const Header = () => {
    return (
      <Flex alignItems="center">
        <Image src="/google.png" w="100px" h="100px" />

        <Box ml="20px">
          <Text fontSize={48} fontWeight="bold" color="#333333">
            디벨로퍼
          </Text>
          <Flex alignItems="center">
            <Image
              src="/developer_logo.png"
              w="25px"
              h="25px"
              borderRadius={8}
              border={attrBorderGrey2}
            />
            <Text fontSize={16} ml="6px">
              주식회사 디벨로퍼랩 · Flutter 개발자
            </Text>
          </Flex>
          <Flex alignItems="center" mt="12px">
            <Flex
              onClick={() => {
                console.log("팔로워");
                setDlgPageType("follower");
                followerDialog.setOpen(true);
              }}
            >
              <Text color="grey" mr={1}>
                팔로워
              </Text>
              <Text>51 · </Text>
            </Flex>

            <Flex
              onClick={() => {
                console.log("팔로잉");
                setDlgPageType("following");
                followerDialog.setOpen(true);
              }}
            >
              <Text color="grey" ml={2}>
                팔로잉
              </Text>
              <Text ml={2}>0</Text>
            </Flex>
          </Flex>
        </Box>

        <Spacer />

        <Box
          pl="40px"
          pr="40px"
          pt="10px"
          pb="10px"
          mr="8px"
          borderRadius={8}
          className="bg-[#edeaf5] hover:bg-gray-300"
          bg={isFollowing ? "#0066ff" : undefined}
          color={isFollowing ? "white" : "black"}
          fontWeight="semibold"
          fontSize={16}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        >
          {isFollowing ? "팔로잉" : "팔로우"}
        </Box>

        <Box
          className="bg-white hover:bg-gray-100"
          p="10px"
          borderRadius="10px"
          border="1px solid rgba(0, 0, 0, 0.15)"
          onClick={() => {
            copyCipboard("test", () => {
              successToast("링크가 복사되었습니다.");
            });
          }}
        >
          <IoShareOutline size="22px" />
        </Box>
      </Flex>
    );
  };

  return (
    <Box bg="rgba(213, 206, 255, 0.65)" pl="24px" pr="24px" pb="24px" pt="40px">
      {/* 프로필 상단 영역, 탭까 */}
      <Header />
      <Tabs.Root
        value={pageType}
        variant="line"
        mt="30px"
        onValueChange={(e) => {
          setPageType(e.value);
        }}
      >
        <Tabs.List>
          <Tabs.Trigger value="profile" fontSize="18px" fontWeight="bold">
            프로필
          </Tabs.Trigger>
          <Tabs.Trigger value="post" fontSize="18px" fontWeight="bold">
            게시글
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <MainPage />

      {FollowerDialog(dlgPageType)}
      {RecommendDialog()}
    </Box>
  );
}
