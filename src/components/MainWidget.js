import AddForm from './AddForm';
import Tasklist from './Tasklist';
import TaskList from  './Tasklist';

const MainWidget = (props) => {
    return (
        <div>
            <AddForm /><br/>
            <Tasklist />
        </div>
    )
}

export default MainWidget;