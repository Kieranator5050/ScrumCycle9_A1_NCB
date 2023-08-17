import { IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel } from "@ionic/react";
import styles from "./Header.module.scss";

interface Link{
    link: string,
    linkLabel: string,
}

interface Props{
    title: string,
    links: Link[]
}

const Header: React.FC<Props> = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
            <IonList className={styles.list}>
                {props.links.map((link)=>
                    <IonItem routerLink={link.link}>
                        <IonLabel>{link.linkLabel}</IonLabel>
                    </IonItem>
                )}

            </IonList>
        </IonHeader>
    )
}

export default Header