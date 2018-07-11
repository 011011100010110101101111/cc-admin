import {otherRouter, publicRouter} from '@/router/router';

const app = {
    state: {
        menuList: [],
        routers: [
            otherRouter,
            publicRouter
        ]
    },
    mutations: {
        updateMenulist (state) {
            // state.menuList = appRouter;
        }
    }
};

export default app;
