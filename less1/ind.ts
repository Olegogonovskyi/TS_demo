
// ----------------------------------------|creator Dom|-------------------------------------------------------
function СreateDom(tag:string, appendPlace: HTMLElement, classname?: string, text?: string):HTMLElement {
    let elementdomhtml:HTMLElement = document.createElement(`${tag}`);
    elementdomhtml.classList.add(`${classname}`);
    elementdomhtml.innerText = text;
    appendPlace.appendChild(elementdomhtml);
    return elementdomhtml;
}
// ----------------------------------------|creator Dom|-------------------------------------------------------
let usersWrap = СreateDom('div', document.body, 'usersWrap');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (let user of users) {

            let userBlock = СreateDom('', 'userBlock', 'div', usersWrap)

            let mainInfouser = СreateDom('', 'mainInfouser', 'a', userBlock)
            mainInfouser.href = `user-details.html?user=${JSON.stringify(user)}`
            mainInfouser.innerHTML = `&#9760; Name: ${user.name} & id: ${user.id}`;

        }
    });


// ----------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom('', 'audioBlock', 'div', document.body);

let audioText = СreateDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = СreateDom('', 'audioblokimg', 'img', audioBlock);
audioblokimg.src = 'Expert_Leadership.png'

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------

