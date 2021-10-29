import React from "react";

import { EmojiHOCProps, EmojiProps } from "./types";

export function emojiHOC(props: EmojiHOCProps): JSX.Element {
  return (
    <span role="img" aria-label={props.ariaLabel} className={props.className}>
      {props.emoji}
    </span>
  );
}

export const SkullAndCrossbonesEmoji = ({
  className,
  ariaLabel = "Skull and Crossbones",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "☠️",
    className,
  });

export const BackpackEmoji = ({
  className,
  ariaLabel = "Backpack",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🎒",
    className,
  });

export const TopHatEmoji = ({ className, ariaLabel = "Top Hat" }: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🎩",
    className,
  });

export const CrossedSwordsEmoji = ({
  className,
  ariaLabel = "Crossed Swords",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "⚔️",
    className,
  });

export const MageEmoji = ({ className, ariaLabel = "Mage" }: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🧙",
    className,
  });

export const HandWithFingersSplayedEmoji = ({
  className,
  ariaLabel = "Hand with Fingers Splayed",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🖐️",
    className,
  });

export const OgreEmoji = ({ className, ariaLabel = "Ogre" }: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "👹",
    className,
  });

export const PartyPopperEmoji = ({
  className,
  ariaLabel = "Party Popper",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🎉",
    className,
  });

export const WarningEmoji = ({
  className,
  ariaLabel = "Warning",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "⚠️",
    className,
  });

export const MovieCameraEmoji = ({
  className,
  ariaLabel = "Movie Camera",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🎥",
    className,
  });

export const MemoEmoji = ({ className, ariaLabel = "Memo" }: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "📝",
    className,
  });

export const CheckMarkEmoji = ({
  className,
  ariaLabel = "Check Mark",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "✔️",
    className,
  });

export const CrossMarkEmoji = ({
  className,
  ariaLabel = "Cross Mark",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "❌",
    className,
  });

export const BackhandIndexPointingRightEmoji = ({
  className,
  ariaLabel = "Backhand Index Pointing Right",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "👉",
    className,
  });

// https://unicode-table.com/en/25B3/
export const TriangleEmoji = ({
  className,
  ariaLabel = "White Up-Pointing Triangle",
}: EmojiProps) => emojiHOC({ ariaLabel, emoji: "△", className });

export const DownwardsButtonEmoji = ({
  className,
  ariaLabel = "Downwards Button",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "🔽",
    className,
  });
