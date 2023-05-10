# Introduction
A Teleport for Vue2. You can use it to teleport component to specific dom element. Inspired by [vue2-teleport](https://github.com/Mechazawa/vue2-teleport).

# Usage
```vue
<template>
  <div class="origin-box">
    <div id="teleportTarget" class="teleport-target-box">
      <p>I'm teleport target box</p>
    </div>
    <div class="origin-teleport-box">
      <p>I'm original box</p>
      <cera-teleport to="#teleportTarget" :disabled="disabled" >
        <div class="teleport-test-box">
          <div style="color: white;margin-bottom: 30px;">The red teleport component is in the {{ teleportPosition }} box </div>
          <button @click="toggleDisabled">{{  disabled ? "Teleport" : "Back"}}</button>
        </div>
      </cera-teleport>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CeraTeleportBox",
    data() {
      return {
        disabled: false
      };
    },
    computed: {
      teleportPosition() {
        return this.disabled ? "original" : "teleport target";
      }
    },
    methods: {
      toggleDisabled() {
        this.disabled = !this.disabled;
      }
    }
  }
</script>

<style scoped>
.teleport-target-box {
  text-align: center;
  color: white;
  width: 400px;
  height: 400px;
  margin-right: 30px;
  background-color: rgba(27, 141, 37, 0.8);
  position: relative;
  border-radius: 20px;
}

.origin-box {
  display: flex;
  align-items: center;
  height: 450px;
}

.origin-teleport-box {
  text-align: center;
  color: white;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  position: relative;
  background-color: rgba(38, 124, 185, 0.8);
}

.teleport-test-box {
  position: absolute;
  top: 80px;
  bottom: 50px;
  left: 80px;
  right: 80px;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 0, 0, 0.6);
  z-index: 10;
}
</style>
```

<cera-teleport-box />

# Attributes

<cera-teleport-attributes />
# Slot
Slot is required as below.
```vue
<template>
  <cera-teleport>
    <!-- slot is required -->
    <div>I'm the slot.</div>
  </cera-teleport>
</template>
```