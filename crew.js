const crewNav = document.querySelector('#crew-nav');
const crewRank = document.querySelector('#rank');
const crewName = document.querySelector('#crew-name');
const crewInfo = document.querySelector('#crew-info');
const crewPort = document.querySelector('.crew__img--port');

crewNav.addEventListener('click', (e) => {
    console.log(e.target.id);


    const crewFunction = (rank, name, paragraph) => {
        crewRank.textContent = rank;
        crewName.textContent = name;
        crewInfo.textContent = paragraph;
    };



    if (e.target.id === 'DOUGLAS') {
        crewFunction('COMMANDER', 'DOUGLAS HURLEY', `
Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`);
        crewPort.src = ('assets/crew/image-douglas-hurley.png');
    } else if (e.target.id === 'MARK') {
        crewFunction('MISSON SPECIALIST', 'MARK SHUTTLEWORTH', `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`);
        crewPort.src = ('assets/crew/image-mark-shuttleworth.png');
    } else if (e.target.id === 'VICTOR') {
        crewFunction('PILOT', 'VICTOR GLOVER', 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.');
        crewPort.src = ('assets/crew/image-victor-glover.png');
    } else if (e.target.id === 'ANOUSHEH') {
        crewFunction('FLIGHT ENGINEER', 'ANOUSHEH ANSARI', `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`);
        crewPort.src = ('assets/crew/image-anousheh-ansari.png');
    }
});