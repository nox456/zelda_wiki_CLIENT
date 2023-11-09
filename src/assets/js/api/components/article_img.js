export default function article_img(articleImg) {
    const imgElement = document.querySelector("#article-img");
    imgElement.outerHTML = `
        <div class="flex justify-center py-2 h-[40%]">
            <img src="${articleImg}" class="object-cover"/>
        </div>
    `
}
