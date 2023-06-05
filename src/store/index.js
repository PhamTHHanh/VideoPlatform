// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import appReducers from './reducers';


// const ReduxStore = () => {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//     const store = createStore(
//         appReducers,
//         composeEnhancers(applyMiddleware(thunk))
//     );
//     return store;
// }

// export default ReduxStore;

import { configureStore } from '@reduxjs/toolkit'
import CourseReducer from './reducers/course'
import NotificationsReducer from './reducers/notifications'

export const store = configureStore({
    reducer: {
        course: CourseReducer,
        notifications: NotificationsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['course/onChangeFile', 'course/setFileContent', 'course/postCourse/fulfilled', 'course/postFiles'],
        ignoredPaths: ['course.files'],
      },
    }),
})