import { IonContent, IonList, IonItem, IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";
import { productItems as testData } from "./sampleProducts";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss"

const Products: React.FC = () => {
    const links = [
        {
            link: "/about",
            linkLabel: "About Me"
        },
        {
            link: "/home",
            linkLabel: "Home"
        }
    ];

    const productItems = testData;

    return (
        <IonPage>
            <Header title="Products" links={links}/>
            <IonContent>
                <IonList className={styles.list}>
                    {productItems.map((product)=>
                        <Card title={product.name} price={product.price} image={product.image}>
                            <p>Sample Product Description</p>
                        </Card>)}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Products