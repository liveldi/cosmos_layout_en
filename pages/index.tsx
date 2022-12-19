import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { ArtButton } from '../components/ArtButton';
import { ArtMenu } from '../components/ArtMenu';
import { Navigation } from '../components/Navigation';
import { Title } from '../components/Title';

export default function Home() {
  return (
    <article>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ArtButton
            onClick={() => {}}
          >
            Whitepaper
          </ArtButton>
        </header>
        <Navigation />
        <div>
          <Title>
            From dust to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton
                onClick={() => {}}
              >
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton
                onClick={() => {}}
              >
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">
          Factions
        </Title>
        <ArtMenu />
      </section>
    </article>
  )
}
