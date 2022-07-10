---
title: Hello Markdown
date: "2015-05-01T22:12:03.284Z"
description: "Examples of various markdown items with snippets"
category: "Uncategorised"
tags: [""]
---

This page is a reference guide to using markdown when writing blog posts.

## Headings

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

## Text

This is a paragraph.

    This is a paragraph.

#### styles

_italic text with single underscores_

**BOLD text with double asterisks**

#### code

This paragraph has some `code` in it.

    This paragraph has some `code` in it.

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

You can also write code blocks here!

```js
const saltyDuckEgg = "chinese preserved food product"
```

## Links

This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

## Lists

**Ordered**

1. Item 1
2. Item 2
3. Item 3

**Unordered**

- Item 1 using hyphen
- Item 2 using hyphen
- Item 3 using hyphen

* Item 1 using asterisk
* Item 2 using asterisk
* Item 3 using asterisk

## Tables

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

## Image

![Alt Text](https://placehold.it/200x50 "Image Title")

    ![Alt Text](https://placehold.it/200x50 "Image Title")
