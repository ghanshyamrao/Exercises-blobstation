const makeRequest =(location)=>{
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`)
        if(location==='google'){
            resolve('google says hi')
        }{
            reject('we can only talk to google')
        }
    })
}


const processRequest =(Response)=>{
    return new Promise((resolve,reject)=>{
        console.log(
            'processing response' 
        )
        resolve(`extra information +${Response}`)
    })
}

const response = 'hi'

processRequest(response).then(response=>{
    console.log(response)
})

// makeRequest('gogle').then(response =>{
//     console.log('response received ')
//     return processRequest(response)
// }).then(processedResponse=>{
//     console.log(processedResponse)
// }).catch(err=>{
//     console.log(err)
// })


const makeRequests = async ()=>{
    console.log('1')
    const requestBuy = await makeRequest('google')
    console.log({requestBuy})
    const rec = await processRequest({requestBuy})
    console.log(rec)
}

// makeRequests()