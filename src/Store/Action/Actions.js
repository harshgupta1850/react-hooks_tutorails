export const loading = () => {
    return {
        type: 'LOADING'
    }
}
// export const ageUpAync = () => {
//     return {
//         type:'AGE_UP'
//     }
// }

// export const ageUp = () => {
//     return dispatch => {
//         dispatch(loading())
//         setTimeout(() => {
//             dispatch(ageUpAync())
//         },3000)
//     }
// }

export const ageUp = () => {
    return {
        type: 'AGE_UP'
    }
}
export const ageDown = () => {
    return {
        type: 'AGE_DOWN'
    }

}

export const toDelete = (id) => {
    return {
        type: 'DELETE',
        value: id
    }

}


