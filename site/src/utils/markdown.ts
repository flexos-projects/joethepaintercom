import { micromark } from 'micromark';

/**
 * Converts a Markdown string to HTML.
 * @param markdown - The Markdown string to convert.
 * @returns The converted HTML string.
 */
export function markdownToHtml(markdown: string): string {
  // micromark generates HTML from markdown.
  // It's a low-level markdown parser, ideal for simple RichText fields.
  return micromark(markdown);
}