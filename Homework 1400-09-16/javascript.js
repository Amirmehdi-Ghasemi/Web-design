function ShowDate() {
    let day;
            switch (new Date().getDay()){
                case 0:
                    day = "گر من از باغ تو یک میوه بچینم چه شود <br> پیش پایی به چراغ تو ببینم چه شود";
                    break;
                case 1:
                    day = "اشک در چشمان من طوفان غم دارد به دل <br> خنده بر لب می زنم تا کس  نداند  راز دل";
                    break;
                case 2:
                    day = "عشق دردانه‌ست و من غواص و دريا ميكده <br> سر فرو بردم در آنجا تا كجا سر بر كنم";
                    break;
                case 3:
                    day = "سر ارادت ما و آستان حضرت دوست <br> که هر چه بر سر ما می‌رود ارادت اوست <br> نظیر دوست ندیدم اگر چه از مه و مهر<br> نهادم آینه‌ها در مقابل رخ دوست";
                    break;
                case 4:
                    day = "غم در دل تنگ من از آن است که نیست <br> یک دوست که با او غم دل بتوان گفت";
                    break;
                case 5:
                    day = "از جان طمع بریدن آسان بود ولیکن <br> از دوستان جانی مشکل توان بریدن";
                    break;
                case 6:
                    day = "درخت دوستی بنشان که کام دل به بار آرد <br> نهال دشمنی برکن که رنج بی‌شمار آرد";
                    break;                    
            }
            document.getElementById("today").innerHTML = day;
}