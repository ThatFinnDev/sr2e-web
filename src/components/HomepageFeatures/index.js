import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Console',
    img: '/img/info-console.png',
    description: (
      <>
        SR2E adds a modular console (accessible via Ctrl+Tab) with lots of commands.
        It's even expandable by other mods!
      </>
    ),
  },
  {
    title: 'Mod Menu',
    img: '/img/info-modmenu.png',
    description: (
      <>
        SR2E has a built in Mod Menu to show you all of your installed mods.
        You can also change the config of indiviual mods. No more .cfg Editing!
      </>
    ),
  },
  {
    title: 'Cheat Menu',
    img: '/img/info-cheatmenu.png',
    description: (
      <>
        SR2E contains a Cheat Menu, toggable in the settings, right for your
        cheating pleasures!
      </>
    ),
  },
  /*{
    title: 'Expansions',
    img: '/img/info-expansions.png',
    description: (
      <>
        As of SR2E 3.0.0, there are so called Expansions. These are modules that
        highly depend on SR2E's functionilty.
      </>
    ),
  },*/
];
function Feature({ Svg, img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} alt={title} className={styles.featurePNG} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
