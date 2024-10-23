
### Features:
https://quartz.jzhao.xyz/authoring-content
##### We can set custom titles and tags
```text
---
title: Example Title
tags: - example-tag
---

```

**Supports Github & Markdown**
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes

This is a [[Linked Mentions]]

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

#### Callouts
https://quartz.jzhao.xyz/features/callouts
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.


> [!QUESTION]
> Aliases: question, help, faq

> [!INFO]
> Aliases: info, todo

> [!EXAMPLE]
> Aliases: example



> **Note**
> This is a note


### Publish
https://quartz.jzhao.xyz/hosting
Type cd quatz in cmd prompt

**Save changes on github:** npx quartz sync

**Upload on website:** npx quartz build

### Math
KaTeX does not support "align" ==use "aligned" instead==