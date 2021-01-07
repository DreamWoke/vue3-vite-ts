import { defineComponent} from "vue"

interface formProps {
    value:string
    num:number
}
import Demo from "./demo"
const formCom = defineComponent({
    setup(props: formProps){
        return () => (
            <div>
                233
                <Demo />
            </div>
        )
    }
})

export default formCom