import { h } from "preact";
import style from "./style.css";
import { Link } from "preact-router/match";

const Misc = () => {
  return (
    <main>
      <section>
        <h2>Blog</h2>
        <p>I sometimes blog on random tech things that I find intriguing.</p>

        <ul>
          <Link
            href="https://dev.to/iamyatin/getting-started-with-imageengine-and-react-31jn"
            target="_blank"
            referrer="nofollow"
          >
            Getting Started with Image Engine and React
          </Link>
        </ul>
        <ul>
          <Link
            href="https://medium.com/proximity-labs/creational-design-patterns-using-typescript-e2b6578b5b2b"
            target="_blank"
            referrer="nofollow"
          >
            Creational Design Patterns using Typescript
          </Link>
        </ul>
        <ul>
          <Link
            href="https://medium.com/proximity-labs/solid-principles-using-typescript-5175aa06b583"
            target="_blank"
            referrer="nofollow"
          >
            SOLID Principles using Typescript
          </Link>
        </ul>
        <ul>
          <Link
            href="https://medium.com/coinmonks/understanding-swap-protocol-92a821095d8"
            target="_blank"
            referrer="nofollow"
          >
            SWAP Protocol Demystified
          </Link>
        </ul>
        <ul>
          <Link
            href="https://medium.com/@yatinm/vim-part-1-its-not-a-text-editor-but-a-language-7584e646f408"
            target="_blank"
            referrer="nofollow"
          >
            Vim: it’s not a text editor but a language
          </Link>
        </ul>
      </section>
      <section>
        <h2>Random</h2>
        <ul>
          <span>Gadget20.com</span>
          <p>
            A gadget recommendation engine built and successfully ran for a year
            with profit, but had to shutdown due to time constraints.
          </p>
        </ul>
        <ul>
          <span>Functional Programming</span>
          <p>
            I'm practicing FP using RamdaJS in my spare time using some side
            projects.
          </p>
        </ul>
        <ul>
          <span>Mnemonics</span>
          <p>
            Big fan of learning Mnemonics, building up own skillset in the same.
          </p>
        </ul>
        <ul>
          <span>Learning</span>
          <p>
            I love learning new stuff, right now I'm working on German L1 level
            program.
          </p>
        </ul>
      </section>
    </main>
  );
};

export default Misc;
