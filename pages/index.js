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
            . A Senior Software Engineer based in beautiful Melbourne, Australia.
          </p>
          <p className="beta">
            Currently working at{" "}
            <a href="https://www.atlassian.com/" rel="noopener noreferrer">
              Atlassian
            </a>
            . Helping build{" "}
            <a
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jira
            </a>
            , and other things.
          </p>
          <p className="beta">
            I am currently{" "}
            <a className="text-red" href="mailto:david@dpike.co.uk">
              unavailable
            </a>{" "}
            for contract work.
          </p>
          <p className="soft--top hard--bottom">
            I like to take <Link href="/posts">photos</Link>, occasionally{" "}
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
