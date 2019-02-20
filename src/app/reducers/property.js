import {
    FETCH_PROPERTY,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILED,
    SET_PROPERTY_ADDRESS,
} from '../actions/types';

const property_state = {
    fetching: true,
    isSelected: false,
    error: {
        flag: false,
        message: '',
    },
    address: '',
    property_id: '',
    property: [],
    photos: {
        hasPhotos: false,
        list: [],
    },
};

const property_reducer = (state = property_state, { type, payload }) => {
    switch (type) {
        case FETCH_PROPERTY:
            state = {
                ...state,
                fetching: true,
                isSelected: false,
                error: {
                    flag: false,
                    message: '',
                },
                property_id: '',
                property: [],
                photos: {
                    hasPhotos: false,
                    list: [],
                },
            };
            break;
        case SET_PROPERTY_ADDRESS:
            state = {
                ...state,
                address: payload,
            };
            break;
        case FETCH_PROPERTY_SUCCESS:
            let photos = {};
            if (payload.propertyPhotoList) {
                photos.hasPhotos = true;
                photos.list = payload.propertyPhotoList;
            } else {
                photos = {
                    ...state.photos,
                };
            }
            state = {
                ...state,
                fetching: false,
                isSelected: true,
                property_id: payload.id,
                property: payload,
                photos: photos,
            };
            break;
        case FETCH_PROPERTY_FAILED:
            state = {
                ...state,
                error: {
                    flag: true,
                    message: payload,
                },
                hasPhotos: false,
                photos: [],
            };
            break;
        default:
            return state;
    }
    return state;
};

export default property_reducer;
