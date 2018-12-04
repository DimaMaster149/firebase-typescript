<template>
    <div class="block-with-checkbox" :class="{ lock }">
        <input v-model="val"
            type="checkbox"
            :disabled="lock"
            class="checkbox" 
            />
{{val}}
    </div>
</template>
<script>
export default {
  name: 'base-checkbox',
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  props: {
    value: {
      type: Boolean
    },
    label: {
      type: String,
      default: ' '
    },
    lock: {
      type: Boolean,
      default: false
    }
  }
};
</script>