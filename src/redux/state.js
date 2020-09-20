import { rerenderEntireTree } from "../render";

let state = {
    ProfilePage: {
        postsData: [
            { id: 1, message: "I'm learning React" , likesCount: 12},
            { id: 2, message: "React is cool!", likesCount: 10 },
        ],
    },
    DialogsPage: {
        dialogs: [
            {id: 1, name: 'Nikitos', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11-300x300.png'},
            {id: 2, name: 'Andrew', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-5-300x300.png'},
            {id: 3, name: 'Pavel', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-4-300x300.png'},
            {id: 4, name: 'Vania', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-22-300x300.png'},
            {id: 5, name: 'Helen', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-24-300x300.png'},
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Do you like React?' },
            { id: 4, message: 'Hi, brother' },
            { id: 5, message: 'How are you doing?' },
        ],
    },
    Sidebar: {
        friends: [
            {id: 1, name: 'Nikitos', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11-300x300.png'},
            {id: 2, name: 'Andrew', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-5-300x300.png'},
            {id: 3, name: 'Pavel', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-4-300x300.png'},
            {id: 4, name: 'Vania', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-22-300x300.png'},
            {id: 5, name: 'Helen', ava: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_300/https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-24-300x300.png'},
        ],
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };
    state.ProfilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;