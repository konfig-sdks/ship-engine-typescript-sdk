import { ShipEngine } from "./index";

describe("ship-engine-typescript-sdk", () => {
    it("initialize client", async () => {
        const shipengine = new ShipEngine({
            apiKey: "API_KEY",
        });
    });
});
