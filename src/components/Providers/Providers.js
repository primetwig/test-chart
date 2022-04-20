import { useMemo } from "react";
import ErrorProvider from "../Errors/ErrorProvider";

const providers = [
    ErrorProvider,
];

function Providers({children}) {
    const node = useMemo(() => {
        return providers.reverse().reduce((node, Provider) => {
            return (
                <Provider>
                    {node}
                </Provider>
            );
        }, children);
    }, [children]);

    return node
}

export default Providers;
