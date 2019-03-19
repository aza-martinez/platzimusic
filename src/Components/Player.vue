<template lang="pug">
  .content(v-if="track && track.album")
    p.is-128x128
      img(
        :src="track.album.images[0].url"
      )
    p
      strong {{ track.name }}
      small [{{ track.duration_ms | ms-to-mm }}]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['track'])
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
