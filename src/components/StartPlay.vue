<template>
    <div>
        <MinecraftPreview />
        <HowPlay />
    </div>
</template>

<script>
import MinecraftPreview from '@/components/how_start_play/MinecraftPreview'
import HowPlay from '@/components/how_start_play/HowPlay'

export default {
    name: 'StartPlay',
    components: {
        MinecraftPreview,
        HowPlay
    }
}

</script>

<style scoped>

</style>