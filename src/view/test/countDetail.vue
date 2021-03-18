<template>
    <div>countDetail</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
interface Message {
    message: string
}
export default defineComponent({
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup(props: Message) {
        const book = reactive<Message>({ message: props.message })
        return {
            book,
        }
    },
})
</script>
