<template>
  <v-wait class="loading">
    <FontAwesomeIcon icon="spinner" class="loading__icon" />
    <p>Loading...</p>
  </v-wait>
</template>

<style lang="scss" scoped>
.loading {
    color: $color-white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: fixed;
    top: calc(50vh - 25px);
    left: calc(50% - 80px);
    width: 160px;
    height: 50px;
    background-color: $color-grey; 

  &__icon {
    margin-right: 10px;
  }
}
</style>
