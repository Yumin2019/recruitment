import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { JSX } from "react";

export const RenderTagList = (tagList: any, count: number) => {
  if (tagList.length === 0 || !tagList) {
    return <div></div>;
  }

  let gridCount = Math.floor(tagList.length / count);
  let remain = tagList.length % count;
  let gridList = [];
  if (remain > 0) ++gridCount;

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

export const RenderTechstacks = (
  stackList: any,
  count: number,
  StackView: (v: string, index: number) => JSX.Element
) => {
  if (stackList.length === 0 || !stackList) {
    return <div></div>;
  }

  let gridCount = Math.floor(stackList.length / count);
  let remain = stackList.length % count;
  let gridList = [];
  if (remain > 0) ++gridCount;

  for (let gridIdx = 0; gridIdx < gridCount; gridIdx++) {
    // 내부 목록을 생성한다.
    let children = [];
    let childCount = count;
    if (gridIdx === gridCount - 1 && remain > 0) childCount = remain;

    for (let k = 0; k < childCount; k++) {
      children.push(
        StackView(stackList[gridIdx * count + k], gridIdx * count + k)
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
