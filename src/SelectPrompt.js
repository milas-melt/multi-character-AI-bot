import React from "react";
import Prompts from "./prompts";
export default function SelectPrompt() {
    // Prompts.map((res, id) => console.log(id, res.act));
    const [aiIdentity, setAiIdentity] = React.useState("Motivational Coach");

    return (
        <div>
            <select
                value={aiIdentity}
                onChange={(e) => {
                    const selectedAiIdentity = e.target.value;
                    setAiIdentity(selectedAiIdentity);
                }}
            >
                <option value="Motivational Coach">Motivational Coach</option>
                {Prompts.map((res, key) => (
                    <option key={key} value={res.act}>
                        {res.act}
                    </option>
                ))}
            </select>
            {aiIdentity}
        </div>
    );
}
