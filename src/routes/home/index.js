import { h } from "preact";
import * as dayjs from "dayjs";

const Home = () => {
  const age = dayjs().diff("1990-01-24", "year");

  return (
    <main>
      <img src="/assets/ym.jpeg" />

      <p>Hi, I'm Yatin Mehandiratta.</p>
      <p>I'm {age} years old.</p>
      <p>
        My favorite people to hangout are my family including our 2 dogs Scooby
        and Scrappy.
      </p>
      <p>
        I am a computer geek by heart and love programming. I paradoxically like
        both Functional and OOP paradigms.
      </p>
      <p>With this picture, it must be clear I love driving my Scorpio.</p>
      <p>
        Music for me is the greatest invention of all time. Big fan of Lucky Ali
        and Cigarretes After Sex.
      </p>
    </main>
  );
};

export default Home;
