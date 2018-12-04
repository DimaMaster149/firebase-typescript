<template>
    <button
        class="btn"
        v-bind="attrs"
        v-on="listeners">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'btn',
        props: {
            className: {
                type: String,
                default: 'regular'
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners
                };
            },
            attrs(){
                return{
                    ...this.$attrs
                }
            }
        }
    };
</script>
<style>
.btn{
    width:200px;
    height: 50px;
    color:darkgreen;
}
</style>
