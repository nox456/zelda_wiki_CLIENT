export default function img_background() {
    document.querySelector("#img-background").outerHTML = `
        <div id="img-background" class="[&>img]:absolute w-full h-full sm:h-screen [&>img]:object-cover [&>img]:w-full [&>img]:h-full absolute top-0 left-0 -z-10 pointer-events-none select-none">

            <div class="w-full h-full bg-black bg-opacity-70 absolute z-10"></div>
            <img class="opacity-100 transition-opacity duration-1000" src="/assets/img/landing_bg/bg1.jpg"/>
            <img class="opacity-0 transition-opacity duration-1000" src="/assets/img/landing_bg/bg2.jpg"/>
            <img class="opacity-0 transition-opacity duration-1000" src="/assets/img/landing_bg/bg3.jpg"/>

        </div>
    `;
    const imgs = Array.from(
        document.querySelector("#img-background").querySelectorAll("img")
    );
    let count = 0;
    setInterval(() => {
        if (count == 3) {
            count = 0;
        }
        imgs[count].classList.replace("opacity-100", "opacity-0");
        imgs[count == 2 ? 0 : count + 1].classList.replace(
            "opacity-0",
            "opacity-100"
        );
        count++;
    }, 5000);
}
// Initialize
img_background()
