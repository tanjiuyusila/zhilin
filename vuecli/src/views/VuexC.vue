<template>
    <div>
      <!--$emit 调用A中的change-->
      <button @click="$emit('addChange',2)">add</button>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>

</style>
