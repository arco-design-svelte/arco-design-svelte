<script lang="ts">
  import type { ButtonSize, ButtonType } from "./index";
  import Icon from "../Icon/index.svelte";

  /**
   * @description: 图标
   */
  export let icon: String | undefined = undefined;
  /**
   * @description: 是否禁用
   */
  export let disabled: boolean = false;
  /**
   * @description: 尺寸，可选值为 large、lg、middle、md、small、sm、mini、xs
   */
  export let size: ButtonSize = "middle";
  //
  let className = "x-button";
  let iconStyle = "font-size:14px";
  /**尺寸*/
  if (size === "large" || size === "lg") {
    className += " x-button-size-large";
  } else if (size === "middle" || size === "md") {
    className += " x-button-size-middle";
  } else if (size === "small" || size === "sm") {
    className += " x-button-size-small";
  } else if (size === "mini" || size === "xs") {
    className += " x-button-size-mini";
    iconStyle = "font-size:12px";
  } else {
    className += " x-button-size-middle";
  }
  /**
   * @description: 类型，可选值为 primary、secondary、dashed、outline、text、link
   */
  export let type: ButtonType = "primary";
  if (type === "primary") {
    className += " x-button-primary";
  } else if (type === "secondary") {
    className += " x-button-secondary";
  } else if (type === "dashed") {
    className += " x-button-dashed";
  } else if (type === "outline") {
    className += " x-button-outline";
  } else if (type === "text") {
    className += " x-button-text";
  } else if (type === "link") {
    className += " x-button-link";
  } else {
    className += " x-button-primary";
  }

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const handleClick = (e: any) => {
    dispatch("click", e);
  };
</script>

<button on:click={handleClick} class={className} {disabled}>
  {#if icon}
    <Icon name={icon} style={iconStyle} /> <slot />
  {:else}
    <span> <slot /></span>
  {/if}
</button>

<style lang="less">
  @primaryColor: #165DFF;
  @primaryHoverColor: #4080FF;
  @primaryFocusColor: #4080FF;
  @primaryActiveColor: #0E42D2;
  @primaryDisabledColor: #94BFFF;

  @secondaryColor: #F2F3F5;
  @secondaryHoverColor: #E6E8EB;
  @secondaryFocusColor: #E6E8EB;
  @secondaryActiveColor: #C9CDD4;
  @secondaryDisabledColor: #F2F3F5;

  @dashedColor: #F2F3F5;
  @dashedHoverColor: #E6E8EB;
  @dashedFocusColor: #E6E8EB;
  @dashedActiveColor: #C9CDD4;
  @dashedDisabledColor: #F2F3F5;

  @outlineColor: #165DFF;
  @outlineHoverColor: #4080FF;
  @outlineFocusColor: #4080FF;
  @outlineActiveColor: #0E42D2;
  @outlineDisabledColor: #94BFFF;

  @textColor: #ffffff;
  @textHoverColor: #F2F3F5;
  @textFocusColor: #F2F3F5;
  @textActiveColor: #E5E6EB;
  @textDisabledColor: #ffffff;

  .x-button {
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    border: 0;

    &-size {
      &-large {
        height: 36px;
        padding: 0 19px;
      }
      &-middle {
        height: 32px;
        padding: 0 15px;
      }
      &-small {
        height: 28px;
        padding: 0 15px;
      }
      &-mini {
        height: 24px;
        padding: 0 11px;
        font-size: 12px;
      }
    }
    &-primary {
      background-color: @primaryColor;
      color: #ffffff;
      &:hover {
        background-color: @primaryHoverColor;
      }
      &:focus {
        background-color: @primaryFocusColor;
        outline: none;
      }
      &:active {
        background-color: @primaryActiveColor;
      }
      &:disabled {
        background-color: @primaryDisabledColor;
        cursor: not-allowed;
      }
    }
    &-secondary {
      background-color: @secondaryColor;
      color: #4e5969;
      &:hover {
        background-color: @secondaryHoverColor;
      }
      &:focus {
        background-color: @secondaryFocusColor;
        outline: none;
      }
      &:active {
        background-color: @secondaryActiveColor;
      }
      &:disabled {
        background-color: @secondaryDisabledColor;
        color: #c9cdd4;
        cursor: not-allowed;
      }
    }
    &-dashed {
      background-color: @dashedColor;
      color: #4e5969;
      border: 1px dashed #c9cdd4;
      &:hover {
        background-color: @dashedHoverColor;
      }
      &:focus {
        background-color: @dashedFocusColor;
        outline: none;
      }
      &:active {
        background-color: @dashedActiveColor;
      }
      &:disabled {
        background-color: @dashedDisabledColor;
        color: #c9cdd4;
        cursor: not-allowed;
      }
    }
    &-outline {
      background-color: transparent;
      color: @outlineColor;
      border: 1px solid @outlineColor;
      &:hover {
        border: 1px solid @outlineHoverColor;
        color: @outlineHoverColor;
      }
      &:focus {
        border: 1px solid @outlineFocusColor;
        color: @outlineFocusColor;
        outline: none;
      }
      &:active {
        border: 1px solid @outlineActiveColor;
        color: @outlineActiveColor;
        background-color: transparent;
      }
      &:disabled {
        border: 1px solid @outlineActiveColor;
        color: @outlineActiveColor;
        cursor: not-allowed;
      }
    }
    &-text {
      background-color: transparent;
      color: @primaryColor;
      border: 0;
      &:hover {
        background-color: @textHoverColor;
      }
      &:focus {
        background-color: @textFocusColor;
        outline: none;
      }
      &:active {
        background-color: @textActiveColor;
      }
      &:disabled {
        background-color: @textDisabledColor;
        color: #c9cdd4;
        cursor: not-allowed;
      }
    }
    &-link {
      background-color: transparent;
      color: @primaryColor;
      border: 0;
      &:hover {
        color: @primaryHoverColor;
      }
      &:focus {
        color: @primaryHoverColor;
        outline: none;
      }
      &:active {
        color: @primaryHoverColor;
      }
      &:disabled {
        color: #c9cdd4;
        cursor: not-allowed;
      }
    }
  }
</style>
