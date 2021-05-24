import ExampleA from './ExampleA'
import ExampleB from './ExampleB'
import ExampleC from './ExampleC'

function App(){
    const common ='React'
    return (
    <div>
        <ExampleA rct={common}/>
        <ExampleB rct={common}/>
        <ExampleC rct={common}/>
    </div>
    )

}
export default App