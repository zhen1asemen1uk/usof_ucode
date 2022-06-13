import React from "react";

const NoneUsers = () => {
    return (
        <>
            <h1>
                You are not login
                <span role="img" aria-label="donut">
                    ❌
                </span>{" "}
            </h1>
            <h6>Or other error...</h6>
        </>
    );
};

export default NoneUsers;
