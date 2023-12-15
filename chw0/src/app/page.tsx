'use client'
import Intro from "./Components/Home/Intro/page"
import Second from "./Components/Home/second/page"
import Navbar from "./Components/Nav/page"
import Contact from "./Contact/page"
import styles from './home.module.css'



export default function Home() {
  return (
 
    <main className="flex ">
          <div className={styles.container}>
          <div><Intro/></div>
     <div><Second/></div> 
          </div>

    </main>
  
  )
}
