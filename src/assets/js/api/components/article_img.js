export default function article_img(articleImg) {
    const imgElement = document.querySelector("#article-img");
    imgElement.outerHTML = `
        <div class="flex justify-center items-center sm:h-[20em] h-[20em]">
            <img src="${articleImg}" class="object-cover sm:h-[80%] h-[90%]"/>
        </div>
    `
}
