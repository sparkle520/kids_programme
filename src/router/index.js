import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        component: Home,
        alias: '/home',
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/paper',
        component: () => import("/src/views/Paper.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/paper/details',
        component: () => import("/src/views/PaperDetails.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/paper/exam',
        component: () => import("/src/views/PaperExam.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/paper/bank',
        component: () => import("/src/views/QuestionBank.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/login',
        component: () => import("/src/views/Login.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        }
    },
    {
        path: '/user',
        component: () => import("/src/views/UserInfo.vue"),
        meta: {
            isRouterAuth: false,
            screenFull: true,
        },
        children: [
            {
            path:'info',
            name:"info",
            component: () => import("/src/views/UserDetails.vue"),
        },
         
        ]
 
    },
   
    
   
  
   
   
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.isRouterAuth) {
        // if (getCookie('token')) {
        //     next()
        // } else {
            next()
        // }
    } else {
        next()
    }
})
//  const create_routes = async ()=> {
//     const modules = import.meta.glob('../topic/*.vue')
//         const components = import.meta.globEager('../topic/*.vue')
      

//         for(let i = 1;i <= length();++i){
//             router.addRoute({
//                 path: `/unknownWorldMap/topic/${i}`,
//                 meta: {
//                     isRouterAuth: false,
//                     screenFull: true,
//                 },
//                 component: defineAsyncComponent(modules[`/src/topic/Topic_${i}.vue`])
//             })
//         }
        
// }
// create_routes()


export default router