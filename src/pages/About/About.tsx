import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About Me</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
}

export default About