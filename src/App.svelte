<script lang="ts">
  import { Button, Icon } from "./components/index";

  let name = "world1111";

  const handleClick = (e: CustomEvent) => {
    console.log(e);
    name = "Svelte";
  };
</script>

<main class="container">
  <h1>Hello {name}!</h1>
  <div class="btn">
    <Button on:click={handleClick} type="primary" size="lg">Primary</Button>
    <Button
      icon={"icon-dibuduiqi"}
      on:click={handleClick}
      type="primary"
      size="md">Primary</Button
    >
    <Button
      icon={"icon-jiahao"}
      on:click={handleClick}
      type="primary"
      size="md"
    />
    <Button on:click={handleClick} type="primary" size="sm">Primary</Button>
    <Button on:click={handleClick} type="primary" size="xs">Primary</Button>
    <Button
      icon={"icon-niantie"}
      on:click={handleClick}
      type="primary"
      disabled
      size="xs">Primary</Button
    >
  </div>
  <div class="btn">
    <Button on:click={handleClick} type="secondary" size="lg">Secondary</Button>
    <Button on:click={handleClick} type="secondary" size="md">Secondary</Button>
    <Button on:click={handleClick} type="secondary" size="sm">Secondary</Button>
    <Button on:click={handleClick} type="secondary" size="xs">Secondary</Button>
    <Button on:click={handleClick} type="secondary" disabled size="xs"
      >Secondary</Button
    >
  </div>
  <div class="btn">
    <Button on:click={handleClick} type="dashed" size="lg">Dashed</Button>
    <Button on:click={handleClick} type="dashed" size="md">Dashed</Button>
    <Button on:click={handleClick} type="dashed" size="sm">Dashed</Button>
    <Button on:click={handleClick} type="dashed" size="xs">Dashed</Button>
    <Button on:click={handleClick} type="dashed" size="xs" disabled
      >Dashed</Button
    >
  </div>
  <div class="btn">
    <Button on:click={handleClick} type="outline" size="lg">Outline</Button>
    <Button on:click={handleClick} type="outline" size="md">Outline</Button>
    <Button on:click={handleClick} type="outline" size="sm">Outline</Button>
    <Button on:click={handleClick} type="outline" size="xs">Outline</Button>
    <Button on:click={handleClick} type="outline" size="xs" disabled
      >Outline</Button
    >
  </div>
  <div class="btn">
    <Button on:click={handleClick} type="text" size="lg">Text</Button>
    <Button on:click={handleClick} type="text" size="md">Text</Button>
    <Button on:click={handleClick} type="text" size="sm">Text</Button>
    <Button on:click={handleClick} type="text" size="xs">Text</Button>
    <Button on:click={handleClick} type="text" size="xs" disabled>Text</Button>
  </div>
  <div class="btn">
    <Button on:click={handleClick} type="link" size="lg">Text</Button>
    <Button on:click={handleClick} type="link" size="md">Text</Button>
    <Button on:click={handleClick} type="link" size="sm">Text</Button>
    <Button on:click={handleClick} type="link" size="xs">Text</Button>
    <Button on:click={handleClick} type="link" size="xs" disabled>Text</Button>
  </div>

  <Icon name="icon-baocun" style="font-size:55px;" />
</main>

<style lang="less">
  .container {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    // background: #f0f0f0;

    h1 {
      color: red;
    }
    .btn {
    }
  }
</style>
