export default function article_img(articleImg,element) {
    element.outerHTML = `
        <div class="flex justify-center py-2">
            <img src="${articleImg}"/>
        </div>
    `
}
