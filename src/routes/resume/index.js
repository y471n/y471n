import { h } from "preact";
import style from "./style.css";
import { Link } from "preact-router/match";

// Note: `user` comes from the URL, courtesy of our router
const Resume = () => {
  return (
    <main>
      <section>
        <h2>Summary</h2>
        <p class={style.summary}>
          9+ years of Experience in Software Development on Tech Stacks such as
          ReactJS, ExpressJS, Typescript, Python's Flask, Django and Scrapy, PHP
          Laravel and Java+Android.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          <span class={style.role}>
            Proximity Labs - Senior Software Consultant
          </span>

          <p class={style.work}>
            Frontend Architecture on NextJS with Performance Optimizations and
            Internationalization support.
          </p>
        </div>

        <div>
          <span class={style.role}>Block8</span>

          <p class={style.work}>
            <ul>
              <span>
                PlayXchange Ecosystem - Developed React library for various
                gaming partners to transfer the Crypto Tokens.
              </span>
            </ul>
            <ul>
              <span>
                Smart Contract management for tenants in Hutly, reducing the
                time from days to minutes.
              </span>
            </ul>
            <ul>
              <span>
                Microservice for publicly and immutably timestamping the private
                data which now acts as a separate product.
              </span>
            </ul>
          </p>
        </div>

        <div>
          <span class={style.role}>91Springboard</span>

          <p class={style.work}>
            <ul>
              <span>
                Engineered a member management software with various accounting,
                referral, bonus and boosters integrations.
              </span>
            </ul>
            <ul>
              <span>
                Microservice architecture for sales, operational dashboards and
                internal web-apps.
              </span>
            </ul>
            <ul>
              <span>
                Tech Stack: ReactJS, PHP, AWS, Flask, Django, WordPress
              </span>
            </ul>
          </p>
        </div>

        <div>
          <span class={style.role}>Phonecurry</span>

          <p class={style.work}>
            <ul>
              <span>
                Worked on a range of technology stacks ranging around Android,
                Express, Laravel, Scrapy, Chrome Extensions.
              </span>
            </ul>
            <ul>
              <span>
                Moved the entire project from Core PHP to Laravel framework.
              </span>
            </ul>
            <ul>
              <span>
                Developed a{" "}
                <Link
                  href="https://chrome.google.com/webstore/detail/honey/bmnlcjabgnpnenekpadlanbbkooimhnj?hl=en"
                  target="_blank"
                  referrer="nofollow"
                >
                  Honey
                </Link>{" "}
                like Chrome Extension
              </span>
            </ul>
          </p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Masters In Information and Communication Technology</h3>
        <p class={style.college}>IIT Jodhpur, 2011-2013</p>
        <h3>Bachelors in Computer Science</h3>
        <p class={style.college}>SRM University, 2007-2011</p>
      </section>
    </main>
  );
};

export default Resume;
