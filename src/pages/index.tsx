import queryClient from "frontend/api/reactQuery/queryClient";
import Groups from "frontend/components/Groups";
import * as React from "react"
import { QueryClientProvider }from "react-query";

interface IProps {

}

const App : React.FC<IProps> = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Groups />
        </QueryClientProvider>
    )
}

export default App;