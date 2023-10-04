
// Assuming your JSON file is named data.json
fetch('../Data/courses_data.json')
.then(response => response.json())
.then(data => {
    const courses_container = document.querySelector('.course-box');
    data.forEach(ele => {
        // get videos links
        const videos = ele.videos, id = ele.id;
        let videosContent = "";
        videos.forEach(video => {
            videosContent +=
                `<a href="./course_video_temp.html?id=${id}&video_id=${video.id}">
                    <div class="CVideo Cicon">
                        <i class="fa-solid fa-circle-play"></i>
                        <div class="Cname">${video.id}</div>
                    </div>
                </a>`;
        })
        ele.article.forEach(article => {
            videosContent +=
                `<a href="./course_article_temp.html=${id}&video_id=${article.id}">
                <div class="CArticle Cicon">
                    <i class="fa-solid fa-newspaper"></i>
                    <div class="Cname">Article</div>
                </div>
            </a>`;
        })

        const box = `
            <div class="col d-flex">
            ${videosContent}
            <a href="../quiz System/index.html">
            <div class="CQuiz Cicon">
                <i class="fa-solid fa-clipboard-question"></i>
                <div class="Cname">Quiz</div>
            </div>
            </a>
            </div>
        `
        courses_container.innerHTML =  courses_container.innerHTML + box;
    })
})
.catch(error => {
    console.error('Error fetching JSON:', error);
});
