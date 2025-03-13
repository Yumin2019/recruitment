"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Image,
  Dialog,
  Portal,
  useDialog,
} from "@chakra-ui/react";
import { postDataList } from "@/app/global-data";
import { PostView } from "@/components/post-view";

export default function PostPage() {
  return <>{PostView(postDataList[0], 0)}</>;
}
