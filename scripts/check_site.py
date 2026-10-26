#!/usr/bin/env python3
"""Validate Luma Studio's local HTML links and asset references."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import sys

ROOT = Path(__file__).resolve().parents[1]

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for key in ("href", "src"):
            value = attrs.get(key)
            if value:
                self.refs.append((key, value))

def parse(path):
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser

def main():
    pages = sorted(ROOT.rglob("*.html"))
    parsed = {page: parse(page) for page in pages}
    errors = []
    refs_checked = 0
    for page, document in parsed.items():
        for kind, value in document.refs:
            url = urlparse(value)
            if url.scheme or value.startswith("//") or value.startswith("data:"):
                continue
            target = (page.parent / url.path).resolve() if url.path else page.resolve()
            if ROOT.resolve() not in target.parents and target != ROOT.resolve():
                errors.append(f"{page.relative_to(ROOT)}: reference escapes project root: {value}")
                continue
            refs_checked += 1
            if not target.exists():
                errors.append(f"{page.relative_to(ROOT)}: missing {kind} target: {value}")
                continue
            if url.fragment and target.suffix.lower() == ".html":
                target_page = parsed.get(target)
                if target_page is None:
                    target_page = parse(target)
                    parsed[target] = target_page
                if url.fragment not in target_page.ids:
                    errors.append(f"{page.relative_to(ROOT)}: missing anchor #{url.fragment} in {target.relative_to(ROOT)}")
    if errors:
        print("\n".join(f"ERROR: {item}" for item in errors), file=sys.stderr)
        return 1
    print(f"OK — checked {len(pages)} HTML pages and {refs_checked} local references.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
