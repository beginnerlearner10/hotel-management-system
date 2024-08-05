import React, { useState } from 'react';
import DotLoader from "react-spinners/DotLoader";

function Loading() {
    let [loading, setLoading] = useState(true);
    return (
        <div style={{ marginTop: "150x !important" }}>
            <div className="sweet-loading">

                <DotLoader
                    color="black"
                    loading={loading}
                    size={150}
                />
            </div>
        </div>
    )
}

export default Loading;