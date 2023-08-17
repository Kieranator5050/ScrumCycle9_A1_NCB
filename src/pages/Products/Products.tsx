import { IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";

const Products: React.FC = () => {
    return (
        <IonPage>
            <Header title="Products" link="/about" linkLabel="About Me"/>
        </IonPage>
    )
}

export default Products