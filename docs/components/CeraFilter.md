# CeraFilter
```vue
<template>
  <cera-filter
    title="Travel policy"
    :options="options"
    @updateValue="updatePolicies"
  />
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
    methods: {
      updatePolicies() {
        // Do something you want when the filter value has changed.
      }
    }
  }
</script>
```
<cera-filter-box />

