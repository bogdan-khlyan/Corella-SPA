<template>
    <div class="profile__actions">
      <div class="actions-profile">
        <div class="actions-profile__top">
          <h2 class="actions-profile__title">Account settings</h2>
          <div class="actions-profile__row">
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input
                	@update:modalValue="$emit('update:modalValue')"
                  :label="'Username'" 
                  :model-value="userData.name" 
                  :placeholder="'Your name'" 
                />
              </div>
              <div class="actions-profile__input">
                <base-input
                	@update:modalValue="$emit('update:modalValue')"
                  :label="'E-mail'" 
                  :model-value="userData.email" 
                  :placeholder="'Your email'" 
                />
              </div>
            </div>
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input 
                  :label="'Current password'" 
                  :model-value="userData.password" 
                  :placeholder="'Your password'" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>