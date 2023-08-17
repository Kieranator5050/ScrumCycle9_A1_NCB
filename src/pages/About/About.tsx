import { IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel } from "@ionic/react"

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About Me</IonTitle>
                </IonToolbar>
                <IonList>
                    <IonItem routerLink='/products'>
                        <IonLabel>View Products</IonLabel>
                    </IonItem>
                </IonList>
            </IonHeader>
        </IonPage>
    )
}

export default About