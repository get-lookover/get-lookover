$(document).ready(function () {
    $('.left .nav .nav-links').click(function () {
        $(this).addClass('active').siblings(".nav-links").removeClass('active');
    });

    var page = 1;
    let stories = document.querySelector('.stories');        
    let posts = document.querySelector('.posts');
    let urlData = `https://reqres.in/api/users?page=${page}&per_page=12`;
    $.ajax({
        url: urlData,
        dataType: 'json',
        success: function (data) {
            for (let i = 0; i < data["data"].length; i++) {
                const e = data["data"][i];

                stories.innerHTML += `
                    <div class="story">
                        <div class="new">
                            <img src="${e.avatar}" alt="profile">
                        </div>
                        <span style="font-size: 10px; padding: 7px;">${e.first_name} ${e.last_name}</span>
                    </div>
                `;

                posts.innerHTML += `
                    <div class="post">
                        <div class="header">
                            <img src="${e.avatar}" class="profile">
                            <span class="user">${e.first_name} ${e.last_name} <span style="margin: 0 7px; color:#fafafa81;">•</span><span style="color:#fafafa81;">12h</span></span>
                            <span class="material-symbols-rounded pointer more">more_horiz</span>
                        </div>
                        <img src="${e.avatar}">
                        <div class="footer">
                            <div class="actions">
                                <span class="material-symbols-rounded pointer">favorite</span>
                                <span class="material-symbols-rounded pointer">chat_bubble</span>
                                <span class="material-symbols-rounded pointer send">send</span>
                                <span class="material-symbols-rounded pointer save">bookmark_add</span>
                            </div>
                            <span style="font-size: 0.9em; font-weight: 600;">120,002 likes</span>
                            <span style="font-size: 0.9em; font-weight: 600;">${e.first_name} ${e.last_name} <span style="font-size: 0.85em; font-weight: 400;">Dummy post !</span></span>
                            <span class="viewCom">View all 489 comments</span>
                        </div>
                    </div>
                `;

                if (i < 3) {
                    $('.new').addClass('active');
                }
                $('.post .header .more').click(function () {
                    $('section').addClass('active');
                    $('body').css({
                        overflow: 'hidden',
                        height: '100%'
                    });
                });
                $('.overlay, .cancel').click(function () {
                    $('section').removeClass('active');
                    $('body').css({
                        overflow: 'auto',
                        height: 'auto'
                    });
                });
            }
        }
    });

});