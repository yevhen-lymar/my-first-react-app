export default function Products() {
    const products = [
        { title: 'Cabbage', id: 1, isFruit: false },
        { title: 'Garlic', id: 2, isFruit: false },
        { title: 'Apple', id: 3, isFruit: true },
        { title: 'Tomato', id: 4, isFruit: false },
        { title: 'Banana', id: 5, isFruit: true },
    ];

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'red' : 'gold'
            }} //style  в подвійні {{}}
        >
            {product.title}
        </li>
    );

    return (
        <ul>
            {listItems}
            <li>{listItems.find(el =>
                el.key === '1'
            )}</li>
        </ul>
    );
}

// предикат - функція повертає true або false
// слугує функцією для фільтрування
// (el => el.key == 1) - предикат