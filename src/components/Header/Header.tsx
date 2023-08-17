import { IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel } from "@ionic/react";

interface Props{
    title: string,
    link: string,
    linkLabel: string,
}

const Header: React.FC<Props> = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
            <IonList>
                <IonItem routerLink={props.link}>
                    <IonLabel>{props.linkLabel}</IonLabel>
                </IonItem>
            </IonList>
        </IonHeader>
    )
}

export default Header