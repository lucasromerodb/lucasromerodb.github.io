import Head from "next/head";
import Text from "../components/Text/Text";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luke and Things</title>
        <meta description="Let’s talk about software development, 3D Art & video games."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <picture>
          <source
            srcSet="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/139004984_226464955739615_8861671548734737197_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=TrOLscUKLnQAX-Ujcai&tp=1&oh=8e6213a82c1dac1dd0a9ca117ff358c2&oe=603E4104"
            alt="Luke's face"
          />
          <img
            src="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/139004984_226464955739615_8861671548734737197_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=TrOLscUKLnQAX-Ujcai&tp=1&oh=8e6213a82c1dac1dd0a9ca117ff358c2&oe=603E4104"
            alt="Luke's face"
          />
        </picture>
        <p>
          <Text size={32} weight={600} serif color="blue300">
            Luke and Things
          </Text>
        </p>
        <h1>
          <Text size={48} weight={20} color="accent">
            Let’s talk about software development, 3D Art & video games
          </Text>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Development</a>
          </li>
          <li>
            <a href="#">3D Art</a>
          </li>
          <li>
            <a href="#">Gaming</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">DEV.to</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="development">
          <h2>
            <Text size={48} weight={400} serif>
              Sometimes I write about software development
            </Text>
          </h2>

          <p>
            Programming is about setting up your mind with logic and creativity
            ways to identify patterns and solve true problems with code. That's
            what I do every day and I love it. Let me share some of my
            experience with you.
          </p>

          <div id="posts">
            <article>
              <div>
                <h3>
                  <a href="#">
                    A practice way to document your software development project
                  </a>
                </h3>
                <footer>Writted on DEV.to - June 2020</footer>
              </div>
              <div>
                <picture>
                  <source
                    srcSet="https://res.cloudinary.com/practicaldev/image/fetch/s--1VqHqso6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ene9dycsywj8y3zd285l.jpg"
                    alt="TODO: description"
                  />
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--1VqHqso6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ene9dycsywj8y3zd285l.jpg"
                    alt="TODO: description"
                  />
                </picture>
                <a href="#">»</a>
              </div>
            </article>
            <a href="#">View all my posts on DEV.to</a>
          </div>
        </section>
        <section id="codepen">
          <h2>Mixing my passions be like</h2>
          <p>Coding, video games and 3D stuff</p>
          <iframe
            width="800"
            height="700"
            scrolling="no"
            title="Xbox Series S"
            src="https://codepen.io/lucasromerodb/embed/preview/zYBjPZv?height=726&theme-id=light&default-tab=result"
            frameBorder="no"
            loading="lazy"
            allowtransparency="true"
            allowFullScreen
          >
            See the Pen{" "}
            <a href="https://codepen.io/lucasromerodb/pen/zYBjPZv">
              Xbox Series S
            </a>{" "}
            by Lucas Romero Di Benedetto (
            <a href="https://codepen.io/lucasromerodb">@lucasromerodb</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <a href="https://codepen.io/lucasromerod">Follow me on CodePen</a>
        </section>
        <section id="mentoring">
          <h2>How to become a frontend developer fast?</h2>
          <p>
            Becoming a frontend developer requires a lot of time and curiosity,
            it’s a fact. So let me recommend you some straight forward topics
            you need to learn to success on any beginner frontend dev job.
          </p>
          <article>
            <h3>
              Start with structures, styles and actions.{" "}
              <strong>Takes 3 months</strong>
            </h3>
            <ol>
              <li>
                <a href="#">
                  <h4>HTML</h4>
                  <p>Learn about content structures</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>CSS</h4>
                  <p>Learn how to style the content to make it beauty</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Javascript</h4>
                  <p>Learn how to make actions and manipulate data</p>
                </a>
              </li>
            </ol>
          </article>
          <article>
            <h3>
              Do the same but smart. <strong>Takes 3 months</strong>
            </h3>
            <ol>
              <li>
                <a href="#">
                  <h4>React</h4>
                  <p>Learn howt to build UI with components</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Styled Components</h4>
                  <p>Learn visual primitives for the component age</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Next JS</h4>
                  <p>Learn how to server side rendering your code</p>
                </a>
              </li>
            </ol>
          </article>
          <p>You are employable here!</p>
          <article>
            <h3>
              Do the same but smart. <strong>Takes 3 months</strong>
            </h3>
            <ol>
              <li>
                <a href="#">
                  <h4>Git</h4>
                  <p>Learn how to versioning your code changes</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Node JS</h4>
                  <p>Learn how to run Javascript on the server</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Docker</h4>
                  <p>Learn how to deploy your code on isolated way</p>
                </a>
              </li>
            </ol>
          </article>
        </section>
        <section id="3d-art">
          <h2>I spend my free time crafting digital 3D art</h2>
          <picture>
            <source
              srcSet="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
            <img
              src="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
          </picture>
          <picture>
            <source
              srcSet="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
            <img
              src="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
          </picture>
          <picture>
            <source
              srcSet="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
            <img
              src="https://github.com/lucasromerodb/ghibli-wind-example/raw/main/render.png"
              alt="TODO: description"
            />
          </picture>
          <p>
            As a developer, having time to leaving my mind fly in non-logic
            activity is a beautiful way to full my batteries{" "}
            <a href="#">
              Follow my 3D art account on Instagram for upcoming posts »
            </a>
          </p>
          <a href="#">INSTAGRAM LOGO</a>
        </section>
        <section id="gaming">
          <h2>Love to share some culture</h2>
          <p>
            Video games are part of my culture, I really enjoy playing new,
            retro and indie games. Playing it with friends makes me happy,
            that's why I want sharing my passion with you.{" "}
            <a href="#">Follow my gaming account on Instagram and let’s play</a>
          </p>
        </section>
      </main>

      <footer>
        <h2>About me</h2>
        <p>Upcoming description...</p>
      </footer>
    </div>
  );
}
