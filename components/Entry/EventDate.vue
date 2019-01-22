<template>
  <div class="contents">
    <dl>
      <dt>START</dt>
      <dd>{{ startDate | date }}</dd>
    </dl>
    <dl>
      <dt>END</dt>
      <dd>{{ startDate | date }}</dd>
    </dl>
  </div>
</template>

<script>
import formatDate from 'date-fns/format'

export default {
  props: {
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  filters: {
    date: function (value) {
      if (!value) return ''
      const d = new Date(value)
      return formatDate(d, 'YYYY/MM/DD HH:mm')
    },
  }
}
</script>

<style lang="scss" scoped>
.contents {
  background: #fff;
  padding: 1em;
}
dt, dd {
  display: inline-block;
}
dt {
  width: 4em;
  text-align: right;
  padding-right: 1em;
}
</style>
