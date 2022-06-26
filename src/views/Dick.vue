<template>
    <div>
        <h1>欢迎来到你爹的怀抱！</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div{
    background-color: aqua;
    color: bisque;
    padding: 20px;
    animation:s 2s infinite;
}
@keyframes s{
    0%{color:white;transform: translateX(20px);}
    50%{color:pink;transform: translateX(-20px);}
    100%{color:white;transform: translateX(20px);}
}
</style>