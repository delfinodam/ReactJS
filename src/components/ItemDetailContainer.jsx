import Container from 'react-bootstrap/Container';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import loadingGif from "../assets/loading.gif";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { Itemcount } from './ItemCount';
import { ItemsContext } from '../contexts/ItemsContext';

export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addItem } = useContext(ItemsContext)
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
            setItem({ ...snapshot.data(), id : snapshot.id });
        })
        .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (quantity) => {
        addItem({ ...item , quantity });
    }

    if (loading) return <img src={loadingGif} alt="Cargando..." />;

    if (!item) return <p>Producto no encontrado</p>;

    return (
        <Container className='mt-4'>
            <h1>{item.title}</h1>
            <h2>{item.categoryId}</h2>
            <h3>{item.description}</h3>
            <img src={item.imageId  } height={250} alt={item.title} />
            <br />
            <br />
            <b>${item.price}</b><br />
            <b>Stock : {item.stock}</b>
            <Itemcount stock= {item.stock} onAdd={onAdd}/>
        </Container>
    );
}