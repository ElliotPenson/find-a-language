import GitHubColors from "github-colors";

import { Language, Paradigm, Typing } from "./types";

export const languages: Language[] = [
  {
    name: "C",
    homepage: "https://en.wikipedia.org/wiki/C_(programming_language)",
    extension: ".c",
    creationDate: "1972",
    typing: Typing.Static,
    paradigms: [Paradigm.Imperative]
  },
  {
    name: "C++",
    homepage: "https://isocpp.org",
    extension: ".cpp",
    creationDate: "1985",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "C#",
    homepage: "http://csharp.net",
    extension: ".cs",
    creationDate: "2000",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Java",
    homepage: "https://www.oracle.com/java/",
    extension: ".java",
    creationDate: "May 23, 1995",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented, Paradigm.Imperative]
  },
  {
    name: "JavaScript",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    extension: ".js",
    creationDate: "December 4, 1995",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Objective C",
    homepage: "https://developer.apple.com",
    extension: ".m",
    creationDate: "1984",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented]
  },
  {
    name: "PHP",
    homepage: "https://www.php.net",
    extension: ".php",
    creationDate: "1995",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Python",
    homepage: "https://www.python.org",
    extension: ".py",
    creationDate: "August 12, 1990",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
    ]
  },
  {
    name: "Ruby",
    homepage: "https://www.ruby-lang.org",
    extension: ".rb",
    creationDate: "1995",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
    ]
  },
  {
    name: "Swift",
    homepage: "https://swift.org",
    extension: ".swift",
    creationDate: "June 2, 2014",
    typing: Typing.Static,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
    ]
  },
  {
    name: "TypeScript",
    homepage: "http://www.typescriptlang.org",
    extension: ".ts",
    creationDate: "October 1, 2012",
    typing: Typing.Static,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
    ]
  }
];

export function getLanguage(key: string): Language | undefined {
  return languages.find(({ name }) => name.toUpperCase() === key.toUpperCase());
}

export function findColor(key: string): string {
  return GitHubColors.get(key, true).color;
}
