import {defineComponent} from "vue"

interface HelloProps {
    msg:string
}

const HelloWorld = defineComponent({
    props:{
        msg:{
            type:String,
            required:true
        }
    },
    setup(props:HelloProps){
        const {msg} = props;
        console.log(props)
        return () =>(
            <div>
            <h1>{msg}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p>
    Recommended setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
      >Vetur</a
    >
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
      target="_blank"
      >Vue DX</a
    >
  </p>
  <p>
    Make sure to use workspace version of TypeScript to get improved support via
    <a href="https://github.com/znck/vue-developer-experience" target="_blank"
      >@vuedx</a
    >. <br />Note @vuedx is still experimental and this setup is provided for
    early feedback.
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  </div>
        )
    }
})

export default HelloWorld