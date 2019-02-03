const initialTasks = {
    plist: [

    ]
}

const tasks = (state = initialTasks, action) => {
    switch (action.type) {
        case "UPDATE_LIST": {
            let list = action.payload;
            let plist = state.plist;
            plist.push(...list)

            return {
                ...state,
                plist
            }
            break;
        }

        default:
            return {
                ...state,
                user: null
            }
            break;
    }
}

module.exports = tasks;