import React from "react";
import "./SidebarChannel.css";

function SidebarChannel({ id, channel }) {
    return (
        <div className="sidebarChannel">
            // This is the channel name // This name will show on the sidebar
            <h4>
                <span className="sidebarChannel__hash">#</span>Youtube
            </h4>
        </div>
    );
}

export default SidebarChannel;
