import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.scss'
import navCircle from './assets/images/circle.svg'
import alexander from './assets/images/alexander.png'
import diogen from './assets/images/diogen.png'
import diogenLamp from './assets/images/diogen_lamp1.png'
import chicken from './assets/images/chicken1.png'
import arcadia from './assets/images/arcadia.jpg'

export default function App() {

  const alignCenter = { display: 'flex', alignItems: 'center' }
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

      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src={diogen}></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.5, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div ref={ref1} className={`${styles.card} ${styles.parallax}`}>
            <img className={`${styles.alexander}`} src={alexander}></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id blandit lorem. Fusce finibus lacinia ligula non sollicitudin. Donec velit magna, convallis in cursus vel, accumsan in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu interdum nunc, et imperdiet turpis. Quisque pulvinar quam lacus, a rhoncus elit suscipit sit amet. Sed maximus ante accumsan feugiat congue. Donec imperdiet ipsum eu lectus dapibus volutpat. Morbi sed sapien sed metus tincidunt viverra. Nullam lobortis, magna nec elementum laoreet, massa massa vulputate odio, rutrum interdum enim arcu vitae nulla. Vivamus eget justo rhoncus, laoreet nulla ut, semper leo.
          </p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.text}>Donec ac euismod tortor. Nam semper orci quam, eu molestie ligula cursus sit amet. Nulla aliquam nisi at congue viverra. Maecenas lobortis orci vitae urna posuere ultricies. Fusce sodales, odio et finibus semper, nisi nibh iaculis nulla, dapibus hendrerit ante tortor et metus. Sed iaculis justo id mauris ultrices imperdiet. Cras nec sem fermentum, dictum augue eget, aliquam arcu. Mauris euismod arcu eget vehicula luctus.
          </p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 6 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <img ref={ref2} className={styles.chicken} src={chicken}></img>
          <img ref={ref2} className={styles.diogenLamp} src={diogenLamp}></img>
          <div className={styles.animation_text}>Pellentesque at purus rutrum, facilisis libero nec, interdum est. Curabitur venenatis nibh ligula, eu rhoncus ex pretium sit amet. Aliquam at rhoncus lorem, ac pulvinar neque. Cras faucibus, ex vitae imperdiet porta, ex ex fringilla justo, nec blandit elit mi ac massa. Nam id dolor et tellus sollicitudin tincidunt at ut turpis. Curabitur blandit risus nibh, sed scelerisque turpis finibus sed. Vivamus venenatis, lectus ut bibendum consequat, lorem nulla rhoncus nulla, sed auctor ipsum urna et mi. Aenean egestas hendrerit eros congue mollis. Suspendisse sed erat et felis tincidunt congue vel sed orci. Praesent aliquam sem ut consectetur vulputate. Aliquam scelerisque lacinia lorem, egestas imperdiet orci varius id. Cras sed orci fringilla nulla ultricies euismod. </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 6, end: 7 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={styles.wow}></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
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
