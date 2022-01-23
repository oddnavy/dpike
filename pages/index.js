import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <div className="intro">
        <div className="intro__inner">
          <p className="beta">
            Hello, I’m{" "}
            <a
              href="https://www.linkedin.com/in/david-pike"
              target="_blank"
              rel="noopener noreferrer"
            >
              David Pike
            </a>
            . A Senior Developer with based in beautiful Melbourne, Australia.
          </p>
          <p className="beta">
            Currently working at{" "}
            <a href="https://inlight.com.au" rel="noopener noreferrer">
              Inlight
            </a>
            . Helping build web and mobile applications for{" "}
            <a
              href="https://nandos.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nando’s
            </a>
            , Swisse, Hallmark, 7-Eleven and many others.
          </p>
          <p className="beta">
            I am currently{" "}
            <a className="text-red" href="mailto:david@dpike.co.uk">
              unavailable
            </a>{" "}
            for contract work.
          </p>
          <p className="soft--top hard--bottom">
            I like to take{" "}
            <Link href="/posts">
              <a>photos</a>
            </Link>
            , occasionally{" "}
            <a
              href="https://twitter.com/davidpike7"
              target="_blank"
              rel="noopener noreferrer"
            >
              tweet
            </a>
            , and used to keep a{" "}
            <a
              href="https://www.nosvamos.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              travel blog
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
