"use client";

import ContextualCTA from "./ContextualCTA";

function renderMarkdown(content: string, topic: string): JSX.Element[] {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let paragraphCount = 0;
  let listItems: { type: "ul" | "ol"; items: string[] } | null = null;
  let blockquoteLines: string[] = [];

  const flushList = () => {
    if (listItems) {
      const Tag = listItems.type === "ul" ? "ul" : "ol";
      elements.push(
        <Tag key={`list-${elements.length}`}>
          {listItems.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </Tag>
      );
      listItems = null;
    }
  };

  const flushBlockquote = () => {
    if (blockquoteLines.length > 0) {
      elements.push(
        <blockquote key={`bq-${elements.length}`}>
          {blockquoteLines.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
          ))}
        </blockquote>
      );
      blockquoteLines = [];
    }
  };

  const inlineFormat = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      flushList();
      flushBlockquote();
      continue;
    }

    if (line.startsWith("> ")) {
      flushList();
      blockquoteLines.push(line.slice(2));
      continue;
    }

    flushBlockquote();

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(4)) }} />
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${i}`} dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(3)) }} />
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const item = line.slice(2);
      if (!listItems || listItems.type !== "ul") {
        flushList();
        listItems = { type: "ul", items: [] };
      }
      listItems.items.push(item);
      continue;
    }

    const olMatch = line.match(/^\d+\.\s(.+)/);
    if (olMatch) {
      if (!listItems || listItems.type !== "ol") {
        flushList();
        listItems = { type: "ol", items: [] };
      }
      listItems.items.push(olMatch[1]);
      continue;
    }

    // Regular paragraph
    flushList();
    paragraphCount++;
    elements.push(
      <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
    );

    // Insert contextual CTA every 4 paragraphs
    if (paragraphCount === 4) {
      elements.push(<ContextualCTA key={`cta-${i}`} topic={topic} />);
    }
  }

  flushList();
  flushBlockquote();

  return elements;
}

export default function ArticleRenderer({
  content,
  topic,
}: {
  content: string;
  topic: string;
}) {
  const elements = renderMarkdown(content, topic);
  return <div className="article-content">{elements}</div>;
}
