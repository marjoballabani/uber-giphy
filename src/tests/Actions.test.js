import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import {
    fetchImages
} from '../Actions/imagesActions'
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [promiseMiddleware];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    beforeEach(function () {
        moxios.install();
    });
    afterEach(function () {
        moxios.uninstall();
    });
    it('showd create an action to get images', () => {
        expect(fetchImages().type).toEqual("GET_IMAGES")
    })
    it('shoud get images with success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    data: [{
                        images: {
                            downsized_medium: {
                                url: "test url"
                            }
                        },
                        title: "test title",
                        id: 1
                    }]
                },
            });
        });
        const store = mockStore({
            data: [],
            status: "completed"
        })
        return store.dispatch(fetchImages(0, "cat", false)).then(() => {
            expect(store.getActions()[0]).toEqual({
                type: 'GET_IMAGES_PENDING',
                meta: false
            });
            expect(store.getActions()[1].type).toEqual('GET_IMAGES_FULFILLED');
            const data = store.getActions()[1].payload.data.data
            expect(data.length).toEqual(1);
            expect(data[0].title).toEqual("test title");
        });
    });
})
