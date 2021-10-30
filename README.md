# Accessible Emojis

💻 Add emojis in an accessible way! Why? Emojis are now part of our daily textual communication, yet they're not universally understood in the same way. Marking them as having the role of an image helps with semantic markup, especially for those who may need screen readers. An aria label is also an important way to convey the meaning of the emoji.

Features:

- 🖼️ Adds `role="img"`
- 🏷️ All exported emojis have a default `aria-label` with the option to override the default. E.g. 🔽 is by default "Downwards Button" but in your own context, you might want it to be something else like "expand".
- 🖌️ Supports `className` prop to add custom styles. The emoji is by default rendered with `<span>` which is inline-block, but you can customise this with your classNames.
- ☝️ Exports a HOC (higher-order-component) function that allows you to consistently apply accessible emojis. This library includes a collection of emoji's I've been using for a project, but likely you will want to apply the accessibility concerns to your own emojis too. The HOC allows you to do that.

Example HOC usage for your own emojis.

```js
import { emojiHOC } from "accessible-emojis";

export const SparklesEmoji = ({
  className,
  ariaLabel = "Sparkles",
}: EmojiProps) =>
  emojiHOC({
    ariaLabel,
    emoji: "✨",
    className,
  });
```
