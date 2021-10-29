# Accessible Emojis

💻 Add emojis in a considered way!

Features:

- 🖼️ Adds `role="img"`
- 🏷️ All exported emojis have a default `aria-label` with the option to override the default. E.g. 🔽 is by default "Downwards Button" but in your own context, you might want it to be something else like "expand".
- 🖌️ Supports `className` prop to add custom styles. The emoji is by default rendered with `<span>` which is inline-block, but you can customise this with your classNames.
