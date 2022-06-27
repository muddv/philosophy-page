import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.scss'
import alexander from './assets/images/alexander.png'
import diogen from './assets/images/diogen.png'

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src={diogen}></img>
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

        <ParallaxLayer offset={1.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax}`}>
            <img src={alexander}></img>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}