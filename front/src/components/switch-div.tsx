"use client";

import { Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const SwitchDiv = (isEnabled: boolean) => {
  const [checked, setChecked] = useState(isEnabled);

  useEffect(() => {
    setChecked(isEnabled);
  }, [isEnabled]);

  return (
    <Switch.Root
      colorPalette="cyan"
      size="lg"
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  );
};
