import { IonItem, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import { PropsWithChildren } from "react";
import styles from './Card.module.scss';

interface Props{
    image: string,
    title: string,
    price: number
}

const Card: React.FC<PropsWithChildren<Props>> = (props) => {
    return (
        <IonItem>
            <IonCard className={styles.card}>
                <img className={styles.img} alt="Product" src={"/images/"+props.image+".png"} />
                <IonCardHeader>
                    <IonCardTitle>{props.title}</IonCardTitle>
                    <IonCardSubtitle>${props.price}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    {props.children}
                </IonCardContent>
            </IonCard>
        </IonItem>

    )
}

export default Card