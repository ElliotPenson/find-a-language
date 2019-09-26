import GitHubColors from "github-colors";

import { Language, Paradigm, Typing } from "./types";

export const languages: Language[] = [
  {
    name: "C",
    key: "c",
    homepage: "https://en.wikipedia.org/wiki/C_(programming_language)",
    extension: ".c",
    creationDate: "1972",
    typing: Typing.Static,
    paradigms: [Paradigm.Imperative]
  },
  {
    name: "C++",
    key: "c++",
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
    key: "c-sharp",
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
    name: "Clojure",
    key: "clojure",
    homepage: "https://clojure.org",
    extension: ".clj",
    creationDate: "2007",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Functional]
  },
  {
    name: "COBOL",
    key: "cobol",
    homepage: "",
    extension: ".cbl",
    creationDate: "1959",
    typing: Typing.Static,
    paradigms: [Paradigm.Imperative, Paradigm.ObjectOriented]
  },
  {
    name: "Common Lisp",
    key: "common-lisp",
    homepage: "https://common-lisp.net",
    extension: ".cl",
    creationDate: "1984",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Erlang",
    key: "erlang",
    homepage: "http://www.erlang.org",
    extension: ".erl",
    creationDate: "1986",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Functional]
  },
  {
    name: "F#",
    key: "f-sharp",
    homepage: "http://fsharp.org",
    extension: ".fs",
    creationDate: "2005",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Go",
    key: "go",
    homepage: "https://golang.org",
    extension: ".go",
    creationDate: "November 10, 2009",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Groovy",
    key: "groovy",
    homepage: "http://groovy-lang.org",
    extension: ".groovy",
    creationDate: "2003",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Imperative, Paradigm.ObjectOriented]
  },
  {
    name: "Java",
    key: "java",
    homepage: "https://www.oracle.com/java/",
    extension: ".java",
    creationDate: "May 23, 1995",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented, Paradigm.Imperative]
  },
  {
    name: "JavaScript",
    key: "javascript",
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
    name: "Julia",
    key: "julia",
    homepage: "https://julialang.org",
    extension: ".jl",
    creationDate: "2012",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Functional, Paradigm.Imperative]
  },
  {
    name: "Kotlin",
    key: "kotlin",
    homepage: "https://kotlinlang.org",
    extension: ".kt",
    creationDate: "2011",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented]
  },
  {
    name: "Haskell",
    key: "haskell",
    homepage: "https://www.haskell.org",
    extension: ".hs",
    creationDate: "1990",
    typing: Typing.Static,
    paradigms: [Paradigm.Functional]
  },
  {
    name: "Lua",
    key: "lua",
    homepage: "https://www.lua.org",
    extension: ".lua",
    creationDate: "1993",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "MATLAB",
    key: "matlab",
    homepage: "https://www.mathworks.com/products/matlab.html",
    extension: ".m",
    creationDate: "1984",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "OCaml",
    key: "ocaml",
    homepage: "https://ocaml.org",
    extension: ".ml",
    creationDate: "1996",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Octave",
    key: "octave",
    homepage: "https://gnu.org/software/octave/",
    extension: ".m",
    creationDate: "1988",
    typing: Typing.Dynamic,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Objective-C",
    key: "objective-c",
    homepage: "https://developer.apple.com",
    extension: ".m",
    creationDate: "1984",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented]
  },
  {
    name: "PHP",
    key: "php",
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
    name: "Prolog",
    key: "prolog",
    homepage: "https://en.wikipedia.org/wiki/Prolog",
    extension: ".pl",
    creationDate: "1972",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Logic]
  },
  {
    name: "Python",
    key: "python",
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
    key: "ruby",
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
    name: "Rust",
    key: "rust",
    homepage: "https://www.rust-lang.org",
    extension: ".rs",
    creationDate: "July 7, 2010",
    typing: Typing.Static,
    paradigms: [Paradigm.Functional, Paradigm.Imperative]
  },
  {
    name: "Scala",
    key: "scala",
    homepage: "https://www.scala-lang.org",
    extension: ".scala",
    creationDate: "January 20, 2004",
    typing: Typing.Static,
    paradigms: [
      Paradigm.Functional,
      Paradigm.Imperative,
      Paradigm.ObjectOriented
    ]
  },
  {
    name: "Scheme",
    key: "scheme",
    homepage: "http://www.scheme-reports.org",
    extension: ".scm",
    creationDate: "1975",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Functional]
  },
  {
    name: "Shell",
    key: "shell",
    homepage: "https://en.wikipedia.org/wiki/Bourne_shell",
    extension: ".sh",
    creationDate: "1977",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.Imperative]
  },
  {
    name: "Smalltalk",
    key: "smalltalk",
    homepage: "https://en.wikipedia.org/wiki/Smalltalk",
    extension: ".st",
    creationDate: "1972",
    typing: Typing.Dynamic,
    paradigms: [Paradigm.ObjectOriented]
  },
  {
    name: "Standard ML",
    key: "sml",
    homepage: "http://sml-family.org",
    extension: ".sml",
    creationDate: "1983",
    typing: Typing.Static,
    paradigms: [Paradigm.Functional, Paradigm.Imperative]
  },
  {
    name: "Swift",
    key: "swift",
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
    key: "typescript",
    homepage: "http://www.typescriptlang.org",
    extension: ".ts",
    creationDate: "October 1, 2012",
    typing: Typing.Static,
    paradigms: [
      Paradigm.ObjectOriented,
      Paradigm.Functional,
      Paradigm.Imperative
    ]
  },
  {
    name: "Visual Basic",
    key: "visual-basic",
    homepage: "https://docs.microsoft.com/en-us/dotnet/visual-basic",
    extension: ".vb",
    creationDate: "1991",
    typing: Typing.Static,
    paradigms: [Paradigm.ObjectOriented]
  }
];

export function findColor(language: Language): string {
  return GitHubColors.get(language.name, true).color;
}
