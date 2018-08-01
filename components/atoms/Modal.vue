<template>
  <modal
    name="planet-details"
    :adaptive="true"
    height="500"
  >
    <div class="planet-details-modal-content">
      <div class="planet-details-modal-content__planet"/> 
      <div class="planet-details-modal-content__text">
        <span class="planet-details-modal-content__item planet-details-modal-content__header space-top">
          {{selectedPlanet.name}}
        </span>
        <span class="planet-details-modal-content__item">{{selectedPlanet.description}}</span>
        <div class="planet-details-modal-content__item">
          <span>Full name:</span>
          <span>{{selectedPlanet.fullName}}</span>
        </div>
        <div class="planet-details-modal-content__item">
          <span>Owner:</span>
          <span>{{selectedPlanet.owner}}</span>
        </div>
      </div>
      <div class="planet-details-modal-content__text">
        <span>Current status: {{selectedPlanet.status}}</span>
      </div>
      <div class="planet-details-modal-content__text">
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
}
</script>

<style lang="scss" scoped>
.planet-details-modal-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 0.3fr 1.2fr;
  height: 500px;
  background-color: $color-grey;
  color: $color-white;

  &__planet {
    @include planet($color-blueish, "~/assets/earth.png", 130px, none);
    background-position: center;
    margin-top: 50px;
  }

  &__header {
    @include font(30px, 200);
  }

  &__item {
      display: flex;
      margin: 15px 50px 0 0;
      justify-content: space-between;

      &.space-top {
        margin-top: 50px;
      }
    }
  &__text {
    @include font(16px, 200);
    padding: 0 0 0 10px;
  }
}
</style>
