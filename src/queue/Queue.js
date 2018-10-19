
import React from 'react';
import '../App.css';

import { connect } from 'react-redux';


const InQueue = (props) => {
    console.log("InQueue props", props)
    return props.items.filter(queueItem => queueItem.status === "in queue").map(queueItem => 
        <div key={queueItem.id} className="InQueue">
            <h4 className="item-title">    {queueItem.title}
            </h4>
            <div className="created-by">
                Created By: {queueItem.created_by}
            </div>
            <div className="assigned-to">
                Assigned To: {queueItem.assigned_to}
            </div>
            {/* Priority Drop Down */}
            <select>
                <option value="low">
                    Low
                </option>
                <option value="medium">
                    Medium
                </option>
                <option value="high">
                    High
                </option>
            </select>
            <br/>
            {/* Status Drop Down */}
            <select> 
                <option value="in-queue">
                    In Queue
                </option>
                <option value="in-progress">
                    In Progress    
                </option>    
                <option value="done">
                    Done
                </option>
            </select>

        </div>    
    )
}
 
const mapStateToProps = state => {
    return {
        items: state,
        test: 'working?'
    }
}

// export default InQueue
export default connect(mapStateToProps)(InQueue);