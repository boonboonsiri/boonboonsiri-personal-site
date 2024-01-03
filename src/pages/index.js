import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';

import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Boon Boonsiri
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function AboutSection() {

  return (
    <div className="about-wrapper">
      <div className="about-section">
        <img className="profile" src='img/sophiecrop.jpeg' alt="Your Image Alt Text" />

        <div className="text-wrapper">
          <div className="title">
            About
          </div>

          <div className="body">
            Hi! I'm Boon, a software engineering student at the University of Waterloo graduating in 2024. I love coding, maps, reading, and may try to relearn how to play some instruments eventually. Check out my <a href="https://boonboonsiri.github.io/photography/2023">photography learning curve</a> and <a href="https://boonboonsiri.github.io/blog">tech blog</a>.
          </div>

          <div className="links">
            <a href="https://drive.google.com/file/d/1rfUZbKVtQdxbN6v3eZRD-qLuSsi01J6X/view?usp=sharing" target="_blank">resume</a> | <a href="https://github.com/boonboonsiri">github</a> | <a href="https://www.linkedin.com/in/boon-boonsiri-1613a719b/" target="_blank">linkedin</a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Boon Boonsiri'}
      description="My personal site">
      {/* <HomepageHeader /> */}
      <AboutSection />
    </Layout>
  );
}
