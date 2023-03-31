

export const reducer = (state, action) => {

    switch (action.type) {
        case "LIGTHMODE":
            return { darkmode: false}
            
        case "DARKMODE":
            return { darkmode: true}
        default:
            return state;
    }

}