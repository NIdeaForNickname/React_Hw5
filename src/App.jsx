import { PlanProvider } from "./PlanProvider";
import { PlanCard } from "./PlanCard.jsx";

function App() {


    return (
        <div className="MainDiv">
            <PlanProvider initialColor="blue" benefits={[
                ["Sample text", true],
                ["Another sample text", false],
                ["AlmostThere", false],
                ["Last sample text", false]
            ]} price="$0.99">
                <PlanCard name="Basic" />
            </PlanProvider>

            <PlanProvider initialColor="green" benefits={[
                ["Sample text", true],
                ["Another sample text", true],
                ["AlmostThere", true],
                ["Last sample text", false]
            ]} price="$4.99">
                <PlanCard name="Standart" />
            </PlanProvider>

            <PlanProvider initialColor="red" benefits={[
                ["Sample text", true],
                ["Another sample text", true],
                ["AlmostThere", true],
                ["Last sample text", true]
            ]} price="$9.99">
                <PlanCard name="Premium" />
            </PlanProvider>
        </div>
    );
}

export default App;