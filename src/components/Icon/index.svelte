<script lang="ts">
  export let name: String;
  let className = "iconfont";
  if (name) {
    className += " " + name;
  }
</script>

<i class={className} {...$$props} />

<style lang="less">
</style>
