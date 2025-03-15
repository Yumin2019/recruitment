"use client";

import { Box, Flex, Spacer, Text, Image, Stack } from "@chakra-ui/react";
import { attrBorderGrey, attrBorderGrey2 } from "@/color";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { copyCipboard, successToast, toDollarString } from "@/util";
import { IoShareOutline } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { careerList, schoolList } from "@/app/global-data";
import { ProfileInfoRow } from "@/components/profile-info-row";
import { FaEye, FaEyeSlash, FaRegThumbsUp } from "react-icons/fa";
import { RenderTagList } from "@/components/tag-list";

export default function MyProfilePage() {
  const [showCareer, setShowCareer] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showAward, setShowAward] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const ProfileHeader = () => {
    return (
      <Flex h="100px" alignItems="center">
        <Image src="/google.png" w="90px" h="90px" />

        <Box ml="16px">
          <Text fontSize="34px" fontWeight="bold">
            디벨로퍼
          </Text>

          <Flex mt="2px">
            <Image
              src="/developer_logo.png"
              w="24px"
              h="24px"
              borderRadius="5px"
              border={attrBorderGrey2}
            />
            <Text fontSize="16px" ml="8px">
              (주)디벨로퍼랩 · Flutter 개발자
            </Text>
          </Flex>

          <Flex alignItems="center" mt="12px">
            <Flex
              onClick={() => {
                console.log("팔로워");
                //   setDlgPageType("follower");
                //   followerDialog.setOpen(true);
              }}
            >
              <Text color={"grey"} mr={1}>
                팔로워
              </Text>
              <Text>51 · </Text>
            </Flex>

            <Flex
              onClick={() => {
                console.log("팔로잉");
                //   setDlgPageType("following");
                //   followerDialog.setOpen(true);
              }}
            >
              <Text color="grey" ml={2}>
                팔로잉
              </Text>
              <Text ml={2}>0</Text>
            </Flex>

            <Box borderRight={attrBorderGrey} ml={2} h="14px" />

            <Flex alignItems="center">
              <Text color={"grey"} mr={1} ml={2}>
                포인트
              </Text>
              <Text fontSize={16} fontWeight="bold">
                {toDollarString(3000)}P
              </Text>

              <Box mb="2px" ml="2px">
                <IoIosArrowForward size={14} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  };

  const SchoolView = () => {
    return (
      <Box
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
      >
        <Flex>
          <Text mr="8px" fontSize="16px" fontWeight="bold">
            학력
          </Text>

          {showSchool && (
            <FaEye
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowSchool(false);
                successToast("학력 정보가 비공개되었어요.");
              }}
            />
          )}
          {!showSchool && (
            <FaEyeSlash
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowSchool(true);
                successToast("학력 정보가 공개되었어요.");
              }}
            />
          )}

          <Spacer />
          <Text
            fontSize="14px"
            color="grey"
            onClick={() => {
              console.log("편집");
            }}
          >
            편집
          </Text>
        </Flex>
        {schoolList.map((v, index) => {
          return (
            <Box key={index}>
              {ProfileInfoRow(v)}

              {index < schoolList.length - 1 && (
                <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
              )}
            </Box>
          );
        })}
      </Box>
    );
  };

  const CareerView = () => {
    return (
      <Box
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
      >
        <Flex>
          <Text mr="8px" fontSize="16px" fontWeight="bold">
            경력
          </Text>

          {showCareer && (
            <FaEye
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowCareer(false);
                successToast("경력 정보가 비공개되었어요.");
              }}
            />
          )}
          {!showCareer && (
            <FaEyeSlash
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowCareer(true);
                successToast("경력 정보가 공개되었어요.");
              }}
            />
          )}

          <Spacer />
          <Text
            fontSize="14px"
            color="grey"
            onClick={() => {
              console.log("편집");
            }}
          >
            편집
          </Text>
        </Flex>

        {careerList.map((v, index) => {
          return (
            <Box key={index}>
              {ProfileInfoRow(v)}

              {index < careerList.length - 1 && (
                <Box borderTop={attrBorderGrey2} mt="16px" mb="16px" />
              )}
            </Box>
          );
        })}
      </Box>
    );
  };

  const SkillView = () => {
    let skillList = [
      "Java",
      "Kotlin",
      "Flutter",
      "React",
      "GitHub",
      "JavaScript",
      "Node.js",
      "MySQL",
      "AWS",
    ];

    return (
      <Box
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
      >
        <Flex>
          <Text mr="8px" fontSize="16px" fontWeight="bold">
            스킬
          </Text>

          {showSkill && (
            <FaEye
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowSkill(false);
                successToast("스킬 정보가 비공개되었어요.");
              }}
            />
          )}
          {!showSkill && (
            <FaEyeSlash
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowSkill(true);
                successToast("스킬 정보가 공개되었어요.");
              }}
            />
          )}

          <Spacer />
          <Text
            fontSize="14px"
            color="grey"
            onClick={() => {
              console.log("편집");
            }}
          >
            편집
          </Text>
        </Flex>

        <Stack direction="column" mt="8px">
          {RenderTagList(skillList, 6)}
        </Stack>
      </Box>
    );
  };

  const AwardView = () => {
    let awardList = [
      {
        title: "2019 서울시 지방기능경기대회(게임 개발) 장려상",
        date: "2019.04",
        desc: "2D 횡스크롤 창작 슈팅게임(Defender)를 20시간 동안 개발했습니다.",
      },
      {
        title: "어소트락 게임 아카데미(게임 프로그래머 과정 24기 수료)",
        date: "2019.04",
        desc: "C/C++, Windows API, DirectX 11, MFC를 이용하여 포트폴리오를 만드는 취업 과정을 수강했습니다. (1년 과정)",
      },
    ];

    return (
      <Box
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
      >
        <Flex>
          <Text mr="8px" fontSize="16px" fontWeight="bold">
            수상
          </Text>

          {showAward && (
            <FaEye
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowAward(false);
                successToast("수상 정보가 비공개되었어요.");
              }}
            />
          )}
          {!showAward && (
            <FaEyeSlash
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowAward(true);
                successToast("수상 정보가 공개되었어요.");
              }}
            />
          )}

          <Spacer />
          <Text
            fontSize="14px"
            color="grey"
            onClick={() => {
              console.log("편집");
            }}
          >
            편집
          </Text>
        </Flex>

        {awardList.map((v, index) => {
          return (
            <Box
              key={index}
              borderBottom={
                index < awardList.length - 1 ? attrBorderGrey : undefined
              }
              pt="10px"
              pb={index < awardList.length - 1 ? "10px" : undefined}
            >
              <Text fontWeight="bold" fontSize="16px">
                {v.title}
              </Text>
              <Text color="grey" fontSize="13px">
                {v.date}
              </Text>
              <Text mt="6px" color="grey" fontSize="13px">
                {v.desc}
              </Text>
            </Box>
          );
        })}
      </Box>
    );
  };

  const LanguageView = () => {
    let lanuageList = [
      {
        language: "영어",
        ability: "일상 회화", // 기초, 일상 회하, 비즈니스, 원어민
      },
      {
        language: "힌디어",
        ability: "기초",
      },
    ];

    return (
      <Box
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
      >
        <Flex>
          <Text mr="8px" fontSize="16px" fontWeight="bold">
            언어
          </Text>

          {showLanguage && (
            <FaEye
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowLanguage(false);
                successToast("언어 정보가 비공개되었어요.");
              }}
            />
          )}
          {!showLanguage && (
            <FaEyeSlash
              size="20px"
              color="#adadaf"
              onClick={() => {
                setShowLanguage(true);
                successToast("언어 정보가 공개되었어요.");
              }}
            />
          )}

          <Spacer />
          <Text
            fontSize="14px"
            color="grey"
            onClick={() => {
              console.log("편집");
            }}
          >
            편집
          </Text>
        </Flex>

        {lanuageList.map((v, index) => {
          return (
            <Box
              key={index}
              borderBottom={
                index < lanuageList.length - 1 ? attrBorderGrey : undefined
              }
              pt="10px"
              pb={index < lanuageList.length - 1 ? "10px" : undefined}
            >
              <Text fontWeight="bold" fontSize="16px">
                {v.language}
              </Text>
              <Text color="grey" fontSize="14px">
                {v.ability}
              </Text>
            </Box>
          );
        })}
      </Box>
    );
  };

  const RecommendView = () => {
    let lanuageList = [
      {
        language: "영어",
        ability: "일상 회화", // 기초, 일상 회하, 비즈니스, 원어민
      },
      {
        language: "힌디어",
        ability: "기초",
      },
    ];

    return (
      <Flex
        border={attrBorderGrey}
        p="20px"
        mt="24px"
        borderRadius="12px"
        bg="#fdfbfc"
        alignItems="center"
      >
        <Box border={attrBorderGrey} p="8px" borderRadius="8px">
          <FaRegThumbsUp size={20} />
        </Box>

        <Box ml="12px">
          <Text color="black" fontWeight="bold" fontSize="15px">
            추천 요청하기
          </Text>

          <Text fontSize="14px" color="grey">
            신뢰성과 함께 협업 능력을 돋보이게 하세요.
          </Text>
        </Box>

        <Spacer />
        <MdKeyboardArrowRight size={30} color="grey" />
      </Flex>
    );
  };

  const IntroductionView = () => {
    return (
      <Flex
        border={attrBorderGrey}
        borderRadius="8px"
        p="20px"
        mt="40px"
        alignItems="center"
      >
        <Box
          border={attrBorderGrey}
          borderRadius="8px"
          pl="8px"
          pt="8px"
          w="40px"
          h="40px"
        >
          <BsPersonFill size={22} />
        </Box>

        <Box ml="12px">
          <Text fontSize={14} fontWeight="bold">
            소개 작성하기
          </Text>

          <Text fontSize={14} color="grey">
            당신의 이야기로 특별한 첫인상을 남기세요.
          </Text>
        </Box>

        <Spacer />
        <MdKeyboardArrowRight size={30} color="grey" />
      </Flex>
    );
  };

  return (
    <>
      <Box p="40px">
        {/* 프로필 이미지 및 최근 경력, 팔로워 부분 */}
        <ProfileHeader />

        {/* 설정 및 공유 버튼 */}
        <Flex mt="48px">
          <Box
            flex={1}
            border={attrBorderGrey}
            textAlign="center"
            pt="8px"
            pb="8px"
            borderRadius="12px"
            fontSize={15}
            className="hover:bg-gray-100"
          >
            설정
          </Box>

          <Box
            className="bg-white hover:bg-gray-100"
            pl="16px"
            pr="16px"
            pt="10px"
            pb="10px"
            ml="12px"
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

        {/* 소개 작성하기 */}
        <IntroductionView />
        <CareerView />
        <SchoolView />
        <SkillView />
        <AwardView />
        <LanguageView />
        <RecommendView />
      </Box>
    </>
  );
}
