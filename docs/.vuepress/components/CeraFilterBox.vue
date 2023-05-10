<template>
  <div class="cera-filter-container">
    <cera-filter title="Travel policy" :options="options" />
    <p>
      The latest value is: "{{ filterValue }}"
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            key: "within",
            label: "Within policy",
            count: 10,
            value: true
          },
          {
            key: "out",
            label: "Out of policy",
            count: 100,
            value: false
          }
        ]
      }
    },
    computed: {
      filterValue() {
        return this.options.filter(option => option.value).map(option => option.key).join(",")
      }
    }
  }
</script>

<style>
.cera-filter-container {
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(225, 225, 225);
}

ul, li {
  padding-left: 0;
  list-style: none;
}

input {
  margin: 0;
}
</style>
