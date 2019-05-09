<template>
    <div>
        <h4>Please Select User</h4>
          <div class="list-group">
             <router-link 
             to="/user/1"
             tag="li" class="list-group-item">User 1</router-link>
             <router-link 
             to="/user/2"
             tag="li" class="list-group-item">User 2</router-link>
             <router-link
             to="user/3"
              tag="li" class="list-group-item">User 3</router-link>
          </div>

    </div>
</template>
