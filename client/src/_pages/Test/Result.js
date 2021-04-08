import React from "react";

export const Result = ({results}) => {
    return (
        <ul>
            {results.map(result =>
                <li key={result}>{result}</li>
            )}
        </ul>
    )
}
