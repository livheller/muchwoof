<template>
    <div class="selectcontainer">
<label :for="select">Filter by {{ select }}</label>
<select @change="$emit('change', $event.target.value)" :id="select" name="select">
<option value> -- Please Select a {{ select }}</option>
<option v-for="option in selectOptions" :key="option" :value="option">{{ option }}</option>

</select>
    </div>
</template>

<script>
    export default {
    props: {
            select: {
            type: String,
                default: "Service"
            },
            selectOptions: {
                 type: Array,
                default: () => ["Bath", "Walk", "Hike", "Playtime", "Teeth Cleaning", "Get Vaccine"]
            }
        }
    }
</script>

<style lang="scss" scoped>
label {
    font-size: 1.5rem;
    margin-right: 1rem;
}
select {
    width: 60%;
    padding: 3px;
    margin: 4px;
}


</style>
