'use client';

import { useMemo } from "react";
import { Style, Avatar } from "@dicebear/core";
import definition from "@dicebear/styles/bottts.json";

const style = new Style(definition);

type AvatarProps = {
  seed?: string;
  size?: number;
};

export default function AvatarComponent({
  seed = "Nova",
  size = 48,
}: AvatarProps) {
  const svg = useMemo(() => {
    const avatar = new Avatar(style, { seed, size });
    return avatar.toString();
  }, [seed, size]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        overflow: "hidden",
      }}
    />
  );
}