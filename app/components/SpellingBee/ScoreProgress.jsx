import React from "react";
import { Progress } from "@nextui-org/react";

export default function ScoreProgress({ UserLevelData, score }) {
    return (
        <Progress
            label={UserLevelData}
            size="md"
            value={score}
            maxValue={100}
            formatOptions={{ style: "decimal" }}
            color="warning"
            showValueLabel={true}
            className="max-w-md"
        />
    );
}
