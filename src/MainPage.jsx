import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from "wouter";
import styles from './styles.module.scss'
import Header from './Header';
import navCircle from './assets/images/circle.svg'
import alexander from './assets/images/alexander.png'
import diogen from './assets/images/diogen.png'
import diogenLamp from './assets/images/diogen_lamp1.png'
import chicken from './assets/images/chicken1.png'
import arcadia from './assets/images/arcadia.jpg'
import plato from './assets/images/plato.png'
import aristotle from './assets/images/aristotle.png'
import diogen_barrel from './assets/images/diogen_barrel.png'
import sun from './assets/images/sun.png'
import scholar from './assets/images/scholar.png'

export default function MainPage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const alignStart = { display: 'flex', alignItems: 'flex-start' }
    const alignBottom = { display: 'flex', alignItems: 'flex-end' }
    // DRY?????
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const handleClick1 = () => {
      ref1.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    const handleClick2 = () => {
      ref2.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    const handleClick3 = () => {
      ref3.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
  
    return (
      <div>
        <div className={styles.background} />
        <Parallax pages={10}>
          <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
            <p className={styles.scrollText}>Scroll down</p>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
            <div className={`${styles.card} ${styles.sticky}`}>
              <img src={diogen}></img>
            </div>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 1.5, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div ref={ref1} className={`${styles.card} ${styles.parallax}`}>
              <img className={`${styles.alexander}`} src={alexander}></img>
            </div>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 4, end: 5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
            <div className={`${styles.card} ${styles.sticky}`}>
              <img src={diogen_barrel}></img>
            </div>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 4, end: 5 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${styles.card} ${styles.sticky} ${styles.sun_img}`}>
              <img src={sun}></img>
            </div>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'center' }}>
            <p className={styles.text}>Philsophy is a discipline and a way of life. This is especially true for some philosphers. One of the most stunning examples of this is Diogenes of Sinope.
There are several famous anecdotes about the life of this philospher. One is a story of his meeting with Alexander the Great. Ever defiant of societal expectations, Diogenes lived in a Barell, leading an extremely ascetic life. Alexander heard tales of an eccentric philosopher and wanted to meet him in person. Ancient Greek historian Diogenes Laertius in his famous work"Lives of Eminent Philosophers" relates the results of the meeting:
Alexander came and stood over him and said, "Ask of me any boon you like." To which he replied, "Stand out of my light."
            </p>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
            <p className={styles.text}>Diogenes was no stranger to controversy, believing that virtue is better expressed on action than theoritized about, he was a true practitioner of his beliefs.
            </p>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 6, end: 7 }} style={{ ...alignCenter, justifyContent: 'center' }}>
            <img ref={ref2} className={styles.chicken} src={chicken}></img>
            <img ref={ref2} className={styles.diogenLamp} src={diogenLamp}></img>
            <div className={styles.animation_text}>One of the purely philosophical controversies Diogenes got into was about the nature of man. Athenina native Plato defined man as "Featherless biped" This amused Diogenes as in accordance with this definition he presented plucked chicken as an example of Plato's man.
Other eccentric deed of Diogenes is his search for "an hones man": in the middle of the day he walked through Athens with a lit lantern trying to find one, the task was so hard that even lit lantern dif not allow to see one honest man in ancient Athens.
 </div>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 8, end: 10 }} style={{ ...alignCenter, justifyContent: 'center' }}>
            {/*<img ref={ref3} className={styles.arcadia} src={arcadia}></img> */}
            <div className={styles.text}>Philosophy is a complicated and diverse field. if you want to delve deepeer visit sourses page, lot of discoveries await. We may not all want to be like Diogenes but maybe thinking about how our actions can facilitate better life can lead to a better world for all.
Philosophy is of cource is not only exciting but also convoluted full of misreading and contradictions, pherhaps Diogenes' radical strategy was not one of the worst ways of dealing with the problems the nature of thought itself postulates.</div>
          </ParallaxLayer>
  
          <ParallaxLayer sticky={{ start: 9, end: 10 }} style={{ ...alignBottom, justifyContent: 'center' }}>
            <img ref={ref3} className={styles.scholar} src={scholar}></img>
          </ParallaxLayer>
  
          {/* NAVIGATION LAYER */}
          <ParallaxLayer sticky={{ start: 0, end: 10 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <Header></Header>
            <div className={styles.navbar}>
              <div onClick={handleClick1} className={`${styles.navbar_topage1}`}>
                <p className={`${styles.navbar_topage1_text}`}>Page 1</p>
                <img className={`${styles.navbar_topage1_circle}`} src={navCircle}></img>
              </div>
              <div onClick={handleClick2} className={`${styles.navbar_topage2}`}>
                <p className={`${styles.navbar_topage2_text}`}>Page 2</p>
                <img className={`${styles.navbar_topage2_circle}`} src={navCircle}></img>
              </div>
              <div onClick={handleClick3} className={`${styles.navbar_topage3}`}>
                <p className={`${styles.navbar_topage3_text}`}>Page 3</p>
                <img className={`${styles.navbar_topage3_circle}`} src={navCircle}></img>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
}