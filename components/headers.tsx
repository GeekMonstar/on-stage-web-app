import Image from "next/image";
import styles from "./headers.module.scss";
import logo from "@/images/logos/onStage-text-logo.png";

export function MainLayoutHeader() {
    return (
        <header className={styles["header__main-layout"]}>
            <Image src={logo} height={32} alt="OnStage Logo" />
        </header>
    )
}