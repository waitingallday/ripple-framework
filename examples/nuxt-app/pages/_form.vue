<template>
  <TideBaseLayout
    :site="site"
    :page="page"
    :siteSection="page.siteSection"
    :background="page.background"
    :pageTitle="page.title"
    :pageLanguage="page.lang"
    :footerImageCaption="
      page.showHeroImageCaption ? page.header?.backgroundImageCaption : ''
    "
    :topicTags="page.showTopicTags ? page.topicTags : []"
    :updatedDate="page.changed || page.created"
    :showContentRating="page.showContentRating"
  >
    <template #aboveHeader>
      <slot name="aboveHeader"></slot>
    </template>
    <template #primaryNav>
      <slot name="primaryNav"></slot>
    </template>
    <template #breadcrumbs>
      <slot name="breadcrumbs"></slot>
    </template>
    <template #aboveBody="{ hasBreadcrumbs }">
      <TideHeroHeader
        :header="page.header"
        :hasBreadcrumbs="hasBreadcrumbs"
        :hideBottomCornerGraphic="!!page.primaryCampaign"
        :cornerTop="site?.cornerGraphic?.top"
        :cornerBottom="site?.cornerGraphic?.bottom"
      />
      <TideLandingPageHeroAcknowledgement
        v-if="page.showHeroAcknowledgement"
        :message="site?.acknowledgementHeader"
      />
      <TideDynamicComponents
        v-if="page.headerComponents?.length > 0"
        :components="page.headerComponents"
        class="rpl-col-12"
        :fullWidth="true"
      />
      <TideLandingPagePrimaryCampaignBanner
        v-if="page.primaryCampaign"
        :campaign="page.primaryCampaign"
      />
    </template>
    <template #body="{ hasSidebar }">
      <TideLandingPageInPageNavigation
        v-if="page.showInPageNav"
        :headingLevel="page.inPageNavHeadingLevel"
        :components="page.bodyComponents"
      />
      <TideDynamicComponents
        v-if="page.bodyComponents?.length > 0"
        :components="page.bodyComponents"
        :hasSidebar="hasSidebar"
        :pageBackground="page.background"
      />
    </template>
    <template #belowBody>
      <TideLandingPageSecondaryCampaignBanner
        v-if="page.secondaryCampaign"
        :campaign="page.secondaryCampaign"
      />
    </template>
    <template #aboveSidebar>
      <slot name="aboveSidebar"></slot>
    </template>
    <template #sidebar>
      <slot name="sidebar"></slot>
    </template>
    <template #belowSidebar>
      <slot name="aboveSidebar"></slot>
    </template>
    <template #footer>
      <slot name="footer"> </slot>
    </template>
  </TideBaseLayout>
</template>

<script setup lang="ts">
import page from '../test/fixtures/case/landing-page-webform.json'
import { useTideSite } from '#imports'

const site = await useTideSite()
</script>
