/**
 * Define navbar anchors in a global spot to make it easier to identify all the
 * spots these anchors are used across the website.
 */
export default function () {
  return {
    About: "about",
    Excerpt: "excerpt",
    Formats: "formats",
    Author: "author",
  } as const;
}
