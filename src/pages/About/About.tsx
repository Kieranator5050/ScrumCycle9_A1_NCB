import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";
import styles from "./About.module.scss";

const About: React.FC = () => {
    const links = [
        {
            link: "/products",
            linkLabel: "View Products"
        },
        {
            link: "/home",
            linkLabel: "Home"
        }
    ];
    
    return (
        <IonPage>
            <Header title="About Me" links={links}/>
            <IonContent>
                <div className={styles.aboutContainer}>
                    <h1>The Focal Point</h1>
                    <h2>Kieran Jaggernath</h2>
                    <img className={styles.profilePic} src="/images/kieran.jpg"/>
                    <p>Certified Software Architect, Cloud Practitioner & Project Manager. Kieran is an experienced full-stack web developer who tackles problems from a bird’s eye view and with an open mind. He strongly believes no great project can be effectively accomplished by one person, as a result, working with and building teams is an important step in solving large and complicated problems. Kieran always tries to keep up with new technologies and practices by always learning new things in the ever-changing IT sector. However, he knows he is not perfect and is always willing to listen to sound advice and harsh criticism. </p>
                    <p>With his experience working in business environments, he knows a thing or two about business administration and customer experience. By combining this with his software architect and cloud knowledge he understands the importance of designing solutions that scale and meet exactly what customers want. </p>
                    <p>As a part-time musician, he loves to play the keyboard and guitar. When he gets time, he sometimes even makes his own songs or remixes of songs using digital audio workspaces such as FL-Studio. He also has a love of modern history and tries to keep educated on current-day happenings through various documentaries.</p>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default About