<template>
  <modal
    name="planet-details"
    :adaptive="true"
    height="500"
  >
    <div class="planet-details-modal-content">
      <div :class="
        [
          { 'planet--in-use': selectedPlanet.status === 'inUse' },
          { 'planet--bet': selectedPlanet.status === 'bet' },
          { 'planet--experiment': selectedPlanet.status === 'experiment' },
          'planet-details-modal-content__planet'
        ]"
      />
      <div class="planet-details-modal-content__section">
        <span class="planet-details-modal-content__item planet-details-modal-content__header">
          {{selectedPlanet.name}} ({{selectedPlanet.status}})
        </span>
        <span class="planet-details-modal-content__item">
          {{selectedPlanet.description}}
        </span>
      </div>
      <div class="planet-details-modal-content__section-left">
        <span class="planet-details-modal-content__item-left planet-details-modal-content__header">
          Details:
        </span>
      </div>
      <div class="planet-details-modal-content__section">
        <div class="planet-details-modal-content__item">
          <span>Full name:</span>
          <span>{{selectedPlanet.fullName}}</span>
        </div>
        <div class="planet-details-modal-content__item">
          <span>Owner:</span>
          <span>{{selectedPlanet.owner}}</span>
        </div>
      </div>
      <div class="planet-details-modal-content__section-left">
        <span class="planet-details-modal-content__item-left planet-details-modal-content__header">
          Stats:
        </span>
      </div>
      <div class="planet-details-modal-content__section">
        <div class="planet-details-modal-content__item">
          <span>Created at:</span>
          <span>{{selectedPlanet.createdAt}}</span>
        </div>
        <div class="planet-details-modal-content__item">
          <span>Last update:</span>
          <span>{{selectedPlanet.updatedAt}}</span>
        </div>
        <div class="planet-details-modal-content__item">
          <span>
            <FontAwesomeIcon icon="star" />
            Stars:
          </span>
          <span>{{selectedPlanet.stargazersCount}}</span>
        </div>
        <div class="planet-details-modal-content__item">
          <span>
            <FontAwesomeIcon icon="exclamation-circle" />
            Open issues:
          </span>
          <span>{{selectedPlanet.openIssuesCount}}</span>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {  
  props: {
    selectedPlanet: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    this.$modal.show('planet-details')
  },
}
</script>

<style lang="scss" scoped>
.planet-details-modal-content {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  grid-template-rows: 1.8fr 1fr 1fr 0.5fr;
  height: 500px;
  background-color: $color-grey;
  color: $color-white;
  @include font(16px, 200);

  &__planet {
    background-position: center;
    margin-top: 10px;
  }

  &__header {
    @include font(30px, 200);
  }

  &__item {
    display: flex;
    margin: 15px 50px 0 15px;
    justify-content: space-between;
  }

  &__item-left {
    margin: 0 10px 0 15px;
    align-self: flex-end;
  }

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 15px 0 15px 0;
    border-top: 1px solid $color-white;

    &:nth-of-type(2) {
      border-top: 0;
    }
  }

  &__section-left {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    margin: 15px 0 15px 0;
    padding-top: 10px;
    border-top: 1px solid $color-white;
  }

  .planet {
    &--in-use {
      @include planet($color-blueish, "~/assets/earth.png", 130px, none)
    }

    &--bet {
      @include planet($color-redish, "~/assets/mars.png", 130px, none)
    }

    &--experiment {
      @include planet($color-greenish, "~/assets/jupiter.png", 130px, none)
    }
  }
}
</style>
