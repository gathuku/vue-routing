

import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User =resolve=>{
    require.ensure(['./components/User.vue'], ()=>{
        resolve(require('./components/User.vue'));
    });
}

const UserStart =resolve=>{
    require.ensure(['./components/UserStart.vue'], ()=>{
        resolve(require('./components/UserStart.vue'));
    });
}

const UserDetail =resolve=>{
    require.ensure(['./components/UserDetail.vue'], ()=>{
        resolve(require('./components/UserDetail.vue'));
    });
}

const UserEdit =resolve=>{
    require.ensure(['./components/UserEdit.vue'], ()=>{
        resolve(require('./components/UserEdit.vue'));
    });
}

export const routes=[
    {path:'',component:Home,name:'home'},
    {path:'/user',component:User, children:[
        {path:'',component:UserStart},
        {path:':id',component:UserDetail},
        {path:':id/edit',component:UserEdit,name:'userEdit'}

    ]},
    
    {path:'/redirect', redirect:'/user'},

     //Redirect all other routes
     {path:'*', redirect:'/'}
];