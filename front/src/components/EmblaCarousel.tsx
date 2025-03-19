import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaCarouselDotButton";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { attrBorderGrey } from "@/color";

type PropType = {
  dataList: any;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { dataList, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    console.log(autoplay.options.stopOnInteraction);

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <Box className="embla" margin="auto">
      <Box ref={emblaRef} overflow="hidden">
        <Flex className="embla__container">
          {dataList.map((v: any, index) => (
            <Box
              className="embla__slide"
              key={index}
              cursor="pointer"
              onClick={() => {
                console.log("click");
              }}
            >
              <Image
                src={v.imgSrc}
                w="250px"
                h="144px"
                borderRadius="12px"
                border={attrBorderGrey}
              />

              <Flex mt="12px">
                <Image
                  src={v.logoSrc}
                  w="46px"
                  h="46px"
                  borderRadius="8px"
                  border={attrBorderGrey}
                />

                <Box ml="12px">
                  <Text fontSize="16px" fontWeight="semibold">
                    {v.title}
                  </Text>

                  <Text fontSize="13px" color="grey" fontWeight="semibold">
                    {v.desc}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Dot Navigator */}
      <Flex gapX="8px" alignItems="center" mt="30px">
        <Box flex={1} />
        {scrollSnaps.map((_, index) => (
          <Box
            cursor="pointer"
            bg={index === selectedIndex ? "black" : "grey"}
            w="10px"
            h="10px"
            borderRadius="50%"
            className="hover:scale-125"
            key={index}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
        <Box flex={1} />
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
