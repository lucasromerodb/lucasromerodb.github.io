import Head from "next/head";
import Text from "../components/Text/Text";
import Container from "../components/Container/Container";
import Navigation from "../components/cms/Navigation/Navigation";
import Banner from "../components/cms/Banner/Banner";
import Cover from "../components/Cover/Cover";
import Title from "../components/composed/Title/Title";
import Paragraph from "../components/composed/Paragraph/Paragraph";
import Link from "../components/Link/Link";
import Grid from "../components/Grid/Grid";
import QuoteBox from "../components/composed/QuoteBox/QuoteBox";
import ImageWall, { IMG } from "../components/composed/ImageWall/ImageWall";
import ProductBanner from "../components/composed/ProductBanner/ProductBanner";
import LearnStage from "../components/cms/LearnStage/LearnStage";
import LearnSeparator from "../components/LearnSeparator/LearnSeparator";
import Credits from "../components/cms/Credits/Credits";
import ArticleList from "../components/cms/ArticleList/ArticleList";

const fields = {
  navigation: {
    title: "Hey there, I'm Luke 👋",
    picture: {
      fallback: "/images/luke.png",
      alt: "Lucas Romero Di Benedetto",
    },
    links: [
      { label: "Development", href: "#development" },
      { label: "3d Art", href: "#3dart" },
      { label: "Gaming", href: "#gaming" },
      { label: "About me", href: "#about" },
      { label: "Twitter", href: "https://twitter.com/lucasromerodb" },
      { label: "GitHub", href: "https://github.com/lucasromerodb" },
    ],
  },
  banner: "Let’s talk about software development, 3D Art & video games.",
  development: {
    title: {
      as: "h2",
      title: "Sometimes I write about software development",
      icon: {
        fallback: "/images/icon_books.png",
        alt: "Books",
      },
    },
    paragraph: {
      hasLine: true,
      text:
        "Programming is about setting up your mind with logic and creativity ways to identify patterns and solve true problems with code. That's what I do every day and I love it. Let me share some of my experience with you.",
    },
    articles: [
      {
        heading: "h3",
        href:
          "https://dev.to/lucasromerodb/te-voy-a-recomendar-una-forma-practica-de-documentar-tu-proyecto-de-software-37f3",
        image: {
          fallback:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--s5AlSHbO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tlmlixcnbs3h2u712bjt.jpg",
          alt: "Description",
        },
        title: "A practice way to document your software development project",
        date: "July 2020",
        lang: "Spanish",
      },
      {
        heading: "h3",
        href:
          "https://dev.to/lucasromerodb/te-voy-a-recomendar-una-forma-practica-de-documentar-tu-proyecto-de-software-37f3",
        image: {
          fallback:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--s5AlSHbO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tlmlixcnbs3h2u712bjt.jpg",
          alt: "Description",
        },
        title: "A practice way to document your software development project",
        date: "July 2020",
        lang: "Spanish",
      },
      {
        heading: "h3",
        href:
          "https://dev.to/lucasromerodb/te-voy-a-recomendar-una-forma-practica-de-documentar-tu-proyecto-de-software-37f3",
        image: {
          fallback:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--s5AlSHbO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tlmlixcnbs3h2u712bjt.jpg",
          alt: "Description",
        },
        title: "A practice way to document your software development project",
        date: "July 2020",
        lang: "Spanish",
      },
    ],
  },
  xbox: {},
  mentoring: {
    cover: {
      fallback: "https://wallpaperaccess.com/full/370969.jpg",
      alt: "Ghibli field",
    },
    title: {
      as: "h2",
      title: "How to become a frontend developer in six months?",
      icon: {
        fallback: "/images/icon_bolt.png",
        alt: "Fast",
      },
    },
    paragraph: {
      hasLine: true,
      text:
        "Becoming a frontend developer requires a lot of time and curiosity, it’s a fact. So let me recommend you some straight forward topics you need to learn to success on any beginner frontend dev job.",
    },
    roadmap: [
      {
        title: {
          heading: "h3",
          text: "1) Start with structures, styles and actions",
        },
        courses: [
          {
            href: "https://google.com",
            heading: "h4",
            title: "HTML",
            description: "Learn about content structures",
            background: "blue700",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "CSS",
            description: "Learn how to style the content to make it beauty",
            background: "blue700",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "Javascript",
            description: "Learn how to make actions and manipulate data",
            background: "blue700",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
        ],
      },
      {
        title: {
          heading: "h3",
          text: "2) Do the same but smart",
        },
        courses: [
          {
            href: "https://google.com",
            heading: "h4",
            title: "React",
            description: "Learn howt to build UI with components",
            background: "blue600",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "Styled Components",
            description: "Learn how to style the content to make it beauty",
            background: "blue600",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "Git",
            description: "Learn how to versioning your code changes",
            background: "blue600",
            colorTitle: "accent",
            colorDescription: "white",
            hasShadow: false,
          },
        ],
      },
      {
        title: {
          heading: "h3",
          text: "3) Keep growing",
        },
        courses: [
          {
            href: "https://google.com",
            heading: "h4",
            title: "Node JS",
            description: "Learn how to run Javascript on the server",
            background: "white",
            colorTitle: "blue500",
            colorDescription: "blue600",
            hasShadow: true,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "Next JS",
            description: "Learn how to server side rendering your code",
            background: "white",
            colorTitle: "blue500",
            colorDescription: "blue600",
            hasShadow: true,
          },
          {
            href: "https://google.com",
            heading: "h4",
            title: "Docker",
            description: "Learn how to deploy your code on isolated way",
            background: "white",
            colorTitle: "blue500",
            colorDescription: "blue600",
            hasShadow: true,
          },
        ],
      },
    ],
  },
  art: {
    cover: {
      fallback: "https://wallpaperaccess.com/full/370969.jpg",
      alt: "Ghibli field",
    },
    title: {
      as: "h2",
      title: "I spend my free time crafting digital 3D art",
      icon: {
        fallback: "/images/icon_pingpong.png",
        alt: "Ping Pong",
      },
    },
    paragraph: {
      hasLine: true,
      text:
        "As a developer, having time to leaving my mind fly in non-logic activity is a beautiful way to full my batteries. As a developer, having time to leaving my mind fly in non-logic activity is a beautiful way to full my batteries.",
    },
    footer: {
      hasLine: false,
      text: "picado",
    },
    social: {
      text: "Follow my 3D art account on Instagram for upcoming posts",
      href: "https://www.instagram.com/luke.and.creations/",
    },
    images: [
      {
        fallback: "/images/studio-ghibli-blender.jpg",
        alt: "Image example",
        height: "500px",
        gridColumn: "1 / 8",
      },
      {
        fallback: "/images/mabel-gravity-falls.jpg",
        alt: "Image example",
        height: "500px",
        gridColumn: "8 / 13",
      },
      {
        fallback: "/images/studio-ghibli-trees.jpg",
        alt: "Image example",
        height: "300px",
        gridColumn: "1 / 5",
      },
      {
        fallback: "/images/sea-of-thieves-powder-barrel.jpg",
        alt: "Image example",
        height: "300px",
        gridColumn: "5 / 13",
      },
      {
        fallback: "/images/node-editor-grass-shader.jpg",
        alt: "Image example",
        height: "270px",
        gridColumn: "1 / 13",
      },
      {
        fallback: "/images/retro-game-room-mario-bros-making-off.jpg",
        alt: "Image example",
        height: "420px",
        gridColumn: "1 / 7",
      },
      {
        fallback: "/images/retro-game-room-mario-bros.jpg",
        alt: "Image example",
        height: "420px",
        gridColumn: "7 / 13",
      },
    ],
  },
  gaming: {
    title: {
      as: "h2",
      title: "Love to share some culture",
      icon: {
        fallback: "/images/icon_gaming.png",
        alt: "Game stick",
      },
    },
    quote: {
      text: "",
      link: {
        href: "https://google.com/",
        text: "Follow my gaming account on Instagram and let’s play",
      },
    },
    social: {
      text: "Follow my 3D art account on Instagram for upcoming posts",
      href: "https://www.instagram.com/luke.and.creations/",
    },
    images: [
      {
        fallback: "/images/xbox-series-s-controller.jpg",
        alt: "Image example",
        height: "450px",
        gridColumn: "1 / 8",
      },
      {
        fallback: "/images/smash-bross-party.jpg",
        alt: "Image example",
        height: "140px",
        gridColumn: "1 / 5",
      },
      {
        fallback: "/images/nintendo-switch-picada.jpg",
        alt: "Image example",
        height: "140px",
        gridColumn: "5 / 8",
      },
      {
        fallback: "/images/overcooked-party.jpg",
        alt: "Image example",
        height: "140px",
        gridColumn: "8 / 13",
      },
    ],
    podcast: {
      title: "Videogame podcast",
      text:
        "I’m member of Arroba Channel Podcast, a podcast where we speak about  video games and technology, If you speak spanish like me,",
      picture: {
        fallback: "/images/arrobachannel.jpg",
        alt: "Arroba Channel",
      },
    },
  },
  credits: {
    text: "Thanks to all those who make me grow every day 💖",
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luke and Things</title>
        <meta description="Let’s talk about software development, 3D Art & video games."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container hasPadding>
        <header>
          <Navigation fields={fields.navigation} />
          <Banner>{fields.banner}</Banner>
        </header>
      </Container>

      <main>
        <section id="development">
          <Container hasPadding>
            <Title {...fields.development.title}>{fields.development.title.title}</Title>
            <Paragraph {...fields.development.paragraph}>
              {fields.development.paragraph.text}
            </Paragraph>

            <div id="posts">
              <ArticleList fields={fields.development.articles} />

              <a href="#">View all my posts on DEV.to</a>
            </div>
          </Container>
        </section>

        <section id="codepen">
          <Container hasPadding>
            <h2>Mixing my passions be like</h2>
            <p>Coding, video games and 3D stuff</p>
            <iframe
              width="860"
              height="700"
              scrolling="no"
              title="Xbox Series S"
              src="https://codepen.io/lucasromerodb/embed/preview/zYBjPZv?height=726&theme-id=light&default-tab=result"
              frameBorder="no"
              loading="lazy"
              allowtransparency="true"
              allowFullScreen
            >
              See the Pen <a href="https://codepen.io/lucasromerodb/pen/zYBjPZv">Xbox Series S</a>{" "}
              by Lucas Romero Di Benedetto (
              <a href="https://codepen.io/lucasromerodb">@lucasromerodb</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
            <a href="https://codepen.io/lucasromerod">Follow me on CodePen</a>
          </Container>
        </section>

        <section id="mentoring">
          <Container maxWidth={1280}>
            <Cover {...fields.mentoring.cover} />
          </Container>
          <Container hasPadding>
            <Title {...fields.mentoring.title}>{fields.mentoring.title.title}</Title>
            <Paragraph {...fields.mentoring.paragraph}>{fields.mentoring.paragraph.text}</Paragraph>
            <article>
              <LearnStage fields={fields.mentoring.roadmap[0]} />
            </article>
            <article>
              <LearnStage fields={fields.mentoring.roadmap[1]} />
              <LearnSeparator>You could be employable at six months!</LearnSeparator>
            </article>
            <article>
              <LearnStage fields={fields.mentoring.roadmap[2]} />
            </article>
          </Container>
        </section>

        <section id="art">
          <Container maxWidth={1280}>
            <Cover {...fields.art.cover} />
          </Container>
          <Container hasPadding>
            <Title {...fields.art.title}>{fields.art.title.title}</Title>
            <Paragraph {...fields.art.paragraph}>{fields.art.paragraph.text}</Paragraph>
            <ImageWall fields={fields.art.images} />
            <Paragraph {...fields.art.paragraph} hasLine={false}>
              {fields.art.footer.text}
            </Paragraph>
            <Link href={fields.art.social.href} weight={600} colorName="blue500">
              {fields.art.social.text}
            </Link>
          </Container>
        </section>

        <section id="gaming">
          <Container hasPadding>
            <Title {...fields.gaming.title}>{fields.gaming.title.title}</Title>
            <Grid>
              <IMG fields={fields.gaming.images[0]} />
              <QuoteBox fields={fields.gaming.quote}>
                {fields.gaming.quote.text}
                Video games are part of my culture, I really enjoy playing new, retro and indie
                games. Playing it with friends makes me happy, that's why{" "}
                <strong>I want sharing my passion with you</strong>.
              </QuoteBox>
              <IMG fields={fields.gaming.images[1]} />
              <IMG fields={fields.gaming.images[2]} />
              <IMG fields={fields.gaming.images[3]} />
            </Grid>
            <ProductBanner fields={fields.gaming.podcast} />
          </Container>
        </section>
      </main>

      <footer>
        <Credits>{fields.credits.text}</Credits>
        <h2>About me</h2>
        <p>Upcoming description...</p>
      </footer>
    </div>
  );
}
