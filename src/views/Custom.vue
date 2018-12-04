<template>
  <div >
    <text-input :type="'email'"
                style="margin-top: 36px;"
                v-model.lazy="email"
                required="true"
                label="Email"
    />
  <btn class="btn" :value="disable" @click="alert"> Click me</btn>

   <base-checkbox
    :disabled="disable"
    v-model=checked
   >
   text
   </base-checkbox>

  </div>
</template>
<script>;
import TextInput from "@/components/lib/input/TextInput";
import BaseCheckbox from "@/components/lib/input/BaseCheckbox";
import btn from "@/components/lib/button/btn";

export default {
    name: "custom",
    data() {
        return {
            email: '',
            disable: false,
            checked: true
        }
    },
    components: {
        btn,
        TextInput,
        BaseCheckbox
    },
    methods: {
    alert() {
    alert('Clicked');
    }
    },
};
</script>
