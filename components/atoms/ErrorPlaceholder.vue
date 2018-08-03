<template>
  <v-wait class="error">
    <FontAwesomeIcon icon="exclamation-circle" class="error__icon" />
    <div>
      <p>Ohh... you have reached the event horizon...</p>
      <p class="error__description">Please check your connection.</p>
    </div>
  </v-wait>
</template>

<style lang="scss" scoped>
.error {
    padding: 15px;
    color: $color-white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: fixed;
    top: calc(50vh - 40px);
    left: calc(50% - 210px);
    width: 420px;
    background-color: $color-grey; 

  &__icon {
    font-size: 30px;
    margin-right: 15px;
  }

  &__description {
    margin-top: 10px;
  }
}
</style>
