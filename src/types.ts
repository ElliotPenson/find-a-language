export interface Language {
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
  Imperative = "IMPERATIVE"
}

export enum Typing {
  Static = "STATIC",
  Dynamic = "DYNAMIC"
}

export enum Feature {
  Metaprogramming = "METAPROGRAMMING",
  Lisp = "LISP",
  Strong = "STRONG",
  Weak = "WEAK",
  TypeInference = "TYPE_INFERENCE"
}
