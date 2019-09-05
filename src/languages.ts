import { Language, Paradigm, Typing } from "./types";

export const languages: Language[] = [
  {
    name: "JavaScript",
    homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    extension: ".js",
    creationDate: "December 4, 1995",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
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
  }
];
