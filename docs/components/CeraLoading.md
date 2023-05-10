# Introduction
A cute loading component. Currently we just provide a single loading theme, we will add more themes to it.

# Usage
We will show it with ```CeraModal``` component.
```vue
<template>
  <div>
    <el-button @click="summonModal" type="success">Summon Modal</el-button>
    <cera-modal v-model="showModal">
      <div class="modal-content">
        <i class="close-button el-icon-close" @click="hideModal"></i>
        <cera-loading />
      </div>
    </cera-modal>
  </div>
</template>

<script>
  export default {
    name: "CeraModalBox",
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      summonModal() {
        this.showModal = true;
      },
      hideModal() {
        this.showModal = false;
      }
    }
  }
</script>

<style scoped>
.modal-content {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
```

<cera-loading-box />

# Attributes

<cera-loading-attributes />