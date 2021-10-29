import React from "react";
export function emojiHOC(props) {
    return (React.createElement("span", { role: "img", "aria-label": props.ariaLabel, className: props.className }, props.emoji));
}
export const SkullAndCrossbonesEmoji = ({ className, ariaLabel = "Skull and Crossbones", }) => emojiHOC({
    ariaLabel,
    emoji: "☠️",
    className,
});
export const BackpackEmoji = ({ className, ariaLabel = "Backpack", }) => emojiHOC({
    ariaLabel,
    emoji: "🎒",
    className,
});
export const TopHatEmoji = ({ className, ariaLabel = "Top Hat" }) => emojiHOC({
    ariaLabel,
    emoji: "🎩",
    className,
});
export const CrossedSwordsEmoji = ({ className, ariaLabel = "Crossed Swords", }) => emojiHOC({
    ariaLabel,
    emoji: "⚔️",
    className,
});
export const MageEmoji = ({ className, ariaLabel = "Mage" }) => emojiHOC({
    ariaLabel,
    emoji: "🧙",
    className,
});
export const HandWithFingersSplayedEmoji = ({ className, ariaLabel = "Hand with Fingers Splayed", }) => emojiHOC({
    ariaLabel,
    emoji: "🖐️",
    className,
});
export const OgreEmoji = ({ className, ariaLabel = "Ogre" }) => emojiHOC({
    ariaLabel,
    emoji: "👹",
    className,
});
export const PartyPopperEmoji = ({ className, ariaLabel = "Party Popper", }) => emojiHOC({
    ariaLabel,
    emoji: "🎉",
    className,
});
export const WarningEmoji = ({ className, ariaLabel = "Warning", }) => emojiHOC({
    ariaLabel,
    emoji: "⚠️",
    className,
});
export const MovieCameraEmoji = ({ className, ariaLabel = "Movie Camera", }) => emojiHOC({
    ariaLabel,
    emoji: "🎥",
    className,
});
export const MemoEmoji = ({ className, ariaLabel = "Memo" }) => emojiHOC({
    ariaLabel,
    emoji: "📝",
    className,
});
export const CheckMarkEmoji = ({ className, ariaLabel = "Check Mark", }) => emojiHOC({
    ariaLabel,
    emoji: "✔️",
    className,
});
export const CrossMarkEmoji = ({ className, ariaLabel = "Cross Mark", }) => emojiHOC({
    ariaLabel,
    emoji: "❌",
    className,
});
export const BackhandIndexPointingRightEmoji = ({ className, ariaLabel = "Backhand Index Pointing Right", }) => emojiHOC({
    ariaLabel,
    emoji: "👉",
    className,
});
export const TriangleEmoji = ({ className, ariaLabel = "White Up-Pointing Triangle", }) => emojiHOC({ ariaLabel, emoji: "△", className });
export const DownwardsButtonEmoji = ({ className, ariaLabel = "Downwards Button", }) => emojiHOC({
    ariaLabel,
    emoji: "🔽",
    className,
});
