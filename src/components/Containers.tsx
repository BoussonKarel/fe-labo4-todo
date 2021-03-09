
import '../style/objects/container.css';

const Container = (props: any) => {
    return (
        <div className="o-container">
            { props.children }
        </div>
    )
}

export default Container;