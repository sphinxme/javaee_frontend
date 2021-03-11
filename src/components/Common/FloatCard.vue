<template>

<div
  :class="'float-card ' + hoverStyle"
  :style="{backgroundColor: bgColor}"
>

  <slot name="raw-content" />
  <div v-if="!raw" class="pad"><slot name="content"/></div>

</div>
</template>

<script>
export default {
  props: {
    raw: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    fontColor: {
      type: String,
      default: '#303133'
    },
    hover: {
      type: String,
      default: ''
    }
  },
  computed: {
    hoverStyle: function () {
      switch (this.hover) {
        case 'up':
          return 'hover-up'
        case 'down':
          return 'hover-down'
        default:
          return 'no-hover'
      }
    }
  }

}
</script>

<style>

.pad {
  padding: 1.5rem;
}
/* .card-box-me {
  border-radius: 20px;
  box-shadow: 0px, 0px, 10px, black;
} */

.float-card {
  border-radius: 20px;
  transition: all 0.45s;
}

.no-hover {
  box-shadow: 0px 0px 30px #8888883d;
  transition: all 0.45s;
}

.hover-down {
  box-shadow: 0px 0px 30px #8888883d;
  transition: all 0.45s;
}

.hover-down:hover{
  border: 1px solid #DCDFE6;
  box-shadow: 0 0 30px #88888800;
  /* transition: all 0.45s; */
}

.hover-up {
  box-shadow: 0 0 30px #8888881a;
  transition: all 0.45s;
}

.hover-up:hover {
  box-shadow: 0px 0px 30px #88888860;
  /* transition: all 0.45s; */
}

</style>
