export const getUser = (user) => {
    return({
        type: 'user_data_submit',
        payload: user
    })
}