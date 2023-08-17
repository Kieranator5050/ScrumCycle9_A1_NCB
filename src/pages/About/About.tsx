import { IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";

const About: React.FC = () => {
    return (
        <IonPage>
            <Header title="About Me" link="/products" linkLabel="View Products"/>
        </IonPage>
    )
}

export default About