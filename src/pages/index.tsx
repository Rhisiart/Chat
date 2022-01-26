import queryClient from "frontend/api/reactQuery/queryClient";
import Global from "frontend/components/Groups";
import * as React from "react"
import { QueryClientProvider }from "react-query";

interface IProps {

}

const App : React.FC<IProps> = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Global />
        </QueryClientProvider>
    )
}

export default App;