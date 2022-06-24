const techNav = document.querySelector("#tech-nav");
const techTitle = document.querySelector("#tech-title");
const techInfo = document.querySelector("#tech-info");
const techImg = document.querySelector("#tech-img");

techNav.addEventListener("click", (e) => {
  const id = e.target.id;
  console.log(id);

  const techFunciton = (title, info, img) => {
    techTitle.textContent = title;
    techInfo.textContent = info;
    techImg.src = img;
  };

  if (id === "launch-vehicle") {
    techFunciton(
      "LAUNCH VEHICLE",
      `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      "assets/technology/image-launch-vehicle-portrait.jpg"
    );
  } else if (id === "spacePort") {
    techFunciton(
      "SPACEPORT",
      `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      "assets/technology/image-spaceport-portrait.jpg"
    );
  } else {
    techFunciton(
      "SPACE CAPSULE",
      `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      "assets/technology/image-space-capsule-portrait.jpg"
    );
  }
});
