import logo from '@/images/logos/onStage-text-logo.png';
import heroBackground from '@/images/hero-background.jpg';
import artistImg from '@/images/artist.png';
import Image from 'next/image';
import styles from './landingPage.module.scss';
import Link from 'next/link';
export default function LandingPage() {
    console.log(heroBackground);
    return (
        <div>
            <header>
                <div className={styles["header__container"]}>
                    <div className="header__container--first-part">
                        <Image src={logo} height={32} alt="OnStage Logo" />
                    </div>
                    <div className="header__container--second-part">
                        <Link href="http://localhost:3001" className="btn btn-primary">Rejoindre onStage</Link>
                    </div>
                </div>
            </header>
            <div className={styles["hero-header"]} style={{backgroundImage: `url(${heroBackground.src})`}}>
                <h1>ARRETEZ DE CHANTER SOUS LA DOUCHE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio laudantium iure inventore, ut nesciunt ipsum illo molestias culpa quod, necessitatibus cum quae molestiae impedit laboriosam doloremque architecto unde. Quasi!</p>
                <Link href="http://localhost:3001" className="btn white-btn-primary">Rejoindre onStage</Link>
                <Image src={artistImg} height={600} className={styles["hero-header__artist-img"]} alt="OnStage Logo" />
            </div>
        </div>
    )
}