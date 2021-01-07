import {defineComponent,Fragment} from "vue"
import HelloWorld from "@/components/HelloWorld"
import "../styles/basic.css"
const App = defineComponent({
    setup(){
        return () =>(
            <Fragment>
            <img alt="Vue logo" src="./src/assets/logo.png" />
            <HelloWorld msg="Hello Vue 3 + Vite" />
            </Fragment>
        )
    }
})

export default App