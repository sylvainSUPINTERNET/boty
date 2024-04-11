export async function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));

    // return new Promise( (_resolve, reject) => {
    //     reject('error');
    // })
}