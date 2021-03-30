import { DataPointObject } from '../../data/DataPointObjectInterface';

const World = (props: {data: DataPointObject[]}) => {
    // TODO: Propagate props.data further
    return (
        <div>
            {/* This tests a country can be printed! */}
            { (props.data.length > 0) ? props.data[0].location : null}
            World Component!!!
        </div>
    );
}

export default World;