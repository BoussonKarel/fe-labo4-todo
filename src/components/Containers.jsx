
import '../style/objects/container.css';

const Container = (props) => {
    return (
        <div className="o-container">
            { props.children }
        </div>
    )
}

export default Container;