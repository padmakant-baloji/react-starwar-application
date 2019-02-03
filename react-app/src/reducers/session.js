const initialSession = {
    user: localStorage.getItem("userTokenData") != undefined ? localStorage.getItem("userTokenData") : null,
    message: false,
}

const session = (state = initialSession, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.tokenData,
                message: false,
                isAdmin : action.payload.isAdmin
            }
            break;
        case "LOGIN_FAILED":
            return {
                ...state,
                user: null,
                message: true
            }
            break;

        case "LOGOUT":

            return {
                ...state,
                user: null,
                message: null,
                username: null
            }
            break;

        default:
            return {
                ...state,
            }
            break;
    }
}

module.exports = session;