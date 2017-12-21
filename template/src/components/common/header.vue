<template>
    <div id="header">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props : {
        title : {type:  String, default: "The title" },
    }
}
</script>