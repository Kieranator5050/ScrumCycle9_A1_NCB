import { IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from "@ionic/react"

const Products: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Products</IonTitle>
                </IonToolbar>
                <IonList>
                    <IonItem routerLink='/about'>
                        <IonLabel>About Me</IonLabel>
                    </IonItem>
                </IonList>
            </IonHeader>
        </IonPage>
    )
}

export default Products