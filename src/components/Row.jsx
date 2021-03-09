
import '../style/objects/row.css';

const Row = (props) => {
    return (
        <div className={`o-row ${props.className}`}>
            { props.children }
        </div>
    )
}

export default Row;