export interface Language {
  key: string;
  name: string;
  homepage: string;
  extension: string;
  creationDate: string;
  typing: Typing;
  paradigms: Paradigm[];
  features?: Feature[];
}

export enum Paradigm {
  ObjectOriented = "OBJECT_ORIENTED",
  Functional = "FUNCTIONAL",
  Imperative = "IMPERATIVE",
  Logic = "LOGIC"
}

export enum Typing {
  Static = "STATIC",
  Dynamic = "DYNAMIC"
}

export enum Feature {
  Metaprogramming = "METAPROGRAMMING",
  Lisp = "LISP",
  StrongTyping = "STRONG_TYPING",
  WeakTyping = "WEAK_TYPING",
  TypeInference = "TYPE_INFERENCE",
  Pure = "PURE"
}
