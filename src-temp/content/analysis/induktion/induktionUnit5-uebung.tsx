import {createSteppedUnit, StepInstanceProps} from "../../../framework/exercise-components/step/createSteppedUnit";
import {mathInlineBlock, mathSpan} from "../../../framework/technical-components/Math/Math";
import {TextSize} from "../../../framework/technical-components/layout/TextSize";
import {CenteredContent} from "../../../framework/technical-components/layout/CenteredContent";
import {EquationTransformationArrowExercise} from "../../../../src/framework/exercise-components/math/EquationTransformationArrowExercise";
import {createReadStep} from "../../../framework/exercise-components/read/createReadStep";
import {createChoiceStep} from "../../../framework/exercise-components/choice/createChoiceStep";
import {CenterInline} from "../../../framework/technical-components/layout/CenterInline";
import {SortEquationTransformationExercise} from "../../../../src/framework/exercise-components/math/SortEquationTransformationExercise";

export const induktionUnit5 = createSteppedUnit("induktion-uebung", "Übung", () => [
    createReadStep({
        content: <>
            <p>Es wurde mit Vollständiger Induktion bewiesen:</p>
            <p><CenterInline>{mathInlineBlock("#sum_{i=1}^ni = #frac{n(n+1)}{2}", 12)} für {mathSpan("n#in #N")}</CenterInline></p>
            <p>Der Induktionsanfang war, diese Aussage für {mathSpan("n=1")} zu zeigen.</p>
        </>,
    }),
    createChoiceStep({
        title: <>Was war für den Induktionsanfang ({mathSpan("n=1")}) zu beweisen? Wähle alle richtigen Antworten.</>,
        items: [
            {correct: true, label: mathSpan("#sum_{i=1}^1i = #frac{1(1+1)}{2}")},
            {correct: true, label: mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}{2}")},
            {correct: false, label: mathSpan("i=1")},
            {correct: false, label: mathSpan("n=1")},
            {correct: false, label: mathSpan("#sum_{i=1}^{n+1}i = (#sum_{i=1}^ni) + (n+1)")},
            {correct: false, label: mathSpan("#sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")},
            {correct: false, label: mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}{2} #Rightarrow #sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")},
        ],
        shuffle: true,
    }),
    createReadStep({
        content: <>
            <p>Es wurde mit Vollständiger Induktion bewiesen:</p>
            <p><CenterInline>{mathInlineBlock("#sum_{i=1}^ni = #frac{n(n+1)}{2}", 12)} für {mathSpan("n#in #N")}</CenterInline></p>
            <p>Der Induktionsschritt war, diese Aussage für {mathSpan("n+1")} zu zeigen, wobei man aber verwenden
                konnte, dass die Aussage für {mathSpan("n")} schon bewiesen war.</p>
            <p>Mit anderen Worten war zu zeigen: Wenn die Aussage für {mathSpan("n")} gilt, dann folgt daraus,
                dass sie auch für {mathSpan("n+1")} gilt.</p>
        </>,
    }),
    createChoiceStep({
        title: <>Was war für den Induktionsschritt zu beweisen? Nur eine Antwort ich richtig.</>,
        items: [
            {correct: false, label: mathSpan("#sum_{i=1}^1i = #frac{1(1+1)}{2}")},
            {correct: false, label: mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}{2}")},
            {correct: false, label: mathSpan("i=1")},
            {correct: false, label: mathSpan("n=1")},
            {correct: false, label: mathSpan("#sum_{i=1}^{n+1}i = (#sum_{i=1}^ni) + (n+1)")},
            {correct: false, label: mathSpan("#sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")},
            {correct: true, label: mathSpan("#sum_{i=1}^ni = #frac{n(n+1)}{2} #Rightarrow #sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")},
        ],
        shuffle: true,
    }),
    (props: StepInstanceProps) => {
        return <CenteredContent widthPercent={75}>
            <TextSize size={0.8}>
                <p>
                    An welcher Stelle im Induktionsschritt wurde die schon bewiesene Aussage
                    für {mathSpan("n")} verwendet? Klicke auf den passenden Pfeil.
                </p>
                <EquationTransformationArrowExercise
                    {...props}
                    correctArrowIndex={1}
                    equations={[
                        "#sum_{i=1}^{n+1}i",
                        "= (#sum_{i=1}^{n}i)+(n+1)",
                        "= #frac{n(n+1)}{2}+(n+1)",
                        "= #frac{n(n+1)}{2}+#frac{2(n+1)}{2}",
                        "= #frac{n(n+1)+2(n+1)}{2}",
                        "= #frac{(n+1)(n+2)}{2}",
                    ]}
                />
            </TextSize>
        </CenteredContent>;
    },
    (props: StepInstanceProps) => {
        return <CenteredContent widthPercent={75}>
            <TextSize size={0.9}>
                <SortEquationTransformationExercise
                    {...props}
                    description={"Bringe die Gleichungen für den Induktionsschritt in die richtige Reihenfolge:"}
                    equations={[
                        "#sum_{i=1}^{n+1}i",
                        "= (#sum_{i=1}^{n}i)+(n+1)",
                        "= #frac{n(n+1)}{2}+(n+1)",
                        "= #frac{n(n+1)}{2}+#frac{2(n+1)}{2}",
                        "= #frac{n(n+1)+2(n+1)}{2}",
                        "= #frac{(n+1)(n+2)}{2}",
                    ]}
                />
            </TextSize>
        </CenteredContent>;
    },
]);
