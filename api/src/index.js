import router from './Router.js';

export default {
    async fetch(...params) {
        return router(...params)
    }
};
