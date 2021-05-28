const output = document.querySelector('.output')
const btn = document.querySelector('button')

btn.addEventListener('click' , loadProfile)

async function loadProfile(){
    const profiles =await fetch('./sample.json')
    .then(data => data.json())

    let  resultHTML = ''

    profiles.forEach((profile , index) => {
        const { firstName , lastName , age , enrolledCourse} =  profile
        resultHTML += `
            <h3> Profile No. : ${index + 1}</h3>
            <hr/>
            <ul>
                <li>${firstName}</li>
                <li>${lastName}</li>
                <li>${age}</li>
                <li>${enrolledCourse}</li>
            </ul>
            `
    })
    output.innerHTML = resultHTML


} 